import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports:[UserComponent],
  providers: [UserService]
})
export class UserModule { }
