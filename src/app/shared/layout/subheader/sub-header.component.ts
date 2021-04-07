import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Normal',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'normal'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Fogo',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'fire'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Água',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'water'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Planta',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'grass'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Elétrico',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'electric'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Dragão',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'dragon'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Voador',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'flying'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Venenoso',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'poison'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Terra',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'ground'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Pedra',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'rock'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Inseto',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'bug'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Fantasma',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'ghost'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Aço',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'steel'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Psíquico',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'psychic'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Gelo',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'ice'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Fada',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'fairy'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Noturno',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'dark'},
        style: {'margin-left': '5%'}
      },
      {
        label: 'Lutador',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'fighting'},
        style: {'margin-left': '5%'}
      },
    ];
  }
}
