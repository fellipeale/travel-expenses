import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelDataPage } from './travel-data';

@NgModule({
  declarations: [
    TravelDataPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelDataPage),
  ],
})
export class TravelDataPageModule {}
