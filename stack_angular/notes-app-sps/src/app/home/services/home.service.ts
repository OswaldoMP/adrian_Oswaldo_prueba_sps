import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'https://notesapp-back.herokuapp.com';


  constructor(private http: HttpClient) { }


  getNotes(): Observable<any> {
      return this.http.get<any>(`${this.url}/servicio/api_notes_app/notes`);
  }

  infoAlert( title: string, message: string, type:any) {
    Swal.fire(
        title,
        message,
        type
      )
  }

}
