import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  items: MenuItem[]=[];

  ngOnInit() {
      this.items = [
          {
              label: 'Programando Pipes',
              icon: 'pi pi-android',
              items: [
                {
                  label: 'Basicos',
                  icon:'pi pi-fw',
                  routerLink: '/'
                },
                {
                  label: 'Numericos',
                  icon: 'pi pi-numeric',
                  routerLink:'numeros'
                }
              ]

          },
          {
              label: 'Personalizados',
              icon: 'pi pi-fw pi-pencil',
              routerLink: 'personalizados'
          }
      ];
  }
}
