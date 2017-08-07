
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import {PeComponent} from './pe/pe.component';
import {BpComponent} from './bp/bp.component';
import {RouterModule,Routes} from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    PeComponent,
    BpComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
{path:'pe',component:PeComponent },
{path:'bp',component:BpComponent }

    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
