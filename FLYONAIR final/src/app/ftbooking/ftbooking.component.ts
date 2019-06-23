import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserloginService } from '../userlogin.service';
import { Detail } from '../farrdetails';
import { SearchfilterService } from '../searchfilter.service';
import { Options } from 'ng5-slider';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ftbooking',
  templateUrl: './ftbooking.component.html',
  styleUrls: ['./ftbooking.component.css']
})

export class FtbookingComponent implements OnInit  {
  value = 1000;
  highValue = 10000;
  options: Options = {
    floor: 1000,
    ceil: 10000
  };
  checked = false;
  checked1 = false;
  checked2 = false;
  Stops = false;
  Stops1 = false;
  Stops2 = false;
 // rangeSliderMinValue: number = 1000;
 // rangeSliderMaxValue: number = 10000;


  constructor(private dservice: UserloginService, private servicesearch: SearchfilterService, private router: Router) { }

 @Input()
 detail: Detail[];
 detaillist: Detail[];

// tslint:disable-next-line: member-ordering
displayedColumns: string[] = ['name', 'departureTime', 'duration', 'arrivalTime', 'destination', 'price'];


// tslint:disable-next-line: member-ordering
  @ViewChild(MatSort, {static: true}) sort: MatSort;
// tslint:disable-next-line: member-ordering
  dataSource;

  getdetails(): void {
    console.log(this.highValue)
    this.servicesearch.getfilterdata(this.highValue,this.value);
  }
  ngOnInit() {

    this.servicesearch.subject.subscribe(d => {this.detaillist = d;
      this.dataSource = new MatTableDataSource(this.detaillist);
      this.dataSource.sort = this.sort;
      console.log(this.detaillist);
    });
    this.servicesearch.getData();
    //this.servicesearch.getfilterdata(this.highValue,this.value);
    // this.dataSource = new MatTableDataSource(this.detaillist);
    // this.dataSource.sort = this.sort;
    // console.log(this.detaillist);


  }

  navi(id): void {
    console.log(id);
      this.router.navigate(['/book-details/app-review/'+id]);

  }

}
