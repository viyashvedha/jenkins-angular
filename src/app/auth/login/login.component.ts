import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }

  showPassword = false;
  inputType = false;
  rememberme = false;
  showLoader = false;

  invalidLogin = false;
  view = 1;

  ngOnInit() {
  }


  showMyPassword() {

    if (this.showPassword === true) {
      this.showPassword = false;
      this.inputType = false;
    } else {
      this.showPassword = true;
      this.inputType = true;
    }

  }

  isVerifyMail = false;
  isVerifyApp = false;
  showMailName = '';
  showMailPassword = '';

  loginForm(data: NgForm) {

    this.showLoader = true;
    this.invalidLogin = false;

    if (data.valid) {

      this.showMailName = data.value.email;
      this.showMailPassword = data.value.password;

      var request = { email: this.showMailName, password: this.showMailPassword };

      this.loginFunction(request);

    } else {
      this.showLoader = false;
    }

  }



  loginFunction(datas) {

    this.service.Login(datas).subscribe((rtnData: any) => {

      if (rtnData.status === true) {

        if (rtnData.type && rtnData.type === 'login') {
          setTimeout(() => {

            localStorage.setItem('token', rtnData.datas.token);
            localStorage.setItem('email', rtnData.datas.email);
            this.router.navigateByUrl('app/dashboard');

          }, 1500);
        } else if (rtnData.type && rtnData.type === 'multi-auth') {

          if (rtnData.enabledtype) {

            var mydata = rtnData.enabledtype;
            mydata.forEach(childObj => {
              if (childObj.type === 'EMAIL') {
                this.isVerifyMail = true;
              } else if (childObj.type === 'MOBILE') {
                this.isVerifyApp = true;
              }

            });

            setTimeout(() => {
              this.invalidLogin = true;
              this.showLoader = false;
              this.view = 2;
            }, 1500);

          }

        }

      } else {


        if (rtnData.type === 'multi-auth') {
          setTimeout(() => {
            this.invalidCode = true;
            this.showLoader = false;
          }, 1000);

        } else {
          setTimeout(() => {
            this.invalidLogin = true;
            this.showLoader = false;
          }, 1000);
        }

      }

    });

  }

  invalidCode= false;
  selectedType = false;
  MultiloginType(type) {

    this.selectedType = type;

    if (type === 'mailauth' && this.isVerifyMail === true) {
      var requestData = { email: this.showMailName };
      this.service.sentOtpMail(requestData).subscribe((rtnData: any) => {

        if (rtnData.status) {
          this.view = 3;
        }
      });

    } else if (type === 'mobileauth' && this.isVerifyApp === true) {
      this.view = 3;
    }

  }


  anotherMethod() {
    this.view = 2;
  }

  code = '';

  checkCode() {

    if (this.code != "" && this.code.toString().length === 6) {
      this.showLoader = true;
      var request = { email: this.showMailName, password: this.showMailPassword, authtype: this.selectedType, authcode: this.code };
      this.loginFunction(request);
    }

  }

}
