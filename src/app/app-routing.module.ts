import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './shared/layout/layout.component';
import {PokemonsListaComponent} from './pokemons/pokemons-lista/pokemons-lista.component';
import {PokemonsDetalharComponent} from './pokemons/pokemons-detalhar/pokemons-detalhar.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children : [
    { path: 'pokemons/lista', component: PokemonsListaComponent},
    { path: 'pokemons/detalhar', component: PokemonsDetalharComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
