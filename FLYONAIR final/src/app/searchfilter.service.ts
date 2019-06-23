import { Injectable, Input } from '@angular/core';
import { DETAILS } from './flightdeteils';
import { Detail } from './farrdetails';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchfilterService {

  newarray: any = [];
  subject = new Subject<Detail[]> ();
  constructor() { }
  filterdata(from, to, date) {
    this.newarray = DETAILS.filter(data => data.from === from && data.destination === to);
}
getData() {
  this.subject.next(this.newarray);
}
getfilterdata(highValue,value) {
  this.newarray = this.newarray.filter(data1 => data1.price <= highValue && data1.price >= value);
  this.subject.next(this.newarray);
  console.log(this.newarray);
}


}
