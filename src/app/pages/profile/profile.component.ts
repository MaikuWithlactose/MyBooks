import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-user-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
  })
  export class ProfileComponent {

    user: User;
  
    constructor() {
      this.user = new User(
        1,
        'Shrek',
        'Cienabañez',
        'srverde@hotmail.com',
        'fotoprofile.png',
        'shrekmola123');
      console.log(this.user)
    }
  } 