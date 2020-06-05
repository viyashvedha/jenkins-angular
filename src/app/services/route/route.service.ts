import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RouteService {

  private url = new BehaviorSubject('');
  currentUrl = this.url.asObservable();


  constructor() { }

  updateRoute(url) {
    this.url.next(url);
  }


}
