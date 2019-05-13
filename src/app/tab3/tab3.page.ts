import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  userData = {
    name: ''
  };
  constructor(private storage: Storage, private router: Router) { }

  async ngOnInit() {
    const data = await this.storage.get('userData');
    this.userData = data;
  }

  async logout() {
    await this.storage.clear();
    this.router.navigate(['auth'], { replaceUrl: true });
  }
}
