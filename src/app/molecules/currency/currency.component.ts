import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { CommonModule } from "@angular/common";
import { CImageComponent } from "../../atoms/c-image/c-image.component";
import { TextComponent } from "../../atoms/text/text.component";
import { CInputComponent } from "../../atoms/c-input/c-input.component";
import { CButtonComponent } from "../../atoms/c-button/c-button.component";
import { MultiselectComponent } from "../../atoms/multiselect/multiselect.component";

interface CurrencyData {
  img: string;
  id: string;
  value: number;
}

@Component({
  selector: "currency",
  standalone: true,
  imports: [
    CommonModule,
    CImageComponent,
    TextComponent,
    CInputComponent,
    CButtonComponent,
    MultiselectComponent,
  ],
  templateUrl: "./currency.component.html",
  styleUrl: "./currency.component.scss",
})
export class CurrencyComponent implements OnInit {
  currencyList: any[] = [];
  filteredCurrencyListFrom: any[] = [];
  filteredCurrencyListTo: any[] = [];
  filteredCurrencyListFromLabel = "From";
  filteredCurrencyListToLabel = "To";
  defaultValueFrom = "";
  defaultValueTo = "";
  convertValue = 10;
  inputValueText = "";
  convertResult = "";
  defaultConvertRate = 1;
  convertRate = 1;
  selectedCurrencyFromId = null;
  selectedCurrencyToId = null;
  isShowResult = false;

  constructor(private apiService: ApiService) {}

  currencyName = "USD";
  currentNameForText = "US Dollar";

  ngOnInit() {
    this.getCurrencyData();
  }

  getCurrencyData() {
    this.apiService.getData(this.currencyName).subscribe({
      next: (data) => {
        this.currencyList = Object.entries(data.rates)
          .filter(
            ([key, value]) => key === "EUR" || key === "USD" || key === "GBP"
          )
          .map(([key, value]) => {
            switch (key) {
              case "USD":
                key = "USD - US Dollar";
                break;
              case "EUR":
                key = "EUR - Euro";
                break;
              case "GBP":
                key = "GBP - British Pound";
                break;
            }

            return { img: "", id: key, value } as CurrencyData;
          });

        if (this.currencyList.length > 0) {
          this.currencyList.forEach((currency) => {
            switch (currency.id) {
              case "USD - US Dollar":
                currency.img = "../../../assets/american-flag.svg";
                break;
              case "EUR - Euro":
                currency.img = "../../../assets/eur-flag.svg";
                break;
              case "GBP - British Pound":
                currency.img = "../../../assets/uk-flag.svg";
                break;
            }
          });
        }

        this.defaultValueFrom = this.currencyList[0].id;
        this.defaultValueTo = this.currencyList[1].id;
        this.defaultConvertRate = this.currencyList[1].value;
        this.convertRate = this.currencyList[1].value;
        this.currentNameForText = this.currencyList[1].id.split(" - ")[1];

        if (this.selectedCurrencyFromId !== null) {
          this.filteredCurrencyListFrom = this.currencyList.filter(
            (currency) => currency.id != this.selectedCurrencyFromId
          );
        } else {
          this.filteredCurrencyListFrom = this.currencyList.filter(
            (currency) => currency.id != this.defaultValueFrom
          );
        }
        if (this.selectedCurrencyToId !== null) {
          this.filteredCurrencyListTo = this.currencyList.filter(
            (currency) => currency.id != this.selectedCurrencyToId
          );
          this.convertRate = this.currencyList.find(
            (currency) => currency.id === this.selectedCurrencyToId
          ).value;

          switch (this.selectedCurrencyToId) {
            case "USD - US Dollar":
              this.currentNameForText = "US Dollar";
              break;
            case "EUR - Euro":
              this.currentNameForText = "Euro";
              break;
            case "GBP - British Pound":
              this.currentNameForText = "British Pound";
              break;
          }
        } else {
          this.filteredCurrencyListTo = this.currencyList.filter(
            (currency) => currency.id != this.defaultValueTo
          );
        }
      },
      error: (error: any) => {
        console.error("Error:", error.message);
      },
      complete: () => {},
    });
  }

  onSelectedValueChange($event: any) {
    if ($event.label === "From") {
      this.selectedCurrencyFromId = $event.id;
      this.filteredCurrencyListFrom = this.currencyList.filter(
        (currency) => currency.id != $event.id
      );

      this.currencyName = $event.id.split(" - ")[0];
    } else {
      this.selectedCurrencyToId = $event.id;
      this.filteredCurrencyListTo = this.currencyList.filter(
        (currency) => currency.id != $event.id
      );

      this.convertRate = $event.value;
    }
    this.getCurrencyData();
  }
  inputChanged(event: any) {
    this.isShowResult = false;
    this.convertValue = parseInt(event.target.value);
    this.inputValueText = `${
      this.convertValue.toString() +
      " " +
      this.currencyList[0].id.split(" - ")[1] +
      " ="
    }`;
  }

  handleConvert() {
    this.getCalculation();
    this.isShowResult = true;
    this.inputValueText = `${
      this.convertValue.toString() +
      " " +
      this.currencyList[0].id.split(" - ")[1] +
      " ="
    }`;
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 500);
  }

  getCalculation() {
    this.convertResult = `${this.convertValue * this.convertRate} ${
      this.currentNameForText
    }`;
  }
}
