import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selected = {
    notes: 'active',
    note: '',
    user: '',
  };
  
  notes:any = [];

  constructor(private _service: HomeService) {}

  ngOnInit(): void {
      this.getNotes();
  }

  getNotes() {
      this._service.getNotes().subscribe(data => {
          if (data.ok) {
              this.notes = data.data;
              this.notes.map((item:any) => {
                item.date = item.date.toString().split('T')[0]  
              });
          }
      }, erro => {
      })
  }

  delete(event:any) {
    if (event) {
        this._service.infoAlert('User created successfully', '', 'success');
        this.ngOnInit();
    } else {
        this._service.infoAlert('oops..', '', 'error');
    }
  }
}
