import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.getToken()) {
            // logged in so return true
            return true;
        }

        this.authService.setRequestedUrl(route['_routerState'].url);

        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['/']);
        return false;
    }
}
