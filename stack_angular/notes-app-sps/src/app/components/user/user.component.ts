import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  selected = {
        notes: '',
        note: '',
        user: 'active',
  };  

  userForm:any;
  users:any = [];

  constructor(private fb: FormBuilder, private _service: UserService) { }

  ngOnInit(): void {
      this.createForm();
      this.getUser();
  }

  createForm() {
    this.userForm = this.fb.group({
        name: ['', [Validators.required]]
    });
  }

  createUser() {
    if (this.userForm.status === 'VALID') {
        this._service.createUser(this.userForm.value).subscribe(data => {
            if (data.ok) {
                this._service.showAlert('User created successfully', '', 'success');
                this.getUser();
                this.createForm();
            }
        }, err => {
            this._service.showAlert('oops..', '', 'error');
        });
        return; 
    } else {
        this._service.showAlert('complete the fields', '', 'warning');
    }
  }

  getUser() {
    this._service.getUsers().subscribe(data => {
        if (data.ok) {
            this.users = data.data;
        }
    }, erro => {
    })
  }

}
