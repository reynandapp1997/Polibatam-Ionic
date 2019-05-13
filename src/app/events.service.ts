import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(public http: Http) { }

  loadEvents() {
    return this.http.get(`https://polibatam-api.herokuapp.com/api/event?page=1&lng=id`);
  }

  loadEventDetail(id) {
    return this.http.get(`https://polibatam-api.herokuapp.com/api/event/${id}?lng=id`);
  }
}