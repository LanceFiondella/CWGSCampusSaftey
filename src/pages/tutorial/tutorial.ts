//Angular / Ionic
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Pages
import { TabsPage } from '../tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
import { SchoolListPage } from '../choose-school/school-list/school-list';
//Services
import { Settings } from '../../providers/settings';
import { Slide } from '../../models/slide';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  
  constructor(private navCtrl: NavController, private translate: TranslateService, private settings: Settings) {
    //Change the "enable intro page" setting to false, so that this page is only the root this one time
    this.settings.load()
    .then( () => {
      this.settings.setValue("enableIntroPage", false)
    });
    translate.get([
      "TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
      "TUTORIAL_SLIDE4_TITLE",
      "TUTORIAL_SLIDE4_DESCRIPTION"
    ]).subscribe(
      (values) => {
        this.slides = [
          {
            id: 1,
            title: values.TUTORIAL_SLIDE1_TITLE,
            description: values.TUTORIAL_SLIDE1_DESCRIPTION,
            image: 'assets/img/umd_logo.png',
          },
          {
            id:2,
            title: values.TUTORIAL_SLIDE2_TITLE,
            description: values.TUTORIAL_SLIDE2_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-2.png',
          },
          {
            id:3,
            title: values.TUTORIAL_SLIDE3_TITLE,
            description: values.TUTORIAL_SLIDE3_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-3.png',
          },
          {
            id:4,
            title: values.TUTORIAL_SLIDE4_TITLE,
            description: values.TUTORIAL_SLIDE4_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-4.png',
          }
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot(TabsPage, {}, {
      animate: false
    });
    this.navCtrl.push(SchoolListPage);
  }

}
