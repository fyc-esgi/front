import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ConstantsService} from './constants.service';
import {Observable} from 'rxjs';
import {Pokemon} from '../models/pokemon';
import {HttpReturn} from '../models/httpReturn';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient,
              private constantsService: ConstantsService,
  ) { }

  getAllPokemons(): Observable<HttpResponse<Array<Pokemon>>>{
    const url = this.constantsService.getConstant('POKEMON');
    return this.http.get<Array<Pokemon>>(url, {observe: 'response'});
  }

  addPokemon(pokemon: Pokemon): Observable<HttpResponse<HttpReturn>> {
    const url = this.constantsService.getConstant('POKEMON');
    return this.http.post<HttpReturn>(url, pokemon, {observe: 'response'});
  }

  updatePokemon(pokemon: Pokemon): Observable<HttpResponse<HttpReturn>> {
    const url = this.constantsService.getConstant('POKEMON');
    return this.http.put<HttpReturn>(url, pokemon, {observe: 'response'});
  }

  deletePokemon(pokemon: Pokemon): Observable<HttpResponse<HttpReturn>>{
    const url = this.constantsService.getConstant('POKEMON');
    return this.http.delete<HttpReturn>(url + '/' + pokemon.name, {observe: 'response'});
  }
}
