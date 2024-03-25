import { Component } from "@angular/core";
import { CImageComponent } from "../../atoms/c-image/c-image.component";
import { CButtonComponent } from "../../atoms/c-button/c-button.component";
import { ModalComponent } from "../../molecules/modal/modal.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "navbar",
  standalone: true,
  imports: [CImageComponent, CButtonComponent, ModalComponent, CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
