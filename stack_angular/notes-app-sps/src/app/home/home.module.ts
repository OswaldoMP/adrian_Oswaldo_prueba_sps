import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HomePageRoutingModule } from './home-routing.module';
import { CardModule } from '../components/card/card.module';
import { UserModule } from '../components/user/user.module';
import { NoteModule } from '../components/note/note.module';
import { HeaderModule } from '../components/header/header.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CardModule,
    UserModule,
    NoteModule,
    HeaderModule,
    HttpClientModule,

  ],
})
export class HomeModule { }