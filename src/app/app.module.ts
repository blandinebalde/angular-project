import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

const appRoute: Routes = [
  { path : 'appareils', canActivate :[AuthGard] ,component : AppareilViewComponent },
  { path : 'auth', component: AuthComponent },
  { path : '', canActivate :[AuthGard] ,component: AppareilViewComponent },
  { path : 'edit', canActivate :[AuthGard] ,component: EditAppareilComponent },
  { path : 'appareils/:id', canActivate :[AuthGard] , component:  SingleAppareilComponent },
  { path : 'not-found', component:  FourOhFourComponent },
  { path : '**', redirectTo:  "/not-found" }, // toujour mettre a la fin

];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    AppareilService,
    AuthService, 
    AuthGard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
