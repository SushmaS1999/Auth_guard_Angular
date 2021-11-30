import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service'
import { RouterModule, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //   constructor(private authService: AuthService, private router: Router){}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   if (this.authService.loggedInData.username === 'sushma' && this.authService.loggedInData.password === '123456') {
  //     this.router.navigate(['home']);
  //   }
  //   return this.authService.loggedInData;
  //
  // }
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('username') === 'admin' && localStorage.getItem('password') === '123456') {
      // this.router.navigate(['dashboard']);
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
