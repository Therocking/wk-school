import { Injectable } from '@angular/core'; 
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, UrlSegment, RouterStateSnapshot } from '@angular/router'; 
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanMatch, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public checkAuthStatus(): Observable<boolean> | boolean {
    return this.authService.checkAuthentication()
      .pipe(
        tap(isAuth => {
          if(!isAuth) this.router.navigateByUrl("/login")
       })
      )
  }

  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    return this.checkAuthStatus()
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.checkAuthStatus()
  }

}
