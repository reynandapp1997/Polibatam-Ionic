import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { AnnouncementsService } from '../announcements.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  annCat: any;
  announcements: any;
  constructor(public announcementsService: AnnouncementsService, public router: Router) {
    this.loadAnnouncements();
  }

  loadAnnouncements() {
    this.announcementsService.loadAnnouncements(this.annCat).subscribe((response: Response) => {
      let data = response.json();
      this.announcements = data;
    });
  }

  goToDetail(id) {
    this.router.navigate([`/announcementsdetail/${id}`]);
  }
}
