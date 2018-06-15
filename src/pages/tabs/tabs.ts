
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { CalendarioPage } from '../calendario/calendario';
import { PistasPage } from '../pistas/pistas';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalendarioPage;
  tab3Root = PistasPage;
  tab4Root = ContactPage;


  constructor() {

  }
}
