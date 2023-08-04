import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacade } from 'src/app/app.facade';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent implements OnInit{
  visible: boolean;

  constructor(private readonly facade: AppFacade, private readonly router: Router) {
    this.visible = false
  }

  ngOnInit(): void {
    this.facade.isLoggedIn().subscribe(result => {
      this.visible = result;
    });
  }

  logout() {
    this.facade.logout();
    this.router.navigate(["/"]);
  }
}
