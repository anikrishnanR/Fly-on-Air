import { Injectable } from '@angular/core';
import { Detail } from './farrdetails';
import { DETAILS } from './flightdeteils';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
details=DETAILS;
  constructor() { }
getdetails():Detail[]{
  return this.details;
}


}
