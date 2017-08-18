import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserProfileService} from "./user-profile.service";

@Injectable()

export class CanActivateAuthGuard implements CanActivate, CanActivateChild{

  constructor(private userProfileService: UserProfileService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userProfileService.getIsLoggedIn() && route) {
      return true;
    }
    this.router.navigate(['/login'], {queryParams: { redirectTo: state.url }});
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(childRoute, state);
  }
}
