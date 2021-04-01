import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsDetalharComponent } from './pokemons-detalhar.component';

describe('PokemonsDetalharComponent', () => {
  let component: PokemonsDetalharComponent;
  let fixture: ComponentFixture<PokemonsDetalharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsDetalharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
