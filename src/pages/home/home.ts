import { Component } from "@angular/core";
import { GithubApiProvider } from "../../providers/github-api/github-api";
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl
} from "@angular/forms";
import Repository from "../../providers/github-api/models/Repository";
import { AlertController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  form: FormGroup;
  repositories: Repository[] = [];
  loading = false;
  debouncer: any;
  debounceTime = 500;

  constructor(
    private formBuilder: FormBuilder,
    private githubApiProvider: GithubApiProvider,
    private alertCtrl: AlertController
  ) {
    this.form = this.formBuilder.group({
      username: ["", Validators.required, this.userExists.bind(this), "blur"]
    });
  }

  fieldHasValidClass(key: string) {
    return this.form.get(key).valid && this.form.touched;
  }

  fieldHasInvalidClass(key: string) {
    return this.form.get(key).invalid && this.form.touched;
  }

  successHandler(res: Repository[]) {
    this.repositories = res;
  }

  errorHandler(err: Error) {
    this.repositories = [];
    this.alertCtrl
      .create({
        title: "Error",
        message: err.message,
        buttons: ["Dismiss"],
        cssClass: "danger"
      })
      .present();
  }

  userExists(control: AbstractControl) {
    clearTimeout(this.debouncer);
    return new Promise(resolve => {
      this.debouncer = setTimeout(() => {
        this.githubApiProvider
          .getUser(control.value)
          .subscribe(
            res => resolve(null),
            err => resolve({ usernameInUse: true })
          );
      }, this.debounceTime);
    });
  }

  submitForm() {
    this.githubApiProvider
      .getRepositories(this.form.value.username)
      .subscribe(this.successHandler.bind(this), this.errorHandler.bind(this));
  }
}
