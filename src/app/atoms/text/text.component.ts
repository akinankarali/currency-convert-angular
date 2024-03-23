import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "text",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./text.component.html",
  styleUrl: "./text.component.scss",
})
export class TextComponent {
  @Input() elementType: string = "p";
  @Input() text: string = "";
  @Input() class: string = "";

  constructor() {}
}
