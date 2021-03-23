import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeService } from '../../../home/services/home.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://notesapp-back.herokuapp.com';

  constructor(private http: HttpClient, private alertService: HomeService) { }

  createUser(body:any): Observable<any> {
      return this.http.post<any>(`${this.url}/servicio/api_notes_app/users`, body);
  }

  getUsers(): Observable<any> {
      return this.http.get<any>(`${this.url}/servicio/api_notes_app/users`);
  }

  showAlert(title:any, message:any, type:any) {
      this.alertService.infoAlert(title, message, type);
  }

}
