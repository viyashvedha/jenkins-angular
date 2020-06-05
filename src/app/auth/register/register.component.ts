import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showLoader = false;
  showCountries = false;
  


  constructor(private service: AuthService, private router: Router) {

    this.cities1 = [];

    this.service.getCountryList().subscribe((rtnData: any) => {
      if (rtnData.status == true) {
        var countries = rtnData.datas.allcountries;
        this.selectedCountryCode = rtnData.datas.selectedcode;
        this.selectedCountryName =  rtnData.datas.selectedcountry;
        countries.forEach(childObj => {
          this.cities1.push({ label: childObj.country_name, value: childObj.country_code });
        });
      } else {
        this.emailExists = false;
      }
    });



  }

  ngOnInit() {
  }

  cities1: SelectItem[];
  selectedCountryCode = "IN";
  selectedCountryName = '';


  email = '';
  emailExists = false;
  checkemailExists() {

    if (this.email != "") {

      var datas = { 'email': this.email }
      this.service.emailExists(datas).subscribe((rtnData: any) => {
        if (rtnData.status == false) {
          this.emailExists = true;
        } else {
          this.emailExists = false;
        }
      });
    }

  }

  callRegisterForm(data: NgForm) {

    this.showLoader = true;

    if (data.valid) {
      if (data.value.password == data.value.confirmpassword) {

        data.value['countrycode'] = this.selectedCountryCode;
        this.service.Register(data.value).subscribe((rtnData: any) => {
          if (rtnData.status == true) {
            
            setTimeout(() => {
              var responseData = rtnData.datas;
              localStorage.setItem('token', responseData.token);
              localStorage.setItem('email', responseData.email);
              this.router.navigateByUrl('app/dashboard');

            }, 1500);

          } else {
            this.showLoader = false;
          }
        });
      }
    } else {
      this.showLoader = false;
    }

  }


  selectCountry() {
    this.showCountries = true;
  }



}
