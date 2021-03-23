import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NoteService } from './services/note.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  selected = {
      notes: '',
      note: 'active',
      user: ''
  };
    
  noteForm:any;

  note:any = {
      user: {
          name:''
        },
      title: '',
      content: '',
      date: ''
  };
  users:any = [];
  id:any;
  
  constructor(private fb: FormBuilder, private _service: NoteService, private route: ActivatedRoute) {

   }



  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.getNote();
        }
        this.createForm(this.note);
        this.getUsers();
  }

  createForm(data:any) {
    this.noteForm = this.fb.group({
        user: [data.user.name || '', [Validators.required]],
        title: [data.title || '', [Validators.required]],
        content: [data.content || '', [Validators.required]],
        date: [data.date || '', [Validators.required]],
    });
  }

  createNote() {
    if (this.noteForm.status === 'VALID') { 
        
        if (this.id) {
            this.updateNote(this.id, this.noteForm.value);
        } else {

            this._service.createNote(this.noteForm.value).subscribe(data => {
                if (data.ok) {
                    this._service.showAlert('Note created successfully', '', 'success');
                    this.ngOnInit();
                }
            }, erro => {
                this._service.showAlert('oops.. ', '', 'error');
            })
            return;
        }
        } else {
            this._service.showAlert('complete the fields', '', 'warning');
        }
        

  }

  updateNote(id:any, body:any) {
    this._service.updateNote(id, body).subscribe(data => {
        if (data.ok) {
            this._service.showAlert('Note update successfully', '', 'success');
            this.ngOnInit();
        }
    }, erro => {
        this._service.showAlert('oops.. ', 'complete the fields', 'error');
    });
  }

  getNote() {
    this._service.getNote(this.id).subscribe(data => {
        if (data.ok) {
            data.data.date = data.data.date.toString().split('T')[0];
            this.createForm(data.data);
        }
    }, erro => {
        this._service.showAlert('oops..', '', 'error');
    })
  }

  getUsers() {
    this._service.getUsers().subscribe(data => {
        if (data.ok) {
            this.users = data.data;
        }
    }, erro => {
        this._service.showAlert('oops..', '', 'error');
    })
  }

  get test() {
      return true;
  }

}
