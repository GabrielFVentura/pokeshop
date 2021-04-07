import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../../model/pokemon';
import {PokemonService} from '../../pokemon-service/pokemon.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pokemons-detalhar',
  templateUrl: './pokemons-detalhar.component.html',
  styleUrls: ['./pokemons-detalhar.component.css', '../../shared/typesIcons/icons.css']
})
export class PokemonsDetalharComponent implements OnInit {
  public pokemon: Pokemon;
  public shiny: boolean;
  public typeOne: string;
  public typeTwo: string;
  public id: number;

  constructor(
    private service: PokemonService,
    private _route: ActivatedRoute,
    private _router: Router
) {
    this.pokemon = new Pokemon();
    this.pokemon.name = '';
    this.pokemon.types = [];
    this.typeOne = '';
    this.typeTwo = '';
    this.shiny = false;
    this.id = 0;
  }


  ngOnInit(): void {
    this.typeTwo = '';
    this._route.queryParams.subscribe((params) => {
      this.id = +params.id;
      this.service.BuscarPokemonPorId(params.id).subscribe(p => {
        this.pokemon = p;
        this.pokemon.imgUrl = p.sprites.front_default;
        this.pokemon.imgUrlShiny = p.sprites.front_shiny;
        this.typeOne = p.types[0].type.name !== undefined ? p.types[0].type.name : '';

        this.pokemon.promo = 0;
        if (this.typeOne === 'fire'){
          this.pokemon.promo = 25;
        }
        if (p.types.length > 1) {
          this.typeTwo = p.types[1].type.name;
        }
        this.pokemon.price = ((10 * (p.weight + p.height)) * ((100 - this.pokemon.promo) / 100)
          / (p.id / 10)).toFixed(2);
        this.pokemon.movesPokemon = [];
        this.pokemon.items = [];

        this.pokemon.moves?.forEach((m: any) => {
          if (m?.move.name) {
            this.pokemon.movesPokemon.push(m.move);
          }
        });

        this.pokemon.held_items.forEach((i: any) => {
          if (this.pokemon.items !== undefined) {
            this.pokemon.items.push(i.item);
          }
        });
      });
    });
  }

  adicionarPokemon(): void {
    const p: Pokemon = new Pokemon();
    p.id = this.pokemon.id;
    p.pokemon = {
      name: this.pokemon.name
    };
    if (this.shiny) {
      p.imgUrl = this.pokemon.imgUrlShiny;
      p.price = this.pokemon.price * 10;
    } else {
      p.imgUrl = this.pokemon.imgUrl;
      p.price = this.pokemon.price;
    }
    this.service.SetPokemonEnviado(p);
  }

  proxPokemonDetalhar(): void {
    this._router.navigate(['pokemons/detalhar'], { queryParams : {id: this.id + 1}});
  }

  anteriorPokemonDetalhar(): void {
    this._router.navigate(['pokemons/detalhar'], { queryParams : {id: this.id - 1}});
  }
}
