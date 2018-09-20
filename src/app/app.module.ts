import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddCategoryPage } from '../pages/add-category/add-category';
import { AddExpensePage } from '../pages/add-expense/add-expense';
import { CategoriesPage } from '../pages/categories/categories';
import { environment } from '../environments/environment';
import { TravelDataPage } from '../pages/travel-data/travel-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CategoriesPage,
    AddCategoryPage,
    AddExpensePage,
    TravelDataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CategoriesPage,
    AddCategoryPage,
    AddExpensePage,
    TravelDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
