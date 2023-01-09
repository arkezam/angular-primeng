import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { PersonalizadosComponent } from './pages/personalizados/personalizados.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    NumerosComponent,
    BasicosComponent,
    PersonalizadosComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    NumerosComponent,
    BasicosComponent
  ]
})
export class VentasModule { }
