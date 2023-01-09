import { Component } from '@angular/core';
 
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {


  date : Date = new Date()

  nombre:string = "Juan"
  genero:string = 'masculino'

  gen={
    'masculino': 'invitado',
    'femenino': 'invitada'
  }

  personas= ['alberto','Pablo','Patricio','alex']

  cant = {
    '=0':'0 invitados',
    '=1': ' un invitado',
    'other': 'varios invitados'

  }


  cambiar(){
    this.nombre = this.nombre + 'a'
    this.genero = 'femenino'
  }
  quitar(){
    
    this.personas.splice(0,1)
  }
}
