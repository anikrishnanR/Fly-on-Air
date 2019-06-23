import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchfilterService } from '../searchfilter.service';
import { Options } from 'ng5-slider/options';



@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  value: number = 1000;
  highValue:number=10000;
  options: Options = {
    floor: 0,
    ceil: 10000
  };
i:number=0;j:number=0;
pr:number=0;
pr1:number=0;
tax:number=1291;
atax:number=0;ctax:number=0
val=3291;
gt:number=0;
message:string=null;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  adultIncrement():void{
     this.i+=1;
     this.pr=this.i*this.val;
     this.atax=this.i*this.tax;

  }
  childIncrement():void{
    this.j+=1;
     this.pr1=this.j*this.val;
     this.ctax=this.j*this.tax;
  }
 pay():string{
   return this.message="Thanks for using our site.Your payment is successfull";
 }
 moveToSelectedTab(tabName: string) {
  for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
  if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName)
     {
        (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
     }
   }
}



}
