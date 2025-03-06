import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      // Fade in when transitioning from LoginPage to EmployeeListPage
      transition('LoginPage => EmployeeListPage', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      // And vice versa for reverse transition
      transition('EmployeeListPage => LoginPage', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'employee-management-system';

  // This method extracts the animation data from the activated route.
  getAnimationData(outlet: RouterOutlet) {
    return outlet.activatedRouteData?.['animation'] || '';
  }
}
