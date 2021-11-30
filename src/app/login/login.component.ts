import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // event: any;
  userData: any = {
    username: '',
    password: ''
  }
  constructor(private authService: AuthService, private router: Router) {
    // this.authService.checkusernameandpassword(username, password);
  }
  msg: any;
  ngOnInit() { }
  check(username: string, password: string) {
    var output = this.authService.checkusernameandpassword(username, password);

    console.log(output);
    if (output == true) {
      this.router.navigate(['/dashboard']);
    }
    else {
      this.msg = 'Invalid username or password';
    }
  }
  login(data?: any) {
    this.check(data.username, data.password)
  }
}
