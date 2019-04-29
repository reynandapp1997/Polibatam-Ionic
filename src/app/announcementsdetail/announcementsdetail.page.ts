import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementsService } from '../announcements.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-announcementsdetail',
  templateUrl: './announcementsdetail.page.html',
  styleUrls: ['./announcementsdetail.page.scss'],
})
export class AnnouncementsdetailPage implements OnInit {
  id: any;
  announcement = {
    title: '',
    creator: {
      name: ''
    },
    description: '',
    jurusan: '',
    createdAt: ''
  };

  constructor(public params: ActivatedRoute, public annService: AnnouncementsService, public location: Location) {
    this.id = this.params.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.annService.loadAnnouncementDetail(this.id).subscribe(response => {
      this.announcement = response.json();
    });
  }

  goBack() {
    this.location.back();
  }

}
