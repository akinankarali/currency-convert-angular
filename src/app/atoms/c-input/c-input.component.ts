import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "c-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./c-input.component.html",
  styleUrl: "./c-input.component.scss",
})
export class CInputComponent {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  @Input() value: string = "";
  @Input() class: string = "";

  @Output() valueChange = new EventEmitter<string>();

  constructor() {}

  onValueChange(event: Event) {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }
}
