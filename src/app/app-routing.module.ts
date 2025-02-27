import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocheListComponent } from './components/coche-list/coche-list.component';

const routes: Routes = [
  {path: 'coches', component: CocheListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
