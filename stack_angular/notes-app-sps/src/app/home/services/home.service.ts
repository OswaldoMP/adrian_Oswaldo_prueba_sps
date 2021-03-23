import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  getNotes(): Observable<any> {
      return this.http.get<any>('http://localhost:3000/servicio/api_notes_app/notes');
  }

  infoAlert( title: string, message: string, type:any) {
    Swal.fire(
        title,
        message,
        type
      )
  }

}
