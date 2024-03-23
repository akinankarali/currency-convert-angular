import { Component, Input } from "@angular/core";

@Component({
  selector: "c-button",
  standalone: true,
  imports: [],
  templateUrl: "./c-button.component.html",
  styleUrl: "./c-button.component.scss",
})
export class CButtonComponent {
  @Input() text: string = "";
  @Input() dynamicType: string = "";
  @Input() class: string = "";
}
