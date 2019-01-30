import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FauxListComponent } from './faux-list/faux-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FauxmodalComponent } from './fauxmodal/fauxmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    FauxListComponent,
    DashboardComponent,
    FauxmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: 'API', useValue: 'http://localhost:8088'}],
  entryComponents: [
    FauxmodalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
