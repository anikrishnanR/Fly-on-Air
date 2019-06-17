import {Component, OnInit,Input,ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserloginService } from '../userlogin.service';
import { Detail } from '../farrdetails';
import { DETAILS } from '../flightdeteils';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
@Component({
  selector: 'app-ftbooking',
  templateUrl: './ftbooking.component.html',
  styleUrls: ['./ftbooking.component.css']
})

export class FtbookingComponent implements OnInit  {
  constructor(private dservice: UserloginService) { }

  @Input() detail: Detail[];
  displayedColumns: string[] = ['name', 'departureTime', 'duration', 'arrivalTime', 'destination', 'price'];


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource = new MatTableDataSource(DETAILS);


  ngOnInit() {
    this.getdetails();
   //console.log(this.dataSource[0]);
    this.dataSource.sort = this.sort;

  }
  getdetails(): void {
    this.detail = this.dservice.getdetails();
   // console.log(this.dataSource);
  }


  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ViewChild(MatSort, {static: true}) sort: MatSort;

  // ngOnInit() {
  //   this.dataSource.sort = this.sort;
  // }

}
