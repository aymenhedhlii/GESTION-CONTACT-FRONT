import { HttpClient, ɵHttpInterceptingHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private url =environment.apiUrl + '/users';
  
  constructor(private httpClient: HttpClient) { }
  public getAll():Observable<User[]>{
  return this.httpClient.get<User[]>(this.url);
  }
  public delete (id: number): Observable<any> {
    return this.httpClient.delete<any[]>(this.url + '/' + id);

  }
  public add (user: User): Observable<any> {
    return this.httpClient.post(this.url, user);

  }
}
