import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../user.api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: User;
  @Output() remove = new EventEmitter<void>();
}
