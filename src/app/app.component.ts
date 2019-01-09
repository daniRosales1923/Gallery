import { Component, OnInit } from '@angular/core';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gal';
   
  constructor(private userService: UserService){

  }

  ngOnInit(){
    this.userService.getUsers();
  }
}
