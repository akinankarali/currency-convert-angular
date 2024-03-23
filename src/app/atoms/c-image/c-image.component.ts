import { Component, Input } from "@angular/core";

@Component({
  selector: "c-image",
  standalone: true,
  imports: [],
  templateUrl: "./c-image.component.html",
  styleUrl: "./c-image.component.scss",
})
export class CImageComponent {
  @Input() src: string = "";
  @Input() alt: string = "";
  @Input() class: string = "";
}
