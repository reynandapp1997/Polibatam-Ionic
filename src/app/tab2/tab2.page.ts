import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Response } from '@angular/http';
import { EventsService } from '../events.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  events: any;
  constructor(public eventsService: EventsService, public sanitization: DomSanitizer, public router: Router) {
    this.loadEvents();
  }
  loadEvents() {
    this.eventsService.loadEvents().subscribe((response: Response) => {
      let data = response.json();
      this.events = data;
      this.events.map(val => {
        val.posterUrl = this.sanitization.bypassSecurityTrustStyle(`url(${val.posterUrl})`);
        return {
          ...val
        }
      });
    })
  }

  goToDetail(id) {
    this.router.navigate([`/eventsdetail/${id}`]);
  }
}
