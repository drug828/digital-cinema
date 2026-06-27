import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
