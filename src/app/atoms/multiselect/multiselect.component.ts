import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { CImageComponent } from "../c-image/c-image.component";

@Component({
  selector: "multiselect",
  standalone: true,
  imports: [CommonModule, CImageComponent],
  templateUrl: "./multiselect.component.html",
  styleUrl: "./multiselect.component.scss",
})
export class MultiselectComponent {
  @Input() options: { img: string; id: string; value: string }[] = [];

  @Input() label: string = "";
  @Input() defaultValue: string = "";
  @Input() defaultValueImg: string = "";
  @Input() class: string = "";
  @Output() selectedValueChange = new EventEmitter<{
    id: string;
    label: string;
    value: string;
  }>();

  isOpen = false;
  selectedValue: string = "";
  selectedValueImg: string = "";

  constructor() {}

  ngOnInit() {
    this.selectedValue = this.defaultValue;
    this.selectedValueImg = this.defaultValueImg;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string, value: string) {
    this.selectedValue = option;
    this.selectedValueImg =
      this.options.find((o) => o.id === option)?.img || "";
    this.isOpen = false;
    this.selectedValueChange.emit({
      id: option,
      label: this.label,
      value: value,
    });
  }

  @HostListener("document:click", ["$event"])
  handleClickOutside(event: MouseEvent) {
    if (!this.isOpen) return;
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest(".multiselect-container")) {
      this.isOpen = false;
    }
  }
}
