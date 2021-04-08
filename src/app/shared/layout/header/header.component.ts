import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../../pokemon-service/pokemon.service';
import {PokemonList} from '../../../../model/pokemonList';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public open: boolean;
  public numItems: any;
  public cashbackValue: number;
  public pokemons: any;
  public pokemonsFiltrados: any;
  public pokeBallCheia: boolean;
  public pokemonAdicionados: number;

  constructor(
    private service: PokemonService,
    private _router: Router,
) {
    this.open = false;
    this.cashbackValue = 0.10;
    this.pokemons = new PokemonList().pokemons;
    this.pokeBallCheia = false;
    this.pokemonAdicionados = 0;
  }

  ngOnInit(): void {
    this.service.GetPokemonEnviado().subscribe(() => {
      this.open = true;
    });
    localStorage.cashBackPercent = this.cashbackValue;
    localStorage.cashBackValue = 50;
    setInterval(() => {
      if (localStorage.pokemons !== '' && localStorage.pokemons !== undefined){
        this.pokemonAdicionados = JSON.parse(localStorage.pokemons).length;
      } else {
        this.pokemonAdicionados = 0;
      }
      if (this.pokemonAdicionados > 0){
        this.pokeBallCheia = !this.pokeBallCheia;
      }
    }, 1000);
  }

  search(event: any): void {
    this.pokemonsFiltrados = this.pokemons.filter((p: any) => {
      return p.name.toLowerCase().startsWith(event.query.toLowerCase());
    });
  }

  togglePokeBall(): void {
    this.open = !this.open;
    this.numItems++;
  }

  searchPokemon(p: any): void {
    this._router.navigate(['pokemons/detalhar'], { queryParams : {id: p.id}});
  }
}
