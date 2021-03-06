import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ConstantsService} from './constants.service';
import {Observable} from 'rxjs';
import {Trainer} from '../models/trainer';
import {HttpReturn} from '../models/httpReturn';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient,
              private constantsService: ConstantsService,
  ) { }

  getAllTrainers(): Observable<HttpResponse<Array<Trainer>>>{
    const url = this.constantsService.getConstant('TRAINER');
    return this.http.get<Array<Trainer>>(url, {observe: 'response'});
  }

  addTrainer(trainer: Trainer): Observable<HttpResponse<HttpReturn>> {
    const url = this.constantsService.getConstant('TRAINER');
    return this.http.post<HttpReturn>(url, trainer, {observe: 'response'});
  }

  updateTrainer(trainer: Trainer): Observable<HttpResponse<HttpReturn>> {
    const url = this.constantsService.getConstant('TRAINER');
    return this.http.put<HttpReturn>(url, trainer, {observe: 'response'});
  }

  deleteTrainer(trainer: Trainer): Observable<HttpResponse<HttpReturn>>{
    const url = this.constantsService.getConstant('TRAINER');
    return this.http.delete<HttpReturn>(url + '/' + trainer.name, {observe: 'response'});
  }
}
