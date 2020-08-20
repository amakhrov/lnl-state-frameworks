import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalComponent {
  @Input() total: number;
}
