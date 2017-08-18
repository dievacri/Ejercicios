import { Component, OnInit } from '@angular/core';
import {IUser} from '../_Models/IUser';
import {LoginService} from "./login.service";
import {UserProfileService} from "../shared/user-profile.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser;
  message: string;

  constructor(private loginService: LoginService,
              private userService: UserProfileService,
              private route: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }

  login(user: IUser) {
    this.loginService.login(user).subscribe(
      res => {
        if (res.length === 1) {
          this.userService.setIsLoggedIn(true);
          const param =  this.activeRoute.snapshot.queryParams['redirectTo'];
          this.route.navigate([param]);
        } else {
          this.message = 'Credenciales incorrectas';
        }
      }
    );
  }
}
