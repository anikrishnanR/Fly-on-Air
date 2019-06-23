import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Detail } from '../farrdetails';
import { UserloginService } from '../userlogin.service';
import {Router, RouterModule} from '@angular/router';
import {SearchfilterService} from '../searchfilter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {
  option:string[]=['Chennai','Maduri','Bangalore'];
  constructor(private router: Router, private servicesearch: SearchfilterService) { }


  from = '';
  to = '';
  date = '';
  depature: Date;
  adult: number;
  chiled: number;
  class: string;
  searchdata: any = [];

  @Input() detail: Detail[];

  count = 0;


  getfilterdata(): void {
    this.servicesearch.filterdata(this.from, this.to, this.date);
    this.router.navigate(['/ftbooking']);
  }


  ngOnInit() {
    }
   Increment() {
    this.count += 1;
  }
  Decrement(count) {
    this.count -= 1;
  }
  swap() {

    const temp = this.from;
    this.from = this.to;
    this.to = temp;
  }
}
