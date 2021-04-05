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
  public color: string;
  public open: boolean;
  numItems: any;
  cashbackValue: number;
  pokemons: any;
  pokemonsFiltrados: any;

  constructor(
    private service: PokemonService,
    private _router: Router,
) {
    this.color = 'white';
    this.open = false;
    this.cashbackValue = 0.10;
    this.pokemons = new PokemonList().pokemons;
  }

  ngOnInit(): void {
    this.service.GetPokemonEnviado().subscribe(() => {
      this.open = true;
    });
    localStorage.cashBackPercent = this.cashbackValue;
    localStorage.cashBackValue = 50;
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

  select(p: any): void {
    this._router.navigate(['pokemons/detalhar'], { queryParams : {id: p.id}});
  }
}
