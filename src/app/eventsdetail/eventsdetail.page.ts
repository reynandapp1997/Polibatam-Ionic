import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { Location } from '@angular/common';

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
    posterUrl: '',
    startTime: '',
    title: ''
  };

  constructor(public params: ActivatedRoute, public eveService: EventsService, public location: Location) {
    this.id = this.params.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.eveService.loadEventDetail(this.id).subscribe(response => {
      this.event = response.json();
    });
  }

  goBack() {
    this.location.back();
  }

}
