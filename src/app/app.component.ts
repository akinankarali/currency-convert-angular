import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { HeaderComponent } from './molecules/header/header.component';
import { FeatureComponent } from './molecules/feature/feature.component';
import { CurrencyComponent } from './molecules/currency/currency.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HeaderComponent,FeatureComponent, CurrencyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'currency-convert-angular';
}
