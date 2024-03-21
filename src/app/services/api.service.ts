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

  private apiUrl = 'https://open.er-api.com/v6/latest/USD';
  
  constructor(private http: HttpClient) {}

  getData(): Observable<MyApiResponse> {
    return this.http.get<MyApiResponse>(this.apiUrl);
  }
}
