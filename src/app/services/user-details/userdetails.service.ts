import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserdetailsService {

    private userDetails = new BehaviorSubject('');
    userdetails = this.userDetails.asObservable();


    constructor() { }

    updateUserDatas(details: any) {
        console.log(details)
        this.userDetails.next(details);
    }


}
