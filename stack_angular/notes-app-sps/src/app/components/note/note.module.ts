import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note.component';
import { HeaderModule } from '../header/header.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './services/note.service';



@NgModule({
  declarations: [NoteComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [NoteComponent],
  providers: [NoteService]
})
export class NoteModule { }
