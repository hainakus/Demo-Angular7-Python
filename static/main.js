(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");




var routes = [
    {
        path: 'list',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    },
    { path: '',
        redirectTo: '/list', pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AF500';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _faux_list_faux_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faux-list/faux-list.component */ "./src/app/faux-list/faux-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _fauxmodal_fauxmodal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fauxmodal/fauxmodal.component */ "./src/app/fauxmodal/fauxmodal.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _faux_list_faux_list_component__WEBPACK_IMPORTED_MODULE_7__["FauxListComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _fauxmodal_fauxmodal_component__WEBPACK_IMPORTED_MODULE_9__["FauxmodalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [{ provide: 'API', useValue: 'http://localhost:8088' }],
            entryComponents: [
                _fauxmodal_fauxmodal_component__WEBPACK_IMPORTED_MODULE_9__["FauxmodalComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-faux-list (selectCard)=\"getCard($event)\" ></app-faux-list>\n\n<ng-template #modal></ng-template>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fauxmodal_fauxmodal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fauxmodal/fauxmodal.component */ "./src/app/fauxmodal/fauxmodal.component.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(resolver, renderer2) {
        this.resolver = resolver;
        this.renderer2 = renderer2;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.createComponent = function (obj) {
        this.entry.clear();
        var factory = this.resolver.resolveComponentFactory(_fauxmodal_fauxmodal_component__WEBPACK_IMPORTED_MODULE_2__["FauxmodalComponent"]);
        this.componentRef = this.entry.createComponent(factory);
        this.componentRef.instance.object = obj;
        console.log(this.componentRef);
    };
    DashboardComponent.prototype.destroyComponent = function () {
        this.componentRef.destroy();
    };
    DashboardComponent.prototype.getCard = function (faux) {
        this.createComponent(faux);
        console.log(faux);
        setTimeout(function () {
            $("#" + faux.sample_id).modal('show');
        }, 300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], DashboardComponent.prototype, "entry", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/faux-api.service.ts":
/*!*************************************!*\
  !*** ./src/app/faux-api.service.ts ***!
  \*************************************/
/*! exports provided: FauxApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FauxApiService", function() { return FauxApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var FauxApiService = /** @class */ (function () {
    function FauxApiService(API, http) {
        this.API = API;
        this.http = http;
    }
    FauxApiService.prototype.fauxList = function () {
        return this.http.get(this.API + "/samples")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    FauxApiService.prototype.categoryList = function () {
        return this.http.get(this.API + "/categories")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    FauxApiService.prototype.updateFaux = function (obj) {
        return this.http.put(this.API + "/sample/" + obj.sample_id, obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    FauxApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    FauxApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('API')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FauxApiService);
    return FauxApiService;
}());



/***/ }),

/***/ "./src/app/faux-list/faux-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/faux-list/faux-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\"><img src=\"https://amyris.com/wp-content/themes/amyris/images/bp_amyris-logo-t2.png\" height=\"44px\" alt=\"Amyris\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n          <ul class=\"navbar-nav mx-auto\">\n              <li class=\"nav-item active\">\n                <h3 class=\"primary text-center\"> Faux Samples {{ selectedFauxFiles?.length }}</h3> \n              </li>  \n            </ul>\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item active\">\n                <a href=\"javascript:void(0)\" (click)=\"sortByFauxValue()\"><i class=\"material-icons\" [innerText]=\"sort ? 'swap_vert' : 'swap_vert_circle'\"></i></a>\n            </li>\n            <li class=\"nav-item active\">\n                <a href=\"javascript:void(0)\" (click)=\"toogleSidebar()\">\n                    <i class=\"material-icons\" > menu </i>\n                </a>   \n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n <div #sidebar id=\"wrapper\">\n\n    <!-- Sidebar -->\n    <div id=\"sidebar-wrapper\">\n        <ul class=\"sidebar-nav\">\n            <li class=\"sidebar-brand\">\n            </li>\n            <li>\n                <div class=\"range\">\n                    <input type=\"range\" name=\"range\" min=\"0.00\" max=\"0.99\" step=\"0.01\" value=\"0.50\"  [(ngModel)]=\"filterValue\" (ngModelChange)=\"filterByFauxValue($event)\">\n                </div>\n            </li>\n            <li>\n                <a href=\"javascript:void(0)\" (click)=\"filterByCategory('All')\">All Fauxes</a>\n            </li>\n            <li *ngFor=\"let cat of cats\">\n                <a href=\"javascript:void(0)\" (click)=\"filterByCategory(cat)\">{{ cat }} Faux</a>\n            </li>\n        </ul>\n    </div>\n    <!-- /#sidebar-wrapper -->\n\n    <!-- Page Content -->\n    <div id=\"page-content-wrapper\">\n        <div class=\"container-fluid listing\">  \n            <div class=\"col-lg-12 col-xs-12 order-md-1\" >\n                <div class=\"list fromRight col-12\" *ngFor=\"let item of selectedFauxFiles\">\n                    <div class=\"media p-3\"> \n                     <a href=\"javascript:void(0)\" (click)=\"deleteFaux(item)\"><i class=\"material-icons\">clear</i></a>   \n                    <div class=\"mr-3 mt-3 rounded-circle signal\" style=\"width:60px; height: 60px;\"><span>{{ getPercentage(item.fauxness) }}</span></div>\n                    <a href=\"javascript:void(0)\" class=\"media-body\" (click)=\"onFauxSelect(item.sample_id)\">\n                        <h4>{{ item.experiment_name }} <small> {{ item.category_guess }}</small></h4>\n                        <p>{{ item.filename }}</p>\n                    </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/faux-list/faux-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/faux-list/faux-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n.signal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #410080 !important; }\n.signal span {\n    color: white;\n    display: inline-block;\n    vertical-align: middle; }\n.list i {\n  color: #410080 !important; }\n.primary {\n  color: aliceblue; }\n.nav-item {\n  margin: 1rem; }\n.sidebar-nav li a {\n  color: #FFF;\n  text-transform: uppercase; }\ninput {\n  background: transparent; }\n.range {\n  margin-bottom: 25px;\n  position: relative; }\n.range input[type=range] {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    padding: 0;\n    width: 100%;\n    height: 22px;\n    cursor: pointer;\n    display: block; }\n.range input[type=range]:focus {\n      outline: none; }\n.range input[type=range][disabled] {\n      opacity: .3;\n      cursor: default; }\n.range .rangeslider {\n    position: relative;\n    height: 22px;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n.range .rangeslider:before {\n    box-sizing: border-box;\n    width: 100%;\n    height: 4px;\n    background: #e6e6e6;\n    border-radius: 100px;\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n.range input::-webkit-slider-runnable-track {\n    box-sizing: border-box;\n    width: 100%;\n    height: 4px;\n    background: #e6e6e6;\n    border-radius: 100px;\n    margin: 11px 0; }\n.range input::-moz-range-track {\n    box-sizing: border-box;\n    width: 100%;\n    height: 4px;\n    background: #e6e6e6;\n    border-radius: 100px;\n    margin: 11px 0; }\n.range input::-ms-track {\n    box-sizing: border-box;\n    width: 100%;\n    height: 4px;\n    background: #e6e6e6;\n    border-radius: 100px;\n    color: transparent;\n    padding: 11px 0;\n    background: transparent;\n    border-color: transparent; }\n.range input::-ms-fill-lower,\n  .range input::-ms-fill-upper {\n    box-sizing: border-box;\n    width: 100%;\n    height: 4px;\n    background: #e6e6e6;\n    border-radius: 100px; }\n.range input::-ms-fill-lower {\n    background: #60cd18; }\n.range .rangeslider-fill-lower {\n    background-color: #60cd18;\n    border-radius: 100px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 4px;\n    will-change: width; }\n.range input::-webkit-slider-thumb {\n    box-sizing: border-box;\n    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.5);\n    border: 6px solid #fff;\n    height: 24px;\n    width: 24px;\n    border-radius: 100px;\n    background: #333940;\n    cursor: pointer;\n    -webkit-appearance: none;\n            appearance: none;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    margin-top: 2px; }\n.range input::-moz-range-thumb {\n    box-sizing: border-box;\n    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.5);\n    border: 6px solid #fff;\n    height: 24px;\n    width: 24px;\n    border-radius: 100px;\n    background: #333940;\n    cursor: pointer; }\n.range input::-ms-thumb {\n    box-sizing: border-box;\n    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.5);\n    border: 6px solid #fff;\n    height: 24px;\n    width: 24px;\n    border-radius: 100px;\n    background: #333940;\n    cursor: pointer; }\n.range .rangeslider-thumb {\n    box-sizing: border-box;\n    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.5);\n    border: 6px solid #fff;\n    height: 24px;\n    width: 24px;\n    border-radius: 100px;\n    background: #333940;\n    cursor: pointer;\n    position: absolute;\n    touch-action: pan-x;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    will-change: left; }\n.range .range-output {\n    position: absolute;\n    left: 6px;\n    top: 6px;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    transition: -webkit-transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), -webkit-transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n.range .range-output .output {\n      display: block;\n      position: absolute;\n      height: 60px;\n      line-height: 60px;\n      min-width: 32px;\n      padding: 0 20px;\n      top: -26px;\n      -webkit-transform: translate(-50%, -100%);\n              transform: translate(-50%, -100%);\n      background: #383c42;\n      color: #fff;\n      border-radius: 100px;\n      white-space: nowrap;\n      font-weight: bold;\n      font-size: 1.2em;\n      text-align: center; }\n.range .range-output .output:before {\n        content: \"\";\n        position: absolute;\n        bottom: -8px;\n        left: 50%;\n        border: 10px solid #383c42;\n        border-bottom: none;\n        border-left-color: transparent;\n        border-right-color: transparent;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%); }\n.fixed-top, #sidebar-wrapper {\n  -webkit-backface-visibility: hidden; }\n.listing {\n  padding-top: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1aS9Eb3dubG9hZHMvZjUwMDBfYXBwL0FGNTAwL3NyYy9hcHAvZmF1eC1saXN0L2ZhdXgtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxzRUFBWTtBQUVaO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0NBTDJCLEVBQUE7QUFDL0I7SUFNUSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHNCQUFzQixFQUFBO0FBRzlCO0VBQ0MseUJBYjhCLEVBQUE7QUFlL0I7RUFDSSxnQkFBZ0IsRUFBQTtBQUVwQjtFQUNDLFlBQVksRUFBQTtBQUViO0VBQ0MsV0FBVztFQUNYLHlCQUF5QixFQUFBO0FBRTFCO0VBQ0MsdUJBQXVCLEVBQUE7QUE2QnhCO0VBQ0ksbUJBQW1CO0VBbUJ0QixrQkFBa0IsRUFBQTtBQXBCbkI7SUF3QkUsd0JBQWdCO09BQWhCLHFCQUFnQjtZQUFoQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBdkNzQjtJQXdDdEIsWUFuRHdCO0lBb0R4QixlQUFlO0lBQ2YsY0FBYyxFQUFBO0FBN0JoQjtNQWdDRyxhQUFhLEVBQUE7QUFoQ2hCO01BbUNHLFdBQVc7TUFDWCxlQUFlLEVBQUE7QUFwQ2xCO0lBMENFLGtCQUFrQjtJQUNsQixZQW5Fd0I7SUFvRXhCLGVBQWU7SUFDZix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUIsRUFBQTtBQTdDbkI7SUFHRSxzQkFBc0I7SUFDdEIsV0FqQnNCO0lBa0J0QixXQWpCc0I7SUFrQnRCLG1CQWhCd0I7SUFpQnhCLG9CQWxCd0I7SUE4RHhCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtBQXREN0I7SUFHRSxzQkFBc0I7SUFDdEIsV0FqQnNCO0lBa0J0QixXQWpCc0I7SUFrQnRCLG1CQWhCd0I7SUFpQnhCLG9CQWxCd0I7SUFxRXhCLGNBQWtDLEVBQUE7QUExRHBDO0lBR0Usc0JBQXNCO0lBQ3RCLFdBakJzQjtJQWtCdEIsV0FqQnNCO0lBa0J0QixtQkFoQndCO0lBaUJ4QixvQkFsQndCO0lBeUV4QixjQUFrQyxFQUFBO0FBOURwQztJQUdFLHNCQUFzQjtJQUN0QixXQWpCc0I7SUFrQnRCLFdBakJzQjtJQWtCdEIsbUJBaEJ3QjtJQWlCeEIsb0JBbEJ3QjtJQTZFeEIsa0JBQWtCO0lBQ2xCLGVBQW1DO0lBQ25DLHVCQUF1QjtJQUN2Qix5QkFBeUIsRUFBQTtBQXJFM0I7O0lBR0Usc0JBQXNCO0lBQ3RCLFdBakJzQjtJQWtCdEIsV0FqQnNCO0lBa0J0QixtQkFoQndCO0lBaUJ4QixvQkFsQndCLEVBQUE7QUFXMUI7SUE4RUUsbUJBdkYrQixFQUFBO0FBU2pDO0lBaUZFLHlCQTFGK0I7SUEyRi9CLG9CQTdGd0I7SUE4RnhCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixXQWxHc0I7SUFtR3RCLGtCQUFrQixFQUFBO0FBdkZwQjtJQVVFLHNCQUFzQjtJQUN0QiwyQ0E3QmtDO0lBOEJsQyxzQkExQjZCO0lBMkI3QixZQWxDdUI7SUFtQ3ZCLFdBbENzQjtJQW1DdEIsb0JBckN3QjtJQXNDeEIsbUJBdkNvQztJQXdDcEMsZUFBZTtJQTRFZix3QkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsZUFBbUMsRUFBQTtBQS9GckM7SUFVRSxzQkFBc0I7SUFDdEIsMkNBN0JrQztJQThCbEMsc0JBMUI2QjtJQTJCN0IsWUFsQ3VCO0lBbUN2QixXQWxDc0I7SUFtQ3RCLG9CQXJDd0I7SUFzQ3hCLG1CQXZDb0M7SUF3Q3BDLGVBQWUsRUFBQTtBQWpCakI7SUFVRSxzQkFBc0I7SUFDdEIsMkNBN0JrQztJQThCbEMsc0JBMUI2QjtJQTJCN0IsWUFsQ3VCO0lBbUN2QixXQWxDc0I7SUFtQ3RCLG9CQXJDd0I7SUFzQ3hCLG1CQXZDb0M7SUF3Q3BDLGVBQWUsRUFBQTtBQWpCakI7SUFVRSxzQkFBc0I7SUFDdEIsMkNBN0JrQztJQThCbEMsc0JBMUI2QjtJQTJCN0IsWUFsQ3VCO0lBbUN2QixXQWxDc0I7SUFtQ3RCLG9CQXJDd0I7SUFzQ3hCLG1CQXZDb0M7SUF3Q3BDLGVBQWU7SUF3RmYsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixpQkFBaUIsRUFBQTtBQTdHbkI7SUFrSEUsa0JBQWtCO0lBQ2xCLFNBQThEO0lBQzlELFFBQTZEO0lBQzdELDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsMEVBakpvRDtJQWlKcEQsa0VBakpvRDtJQWlKcEQsa0lBakpvRDtJQWtKcEQseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCLEVBQUE7QUF2SG5CO01BMEhHLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsWUFsSXVCO01BbUl2QixpQkFuSXVCO01Bb0l2QixlQW5JMEI7TUFvSTFCLGVBbkkwQjtNQW9JMUIsVUFBbUY7TUFDbkYseUNBQWlDO2NBQWpDLGlDQUFpQztNQUNqQyxtQkE1SnlCO01BNkp6QixXQUFXO01BQ1gsb0JBQW9CO01BQ3BCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBO0FBeElyQjtRQTJJSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFlBQXdDO1FBQ3hDLFNBQVM7UUFDVCwwQkF6S3dCO1FBMEt4QixtQkFBbUI7UUFDbkIsOEJBQThCO1FBQzlCLCtCQUErQjtRQUMvQixtQ0FBMkI7Z0JBQTNCLDJCQUEyQixFQUFBO0FBTS9CO0VBQ0MsbUNBQWtDLEVBQUE7QUFHbkM7RUFDQyxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZhdXgtbGlzdC9mYXV4LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTtcbiRtYWluLWNvbG9yIDojNDEwMDgwICFpbXBvcnRhbnQ7XG4uc2lnbmFse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICBzcGFue1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG59XG4ubGlzdCBpIHtcblx0Y29sb3I6ICRtYWluLWNvbG9yO1xufVxuLnByaW1hcnkge1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59XG4ubmF2LWl0ZW0ge1xuXHRtYXJnaW46IDFyZW07XG59XG4uc2lkZWJhci1uYXYgbGkgYSB7XG5cdGNvbG9yOiAjRkZGO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaW5wdXQge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiRlYXNlT3V0QmFjazogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMjc1KTtcbiRjb2xvci1yYW5nZS1vdXRwdXQ6ICMzODNjNDI7XG4kY29sb3ItaW5wdXQtcGxhY2Vob2xkZXI6ICNjM2M0YzY7XG4kaGVpZ2h0LXJhbmdlLWJvdW5kczogMjJweDtcbiRiYWNrZ3JvdW5kLWNvbG9yLXJhbmdlLXRodW1iOiAjMzMzOTQwO1xuJHJhZGl1cy1yYW5nZS10aHVtYjogMTAwcHg7XG4kaGVpZ2h0LXJhbmdlLXRodW1iOiAyNHB4O1xuJHdpZHRoLXJhbmdlLXRodW1iOiAyNHB4O1xuJHNpemUtcmFuZ2UtdGh1bWItc2hhZG93OiAyNXB4O1xuJGNvbG9yLXJhbmdlLXRodW1iLXNoYWRvdzogcmdiYSgjMDAwLCAuNSk7XG4kc2hhZG93LW9mZnNldC15LXJhbmdlLXRodW1iOiA0cHg7XG4kc2hhZG93LW9mZnNldC14LXJhbmdlLXRodW1iOiAwcHg7XG4kYm9yZGVyLXdpZHRoLXJhbmdlLXRodW1iOiA2cHg7XG4kYm9yZGVyLWNvbG9yLXJhbmdlLXRodW1iOiAjZmZmO1xuJHdpZHRoLXJhbmdlLXRyYWNrOiAxMDAlO1xuJGhlaWdodC1yYW5nZS10cmFjazogNHB4O1xuJHJhZGl1cy1yYW5nZS10cmFjazogMTAwcHg7XG4kZmlsbC1yYW5nZS10cmFjazogI2U2ZTZlNjtcbiRmaWxsLXJhbmdlLXRyYWNrLWFjdGl2ZTogIzYwY2QxODtcblxuLy9PdXRwdXRcbiRoZWlnaHQtcmFuZ2Utb3V0cHV0OiA2MHB4O1xuJG1pbi13aWR0aC1yYW5nZS1vdXRwdXQ6IDMycHg7XG4kcGFkZGluZy14LXJhbmdlLW91dHB1dDogMjBweDtcbiRzaXplLXJhbmdlLW91dHB1dC1hcnJvdzogMTBweDtcbiRvZmZzZXQteS1yYW5nZS1vdXRwdXQ6IDRweDtcblxuLnJhbmdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXHRAbWl4aW4gcmFuZ2UtdHJhY2soKSB7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHR3aWR0aDogJHdpZHRoLXJhbmdlLXRyYWNrO1xuXHRcdGhlaWdodDogJGhlaWdodC1yYW5nZS10cmFjaztcblx0XHRiYWNrZ3JvdW5kOiAkZmlsbC1yYW5nZS10cmFjaztcblx0XHRib3JkZXItcmFkaXVzOiAkcmFkaXVzLXJhbmdlLXRyYWNrO1xuXHR9XG5cdEBtaXhpbiByYW5nZS10aHVtYigpIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGJveC1zaGFkb3c6ICRzaGFkb3ctb2Zmc2V0LXgtcmFuZ2UtdGh1bWIgJHNoYWRvdy1vZmZzZXQteS1yYW5nZS10aHVtYiAkc2l6ZS1yYW5nZS10aHVtYi1zaGFkb3cgJGNvbG9yLXJhbmdlLXRodW1iLXNoYWRvdztcblx0XHRib3JkZXI6ICRib3JkZXItd2lkdGgtcmFuZ2UtdGh1bWIgc29saWQgJGJvcmRlci1jb2xvci1yYW5nZS10aHVtYjtcblx0XHRoZWlnaHQ6ICRoZWlnaHQtcmFuZ2UtdGh1bWI7XG5cdFx0d2lkdGg6ICR3aWR0aC1yYW5nZS10aHVtYjtcblx0XHRib3JkZXItcmFkaXVzOiAkcmFkaXVzLXJhbmdlLXRodW1iO1xuXHRcdGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLXJhbmdlLXRodW1iO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0fVxuXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHQvL05hdGl2ZVxuXHRpbnB1dFt0eXBlPXJhbmdlXSB7XG5cdFx0YXBwZWFyYW5jZTogbm9uZTtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdHdpZHRoOiAkd2lkdGgtcmFuZ2UtdHJhY2s7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0LXJhbmdlLWJvdW5kcztcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cblx0XHQmOmZvY3VzIHtcblx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0fVxuXHRcdCZbZGlzYWJsZWRdIHtcblx0XHRcdG9wYWNpdHk6IC4zO1xuXHRcdFx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRcdH1cblx0fVxuXG5cdC8vUGx1Z2luIHdyYXBwZXJcblx0LnJhbmdlc2xpZGVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0LXJhbmdlLWJvdW5kcztcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdH1cblxuXHQvL1RyYWNrXG5cdC5yYW5nZXNsaWRlcjpiZWZvcmUge1xuXHRcdEBpbmNsdWRlIHJhbmdlLXRyYWNrKCk7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiA1MCU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHR9XG5cdGlucHV0Ojotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaywge1xuXHRcdEBpbmNsdWRlIHJhbmdlLXRyYWNrKCk7XG5cdFx0bWFyZ2luOiAkaGVpZ2h0LXJhbmdlLWJvdW5kcyAvIDIgMDtcblx0fVxuXHRpbnB1dDo6LW1vei1yYW5nZS10cmFjayB7XG5cdFx0QGluY2x1ZGUgcmFuZ2UtdHJhY2soKTtcblx0XHRtYXJnaW46ICRoZWlnaHQtcmFuZ2UtYm91bmRzIC8gMiAwO1xuXHR9XG5cdGlucHV0OjotbXMtdHJhY2sge1xuXHRcdEBpbmNsdWRlIHJhbmdlLXRyYWNrKCk7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdHBhZGRpbmc6ICRoZWlnaHQtcmFuZ2UtYm91bmRzIC8gMiAwO1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cblxuXHQvL1RyYWNrIGZpbGxcblx0aW5wdXQ6Oi1tcy1maWxsLWxvd2VyLFxuXHRpbnB1dDo6LW1zLWZpbGwtdXBwZXIge1xuXHRcdEBpbmNsdWRlIHJhbmdlLXRyYWNrKCk7XG5cdH1cblx0aW5wdXQ6Oi1tcy1maWxsLWxvd2VyIHtcblx0XHRiYWNrZ3JvdW5kOiAkZmlsbC1yYW5nZS10cmFjay1hY3RpdmU7XG5cdH1cblx0LnJhbmdlc2xpZGVyLWZpbGwtbG93ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRmaWxsLXJhbmdlLXRyYWNrLWFjdGl2ZTtcblx0XHRib3JkZXItcmFkaXVzOiAkcmFkaXVzLXJhbmdlLXRyYWNrO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDUwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdFx0aGVpZ2h0OiAkaGVpZ2h0LXJhbmdlLXRyYWNrO1xuXHRcdHdpbGwtY2hhbmdlOiB3aWR0aDtcblx0fVxuXG5cdC8vVGh1bWJcblx0aW5wdXQ6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcblx0XHRAaW5jbHVkZSByYW5nZS10aHVtYigpO1xuXHRcdGFwcGVhcmFuY2U6IG5vbmU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRcdG1hcmdpbi10b3A6ICRoZWlnaHQtcmFuZ2UtdHJhY2sgLyAyO1xuXHR9XG5cdGlucHV0OjotbW96LXJhbmdlLXRodW1iIHtcblx0XHRAaW5jbHVkZSByYW5nZS10aHVtYigpO1xuXHR9XG5cdGlucHV0OjotbXMtdGh1bWIge1xuXHRcdEBpbmNsdWRlIHJhbmdlLXRodW1iKCk7XG5cdH1cblx0LnJhbmdlc2xpZGVyLXRodW1iIHtcblx0XHRAaW5jbHVkZSByYW5nZS10aHVtYigpO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3VjaC1hY3Rpb246IHBhbi14O1xuXHRcdHRvcDogNTAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0XHR3aWxsLWNoYW5nZTogbGVmdDtcblx0fVxuXG5cdC5yYW5nZS1vdXRwdXQge1xuXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6ICgkd2lkdGgtcmFuZ2UtdGh1bWIgLSAkYm9yZGVyLXdpZHRoLXJhbmdlLXRodW1iICogMikgLyAyO1xuXHRcdHRvcDogKCR3aWR0aC1yYW5nZS10aHVtYiAtICRib3JkZXItd2lkdGgtcmFuZ2UtdGh1bWIgKiAyKSAvIDI7XG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgJGVhc2VPdXRCYWNrO1xuXHRcdHVzZXItc2VsZWN0OiBub25lO1xuXG5cdFx0Lm91dHB1dCB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGhlaWdodDogJGhlaWdodC1yYW5nZS1vdXRwdXQ7XG5cdFx0XHRsaW5lLWhlaWdodDogJGhlaWdodC1yYW5nZS1vdXRwdXQ7XG5cdFx0XHRtaW4td2lkdGg6ICRtaW4td2lkdGgtcmFuZ2Utb3V0cHV0O1xuXHRcdFx0cGFkZGluZzogMCAkcGFkZGluZy14LXJhbmdlLW91dHB1dDtcblx0XHRcdHRvcDogLSAoJHdpZHRoLXJhbmdlLXRodW1iIC8gMikgLSAkb2Zmc2V0LXktcmFuZ2Utb3V0cHV0IC0gJHNpemUtcmFuZ2Utb3V0cHV0LWFycm93O1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuXHRcdFx0YmFja2dyb3VuZDogJGNvbG9yLXJhbmdlLW91dHB1dDtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRmb250LXNpemU6IDEuMmVtO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0Ym90dG9tOiAtICRzaXplLXJhbmdlLW91dHB1dC1hcnJvdyArIDJweDsgLy9TdWJ0cmFjdCAyIHRvIGdldCBzbGlnaHQgb3ZlcmxhcCB0aGF0IHJlbmRlcnMgbW9yZSBuaWNlbHlcblx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHRib3JkZXI6ICRzaXplLXJhbmdlLW91dHB1dC1hcnJvdyBzb2xpZCAkY29sb3ItcmFuZ2Utb3V0cHV0O1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiBub25lO1xuXHRcdFx0XHRib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmZpeGVkLXRvcCwgI3NpZGViYXItd3JhcHBlciB7XG5cdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47XG5cdH1cblxuLmxpc3Rpbmcge1xuXHRwYWRkaW5nLXRvcDogMnJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/faux-list/faux-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/faux-list/faux-list.component.ts ***!
  \**************************************************/
/*! exports provided: FauxListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FauxListComponent", function() { return FauxListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _faux_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../faux-api.service */ "./src/app/faux-api.service.ts");



var FauxListComponent = /** @class */ (function () {
    function FauxListComponent(ApiService) {
        this.ApiService = ApiService;
        this.fauxFiles = [];
        this.selectedFauxFiles = [];
        this.sort = false;
        this.toogle = false;
        this.cats = [];
        this.filterValue = 0.5;
        this.selectCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faux = {};
    }
    FauxListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ApiService.fauxList()
            .subscribe(function (faux) {
            _this.fauxFiles = Object.values(faux.samples);
            _this.fauxFiles = _this.sortFauxness(_this.fauxFiles);
            _this.fauxFiles = _this.showFaux(_this.fauxFiles);
            _this.selectedFauxFiles = _this.fauxFiles;
            _this.ApiService.categoryList()
                .subscribe(function (cats) {
                _this.cats = cats['categories'];
                _this.cats.forEach(function (key) {
                    _this.faux[key] = _this.filterCategoriesFiles(_this.selectedFauxFiles, key);
                });
            });
        });
    };
    FauxListComponent.prototype.sortByFauxValue = function () {
        this.sort = !this.sort;
        (this.sort) ? this.selectedFauxFiles.sort(function (a, b) { return parseFloat(a.fauxness) - parseFloat(b.fauxness); }) : this.selectedFauxFiles.sort(function (a, b) { return parseFloat(b.fauxness) - parseFloat(a.fauxness); });
    };
    FauxListComponent.prototype.filterByFauxValue = function (value) {
        var selected = [];
        if (this.cat != 'All' && this.cat != undefined) {
            selected = this.faux[this.cat].filter(function (file) {
                return file.fauxness >= value;
            });
            this.selectedFauxFiles = selected;
        }
        else {
            selected = this.fauxFiles.filter(function (file) {
                return file.fauxness >= value;
            });
            this.selectedFauxFiles = selected;
        }
    };
    FauxListComponent.prototype.toogleSidebar = function () {
        this.toogle = !this.toogle;
        (this.toogle) ? this.sidebar.nativeElement.classList.add("toggled") : this.sidebar.nativeElement.classList.remove("toggled");
    };
    FauxListComponent.prototype.filterByCategory = function (cat) {
        var _this = this;
        this.cat = cat;
        if (cat == 'All') {
            this.selectedFauxFiles = this.fauxFiles;
            this.filterValue = Math.max.apply(Math, this.selectedFauxFiles.map(function (item) { return _this.getPercentage(parseFloat(item.fauxness)); }));
        }
        else {
            this.selectedFauxFiles = this.filterCategoriesFiles(this.fauxFiles, cat);
            this.faux[cat] = this.selectedFauxFiles;
            this.filterValue = Math.max.apply(Math, this.faux[cat].map(function (item) { return _this.getPercentage(parseFloat(item.fauxness)); }));
        }
    };
    FauxListComponent.prototype.getPercentage = function (value) {
        return Math.round(value * 100) / 100;
    };
    FauxListComponent.prototype.onFauxSelect = function (id) {
        var fauxObj;
        fauxObj = this.selectedFauxFiles.find(function (faux) {
            return faux.sample_id === id;
        });
        this.selectCard.emit(fauxObj);
    };
    FauxListComponent.prototype.deleteFaux = function (obj) {
        obj.active = false;
        this.selectedFauxFiles = this.showFaux(this.selectedFauxFiles);
        console.log(obj);
    };
    FauxListComponent.prototype.filterCategoriesFiles = function (objArr, cat) {
        var categories = [];
        categories = objArr.filter(function (file) {
            if (file.category_guess == cat)
                return file;
        });
        categories = this.sortFauxness(categories);
        return categories;
    };
    FauxListComponent.prototype.sortFauxness = function (arr) {
        return arr.sort(function (a, b) { return parseFloat(b.fauxness) - parseFloat(a.fauxness); });
    };
    FauxListComponent.prototype.showFaux = function (arr) {
        var files = [];
        files = arr.filter(function (file) {
            if (file.active === true)
                return file;
        });
        return files;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sidebar"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FauxListComponent.prototype, "sidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FauxListComponent.prototype, "selectCard", void 0);
    FauxListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faux-list',
            template: __webpack_require__(/*! ./faux-list.component.html */ "./src/app/faux-list/faux-list.component.html"),
            styles: [__webpack_require__(/*! ./faux-list.component.scss */ "./src/app/faux-list/faux-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_faux_api_service__WEBPACK_IMPORTED_MODULE_2__["FauxApiService"]])
    ], FauxListComponent);
    return FauxListComponent;
}());



/***/ }),

/***/ "./src/app/fauxmodal/fauxmodal.component.html":
/*!****************************************************!*\
  !*** ./src/app/fauxmodal/fauxmodal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"modal fade\" id=\"{{ object.sample_id }}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ object.experiment_name }}</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #f=\"ngForm\" (ngSubmit)=\"updateFaux()\">\n                    <div class=\"form-group\">\n                      <label for=\"filename\">Filename</label>\n                      <input type=\"text\" class=\"form-control\" id=\"filename\" [(ngModel)]=\"object.filename\" name=\"filename\" required>\n                    </div>\n               \n                    <div class=\"form-group\">\n                      <label for=\"fauxness\">Fauxness</label>\n                      <input type=\"text\" class=\"form-control\" id=\"fauxness\" [(ngModel)]=\"object.fauxness\" name=\"fauxness\">\n                    </div>\n                    \n                    <div class=\"form-group\">\n                        <label for=\"experiment_name\">Expirement Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"experiment_name\" [(ngModel)]=\"object.experiment_name\" name=\"experiment_name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"moeda\">Category Guess</label>\n                        <select  class=\"form-control\" [(ngModel)]=\"object.category_guess\" name=\"category_guess\" id=\"category_guess\">\n                          <option *ngFor=\"let option of cats\" [value]=\"option\"\n                          >{{ option }}\n                          </option>\n                        </select>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n               \n                  </form>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n\n"

/***/ }),

/***/ "./src/app/fauxmodal/fauxmodal.component.scss":
/*!****************************************************!*\
  !*** ./src/app/fauxmodal/fauxmodal.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhdXhtb2RhbC9mYXV4bW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/fauxmodal/fauxmodal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/fauxmodal/fauxmodal.component.ts ***!
  \**************************************************/
/*! exports provided: FauxmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FauxmodalComponent", function() { return FauxmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_faux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/faux */ "./src/app/models/faux.ts");
/* harmony import */ var _faux_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../faux-api.service */ "./src/app/faux-api.service.ts");




var FauxmodalComponent = /** @class */ (function () {
    function FauxmodalComponent(ApiService) {
        this.ApiService = ApiService;
    }
    FauxmodalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ApiService.categoryList()
            .subscribe(function (cats) {
            _this.cats = cats['categories'];
        });
    };
    FauxmodalComponent.prototype.updateFaux = function () {
        this.ApiService.updateFaux(this.object)
            .subscribe(function (res) { return console.log(res); });
        $("#" + this.object.sample_id).modal('toggle');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_faux__WEBPACK_IMPORTED_MODULE_2__["Faux"])
    ], FauxmodalComponent.prototype, "object", void 0);
    FauxmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fauxmodal',
            template: __webpack_require__(/*! ./fauxmodal.component.html */ "./src/app/fauxmodal/fauxmodal.component.html"),
            styles: [__webpack_require__(/*! ./fauxmodal.component.scss */ "./src/app/fauxmodal/fauxmodal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_faux_api_service__WEBPACK_IMPORTED_MODULE_3__["FauxApiService"]])
    ], FauxmodalComponent);
    return FauxmodalComponent;
}());



/***/ }),

/***/ "./src/app/models/faux.ts":
/*!********************************!*\
  !*** ./src/app/models/faux.ts ***!
  \********************************/
/*! exports provided: Faux */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faux", function() { return Faux; });
var Faux = /** @class */ (function () {
    function Faux(active, category_guess, experiment_name, fauxness, filename, sample_id) {
        this.active = active;
        this.category_guess = category_guess;
        this.experiment_name = experiment_name;
        this.fauxness = fauxness;
        this.filename = filename;
        this.sample_id = sample_id;
    }
    return Faux;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rui/Downloads/f5000_app/AF500/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map