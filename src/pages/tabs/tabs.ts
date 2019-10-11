import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  
})
export class TabsPage {
  tab1Root = SettingsPage;
  tab2Root = HomePage;
  tab3Root = AboutPage;
}
