import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note/services/note.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data:any;
  @Output() delete = new EventEmitter<boolean>();

  constructor(private router: Router, private _service: NoteService) { }

  ngOnInit(): void {
      
  }

  onClick(id:any) {
      this.router.navigate([`/home/note/${id}`])
  }

  deleteNote(id:any) {
    this._service.deleteNote(id).subscribe(data => {
        if (data.ok) {
            this.delete.emit(true);
        }
    }, erro => {
        this.delete.emit(false);
    })
  }

}
