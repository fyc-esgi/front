import { Injectable } from '@angular/core';
import {constants} from './constants';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  getConstant(key: string): string {
    // @ts-ignore
    return environment.api + constants[key];
  }

}
