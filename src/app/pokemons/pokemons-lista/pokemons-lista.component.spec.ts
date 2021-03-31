import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsListaComponent } from './pokemons-lista.component';

describe('PokemonsListaComponent', () => {
  let component: PokemonsListaComponent;
  let fixture: ComponentFixture<PokemonsListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
