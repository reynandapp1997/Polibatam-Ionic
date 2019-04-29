import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoggedIn = true;

  constructor(public router: Router) { }

  ngOnInit() {
    if (this.isLoggedIn) {
      return this.router.navigate(['/tabs'], { replaceUrl: true });
    }
    return this.router.navigate(['/login'], { replaceUrl: true });
  }

}
