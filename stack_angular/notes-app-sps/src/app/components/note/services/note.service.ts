import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../../user/services/user.service';
import { HomeService } from '../../../home/services/home.service';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  url = 'https://notesapp-back.herokuapp.com';

  constructor(private http: HttpClient, private user: UserService, private alertService: HomeService) { }

  createNote(body:any): Observable<any> {
      return this.http.post<any>(`${this.url}/servicio/api_notes_app/notes`, body);
  }

  getNote(id:any): Observable<any> {
      return this.http.get<any>(`${this.url}/servicio/api_notes_app/notes/${id}`);
  }

  deleteNote(id:any):Observable<any> {
      return this.http.delete<any>(`${this.url}/servicio/api_notes_app/notes/${id}`);
  }

  updateNote(id:any, body:any) {
      return this.http.put<any>(`${this.url}/servicio/api_notes_app/notes/${id}`, body);
  }

  getUsers() {
      return this.user.getUsers();
  }

  showAlert(title:any, message:any, type:any) {
    this.alertService.infoAlert(title, message, type);
  }

}
