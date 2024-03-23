import { Component } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { CImageComponent} from '../../atoms/c-image/c-image.component';
import { CButtonComponent } from '../../atoms/c-button/c-button.component';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [TextComponent, CImageComponent, CButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
