import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-router.module';

import { AppComponent } from './app.component'; 
import { LOCALE_ID, NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import localeEs from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);

 
@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    VentasModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
