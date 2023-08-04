import { Component } from '@angular/core';
import { AppFacade } from './app.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'valcann';

  constructor(private readonly facade: AppFacade) {
    facade.updateLoginStatus();
  }
}