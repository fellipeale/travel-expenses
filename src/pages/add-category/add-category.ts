import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';

import { Category } from '../../data/category.type';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'add-category.html',
})
export class AddCategoryPage {

  categoryForm: FormGroup;

  private categoriesCollection: AngularFirestoreCollection<Category>;

  constructor(private formBuilder: FormBuilder, private db: AngularFirestore, private toastCtrl: ToastController) {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      limit: ['', Validators.required],
      reimbursable: [false, Validators.required]
    });

    this.categoriesCollection = this.db.collection<Category>('categories');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCategoryPage');
  }

  logCategory() {
    console.table(this.categoryForm.value);
  }

  saveCategory() {
    this.categoriesCollection.add(this.categoryForm.value)
      .then(() => {
        this.toastCtrl.create({
          message: 'Categoria adicionada',
          duration: 3000,
          position: 'bottom'
        }).present();

        this.categoryForm.reset();
      });
  }

}
