import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AsyncService } from '../services/async.service';
import { SyncService } from '../services/sync.service';

import { AppComponent } from './app.component';
import { PeopleComponent } from '../people/containers/people.component';

@NgModule({
  declarations: [
    AppComponent, 
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
