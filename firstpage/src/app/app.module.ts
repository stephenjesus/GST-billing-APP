
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import {PeComponent} from './pe/pe.component';
import {BpComponent} from './bp/bp.component';
import {RouterModule, Routes} from '@angular/router';
import { SignupComponent } from './signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    PeComponent,
    BpComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'pe', component: PeComponent },
      { path: 'bp', component: BpComponent },
      { path: 'signup' , component: SignupComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
