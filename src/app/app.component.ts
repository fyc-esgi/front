import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from "./service/analytics.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pokefyc-front';

  constructor(private analytics: AnalyticsService) {
  }

  ngOnInit(): void {
    this.analytics.initializeAnalytics();
  }
}
