import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyApiResponse } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'currency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss'
})
export class CurrencyComponent implements OnInit {
  currencyList = {};
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData()
      .subscribe(data => {
        this.currencyList = data.rates;
        this.isLoading = false;
      });
  }
}
