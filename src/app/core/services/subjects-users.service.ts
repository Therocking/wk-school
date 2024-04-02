import { Injectable, Inject } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ISubjectUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SubjectsServiceUsers extends BaseService<ISubjectUser> {

   constructor(http: HttpClient, @Inject('endpoint') private Endpoint: string) {
    super(http, Endpoint);
  }
}