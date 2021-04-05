import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {PokemonService} from '../../../pokemon-service/pokemon.service';
import {Pokemon} from '../../../../model/pokemon';
import {MessageService} from 'primeng/api';


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
  cashBackValue: string;
  mouseEvent: any;

  constructor(
    private service: PokemonService,
    private message: MessageService,
  ) {
    this.pokemonsAdicionados = [];
    this.precoTotal = 0;
    this.cashBackValue = localStorage.cashBackValue;
    this.mouseEvent = false;
  }

  ngOnInit(): void {
    this.adicionarPokemonEvent();
    this.recuperarPokebola();
  }

  adicionarPokemonEvent(): void {
    this.service.GetPokemonEnviado().subscribe((p: Pokemon | any) => {
      if (this.pokemonsAdicionados.some((poke: Pokemon | any) => {
        if (poke.id === p.id) {
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
    if (localStorage.pokemons !== undefined) {
      this.pokemonsAdicionados = JSON.parse(localStorage.pokemons);
      this.pokemonsAdicionados.forEach((p: Pokemon | any) => {
        p.quantidade = p.quantidade as number;
        this.precoTotal = this.precoTotal + ((+p.price * p.quantidade) as number);
      });
    }
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

  finalizarCompras(): void {
    if (this.precoTotal !== 0) {
      const cashBack = parseFloat((this.precoTotal * parseFloat(localStorage.cashBackPercent)).toFixed(2));
      const precoPago = (this.precoTotal - parseFloat(localStorage.cashBackValue));

      if (parseFloat(localStorage.cashBackValue) > this.precoTotal) {
        const csb = (parseFloat(localStorage.cashBackValue) - this.precoTotal + cashBack).toFixed(2);
        this.pokemonsAdicionados = [];
        this.precoTotal = 0;
        localStorage.removeItem('pokemons');
        localStorage.removeItem('cashBackValue');
        localStorage.cashBackValue = csb;
        this.cashBackValue = csb;
        this.message.add({
          severity: 'success',
          summary: 'Obrigado!',
          detail: `Compra realizada com sucesso! Valor pago utilizando os valores na carteira e ${cashBack} de cashback adicionado na carteira!`
        });
      } else {
        this.precoTotal = 0;
        this.pokemonsAdicionados = [];
        localStorage.removeItem('pokemons');
        localStorage.removeItem('cashBackValue');
        localStorage.cashBackValue = cashBack;
        this.cashBackValue = cashBack.toString();
        this.message.add({
          severity: 'success',
          summary: 'Obrigado!',
          detail: `Compra realizada com sucesso! Valor pago ${precoPago.toFixed(2)} e ${cashBack} de cashback adicionado na carteira!`
        });
      }
    } else {
      this.message.add({
        severity: 'warn',
        summary: 'PokeList Vazia!',
        detail: `Adicione algum Pokemon no carrinho para poder continuar com a compra!`
      });
    }
  }
}
