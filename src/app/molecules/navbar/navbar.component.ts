import { Component } from '@angular/core';
import { CImageComponent} from '../../atoms/c-image/c-image.component';
import { CButtonComponent } from '../../atoms/c-button/c-button.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CImageComponent, CButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
