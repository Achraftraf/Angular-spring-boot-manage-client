import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './component1/liste/liste.component';
import { FormulairComponent } from './component1/formulair/formulair.component';

const routes: Routes = [
// {path:"" redirectTo:"liste", pathMatch:'full'}
{path:"liste", component:ListeComponent},
{path:"add", component:FormulairComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
