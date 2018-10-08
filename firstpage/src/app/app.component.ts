
import { Component } from '@angular/core';
import {Http,Response,HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router'
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  type= 'password';
  show = false;
  toggleShow() {
    this.show = !this.show;
    if (this.show) {
        this.type = 'text';
    } else {
        this.type = 'password';
    }
}
 onLogin(details) {
  console.log(details , '66666666');
 }
}
