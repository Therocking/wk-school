import { Injectable } from '@angular/core';
import { AuthService } from '../services';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    public isAdmin(): Observable<boolean>{
        return this.authService.userRole()
            .pipe(
                tap(role => () => {
                    if(role === 'teacher') this.router.navigateByUrl("/app/subjects/teachers/my-subjects")
                }),
                tap(role => () => {
                    if(role === 'student') this.router.navigateByUrl("/app/subjects/students/my-subjects")
                }),
                map(role => role === 'admin')
            )
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this.isAdmin()
    }
}