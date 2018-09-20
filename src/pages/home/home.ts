import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { TravelData } from '../../data/travel-data.type';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private travelDataDocument: AngularFirestoreDocument<TravelData>;
  remainingCash: Observable<number>;

  constructor(private db: AngularFirestore) {

  }

  ionViewDidEnter() {
    this.travelDataDocument = this.db.doc<TravelData>('travel-data/JIIrZLsuAacLVKPyKWnx');
    this.travelDataDocument.valueChanges()
      .subscribe(data => {
        let oneDay = 1000*60*60*24;;
        this.remainingCash = of((new Date(data.finalDate) - new Date(data.initDate)) / oneDay * data.dailyValue);
      });
  }

}
