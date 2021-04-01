import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import {HeaderComponent} from './shared/layout/header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import { PokemonsListaComponent } from './pokemons/pokemons-lista/pokemons-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { SubHeaderComponent } from './shared/layout/subheader/sub-header.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { PokeBallComponent } from './shared/layout/poke-ball/poke-ball.component';
import { PokemonsDetalharComponent } from './pokemons/pokemons-detalhar/pokemons-detalhar.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    PokemonsListaComponent,
    SubHeaderComponent,
    PokeBallComponent,
    PokemonsDetalharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    MenuModule,
    ToastModule,
    InputTextModule,
    CardModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
