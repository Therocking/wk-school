import { Injectable } from '@angular/core'; 
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'; 
import { Observable, map, tap } from 'rxjs';

import { AuthService } from '../services'; 

@Injectable({
    providedIn: 'root'
})
export class PublicGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    public checkAuthStatus(): Observable<boolean> | boolean {
        return this.authService.checkAuthentication()
            .pipe(
                tap(isAuth => {
                    if (isAuth) this.router.navigateByUrl("/app/users")
                }),
                map(isAuth => !isAuth)
            )
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this.checkAuthStatus()
    }

}
