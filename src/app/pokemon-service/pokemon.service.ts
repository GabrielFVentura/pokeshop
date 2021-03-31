import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import {Pokemon} from '../../model/pokemon';

const headersString = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  'Access-Control-Allow-Headers':
    'Access-Control-Allow-Headers, ' +
    'Origin, ' +
    'Accept, ' +
    'X-Requested-With, ' +
    'Content-Type, ' +
    'Access-Control-Request-Method, ' +
    'Access-Control-Request-Headers'
};

const httpOptions = {
  headers: new HttpHeaders(headersString)
};

@Injectable({
  providedIn: 'root'
})


export class PokemonService {
  public subject = new Subject<Pokemon>();
  private url = 'https://pokeapi.co/api/v2/pokemon/';
  private urlType = 'https://pokeapi.co/api/v2/type/';
  public pokemon: Pokemon | undefined;

  constructor(private http: HttpClient) {
    this.pokemon = new Pokemon();
  }

  public BuscarPokemonPorId(id: number): Observable<any> {
    return this.http.get(this.url + id, httpOptions);
  }

  public BuscarPokemonPorNome(nome: string): Observable<any> {
    return this.http.get(this.url + nome, httpOptions);
  }

  public BuscarPokemonsPorTipo(tipo: string): Observable<any> {
    return this.http.get(this.urlType + tipo, httpOptions);
  }

  public SetPokemonEnviado(pokemon?: Pokemon): void {
    this.subject.next(pokemon);
    this.pokemon  = pokemon;
  }

  public GetPokemonEnviado(): Observable<Pokemon | undefined>{
    return this.subject.asObservable();
  }
}
