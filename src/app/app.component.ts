import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TypeAheadComponent } from './type-ahead.component';

@Component({
  selector: 'bs4ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bootstrap 4 (beta) Type-ahead Test';
}
