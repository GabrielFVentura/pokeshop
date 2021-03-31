import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../../pokemon-service/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public color: string;
  public open: boolean;
  numItems: any;

  constructor(
    private service: PokemonService
  ) {
    this.color = 'white';
    this.open = false;
  }

  ngOnInit(): void {
    this.service.GetPokemonEnviado().subscribe(() => {
      this.open = true;
    });
  }

  search($event: MouseEvent) {

  }

  togglePokeBall(): void {
    this.open = !this.open;
    this.numItems++;
  }
}
