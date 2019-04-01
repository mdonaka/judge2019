import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './home/top/top.component';
import { ProblemComponent } from './home/problem/problem.component';
import { SubmitComponent } from './home/submit/submit.component';
import { RankComponent } from './home/rank/rank.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopComponent,
    ProblemComponent,
    SubmitComponent,
    RankComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
