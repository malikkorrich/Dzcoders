import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loggedIn:boolean;

  constructor(private router:Router, private loginService:LoginService) {
    this.loggedIn = loginService.loggedIn;
   }

  ngOnInit(): void {
  }

    /*Get started button */
    goProfile() {
      this.router.navigate(['/profile']);
    }
}
