import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TutorialPage } from './../pages/tutorial/tutorial';
import { TabsPage } from './../pages/tabs/tabs';
import { HelpPage } from './../pages/help/help';
import { ResourceList } from './../pages/resources-list/resource-list';
import { HospitalPage } from './../pages/resources-list/hospital/hostpital';
import { PoliceStationPage } from './../pages/resources-list/police-station/police-station';
import { OnCampusHelpPage } from './../pages/resources-list/on-campus-help/on-campus-help';
import { CounselingPage } from './../pages/resources-list/counseling/counseling';
import { ReportingPage } from './../pages/resources-list/reporting/reporting';
import { QuestionAnswerList} from './../pages/question-answer-list/question-answer-list';
import { QuestionDetailPage } from './../pages/question-answer-list/question-detail/question-detail';
import { SearchPage } from './../pages/question-answer-list/search/search';
import { SettingsPage } from './../pages/settings/settings';

import { Api } from '../providers/api';
import { Questions } from './../providers/questions'

let pages = [
  MyApp,
  TutorialPage,
  TabsPage,
  HelpPage,
  ResourceList,
  HospitalPage,
  PoliceStationPage,
  OnCampusHelpPage,
  CounselingPage,
  ReportingPage,
  QuestionAnswerList,
  QuestionDetailPage,
  SearchPage,
  SettingsPage
]
export function declarations(){
  return pages;
}
export function entryComponents(){
  return pages;
}

@NgModule({
  declarations: declarations(),
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: [
    StatusBar,
    SplashScreen,
    Api,
    Questions,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}

//-------------------Stuff for i18n------------------------------------
import { HttpModule,Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


//-------------------Stuff for settings---------------------------------
import { Settings } from '../providers/settings';
import { Storage, IonicStorageModule } from '@ionic/storage';

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'John Doe',
    option5: '19',
    option6: 'Male'
  });
}