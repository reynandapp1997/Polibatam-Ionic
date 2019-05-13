import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-eventsdetail',
  templateUrl: './eventsdetail.page.html',
  styleUrls: ['./eventsdetail.page.scss'],
})
export class EventsdetailPage implements OnInit {
  id: any;
  event = {
    createdAt: '',
    creator: {
      name: ''
    },
    date: '',
    description: '',
    location: '',
    posterUrl: undefined,
    startTime: '',
    title: ''
  };

  constructor(public params: ActivatedRoute, public eveService: EventsService, public location: Location, public sanitization: DomSanitizer) {
    this.id = this.params.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.eveService.loadEventDetail(this.id).subscribe(response => {
      this.event = response.json();
      // console.log(this.event.posterUrl);
      // this.event.posterUrl = this.sanitization.bypassSecurityTrustStyle(`url(${this.event.posterUrl})`);
    });
  }

  goBack() {
    this.location.back();
  }

}
