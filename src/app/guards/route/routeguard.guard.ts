import { Injectable } from '@angular/core';
import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SessionService } from 'src/app/services/auth/session.service';
import { RouteService } from 'src/app/services/route/route.service';


@Injectable({
  providedIn: 'root'
})
export class RouteguardGuard implements CanActivateChild {


  constructor(private sessionService: SessionService, private routeService: RouteService, private router: Router) {

  }

  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    var token = localStorage.getItem("token")

    if (token) {
      this.routeService.updateRoute(state.url);
      this.sessionService.updateUserLoggedStatus(true);
      return true;
    } else {
      this.sessionService.updateUserLoggedStatus(false);
      this.router.navigateByUrl('login');
      return false;
    }

  }

}
