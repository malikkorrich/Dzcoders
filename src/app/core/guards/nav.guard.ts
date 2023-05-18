import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/modules/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class NavGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,reject) => {

      if(this.loginService.loggedIn != true){
        resolve(true);
      }else {
        this.router.navigate(['/']);
        reject(false);
      }

    });
  }


  
}
