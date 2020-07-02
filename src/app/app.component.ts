import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate =
      [
        {
          title: "Inicio",
          url: "/home",
          icon: "home"
        },
        {
          title: "Plan de Formación",
          url: "/plan-capacitacion",
          icon: "list-outline"
        },
        {
          title: "Consultar a infinity",
          url: "/foro",
          icon: "search-circle-outline"
        },
        {
          title: "Insignias",
          url: "/insignias",
          icon: "ribbon-outline"
        },
        {
          title: "Ayudas",
          url: "/ayudas",
          icon: "alert-circle-outline"
        },
        {
          title: "Bibliografía",
          url: "/bibliografia",
          icon: "library-outline"
        },
        {
          title: "Acerda de",
          url: "/acerca-de",
          icon: "bookmarks-outline"
        },
      ]
  }

}
