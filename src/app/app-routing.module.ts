import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AddformComponent } from './addform/addform.component';

import { ListformComponent } from './listform/listform.component';

const routes: Routes = [
  { path: 'list', component: ListformComponent },
  // { path: '', component: AddformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents =[ListformComponent, AddformComponent]
