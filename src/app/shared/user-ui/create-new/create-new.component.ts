import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateNewComponent {
  @Output() add = new EventEmitter<string>();

  onClick(input: HTMLInputElement): void {
    this.add.emit(input.value);
    input.value = '';
  }
}
