import {Component, OnInit} from '@angular/core';
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
  public promoMainPage: boolean;
  @Output() pokemonAdicionadoEvent = new EventEmitter<Pokemon>();

  constructor(
    private service: PokemonService,
    private _route: ActivatedRoute
  ) {
    this.pokemons = [];
    this.promoMainPage = true;
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
      this.pokemons = [];
      console.log(params);
      if (params.type !== 'fp') {

        this.service.BuscarPokemonsPorTipo(params.type).subscribe(p => {
          this.pokemons = p.pokemon;
          this.pokemons.forEach(pok => {
            this.service.BuscarPokemonPorNome(pok.pokemon.name).subscribe(pokemonBuscado => {
                pok.id = pokemonBuscado.id;
                pok.stats = pokemonBuscado.stats;
                pok.price = ((pokemonBuscado.weight + pokemonBuscado.height) / (pokemonBuscado.id / 10)).toFixed(2);
                // pok.imgUrl = pokemonBuscado.sprites.other['official-artwork'].front_default;
                pok.imgUrl = pokemonBuscado.sprites.front_default;
              },
              (error) => console.error(error));
          });
        }, (e) => console.error(e));
      } else {
        console.log('entrei');

        const randomArray = (length: number, max: number) =>
          Array(length).fill(undefined).map(() => Math.round(Math.random() * max));

        randomArray(10, 932).forEach(r => {
          this.service.BuscarPokemonPorId(r).subscribe(p => {
              const pk = new Pokemon();

              pk.pokemon = {
                name: p.name
              };

              pk.id = p.id;
              pk.stats = p.stats;
              pk.promo = (Math.floor(Math.random() * 50) + 1);
              pk.price = (( 10 * (p.weight + p.height) * 10 / (p.id / 10)).toFixed(2)) as any;
              pk.price = Math.floor(((pk.price * (100 - pk.promo)) / 100)).toFixed(2);
              pk.imgUrl = p.sprites.front_shiny;
              this.pokemons.push(pk);

            }, (e) => console.error(e),
            () => console.log(this.pokemons));
        });
      }
    }, (error => console.log(error)));
  }

  adicionarPokemon(p: Pokemon): void {
    this.service.SetPokemonEnviado(p);
  }
}
