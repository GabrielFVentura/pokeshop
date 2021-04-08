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
        style: {'font-size': ' 145%'},
      },
      {
        label: 'Fogo',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'fire'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Água',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'water'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Planta',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'grass'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Elétrico',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'electric'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Dragão',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'dragon'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Voador',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'flying'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Venenoso',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'poison'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Terra',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'ground'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Pedra',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'rock'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Inseto',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'bug'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Fantasma',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'ghost'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Aço',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'steel'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Psíquico',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'psychic'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Gelo',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'ice'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Fada',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'fairy'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Noturno',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'dark'},
        style: {'font-size': ' 145%'}
      },
      {
        label: 'Lutador',
        routerLink: 'pokemons/lista',
        queryParams: {type: 'fighting'},
        style: {'font-size': ' 145%'}
      },
    ];
  }
}
