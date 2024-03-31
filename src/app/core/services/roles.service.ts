import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IRole } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService extends BaseService<IRole> {
  constructor(http: HttpClient) {
    super(http, "roles")
  }
}
