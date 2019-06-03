import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  invalidEntry: Boolean;
  constructor(private router: Router) { }
 
  ngOnInit() {
  }
  login() {
    if(this.username === 'Abhi' && this.password === 'Abhi') {
      localStorage.setItem('Token', 'true');
      this.router.navigateByUrl('');
    } else {
      this.invalidEntry = true;
    }  
  }

}
