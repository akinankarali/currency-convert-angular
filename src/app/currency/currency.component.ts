import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

interface CurrencyData {
  img: string;
  id: string;
  value: number;
}

@Component({
  selector: 'currency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss'
})
export class CurrencyComponent implements OnInit {
  currencyList: any[] = [];

  constructor(private apiService: ApiService) {}

  currencyName = 'EUR';

  ngOnInit() {
      this.getCurrencyData();
   }

  getCurrencyData(){
    this.apiService.getData(this.currencyName)
    .subscribe({
      next: (data => {
        this.currencyList = Object.entries(data.rates)
        .filter(([key, value]) => key === 'EUR' || key === 'USD' || key === 'GBP')
        .map(([key, value]) => ({ img: '', id: key, value }) as CurrencyData);
      }),
      error: (error: any) => {
        console.error('Error:', error.message);
      },
      complete: () => {},
    });
  }
}