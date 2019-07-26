import { Component, OnInit } from "@angular/core";
const firebaseWebApi = require("nativescript-plugin-firebase/app");
import { UserService } from '../user.service';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    email: string;
    password: string;

    constructor(private userService: UserService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    handleSubmit() {
      this.userService.getUser(this.email, this.password)
        .then(res => {
          this.userService.loggedIn.next(true);
          console.log(res.user.email);
        })
        .catch(err => console.log(err));
    }

    handleCurrentUser() {
      this.userService.getCurrentUser()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    handleLogout() {
      this.userService.userLogout()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
}
