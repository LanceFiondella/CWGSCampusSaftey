import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CardsPage } from '../pages/cards/cards';
import { ContentPage } from '../pages/content/content';
import { FirstRunPage } from '../pages/pages';
import { HelpPage } from '../pages/help/help';
//import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/pages';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { QuestionAnswerListMasterPage } from '../pages/question-answer-list-master/question-answer-list-master';
import { ResourcesListMasterPage } from '../pages/resources-list-master/resources-list-master';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
//import { SignupPage } from '../pages/signup/signup';
import { SurveyListMasterPage} from '../pages/survey-list-master/survey-list-master';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
//import { WelcomePage } from '../pages/welcome/welcome';

import { Settings } from '../providers/providers';

import { TranslateService } from '@ngx-translate/core'

@Component({
  template: `
  <ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-nav id="nav" [root]="rootPage" #content></ion-nav>
  `
})
export class MyApp {
  rootPage: any;  

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: TutorialPage },
    //{ title: 'Welcome', component: WelcomePage },
    { title: 'Tabs', component: TabsPage },
    { title: 'Cards', component: CardsPage },
    { title: 'Content', component: ContentPage },
    { title: 'Help', component: HelpPage },
    //{ title: 'Login', component: LoginPage },
    //{ title: 'Signup', component: SignupPage },
    { title: 'Map', component: MapPage },
    { title: 'Question Answer Master Detail', component: QuestionAnswerListMasterPage },
    { title: 'Resources Master Detail', component: ResourcesListMasterPage },
    { title: 'Survey Master Detail', component: SurveyListMasterPage},
    { title: 'Menu', component: MenuPage },
    { title: 'Settings', component: SettingsPage },
    { title: 'Search', component: SearchPage }
  ]
 
  constructor(private translate: TranslateService, private platform: Platform, public settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initTranslate();
    let self = this
    self.settings.getValue("option1")
      .then( (toggleOption) => {
        if(toggleOption)
          self.nav.setRoot(FirstRunPage);
        else
          self.nav.setRoot(MainPage);
      })    
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
