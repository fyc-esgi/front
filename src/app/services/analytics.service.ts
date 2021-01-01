import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private router: Router) {
  }

  initializeAnalytics(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-6P2XKCMR3W',
          {
            'page_path': event.urlAfterRedirects,
            'anonymize_ip': true
          }
        );
      }
    });
  }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string | null = null,
    eventValue: number | null = null) {
    gtag('event', eventName, {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    })
  }
}
