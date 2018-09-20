import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { TravelData } from '../../data/travel-data.type';

@IonicPage()
@Component({
  selector: 'page-travel-data',
  templateUrl: 'travel-data.html',
})
export class TravelDataPage {

  travelDataForm: FormGroup;

  private travelDataDocument: AngularFirestoreDocument<TravelData>;

  constructor(private formBuilder: FormBuilder, private db: AngularFirestore, private toastCtrl: ToastController) {
    this.travelDataForm = this.formBuilder.group({
      initDate: ['', Validators.required],
      finalDate: ['', Validators.required],
      dailyValue: ['', Validators.required],
      user: ['']
    });
  }

  ionViewDidEnter() {
    this.travelDataDocument = this.db.doc<TravelData>('travel-data/JIIrZLsuAacLVKPyKWnx');
    this.travelDataDocument.valueChanges()
      .subscribe(data => {
        this.travelDataForm.setValue(data)
      });
  }

  saveTravelData() {
    this.travelDataDocument.update(this.travelDataForm.value)
      .then(() => {
        this.toastCtrl.create({
          message: 'Dados atualizados',
          duration: 3000,
          position: 'bottom'
        }).present();
      });
  }

}
