import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FauxListComponent } from './faux-list/faux-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'list', 
    component: DashboardComponent,
   },
  { path: '',
    redirectTo: '/list', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
