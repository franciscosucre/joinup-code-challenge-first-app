webpackJsonp([0],{

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_github_api_github_api__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(formBuilder, githubApiProvider) {
        this.formBuilder = formBuilder;
        this.githubApiProvider = githubApiProvider;
        this.repositories = [];
        this.loading = false;
        this.debounceTime = 500;
        this.form = this.formBuilder.group({
            username: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, this.userExists.bind(this), "blur"]
        });
    }
    HomePage.prototype.fieldHasValidClass = function (key) {
        return this.form.get(key).valid && this.form.touched;
    };
    HomePage.prototype.fieldHasInvalidClass = function (key) {
        return this.form.get(key).invalid && this.form.touched;
    };
    HomePage.prototype.successHandler = function (res) {
        console.log("HomePage --> successHandler() --> res", res);
        this.repositories = res;
    };
    HomePage.prototype.errorHandler = function (err) {
        console.log("HomePage --> errorHandler() --> err", err);
        this.repositories = [];
    };
    HomePage.prototype.userExists = function (control) {
        var _this = this;
        clearTimeout(this.debouncer);
        return new Promise(function (resolve) {
            _this.debouncer = setTimeout(function () {
                _this.debouncer = setTimeout(function () {
                    _this.githubApiProvider
                        .getUser(control.value)
                        .subscribe(function (res) { return resolve(res); }, function (err) { return resolve({ usernameInUse: true }); });
                }, _this.debounceTime);
            });
        });
    };
    HomePage.prototype.submitForm = function () {
        console.log("HomePage --> submitForm() --> this.form", this.form);
        this.githubApiProvider
            .getRepositories(this.form.value.username)
            .subscribe(this.successHandler.bind(this), this.errorHandler.bind(this));
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/home/francisco/Repositories/JoinUpCodeChallenge/githubUserRepositoryBrowser/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar> <ion-title> Ionic Blank </ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>The Github repository browser</h1>\n  <ion-item> <p></p> </ion-item>\n  <ion-card>\n    <ion-card-header>\n      Give us a user and will give you it\'s repositories (And it\'s little dirty\n      secrets!)\n    </ion-card-header>\n    <ion-card-content>\n      <form (ngSubmit)="submitForm()" [formGroup]="form">\n        <ion-item>\n          <ion-label\n            color="{{\n              fieldHasInvalidClass(\'username\') ? \'danger\' : \'primary\'\n            }}"\n            >Username</ion-label\n          >\n          <ion-input\n            type="text"\n            formControlName="username"\n            [class]="{\n              valid: fieldHasValidClass(\'username\'),\n              invalid: fieldHasInvalidClass(\'username\')\n            }"\n          ></ion-input>\n          <div class="danger" *ngIf="fieldHasInvalidClass(\'username\')">\n            <p *ngIf="form.get(\'username\').hasError(\'required\')">\n              This field is required\n            </p>\n            <p *ngIf="form.get(\'username\').hasError(\'userExists\')">\n              The user could not be found\n            </p>\n          </div>\n        </ion-item>\n        <button ion-button type="submit" block [disabled]="form.invalid">\n          <span *ngIf="!loading">Submit</span>\n          <ion-spinner *ngIf="loading"></ion-spinner>\n        </button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header> Repository list </ion-card-header>\n    <ion-card-content>\n      <ion-spinner *ngIf="loading"></ion-spinner>\n      <ion-list *ngIf="!loading">\n        <ion-item *ngFor="let repository of repositories">\n          <ion-list-header> {{ repository.full_name }}</ion-list-header>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/francisco/Repositories/JoinUpCodeChallenge/githubUserRepositoryBrowser/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_github_api_github_api__["a" /* GithubApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_github_api_github_api__["a" /* GithubApiProvider */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GithubApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GithubApiProvider = /** @class */ (function () {
    function GithubApiProvider(http) {
        this.http = http;
        this.url = "https://api.github.com";
        this.version = "v3";
        console.log("Hello GithubApiProvider Provider");
    }
    GithubApiProvider.prototype.getAcceptHeader = function () {
        return "application/vnd.github." + this.version + "+json";
    };
    GithubApiProvider.prototype.getRepositories = function (username) {
        return this.http.get(this.url + "/users/" + username + "/repos", {
            headers: {
                Accept: this.getAcceptHeader()
            }
        });
    };
    GithubApiProvider.prototype.getUser = function (username) {
        return this.http.get(this.url + "/users/" + username, {
            headers: {
                Accept: this.getAcceptHeader()
            }
        });
    };
    GithubApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GithubApiProvider);
    return GithubApiProvider;
}());

//# sourceMappingURL=github-api.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_github_api__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }), __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_github_api__["a" /* GithubApiProvider */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/francisco/Repositories/JoinUpCodeChallenge/githubUserRepositoryBrowser/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/francisco/Repositories/JoinUpCodeChallenge/githubUserRepositoryBrowser/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__github_api__ = __webpack_require__(240);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__github_api__["a"]; });

//# sourceMappingURL=index.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.js.map