import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MyApiResponse {
  rates: {
    [key: string]: number;
  };
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  
  constructor(private http: HttpClient) {}
  
  getData(currencyName: string): Observable<MyApiResponse> {
    const apiUrl = `https://open.er-api.com/v6/latest/${currencyName}`;
    return this.http.get<MyApiResponse>(apiUrl);
  }
}
