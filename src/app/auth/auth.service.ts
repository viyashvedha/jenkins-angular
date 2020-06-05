import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router, private http: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    Register(data) {
        return this.http.post(environment.backEndNodeUrl + environment.apiService.register, data, this.httpOptions);
    }

    emailExists(data) {
        return this.http.post(environment.backEndNodeUrl + environment.apiService.emailExists, data, this.httpOptions);
    }

    Login(data) {
        return this.http.post(environment.backEndNodeUrl + environment.apiService.login, data, this.httpOptions);
    }

    ForgetPassword(data) {
        return this.http.post(environment.backEndNodeUrl + environment.apiService.forgetpassword, data, this.httpOptions);
    }

    getCountryList() {
        return this.http.get(environment.backEndNodeUrl + environment.apiService.countrylist);
    }

    sentOtpMail(data) {
        return this.http.post(environment.backEndNodeUrl + environment.apiService.sentOtpMail, data, this.httpOptions);
    }

    checkDocumentSign(data) {
        return this.http.post(environment.backEndNodeUrl + environment.apiService.checkDocumentSign, data, this.httpOptions);
    }

    validateGuestBrowser(data) {
        return this.http.post(environment.backEndNodeUrl + environment.apiService.validateGuestBrowser, data, this.httpOptions);
    }
}