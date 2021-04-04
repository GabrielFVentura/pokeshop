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
  public pokemonsBuscados: any[];
  public promoMainPage: boolean;
  public p: number;

  @Output() pokemonAdicionadoEvent = new EventEmitter<Pokemon>();

  constructor(
    private service: PokemonService,
    private _route: ActivatedRoute
  ) {
    this.p = 1;
    this.pokemons = [];
    this.pokemonsBuscados = [];
    this.promoMainPage = true;
  }

  ngOnInit(): void {
    this.BuscarPokemonsPorTipo();
    // this.BuscarPokemon();
  }

  public BuscarPokemon(): any {
    const arrayIds: number[] = [];

    for (let i = 1; i <= 932; i++) {
      arrayIds.push(i);
    }

    arrayIds.forEach(id => {
      this.service.BuscarPokemonPorId(id).subscribe(p => {
          this.pokemonsBuscados.push(p);
        }, (e) => console.log(e),
        // () => console.log(this.pokemonsBuscados)
      );
    });
  }

  public BuscarPokemonsPorTipo(): any {
    this._route.queryParams.subscribe((params) => {
      this.pokemons = [];
      // console.log(params);
      if (params.type !== 'fp') {

        this.service.BuscarPokemonsPorTipo(params.type).subscribe(p => {
          this.pokemons = p.pokemon;
          this.pokemons.forEach(pok => {
            this.service.BuscarPokemonPorNome(pok.pokemon.name).subscribe(pokemonBuscado => {
                pok.id = pokemonBuscado.id;
                pok.stats = pokemonBuscado.stats;
                pok.price = ((pokemonBuscado.weight + pokemonBuscado.height) / (pokemonBuscado.id / 10)).toFixed(2);
                pok.imgUrl = pokemonBuscado.sprites.front_default;
              },
              (error) => console.error(error));
          });
        }, (e) => console.error(e));
      } else {

        const randomArray = (length: number, max: number) =>
          Array(length).fill(undefined).map(() => Math.round(Math.random() * max));

        randomArray(10, 898).forEach(r => {
          this.service.BuscarPokemonPorId(r).subscribe(p => {
              const pk = new Pokemon();

              pk.pokemon = {
                name: p.name
              };
              pk.id = p.id;
              pk.stats = p.stats;
              pk.promo = (Math.floor(Math.random() * 50) + 1);
              pk.price = (( 10 * (p.weight + p.height) / (p.id / 10)).toFixed(2)) as any;
              pk.price = Math.floor(((pk.price * pk.promo) / 100)).toFixed(2);
              pk.imgUrl = p.sprites.front_shiny;
              this.pokemons.push(pk);

            }, (e) => console.error(e),
            // () => console.log(this.pokemons)
          );
        });
      }
    }, (error => console.log(error)));
  }

  // public BuscarPokemonsPorTipo(): any {
  //   this._route.queryParams.subscribe((params) => {
  //     console.log(params.type);
  //     this.pokemons = this.pokemonsBuscados.filter(p => {
  //       return p.types.some((t: any) => {
  //         console.log('type', t.type.name === params.type);
  //         return t.type.name === params.type;
  //       });
  //     });
  //     console.log(this.pokemonsBuscados);
  //   });
  // }

  adicionarPokemon(p: Pokemon): void {
    console.log(p);
    this.service.SetPokemonEnviado(p);
  }
}
