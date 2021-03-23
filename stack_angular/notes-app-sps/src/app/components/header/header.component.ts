import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() selected = {
      notes: 'active',
      note: '',
      user: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goinTo(value:any) {
    switch (value) {
        case 'notes':
            this.router.navigate(['/home']);
            break;
        
        case 'note':
            this.router.navigate(['/home/note']);
            break
        
        case 'user':
            this.router.navigate(['/home/user']);
            break;

        default:
            break;
    }
  }

}
