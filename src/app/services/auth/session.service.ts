import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SessionService {

  private loggedStatus = new BehaviorSubject('');
  isLoggedIn = this.loggedStatus.asObservable();


  constructor() { }

  updateUserLoggedStatus(status) {
      console.log(status)
    this.isLoggedIn = status;
  }


}
