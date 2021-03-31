import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../pokemon-service/pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {Output, EventEmitter} from '@angular/core';
import {Pokemon} from '../../../model/pokemon';

@Component({
  selector: 'app-pokemons-lista',
  templateUrl: './pokemons-lista.component.html',
  styleUrls: ['./pokemons-lista.component.css']
})

export class PokemonsListaComponent implements OnInit {
  public pokemon1: any;
  public pokemon2: any;
  public pokemons: any[];
  @Output() pokemonAdicionadoEvent = new EventEmitter<Pokemon>();

  constructor(
    private service: PokemonService,
    private _route: ActivatedRoute
  ) {
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.BuscarPokemonsPorTipo();
  }

  public BuscarPokemon(): any {
    this.service.BuscarPokemonPorId(1).subscribe(p => {
      this.pokemon1 = p;
      console.log(p);
    });

    this.service.BuscarPokemonPorId(6).subscribe(p => {
      this.pokemon2 = p;
      console.log(p);
    });
  }

  public BuscarPokemonsPorTipo(): any {
    this._route.queryParams.subscribe((params) => {
      if (params.type) {
        this.service.BuscarPokemonsPorTipo(params.type).subscribe(p => {
          this.pokemons = p.pokemon;
          this.pokemons.forEach(pok => {
            this.service.BuscarPokemonPorNome(pok.pokemon.name).subscribe(pokemonBuscado => {
                pok.id = pokemonBuscado.id;
                pok.stats = pokemonBuscado.stats;
                pok.price = ((pokemonBuscado.weight + pokemonBuscado.height) / (pokemonBuscado.id / 10)).toFixed(2);
                pok.imgUrl = pokemonBuscado.sprites.other['official-artwork'].front_default;
              },
              (error) => console.error(error));
          });
          }, (e) => console.error(e));
      }
    });
  }

  adicionarPokemon(p: Pokemon): void {
    console.log(p);
    this.service.SetPokemonEnviado(p);
  }
}
