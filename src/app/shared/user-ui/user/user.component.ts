import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { User } from '../../user.api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() user: User;
  @Output() remove = new EventEmitter<void>();
  @Output() rename = new EventEmitter<string>();
  cd(): void {
    console.log('user rendered');
  }
}
