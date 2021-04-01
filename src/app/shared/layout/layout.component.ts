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
          this.color = '#d25353';
          break;
        case 'water':
          this.color = '#809cec';
          break;
        case 'grass':
          this.color = '#73e56c';
          break;
        case 'electric':
          this.color = '#decb68';
          break;
        case 'dragon':
          this.color = '#c3c1ad';
          break;
        case 'flying':
          this.color = '#c7b9d4';
          break;
        case 'poison':
          this.color = '#ae71d9';
          break;
        case 'ground':
          this.color = '#8a6058';
          break;
        // case undefined: {
        //   this._router.navigate(['pokemons/lista'], {queryParams: {type: 'fp'}});
        // }
      }
    })
    ;
  }
}
