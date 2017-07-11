webpackJsonp([1,4],{

/***/ 342:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 342;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(452);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/ahmed/Desktop/loginapp/client/src/main.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(610),
            styles: [__webpack_require__(608)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/ahmed/Desktop/loginapp/client/src/app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(453);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/ahmed/Desktop/loginapp/client/src/app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(611),
            styles: [__webpack_require__(609)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=C:/Users/ahmed/Desktop/loginapp/client/src/login.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/ahmed/Desktop/loginapp/client/src/environment.js.map

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "h1{\r\n  font-family: serif;\r\n  color: white;\r\n\r\n}\r\n#header{\r\n  margin-top: 30%;\r\n}\r\n#btn-fblogin{\r\n  background-color: #3B5998;\r\n}\r\n#btn-twlogin{\r\n     background-color: #1DA1F2;\r\n}\r\n#btn-lilogin{\r\n  background-color: #0077B5;\r\n}\r\n/* Shared */\r\n.loginBtn {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  /* width: 13em;  - apply for fixed size */\r\n  margin: 0.2em;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  font-size: 16px;\r\n  color: #FFF;\r\n}\r\n.loginBtn:before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n.loginBtn:active {\r\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n}\r\n\r\n\r\n/* Facebook */\r\n.loginBtn--facebook {\r\n  margin-top: 10%;\r\n  background-color: #4C69BA;\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n.loginBtn--facebook:before {\r\n\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--facebook:hover,\r\n.loginBtn--facebook:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n\r\n\r\n/* Google */\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #DD4B39;\r\n}\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('src/app/login/images/icon_google.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}\r\n/* linkedin */\r\n.loginBtn--linkedin {\r\n  margin-bottom: 10%;\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #0077B5;\r\n}\r\n.loginBtn--linkedin:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('src/app/login/images/linkedin.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--linkedin:hover,\r\n/*.loginBtn--linkedin:focus {\r\n  background: #0077B5;\r\n}*/\r\n.loginBtn--linkedin:focus {\r\n  background-color: #0080c4;\r\n  background-image: linear-gradient(#0080c4, #0080c4);\r\n}\r\n#frame{\r\n  /*border: 1px solid;*/\r\n  vertical-align: middle;\r\n  /*width: 60%;\r\n  height: 60%;*/\r\n  /*align-items: center;\r\n  align-items: center;\r\n  align-self: center;*/\r\n  /*text-align: center;*/\r\n\r\n\r\n  /*height: 100%;*/\r\n}\r\ntable{\r\n  /*left:100%;*/\r\n  display: inline-block;\r\n     vertical-align: middle;\r\n     text-align: center;\r\n\r\n\r\n}\r\ndiv{\r\n  /*margin-top:200px;\r\n  margin-left:380px;*/\r\n   /*width: 50%;\r\n   top: 50%;\r\n   left: 25%;\r\n   padding: 10px;\r\n   Display: Inline-Block;\r\n   text-align:center;*/\r\n   /*position: relative;*/\r\n  top: 50%;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n   Display: table;\r\n  /*transform: translateY(-50%);*/\r\n}\r\n"

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "<!-- <h1>\n  {{title}}\n</h1> -->\n<!-- <app-tab></app-tab> -->\n<app-login></app-login>\n"

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n</head>\r\n<!-- <title>Login page</title> -->\r\n\r\n<!-- <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> -->\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n\r\n\r\n\r\n  <div align=\"center\" id='frame' class=\" mainbox col-md-6 col-md-offset-3  col-sm-offset-2\">\r\n      <h1 id=\"header\" align=\"center\" class=\"col-sm-12\">Log in with an account</h1>\r\n    <!-- <button id=\"Facebook\" type=\"button\" class=\"btn btn-secondary btn-lg btn-block block center\"><a href=\"https://www.w3schools.com/html/\">Log in with Facebook</a></button>\r\n    <button id=\"Linkedin\"type=\"button\" class=\"btn btn-secondary btn-lg btn-block \">Log in with Linkedin</button>\r\n    <button id=\"Twitter\" type=\"button\" class=\"btn btn-secondary btn-lg btn-block \">Log in with Twitter</button> -->\r\n    <!-- <a id=\"btn-fblogin\" href=\"#\" class=\"btn btn-primary btn-lg btn-block\">Login with Facebook</a>\r\n    <a id=\"btn-twlogin\" href=\"#\" class=\"btn btn-primary btn-lg btn-block\">Login with Twitter</a>\r\n    <a id=\"btn-lilogin\" href=\"#\" class=\"btn btn-primary btn-lg btn-block\">Login with Linkedin</a> -->\r\n  <table>\r\n    <tr>\r\n      <a href=\"/auth/facebook\" class=\"loginBtn loginBtn--facebook btn btn-default trial btn-responsive \">\r\n      Login with Facebook\r\n    </a>\r\n    </tr>\r\n  <tr>\r\n    <a href=\"/auth/google\"  class=\"loginBtn loginBtn--google btn btn-default trial btn-responsive\">\r\n    Login with Google\r\n  </a>\r\n  </tr>\r\n    <tr>\r\n      <a href=\"/auth/linkedin\"  class=\"loginBtn loginBtn--linkedin btn btn-default trial btn-responsive\">\r\n      Login with Linkedin\r\n    </a>\r\n    </tr>\r\n  <!-- <tr > -->\r\n\r\n  <!-- </tr> -->\r\n  </table>\r\n  <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85% \">\r\n    <p >\r\n      Don't have an account!\r\n    </p>\r\n    <a class=\"col-sm-12\" style=\"color:#FF0000\" href=\"#\" onClick=\"$('#loginbox').hide(); $('#signupbox').show()\">Sign Up Here  </a>\r\n  </div>\r\n\r\n  <!-- <div class=\"form-group\"> -->\r\n    <!-- <div class=\"col-md-12 control\"> -->\r\n    <!-- </div> -->\r\n  <!-- </div> -->\r\n  </div>\r\n"

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

},[624]);
//# sourceMappingURL=main.bundle.map