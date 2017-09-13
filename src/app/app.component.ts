//Angular / Ionic
import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform, Nav, Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Pages
import { TutorialPage } from './../pages/tutorial/tutorial';
import { TabsPage } from './../pages/tabs/tabs';

//Services
import { Settings } from './../providers/settings';

@Component({
  template: `
  <ion-nav id="nav" [root]="rootPage"></ion-nav>
  `
})

export class MyApp {
  rootPage:any;

  @ViewChild(Nav) nav: Nav; //Use ViewChild to access nav methods such as setRoot

  constructor(private translate: TranslateService, private platform: Platform, public settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initTranslate(); //for i18n
    //Change root page based on "enable intro page" setting, which by defauly starts as true
    this.settings.getValue("enableIntroPage")
      .then( (toggleOption) => {
        if(toggleOption)
          this.nav.setRoot(TutorialPage);
        else
          this.nav.setRoot(TabsPage);
      })    
  }

  ionViewDidLoad() {
    this.platform.ready()
    .then(() => {
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
}