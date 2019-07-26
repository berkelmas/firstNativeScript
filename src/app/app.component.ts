import { Component } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

  ngOnInit() {
    firebase.init({
      // Optionally pass in properties for database, authentication and cloud messaging,
      // see their respective docs.
    }).then(
      () => {
        console.log("firebase.init done");
        firebaseWebApi.auth().onAuthStateChanged(user => console.log('Auth State Değişti...'))
      },
      error => {
        console.log(`firebase.init error: ${error}`);
      }
    );
  }
}
