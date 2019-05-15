import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(public router: Router, private storage: Storage) { }

  ngOnInit() {
    this.auth();
  }
  
  async auth() {
    const userData = await this.storage.get('userData');
    if (userData) {
      return this.router.navigate(['/tabs'], { replaceUrl: true });
    }
    return this.router.navigate(['/login'], { replaceUrl: true });
  }

}
