import { Injectable } from '@angular/core';
import { AuthService } from '../services';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }
    
    public isAdmin(): Observable<boolean> | boolean{
        const permisions = this.authService.userPermisions?.permissions!
       
        if(permisions.includes("teacher.delete") || permisions.includes("student.delete")) {

            return true
        }

        this.router.navigateByUrl("/app/users")

        return false
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean > {
        return this.isAdmin()
    }
}