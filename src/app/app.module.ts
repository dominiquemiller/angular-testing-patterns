import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AsyncService } from '../services/async.service';
import { SyncService } from '../services/sync.service';
import { UserResolver } from '../services/user.resolver.service';

import { AppComponent } from './app.component';
import { PeopleComponent } from '../people/containers/people.component';
import { UsersComponent } from '../users/containers/users.component';
import { NewUserFormComponent } from '../users/components/new-user-form.component';

const routes: Routes = [
  { path: 'users',
      component: UsersComponent,
      resolve: {
          users: UserResolver
      }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    UsersComponent,
    NewUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AsyncService,
    SyncService,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
