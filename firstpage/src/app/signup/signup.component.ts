import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit , DoCheck {
  userdata;
  token = false;
  path;
  type = 'password';
  constructor(private Router: Router) {
    this.userdata = JSON.parse(localStorage.getItem('token'));
   }

  ngOnInit() {
    this.path = window.location.href;
    if (window.location.href === 'http://localhost:4200/signup') {
    console.log(window.location.href , 'window.location.href');
    }
  }
  ngDoCheck() {
    if (this.userdata && !this.userdata.email) {
        this.token = false;
        this.Router.navigate(['/']);
    } else if (this.userdata) {
        this.token = true;
    }
    console.log(this.token , 'token55');
}
signup(details) {
  console.log(details);
    console.log(details);
    if (details.email === '') {
      alert('Please enter email address!');
      return;
    } else if (details.password === '') {
      alert('Please enter password!');
      return;
    } else if (details.confirmpassword === '') {
      alert('Please enter confirm password!');
      return;
    } else if (details.password !== details.confirmpassword) {
      alert('Please enter correct password and confirmpassword!');
      return;
    }
    if (this.ValidateEmail(details.email)) {
      console.log('valid email');
    } else if (!this.ValidateEmail(details.email)) {
      alert('Please enter valid email!');
       return;
    }
    const temp = Math.floor(100000000 + Math.random() * 900000000);
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://localhost:3100/signup?email=' + details['email'] + '&password='
     + details['password'] + '&user_id=' + temp ,  false);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send();
    if (xhttp.responseText === 'email already') {
      console.log(xhttp.responseText , 'xhttp.responseText');
      alert('Account Already created!');
    } else {
        const res = JSON.parse(xhttp.responseText);
        console.log(res , 'res');
        this.Router.navigate(['/']);
           location.reload();
    }
}
ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
     return (true);
   }
     alert('You have entered an invalid email address!');
     return (false);
 }
}
