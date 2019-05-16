import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component';
// import { ExibirContatoComponent } from './exibir-contato/exibir-contato.component';
import { ConsumoComponent } from './consumo/consumo.component';

@NgModule({
  declarations: [
    AppComponent,
    // AdicionaContatoComponent,
    // ExibirContatoComponent,
    ConsumoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
