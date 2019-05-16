import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExibirConsumoComponent } from './exibir-consumo/exibir-consumo.component';
import { PegaConsumoComponent } from './pega-consumo/pega-consumo.component';

@NgModule({
  declarations: [
    AppComponent,
    ExibirConsumoComponent,
    PegaConsumoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
