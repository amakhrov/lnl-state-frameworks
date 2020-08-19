import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css'],
})
export class CreateNewComponent {
  @Output() add = new EventEmitter<string>();

  onClick(input: HTMLInputElement): void {
    this.add.emit(input.value);
    input.value = '';
  }
}
