import { Component, OnInit } from '@angular/core';
import {Detail} from './../farrdetails';
import {DETAILS} from './../flightdeteils';
import { SearchfilterService } from '../searchfilter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  constructor(private route: ActivatedRoute,private servicesearch: SearchfilterService) { }

  id:number;
  data;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
   this.data = DETAILS.find(a => a.id === this.id);
    console.log(this.data.id);

    //console.log("ok see")
  }

}
