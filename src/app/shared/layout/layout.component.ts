import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public color: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.color = 'white';
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      console.log(params.type);
      switch (params.type) {
        case 'fire':
          this.color = '#FBA54C';
          break;
        case 'water':
          this.color = '#539DDF';
          break;
        case 'grass':
          this.color = '#5FBD58';
          break;
        case 'electric':
          this.color = '#F2D94E';
          break;
        case 'dragon':
          this.color = '#0C69C8';
          break;
        case 'flying':
          this.color = '#A1BBEC';
          break;
        case 'poison':
          this.color = '#B763CF';
          break;
        case 'ground':
          this.color = '#DA7C4D';
          break;
        case 'rock':
          this.color = '#C9BB8A';
          break;
        case 'bug':
          this.color = '#92BC2C';
          break;
        case 'ghost':
          this.color = '#5F6DBC';
          break;
        case 'steel':
          this.color = '#5695A3';
          break;
        case 'psychic':
          this.color = '#FA8581';
          break;
        case 'ice':
          this.color = '#75D0C1';
          break;
        case 'fairy':
          this.color = '#EE90E6';
          break;
        case 'dark':
          this.color = '#595761';
          break;
        case 'fighting':
          this.color = '#D3425F';
          break;

        // case undefined: {
        //   this._router.navigate(['pokemons/lista'], {queryParams: {type: 'fp'}});
        // }
      }
    })
    ;
  }
}
