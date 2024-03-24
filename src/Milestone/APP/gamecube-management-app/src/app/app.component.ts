import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent, // Alias Angular's Event as RouterEvent
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouterOutlet
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gamecube-management-app';
  constructor(private router: Router) {
    // Subscribe to router events
    this.router.events.subscribe((event: RouterEvent) => { // Use RouterEvent here
      if (event instanceof NavigationStart) {
        console.log('NavigationStart:', event);
      }

      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:', event);
      }

      if (event instanceof NavigationError) {
        console.log('NavigationError:', event);
      }

      if (event instanceof NavigationCancel) {
        console.log('NavigationCancel:', event);
      }
    });
  }
}
