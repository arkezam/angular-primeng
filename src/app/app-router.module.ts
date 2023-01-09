import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { PersonalizadosComponent } from './ventas/pages/personalizados/personalizados.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch:'full'
  },
  {
    path:'numeros',
    component: NumerosComponent
  },
  {
    path:'personalizados',
    component: PersonalizadosComponent
  },
  {
    path:'**',
    redirectTo:'' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }