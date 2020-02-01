(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n\n\n<div class=\"rockmySoul\">\n<h1 class=\"fonto\">Wiener Metropol</h1>\n\n</div>\n\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"TiAmo\">\r\n\r\n<!-- <div class=\"row\">\r\n  <div class=\"col-6\">\r\n    <h3 class=\"fonto white\">Quiz</h3>\r\n  </div>\r\n</div> -->\r\n<br>\r\n<div id=\"quiz\">\r\n  <h2 class=\"fonto text-center font-weight-normal white\">{{quiz.name}}</h2>\r\n\r\n  <!-- <div class=\"white\" *ngIf=\"mode=='quiz' && quiz\"> -->\r\n    <br>\r\n    <div class=\"slaboFont\" *ngFor=\"let question of filteredQuestions;\">\r\n      <div class=\"badge badge-info\">Frage {{pager.index + 1}} von {{pager.count}}.</div>\r\n\r\n      <div class=\"container\" *ngIf=\"config.duration\" class=\"badge badge-info float-right\">Zeit: {{ellapsedTime}} / {{duration}}</div>\r\n      <h3 class=\"font-weight-normal\">{{pager.index + 1}}.\r\n        <span [innerHTML]=\"question.name\"></span>\r\n      </h3>\r\n      <div class=\"container row text-left options\">\r\n        <div class=\"col-6\" *ngFor=\"let option of question.options\">\r\n          <div class=\"option\">\r\n            <label class=\"font-weight-normal\" [attr.for]=\"option.id\">\r\n              <input id=\"{{option.id}}\" type=\"checkbox\" [(ngModel)]=\"option.selected\" (change)=\"onSelect(question, option);\" /> {{option.name}}\r\n            </label>\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr />\r\n\r\n    <div class=\"text-center slaboFont\">\r\n      <div class=\"somewhitespace\">\r\n      <!-- <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(0);\">Erste Frage</button> -->\r\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.index - 1);\">Vorherige Frage</button>\r\n\r\n      <button class=\"btn btn-default\" (click)=\"goTo(pager.index + 1);\">Nächste Frage</button>\r\n      <!-- <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.count - 1);\">Letzte Frage</button> -->\r\n    </div>\r\n\r\n      <br>\r\n      <br>\r\n      <div class=\"space\">\r\n      <a href=\"https://www.facebook.com/metropolwien/\" class=\"fa fa-facebook\"></a>\r\n      <a href=\"https://www.instagram.com/wienermetropol/\" class=\"fa fa-instagram\"></a>\r\n      <a href=\"https://www.wiener-metropol.at/\" class=\"fa fa-globe\"></a>\r\n    </div>\r\n    <br>\r\n    <button class=\"button button5\" (click)='best()'>hier gehts zu den Fotos</button>\r\n      <!--<pagination *ngIf=\"config.showPager\" direction-links=\"false\" total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>-->\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"result container\" *ngIf=\"mode=='result'\">\r\n    <h2 class=\"fonto\">Quiz Resultat</h2>\r\n    <div *ngFor=\"let question of quiz.questions; let index = index\">\r\n      <div class=\"result-question\">\r\n        <h5>{{index + 1}}. {{question.name}}</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\" *ngFor=\"let Option of question.options\">\r\n            <input id=\"{{Option.id}}\" type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"Option.selected\" /> {{Option.name}}\r\n          </div>\r\n        </div>\r\n        <div class=\"p-1 m-2 alert {{ isCorrect(question) == 'richtig'? 'alert-success': 'alert-danger'}}\">Ihre Antwort ist {{isCorrect(question)}}.</div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <h4 class=\"fonto\"> <a href=\"https://www.wiener-metropol.at/show_content.php?sid=22&Spielort_UniqueId=1@THINKSERVER.Metropol2011.dbo.&submit=Suchen\"> Hier </a> können Sie Ihr Ticket sichern!</h4>\r\n  </div>\r\n  <br>\r\n  <br>\r\n\r\n  <!-- <hr /> -->\r\n  <!-- <div *ngIf=\"mode!='result'\"> -->\r\n    <!-- <button class=\"btn btn-warning\" (click)=\"mode = 'quiz'\">Quiz</button> -->\r\n    <!-- <button class=\"btn btn-info\" (click)=\"mode = 'review'\">Auswertung</button>\r\n    <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Quiz auswerten</button>\r\n    <a class=\"btn btn-warning rounded-circle\" href=\"https://www.wiener-metropol.at/show_content.php?sid=22&Spielort_UniqueId=1@THINKSERVER.Metropol2011.dbo.&submit=Suchen\"> Tickets kaufen</a>\r\n  </div>\r\n</div>\r\n<!-- </div> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/results/results.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/results/results.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <!-- <div class=\"result\" *ngIf=\"mode=='result'\"> -->\n    <div class=\"resultat\">\n    <h2 class='fonto'>Fotos</h2>\n    <!-- <img class='img' src=\"\\assets\\img\\alle.jpg\"> -->\n\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src=\"\\assets\\img\\alle.jpg\" alt=\"First slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"\\assets\\img\\foto1.jpg\" alt=\"Second slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"\\assets\\img\\foto2.jpg\" alt=\"Third slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"\\assets\\img\\foto3.jpg\" alt=\"Fourth slide\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n\n    <!-- <div class='fonto' *ngFor=\"let question of quiz.questions; let index = index\">\n      <div class=\"result-question\">\n        <h5>{{index + 1}}. {{question.name}}</h5>\n        <div class=\"row\">\n          <div class=\"col-6\" *ngFor=\"let Option of question.options\">\n            <input id=\"{{Option.id}}\" type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"Option.selected\" /> {{Option.name}}\n          </div>\n        </div>\n        <div class=\"p-1 m-2 alert {{ isCorrect(question) == 'richtig'? 'alert-success': 'alert-danger'}}\">Ihre Antwort ist {{isCorrect(question)}}.</div>\n      </div>\n    </div> -->\n    <div class=\"orange\">\n    <h4 class=\"alert alert-info text-center\"> <a href=\"https://www.wiener-metropol.at/show_content.php?sid=22&Spielort_UniqueId=1@THINKSERVER.Metropol2011.dbo.&submit=Suchen\"> Hier </a> können Sie Ihr Ticket sichern!</h4>\n  <button class=\"slaboFont button\" (click)='best()'> Zurück zum Quiz</button>\n\n\n  <br>\n  <div class=\"space\">\n  <a href=\"https://www.facebook.com/metropolwien/\" class=\"fa fa-facebook\"></a>\n  <a href=\"https://www.instagram.com/wienermetropol/\" class=\"fa fa-instagram\"></a>\n  <a href=\"https://www.wiener-metropol.at/\" class=\"fa fa-globe\"></a>\n</div>\n<br>\n</div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var routes = [
    { path: 'results', component: _results_results_component__WEBPACK_IMPORTED_MODULE_4__["ResultsComponent"] },
    { path: '', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__["QuizComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Slabo+27px&display=swap');\r\n@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');\r\n@font-face {\r\n  font-family: Monton;\r\n  src: url('https://fonts.googleapis.com/css?family=Monoton&display=swap')\r\n}\r\n@font-face {\r\n  font-family: Slabo;\r\n  src: url('https://fonts.googleapis.com/css?family=Slabo+27px&display=swap')\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFO0FBQzNFLDhFQUE4RTtBQUM5RSxpR0FBaUc7QUFFakc7RUFDRSxtQkFBbUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9ub3RvbiZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TbGFibysyN3B4JmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRvbjtcclxuICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbm90b24mZGlzcGxheT1zd2FwJylcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFNsYWJvO1xyXG4gIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U2xhYm8rMjdweCZkaXNwbGF5PXN3YXAnKVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.rockmySoul{\r\nbackground-color: orange;\r\npadding: 10px;\r\n}\r\n\r\n.img {\r\n  width: 700px;\r\n}\r\n\r\n.fonto{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  font-family: 'Monoton', cursive;\r\n  font-size: 5rem;\r\n  margin-left: 70px;\r\n  margin-top: 30px;\r\n  align-self: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixhQUFhO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yb2NrbXlTb3Vse1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbnBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIHdpZHRoOiA3MDBweDtcclxufVxyXG5cclxuLmZvbnRve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1mYW1pbHk6ICdNb25vdG9uJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.quizNav = function () {
        console.log(this.quizNav);
        this.router.navigate['/quiz'];
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Option, Question, Quiz, QuizConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option */ "./src/app/models/option.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _option__WEBPACK_IMPORTED_MODULE_0__["Option"]; });

/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/models/question.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _question__WEBPACK_IMPORTED_MODULE_1__["Question"]; });

/* harmony import */ var _quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz */ "./src/app/models/quiz.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return _quiz__WEBPACK_IMPORTED_MODULE_2__["Quiz"]; });

/* harmony import */ var _quiz_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-config */ "./src/app/models/quiz-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuizConfig", function() { return _quiz_config__WEBPACK_IMPORTED_MODULE_3__["QuizConfig"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






/***/ }),

/***/ "./src/app/models/option.ts":
/*!**********************************!*\
  !*** ./src/app/models/option.ts ***!
  \**********************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Option = /** @class */ (function () {
    function Option(data) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAnswer = data.isAnswer;
    }
    return Option;
}());



/***/ }),

/***/ "./src/app/models/question.ts":
/*!************************************!*\
  !*** ./src/app/models/question.ts ***!
  \************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option */ "./src/app/models/option.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var Question = /** @class */ (function () {
    function Question(data) {
        var _this = this;
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(function (o) {
            _this.options.push(new _option__WEBPACK_IMPORTED_MODULE_0__["Option"](o));
        });
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/models/quiz-config.ts":
/*!***************************************!*\
  !*** ./src/app/models/quiz-config.ts ***!
  \***************************************/
/*! exports provided: QuizConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizConfig", function() { return QuizConfig; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var QuizConfig = /** @class */ (function () {
    function QuizConfig(data) {
        data = data || {};
        this.allowBack = data.allowBack;
        // this.allowReview = data.allowReview;
        this.autoMove = data.autoMove;
        this.duration = data.duration;
        this.pageSize = data.pageSize;
        this.requiredAll = data.requiredAll;
        this.richText = data.richText;
        this.shuffleQuestions = data.shuffleQuestions;
        this.shuffleOptions = data.shuffleOptions;
        this.showClock = data.showClock;
        this.showPager = data.showPager;
    }
    return QuizConfig;
}());



/***/ }),

/***/ "./src/app/models/quiz.ts":
/*!********************************!*\
  !*** ./src/app/models/quiz.ts ***!
  \********************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony import */ var _quiz_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-config */ "./src/app/models/quiz-config.ts");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/models/question.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var Quiz = /** @class */ (function () {
    function Quiz(data) {
        var _this = this;
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new _quiz_config__WEBPACK_IMPORTED_MODULE_0__["QuizConfig"](data.config);
            this.questions = [];
            data.questions.forEach(function (q) {
                _this.questions.push(new _question__WEBPACK_IMPORTED_MODULE_1__["Question"](q));
            });
        }
    }
    return Quiz;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".TiAmo{\r\nbackground-image: -webkit-gradient(linear, left top, left bottom, from(orange), to(red));\r\nbackground-image: linear-gradient(orange, red);\r\npadding: 30px;\r\ndisplay: -webkit-box;\r\ndisplay: flex;\r\n}\r\n\r\n.white {\r\n  background-color: orange;\r\n  margin-left: 50px;\r\n\r\n}\r\n\r\n.button5{\r\nborder-radius: 10px;\r\ncolor: white;\r\nbackground-color: rgb(13, 228, 110);\r\n\r\n}\r\n\r\n.slaboFont {\r\n  font-family: 'Slabo', monospace;\r\n}\r\n\r\n.badge {\r\nbackground-color: rgb(13, 228, 110);\r\nfont-family: 'Slabo', monospace;\r\n\r\n}\r\n\r\n.img {\r\n  width: 700px;\r\n}\r\n\r\n.space{\r\ndisplay: -webkit-box;\r\ndisplay: flex;\r\njustify-content: space-around;\r\n}\r\n\r\n.somewhitespace {\r\ndisplay: -webkit-box;\r\ndisplay: flex;\r\n-webkit-box-pack: space-evenly;\r\n        justify-content: space-evenly;\r\nmargin-right: 20px;\r\n}\r\n\r\n.fonto{\r\n  font-family: 'Monoton', cursive;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSx3RkFBOEM7QUFBOUMsOENBQThDO0FBQzlDLGFBQWE7QUFDYixvQkFBYTtBQUFiLGFBQWE7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7O0FBRW5COztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWixtQ0FBbUM7O0FBRW5DOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DLCtCQUErQjs7QUFFL0I7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBSUE7QUFDQSxvQkFBYTtBQUFiLGFBQWE7QUFDYiw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQSxvQkFBYTtBQUFiLGFBQWE7QUFDYiw4QkFBNkI7UUFBN0IsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9xdWl6L3F1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5UaUFtb3tcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KG9yYW5nZSwgcmVkKTtcclxucGFkZGluZzogMzBweDtcclxuZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLndoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblxyXG59XHJcblxyXG4uYnV0dG9uNXtcclxuYm9yZGVyLXJhZGl1czogMTBweDtcclxuY29sb3I6IHdoaXRlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDIyOCwgMTEwKTtcclxuXHJcbn1cclxuXHJcbi5zbGFib0ZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU2xhYm8nLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigxMywgMjI4LCAxMTApO1xyXG5mb250LWZhbWlseTogJ1NsYWJvJywgbW9ub3NwYWNlO1xyXG5cclxufVxyXG4uaW1nIHtcclxuICB3aWR0aDogNzAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnNwYWNle1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnNvbWV3aGl0ZXNwYWNlIHtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbm1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmZvbnRve1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9ub3RvbicsIGN1cnNpdmU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/index */ "./src/app/models/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var QuizComponent = /** @class */ (function () {
    function QuizComponent(quizService, router) {
        this.quizService = quizService;
        this.router = router;
        this.quiz = new _models_index__WEBPACK_IMPORTED_MODULE_2__["Quiz"](null);
        this.mode = 'quiz';
        this.config = {
            'allowBack': true,
            // 'allowReview': true,
            'autoMove': false,
            'duration': 300,
            'pageSize': 1,
            'requiredAll': false,
            'richText': false,
            'shuffleQuestions': true,
            'shuffleOptions': true,
            'showClock': true,
            'showPager': true,
            'theme': 'none'
        };
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
        this.timer = null;
        this.ellapsedTime = '00:00';
        this.duration = '';
    }
    QuizComponent.prototype.ngOnInit = function () {
        this.quizes = this.quizService.getAll();
        this.quizName = this.quizes[0].id;
        this.loadQuiz(this.quizName);
    };
    QuizComponent.prototype.loadQuiz = function (quizName) {
        var _this = this;
        this.quizService.get(quizName).subscribe(function (res) {
            _this.quiz = new _models_index__WEBPACK_IMPORTED_MODULE_2__["Quiz"](res);
            _this.pager.count = _this.quiz.questions.length;
            _this.startTime = new Date();
            _this.ellapsedTime = '00:00';
            _this.timer = setInterval(function () { _this.tick(); }, 1000);
            _this.duration = _this.parseTime(_this.config.duration);
        });
        this.mode = 'quiz';
    };
    QuizComponent.prototype.tick = function () {
        var now = new Date();
        var diff = (now.getTime() - this.startTime.getTime()) / 1000;
        if (diff >= this.config.duration) {
            this.onSubmit();
        }
        this.ellapsedTime = this.parseTime(diff);
    };
    QuizComponent.prototype.parseTime = function (totalSeconds) {
        var mins = Math.floor(totalSeconds / 60);
        var secs = Math.round(totalSeconds % 60);
        mins = (mins < 10 ? '0' : '') + mins;
        secs = (secs < 10 ? '0' : '') + secs;
        return mins + ":" + secs;
    };
    Object.defineProperty(QuizComponent.prototype, "filteredQuestions", {
        get: function () {
            return (this.quiz.questions) ?
                this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    QuizComponent.prototype.onSelect = function (question, option) {
        if (question.questionTypeId === 1) {
            question.options.forEach(function (x) { if (x.id !== option.id)
                x.selected = false; });
        }
        if (this.config.autoMove) { // das ist damit es von selbst weitergeht, wenn man automove angeschaltet hat
            this.goTo(this.pager.index + 1);
        }
    };
    QuizComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
        else if (this.pager.index === this.pager.count - 1) {
            this.onSubmit();
            this.mode = 'result';
            this.router.navigate['/results'];
        }
    };
    QuizComponent.prototype.isAnswered = function (question) {
        return question.options.find(function (x) { return x.selected; }) ? 'Beantwortet' : 'Nicht Beantwortet';
    };
    ;
    QuizComponent.prototype.isCorrect = function (question) {
        return question.options.every(function (x) { return x.selected === x.isAnswer; }) ? 'richtig' : 'falsch';
    };
    QuizComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.onSubmit);
        var answers = [];
        this.quiz.questions.forEach(function (x) { return answers.push({ 'quizId': _this.quiz.id, 'questionId': x.id, 'answered': x.answered }); });
        // Post your data to the server here. answers contains the questionId and the users' answer.
        this.mode = 'result';
        this.router.navigate['/results'];
    };
    QuizComponent.prototype.best = function () {
        this.router.navigate(['results']);
    };
    QuizComponent.ctorParameters = function () { return [
        { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz',
            template: __importDefault(__webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html")).default,
            providers: [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]],
            styles: [__importDefault(__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fonto{\r\n  font-family: 'Monoton', cursive;\r\n}\r\n\r\n.img {\r\n  width: 400px;\r\n}\r\n\r\n.space{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  }\r\n\r\n.orange{\r\n    background-color: orange;\r\n  }\r\n\r\n.slaboFont {\r\n    font-family: 'Slabo', monospace;\r\n  }\r\n\r\n.button{\r\n    border-radius: 10px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0I7O0FBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0FBRUE7SUFDRSwrQkFBK0I7RUFDakM7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udG97XHJcbiAgZm9udC1mYW1pbHk6ICdNb25vdG9uJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG5cclxuLnNwYWNle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG5cclxuICAub3Jhbmdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgLnNsYWJvRm9udCB7XHJcbiAgICBmb250LWZhbWlseTogJ1NsYWJvJywgbW9ub3NwYWNlO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ResultsComponent = /** @class */ (function () {
    // quizes: any[];
    // quiz: Quiz = new Quiz(null);
    // mode = 'result';
    // quizName: string;
    function ResultsComponent(quizService, router) {
        this.quizService = quizService;
        this.router = router;
    }
    // isCorrect(question: Question) {
    //   return question.options.every(x => x.selected === x.isAnswer) ? 'richtig' : 'falsch';
    // };
    ResultsComponent.prototype.best = function () {
        this.router.navigate(['']);
    };
    // isAnswered(question: Question) {
    //   return question.options.find(x => x.selected) ? 'Beantwortet' : 'Nicht Beantwortet';
    // };
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent.ctorParameters = function () { return [
        { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __importDefault(__webpack_require__(/*! raw-loader!./results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/results/results.component.html")).default,
            providers: [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]],
            styles: [__importDefault(__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/services/helper.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/helper.service.ts ***!
  \********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HelperService = /** @class */ (function () {
    function HelperService() {
    }
    HelperService.toBool = function (val) {
        if (val === undefined || val === null || val === '' || val === 'false' || val === 'False') {
            return false;
        }
        else {
            return true;
        }
    };
    HelperService.shuffle = function (array) {
        var currentIndex = array.length, temp, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array;
    };
    HelperService.extend = function (out) {
        out = out || {};
        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i]) {
                continue;
            }
            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    out[key] = arguments[i][key];
                }
            }
        }
        return out;
    };
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/services/quiz.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/quiz.service.ts ***!
  \******************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.get = function (url) {
        return this.http.get(url);
    };
    QuizService.prototype.getAll = function () {
        return [
            { id: 'data/javascript.json', name: 'ROCK MY SOUL' },
        ];
    };
    QuizService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    QuizService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\flore\Desktop\metropol\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map