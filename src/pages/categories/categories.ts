import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Category } from '../../data/category.type';
import { AddCategoryPage } from '../add-category/add-category';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  addCategoryPage = AddCategoryPage;

  private categoriesCollection: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;

  constructor(private db: AngularFirestore) {
    this.categoriesCollection = this.db.collection<Category>('categories');
    this.categories = this.categoriesCollection.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

}
