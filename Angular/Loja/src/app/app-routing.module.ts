import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {path: 'home', component: PaginaInicialComponent},
  {path: 'produto/:id', component: DetalheProdutoComponent},
  {path: 'atendimento', component: AtendimentoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

