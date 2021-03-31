import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {PokemonService} from '../../../pokemon-service/pokemon.service';
import {Pokemon} from '../../../../model/pokemon';


@Component({
  selector: 'app-poke-ball',
  templateUrl: './poke-ball.component.html',
  styleUrls: ['./poke-ball.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PokeBallComponent implements OnInit {
  faTimes = faTimes;
  pokemonsAdicionados: any;
  precoTotal: number;

  constructor(
    private service: PokemonService
  ) {
    this.pokemonsAdicionados = [];
    this.precoTotal = 0;
  }

  ngOnInit(): void {
    this.adicionarPokemonEvent();
    this.recuperarPokebola();
  }

  adicionarPokemonEvent(): void{
    this.service.GetPokemonEnviado().subscribe((p: Pokemon | any) => {

      if (this.pokemonsAdicionados.some((poke: Pokemon | any) => {
        if (poke.id === p.id){
          poke.quantidade++;
        }
        return poke.id === p.id;
      })) {
      } else {
        this.pokemonsAdicionados.push(p);
        p.quantidade = 1;
      }
      this.precoTotal = this.precoTotal + (+p.price as number);
      localStorage.pokemons = JSON.stringify(this.pokemonsAdicionados);
    });
  }

  recuperarPokebola(): void {
    this.pokemonsAdicionados = JSON.parse(localStorage.pokemons);
    this.pokemonsAdicionados.forEach((p: Pokemon | any) => {
      p.quantidade = p.quantidade as number;
      this.precoTotal = this.precoTotal + ((+p.price * p.quantidade) as number);
    });
    console.log(this.pokemonsAdicionados);
  }

  removerPokemon(p: Pokemon): void {
    this.pokemonsAdicionados = this.pokemonsAdicionados.filter((x: Pokemon) => {
      return x.id !== p.id;
    });
    localStorage.pokemons = JSON.stringify(this.pokemonsAdicionados);
  }

  adicionarQtdPokemon(p: Pokemon | any): void {
    p.quantidade++;
    this.precoTotal = this.precoTotal + (+p.price as number);
    localStorage.pokemons = JSON.stringify(this.pokemonsAdicionados);
  }

  reduzirQtdPokemon(p: any): void {
    p.quantidade--;
    this.precoTotal = this.precoTotal + (-p.price as number);
    if (p.quantidade === 0 || isNaN(p.quantidade)) {
      this.removerPokemon(p);
    }
    localStorage.pokemons = JSON.stringify(this.pokemonsAdicionados);
  }
}
