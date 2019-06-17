import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatSortModule} from '@angular/material/sort';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatExpansionModule, MatSelectModule,
  MatNativeDateModule,MatProgressSpinnerModule,MatCheckboxModule,MatDatepickerModule
} from '@angular/material';
@NgModule({
  imports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatSortModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatCheckboxModule,
   MatExpansionModule,
   MatDatepickerModule,
   MatSelectModule,
   MatNativeDateModule,  MatSortModule

   ],
})
export class CustomMaterialModule { }
