import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../../model/pokemon';
import {PokemonService} from '../../pokemon-service/pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';


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
  faPlusCircle = faPlusCircle;

  constructor(
    private service: PokemonService,
    private _route: ActivatedRoute
  ) {
    this.pokemon = new Pokemon();
    this.pokemon.name = '';
    this.typeOne = '';
    this.typeTwo = '';
    this.shiny = false;
  }


  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      this.service.BuscarPokemonPorId(params.id).subscribe(p => {
        this.pokemon = p;
        this.pokemon.imgUrl = p.sprites.front_default;
        this.pokemon.imgUrlShiny = p.sprites.front_shiny;
        this.typeOne = p.types[0].type.name !== undefined ? p.types[0].type.name : '';

        if (p.types[1]) {
          this.typeTwo = p.types[1].type.name;
        }
        this.pokemon.price = ((p.weight + p.height) / (p.id / 10)).toFixed(2);
        this.pokemon.movesPokemon = [];
        this.pokemon.items = [];
        console.log(this.pokemon);

        this.pokemon.moves?.forEach((m: any) => {
          if (m?.move.name) {
            this.pokemon.movesPokemon.push(m.move);
          }
        });

        this.pokemon.held_items?.forEach((i: any) => {
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
}
