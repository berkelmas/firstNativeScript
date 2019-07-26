import { Injectable } from '@angular/core';
const firebaseWebApi = require("nativescript-plugin-firebase/app");

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  getUser(email, password) {
    return firebaseWebApi.auth().signInWithEmailAndPassword(email, password);
  }

  getCurrentUser() {
    return firebaseWebApi.auth().currentUser.getIdToken(false);
  }

  userLogout() {
    return firebaseWebApi.auth().signOut();
  }
}
