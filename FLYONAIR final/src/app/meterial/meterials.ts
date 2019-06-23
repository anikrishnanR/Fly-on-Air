import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSortModule} from '@angular/material/sort';
import { Ng5SliderModule } from 'ng5-slider';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatExpansionModule, MatSelectModule,
  MatNativeDateModule, MatProgressSpinnerModule, MatTabsModule,MatRadioModule,
  MatSliderModule, MatCheckboxModule, MatListModule, MatDatepickerModule, MatGridListModule
} from '@angular/material';
@NgModule({
  imports: [
  CommonModule,
  Ng5SliderModule,
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatRadioModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatGridListModule,
  MatSliderModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatSortModule,
  MatListModule,
  ],
  exports: [
  CommonModule,
  MatSliderModule,
   MatToolbarModule,
   MatTabsModule,
   MatGridListModule,
   MatRadioModule,
   Ng5SliderModule,
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
   MatNativeDateModule,
   MatSortModule,
   MatListModule,

   ],
})
export class CustomMaterialModule { }

