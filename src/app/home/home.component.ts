import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
// import { User } from './../models/user';

// import { UserService } from "../service/user.service";
// import { AuthenticationService } from "../service/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // currentUser: User;
  // userFromApi: any;
  constructor(
    // private userService: UserService,
    // private authenticationService: AuthenticationService
  ) {
    // this.currentUser = this.authenticationService.currentUserValue;
  }
  ngOnInit() {
    // this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
    //   this.userFromApi = user;
    // });
  }

}
