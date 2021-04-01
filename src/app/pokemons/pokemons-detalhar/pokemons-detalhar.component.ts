import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../../model/pokemon';
import {PokemonService} from '../../pokemon-service/pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemons-detalhar',
  templateUrl: './pokemons-detalhar.component.html',
  styleUrls: ['./pokemons-detalhar.component.css']
})
export class PokemonsDetalharComponent implements OnInit {
  public pokemon: Pokemon;

  constructor(
    private service: PokemonService,
    private _route: ActivatedRoute
  ) {
    this.pokemon = new Pokemon();
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      console.log(params.id);
      this.service.BuscarPokemonPorId(params.id).subscribe(p => {
        this.pokemon = p;
        console.log(this.pokemon);
      });
    });
  }
}
