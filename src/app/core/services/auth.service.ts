import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

import { environments } from 'src/environments/environments';
import { jwtDecode } from 'jwt-decode';
import { IPermissions, IRole } from '../models';

interface IToken {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environments.baseUrl
  private permisions?: IPermissions

  constructor(private http: HttpClient,) { }

  public login(username: string, password: string): Observable<IToken> {
    return this.http.post<IToken>(`${this.baseUrl}/auth/login`, { username, password })
      .pipe(
        tap(resp => sessionStorage.setItem("token", resp.token)),
      )
  }

  public get userPermisions() : IPermissions | undefined {
    return this.permisions
  }

  public checkAuthentication(): Observable<boolean> {
    const token = sessionStorage.getItem("token")

    if (!token) return of(false)

    try {
      const tokeDecoded = jwtDecode<IPermissions>(token)
      this.permisions = tokeDecoded

      return of(true)
    } catch (error) {
      return of(false)
    }
  }

  public userRole(): Observable<string | undefined> {
    return of(this.permisions?.role)
  }

  public logout(): void {
    this.permisions = undefined
    sessionStorage.clear()
  }
}
