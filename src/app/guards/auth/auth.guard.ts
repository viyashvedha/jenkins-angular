import { Injectable } from '@angular/core';
import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SessionService } from 'src/app/services/auth/session.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {


  constructor(private sessionService: SessionService, private router: Router) {

  }

  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {


    var token = localStorage.getItem("token")

    if (!token) {
      return true;
    } else {
      this.router.navigateByUrl('app/dashboard');
      return false;
    }

  }

}
