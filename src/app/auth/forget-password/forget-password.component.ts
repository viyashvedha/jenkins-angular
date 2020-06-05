import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  showLoader: boolean;
  sentMail =  false;
  
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {
  }

  callForgetForm(data: NgForm) {

    this.showLoader = true;
    this.sentMail = false;

    if (data.valid) {

      this.service.ForgetPassword(data.value).subscribe((rtnData: any) => {

        if (rtnData.status === true) {

          setTimeout(() => {
            this.showLoader = false;
            this.sentMail = true;
          }, 1000);


        } else {
          setTimeout(() => {
            this.sentMail = true;
            this.showLoader = false;
          }, 1000);
        }

      });

    } else {
      this.showLoader = false;
    }

  }

}
