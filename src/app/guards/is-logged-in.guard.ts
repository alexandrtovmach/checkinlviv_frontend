import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class IsLoggedInGuard implements CanActivateChild {
    constructor(private route: Router) {}
    canActivateChild() {
        if (localStorage.date && localStorage.date.slice(-3) === 'Z02') {
            return true;
        }
        this.route.navigate(['./']);
        return false;
    }
}