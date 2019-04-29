import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(async response => {
      if (response) {
        // await this.storage.set('isLoggedIn', response);
        return setTimeout(() => {
          this.router.navigate(['tabs'], { replaceUrl: true });
        }, 500);
      }
    });
  }

}
