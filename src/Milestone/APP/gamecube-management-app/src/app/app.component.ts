import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Changed from 'styleUrl' to 'styleUrls' and made it an array
})
export class AppComponent {
  title = 'gamecube-management-app';
  
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        console.log('NavigationStart:', event);
      } else if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:', event);
      } else if (event instanceof NavigationError) {
        console.log('NavigationError:', event);
      } else if (event instanceof NavigationCancel) {
        console.log('NavigationCancel:', event);
      }
    });
  }
}
