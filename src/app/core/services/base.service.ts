import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, catchError, of} from 'rxjs'

import { IBase } from '../models';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends IBase> {
  private baseUrl: string = environments.baseUrl

  constructor(
    private http: HttpClient,
    @Inject('endpoint') private endpoint: string
  ) {}

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${this.endpoint}?_limit=10&_sort=fullName`)
  }

  public getById(id: number): Observable<T | undefined> {
    this.validId(id)
    return this.http.get<T>(`${this.baseUrl}/${this.endpoint}/${id}`)
    .pipe(
      catchError(_err => of(undefined))
    )
  }

  public filterBy(value: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${this.endpoint}?q=${value}`)
  }

  public create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${this.endpoint}`, entity)
  }

  public udpate(entity: T): Observable<T> {
    this.validId(entity.id)
    return this.http.patch<T>(`${this.baseUrl}/${this.endpoint}/${entity.id}`, entity)
  }

  public delete (id: number): Observable<T> {
    this.validId(id)
    return this.http.delete<T>(`${this.baseUrl}/${this.endpoint}/${id}`)
  }

  private validId(id: number): void {
    if(!id) throw Error(`The ${this.endpoint} is required.`)
  }
}
