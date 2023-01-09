import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre:string = "hola usuario"
  mostrarNom( ){
    console.log(this.nombre)
  }
}
