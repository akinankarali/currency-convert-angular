import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CImageComponent } from "../../atoms/c-image/c-image.component";
import { TextComponent } from "../../atoms/text/text.component";
import { CInputComponent } from "../../atoms/c-input/c-input.component";
import { CButtonComponent } from "../../atoms/c-button/c-button.component";

@Component({
  selector: "modal",
  standalone: true,
  imports: [
    CommonModule,
    CImageComponent,
    TextComponent,
    CInputComponent,
    CButtonComponent,
  ],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.scss",
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  inputChanged(value: any) {
    console.log(value);
  }
}
