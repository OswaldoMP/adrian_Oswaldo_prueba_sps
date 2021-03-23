import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeService } from '../../../home/services/home.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private alertService: HomeService) { }

  createUser(body:any): Observable<any> {
      return this.http.post<any>('http://localhost:3000/servicio/api_notes_app/users', body);
  }

  getUsers(): Observable<any> {
      return this.http.get<any>('http://localhost:3000/servicio/api_notes_app/users');
  }

  showAlert(title:any, message:any, type:any) {
      this.alertService.infoAlert(title, message, type);
  }

}
