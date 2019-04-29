import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

  constructor(public http: Http) { }

  loadAnnouncements(id){
    if(id){
      return this.http.get(`https://polibatam-api.herokuapp.com/api/announcement?jurusan=${id}&page=1&lng=id`);
    }
    return this.http.get(`https://polibatam-api.herokuapp.com/api/announcement?jurusan=&page=1&lng=id`);
  }

  loadAnnouncementDetail(id) {
    return this.http.get(`https://polibatam-api.herokuapp.com/api/announcement/${id}`);
  }
}
