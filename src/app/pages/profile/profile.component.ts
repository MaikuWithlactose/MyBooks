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
      'https://preview.redd.it/npcs-for-a-call-of-cthulhu-campaign-v0-bob026z6f7ha1.png?width=640&crop=smart&auto=webp&s=34b11da74da7b366645698782190ea9b7b809053',
      'shrekmola123'
    );
  }

  onSubmit() {
    console.log(this.user);
    const newUser = new User(
      1,
      this.user.name,
      this.user.last_name,
      this.user.email,
      this.user.photo,
      this.user.password
    );
    console.log(newUser);
    this.user = newUser;
  }
}