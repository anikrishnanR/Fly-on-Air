import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Detail } from '../farrdetails';
import { UserloginService } from '../userlogin.service';
import {Router,RouterModule} from '@angular/router';
@Component({



  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {


  from:String;
  to:String;
  date:string;
  depature:Date;
  adult:number;
  chiled:number;
  class:string;

  @Input() detail: Detail[];
  constructor(private router: Router) { }

  ngOnInit() {

  }
  navi():void
  {
    this.router.navigate(['/ftbooking'])
  }

  count:number=0;
   Increment()
  {
    this.count +=1;
  }
  Decrement(count)
  {
    this.count -=1;
  }
  swap(from,to)
  {
    this.from=to;
    this.to=from;
  }

}
