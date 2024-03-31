import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from '../models';
import { BaseService } from './base.service';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<IUser> {

 constructor(http: HttpClient) {
  super(http, "users")
 }
}
