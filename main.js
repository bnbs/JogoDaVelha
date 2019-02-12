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
/* harmony import */ var _components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tic-tac-toe/tic-tac-toe.component */ "./src/app/components/tic-tac-toe/tic-tac-toe.component.ts");




var routes = [
    { path: '', component: _components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_3__["TicTacToeComponent"] },
    { path: '**', redirectTo: '' }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
        this.title = 'JogoDaVelha';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_select_hero_select_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/select-hero/select-hero.component */ "./src/app/components/select-hero/select-hero.component.ts");
/* harmony import */ var _components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tic-tac-toe/tic-tac-toe.component */ "./src/app/components/tic-tac-toe/tic-tac-toe.component.ts");
/* harmony import */ var _components_ui_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ui/search-input/search-input.component */ "./src/app/components/ui/search-input/search-input.component.ts");
/* harmony import */ var _components_game_panel_hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/game-panel/hero-card/hero-card.component */ "./src/app/components/game-panel/hero-card/hero-card.component.ts");
/* harmony import */ var _components_game_panel_game_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/game-panel/game-panel.component */ "./src/app/components/game-panel/game-panel.component.ts");
/* harmony import */ var _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/game-board/game-board.component */ "./src/app/components/game-board/game-board.component.ts");
/* harmony import */ var _components_game_board_board_cell_board_cell_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/game-board/board-cell/board-cell.component */ "./src/app/components/game-board/board-cell/board-cell.component.ts");
/* harmony import */ var _components_game_panel_scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/game-panel/scoreboard/scoreboard.component */ "./src/app/components/game-panel/scoreboard/scoreboard.component.ts");
/* harmony import */ var _interceptor_http_config_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interceptor/http-config.interceptor */ "./src/app/interceptor/http-config.interceptor.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_select_hero_select_hero_component__WEBPACK_IMPORTED_MODULE_7__["SelectHeroComponent"],
                _components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_8__["TicTacToeComponent"],
                _components_ui_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_9__["SearchInputComponent"],
                _components_game_panel_hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_10__["HeroCardComponent"],
                _components_game_panel_game_panel_component__WEBPACK_IMPORTED_MODULE_11__["GamePanelComponent"],
                _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_12__["GameBoardComponent"],
                _components_game_board_board_cell_board_cell_component__WEBPACK_IMPORTED_MODULE_13__["BoardCellComponent"],
                _components_game_panel_scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_14__["ScoreboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptor_http_config_interceptor__WEBPACK_IMPORTED_MODULE_15__["HttpConfigInterceptor"], multi: true }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/game-board/board-cell/board-cell.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/game-board/board-cell/board-cell.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell-border {\r\n    border: 8px solid white;\r\n}\r\n\r\nspan {\r\n    font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\r\n    font-weight: 900;\r\n    font-size: 5rem;\r\n    color: aliceblue;\r\n    text-shadow: 0px 0px 10px rgba(0,0,0,0.7);\r\n}\r\n\r\n@media (max-width: 576px) { \r\n    .square-size {\r\n        height: 100px;\r\n        width: 100px;\r\n    }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .cell-border {\r\n        border: 4px solid white;\r\n    }\r\n}\r\n\r\n@media (min-width: 576px) { \r\n    .square-size {\r\n        height: 150px;\r\n        width: 150px;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) { \r\n    .square-size {\r\n        height: 160px;\r\n        width: 160px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) { \r\n    .square-size {\r\n        height: 180px;\r\n        width: 180px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWJvYXJkL2JvYXJkLWNlbGwvYm9hcmQtY2VsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbURBQW1EO0lBQ25ELGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtYm9hcmQvYm9hcmQtY2VsbC9ib2FyZC1jZWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VsbC1ib3JkZXIge1xyXG4gICAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBcIkNvbWljIFNhbnNcIiwgY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkgeyBcclxuICAgIC5zcXVhcmUtc2l6ZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNlbGwtYm9yZGVyIHtcclxuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7IFxyXG4gICAgLnNxdWFyZS1zaXplIHtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgLnNxdWFyZS1zaXplIHtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyBcclxuICAgIC5zcXVhcmUtc2l6ZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/game-board/board-cell/board-cell.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/game-board/board-cell/board-cell.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center cell-border d-flex justify-content-center align-items-center square-size\" [ngClass]=\"{\r\n    'border-top-0': cellPosition.charAt(0) === '0', \r\n    'border-bottom-0': cellPosition.charAt(0) === '2',\r\n    'border-left-0': cellPosition.charAt(1) === '0', \r\n    'border-right-0': cellPosition.charAt(1) === '2' \r\n  }\">\r\n  <span class=\"m-0\">{{cellMark}}</span>  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/game-board/board-cell/board-cell.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/game-board/board-cell/board-cell.component.ts ***!
  \**************************************************************************/
/*! exports provided: BoardCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardCellComponent", function() { return BoardCellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoardCellComponent = /** @class */ (function () {
    function BoardCellComponent() {
    }
    BoardCellComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoardCellComponent.prototype, "cellMark", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoardCellComponent.prototype, "cellPosition", void 0);
    BoardCellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-cell',
            template: __webpack_require__(/*! ./board-cell.component.html */ "./src/app/components/game-board/board-cell/board-cell.component.html"),
            styles: [__webpack_require__(/*! ./board-cell.component.css */ "./src/app/components/game-board/board-cell/board-cell.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoardCellComponent);
    return BoardCellComponent;
}());



/***/ }),

/***/ "./src/app/components/game-board/game-board.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/game-board/game-board.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1100px){\r\n    .your-turn {\r\n        display: none;\r\n    }\r\n    .col-lg-6 {\r\n        width: 100%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWJvYXJkL2dhbWUtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtYm9hcmQvZ2FtZS1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCl7XHJcbiAgICAueW91ci10dXJuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNvbC1sZy02IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/game-board/game-board.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/game-board/game-board.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0 align-items-center\">\r\n  <div class=\"col-lg-3 your-turn\">\r\n    <h1 class=\"text-center text-white\" *ngIf=\"playerTurn === 1\">Sua vez!</h1>\r\n  </div>\r\n  <div class=\"col-lg-6 col-md-12 m-auto\">\r\n    <div class=\"d-flex align-items-center flex-column mx-auto my-3\">\r\n      <div class=\"row justify-content-center\">\r\n        <app-board-cell [cellMark]=\"gameBoard.get('00')\" (click)=\"onSelectBoardCell('00')\" cellPosition=\"00\">\r\n        </app-board-cell>\r\n        <app-board-cell [cellMark]=\"gameBoard.get('01')\" (click)=\"onSelectBoardCell('01')\" cellPosition=\"01\">\r\n        </app-board-cell>\r\n        <app-board-cell [cellMark]=\"gameBoard.get('02')\" (click)=\"onSelectBoardCell('02')\" cellPosition=\"02\">\r\n        </app-board-cell>\r\n      </div>\r\n      <div class=\"row justify-content-center\">\r\n        <app-board-cell [cellMark]=\"gameBoard.get('10')\" (click)=\"onSelectBoardCell('10')\" cellPosition=\"10\">\r\n        </app-board-cell>\r\n        <app-board-cell [cellMark]=\"gameBoard.get('11')\" (click)=\"onSelectBoardCell('11')\" cellPosition=\"11\">\r\n        </app-board-cell>\r\n        <app-board-cell [cellMark]=\"gameBoard.get('12')\" (click)=\"onSelectBoardCell('12')\" cellPosition=\"12\">\r\n        </app-board-cell>\r\n      </div>\r\n      <div class=\"row justify-content-center\">\r\n        <app-board-cell [cellMark]=\"gameBoard.get('20')\" (click)=\"onSelectBoardCell('20')\" cellPosition=\"20\">\r\n        </app-board-cell>\r\n        <app-board-cell [cellMark]=\"gameBoard.get('21')\" (click)=\"onSelectBoardCell('21')\" cellPosition=\"21\">\r\n        </app-board-cell>\r\n        <app-board-cell [cellMark]=\"gameBoard.get('22')\" (click)=\"onSelectBoardCell('22')\" cellPosition=\"22\">\r\n        </app-board-cell>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-3 your-turn\">\r\n    <h1 class=\"text-center text-white\" *ngIf=\"playerTurn === 2\">Sua vez!</h1>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/game-board/game-board.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/game-board/game-board.component.ts ***!
  \***************************************************************/
/*! exports provided: GameBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBoardComponent", function() { return GameBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tic_tac_toe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tic-tac-toe.service */ "./src/app/services/tic-tac-toe.service.ts");



var GameBoardComponent = /** @class */ (function () {
    function GameBoardComponent(tictTacToeService) {
        this.tictTacToeService = tictTacToeService;
    }
    GameBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tictTacToeService.getGameBoard().subscribe(function (board) {
            _this.gameBoard = board;
        });
        this.tictTacToeService.getPlayerTurn().subscribe(function (player) {
            _this.playerTurn = player;
        });
    };
    GameBoardComponent.prototype.onSelectBoardCell = function (position) {
        this.tictTacToeService.setValueToGameBoard(position);
    };
    GameBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-board',
            template: __webpack_require__(/*! ./game-board.component.html */ "./src/app/components/game-board/game-board.component.html"),
            styles: [__webpack_require__(/*! ./game-board.component.css */ "./src/app/components/game-board/game-board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tic_tac_toe_service__WEBPACK_IMPORTED_MODULE_2__["TicTacToeService"]])
    ], GameBoardComponent);
    return GameBoardComponent;
}());



/***/ }),

/***/ "./src/app/components/game-panel/game-panel.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/game-panel/game-panel.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 768px) { \r\n    #game-panel {\r\n        align-items: flex-start !important;       \r\n    }\r\n    #wrapper {\r\n        padding: 0 !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLXBhbmVsL2dhbWUtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksa0NBQWtDO0lBQ3RDO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1wYW5lbC9nYW1lLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAjZ2FtZS1wYW5lbCB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgICAgICAgXHJcbiAgICB9XHJcbiAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/game-panel/game-panel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/game-panel/game-panel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center justify-content-space-evenly flex-wrap mt-2\" id=\"game-panel\">\r\n  <div class=\"col-5 my-2\">\r\n    <app-hero-card [hero]=\"heroes ? heroes[0] : undefined\" player=\"1\" [firstToPlay]=\"+firstToPlay === 1\" [myTurn]=\"playerTurn === 1\"></app-hero-card>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <app-scoreboard></app-scoreboard>\r\n  </div>\r\n  <div class=\"col-5 my-2\">\r\n    <app-hero-card [hero]=\"heroes ? heroes[1] : undefined\" player=\"2\" [firstToPlay]=\"+firstToPlay === 2\" [myTurn]=\"playerTurn === 2\"></app-hero-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/game-panel/game-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/game-panel/game-panel.component.ts ***!
  \***************************************************************/
/*! exports provided: GamePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePanelComponent", function() { return GamePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tic_tac_toe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tic-tac-toe.service */ "./src/app/services/tic-tac-toe.service.ts");



var GamePanelComponent = /** @class */ (function () {
    function GamePanelComponent(ticTacToeService) {
        this.ticTacToeService = ticTacToeService;
    }
    GamePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ticTacToeService.getPlayerTurn().subscribe(function (player) {
            _this.playerTurn = player;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GamePanelComponent.prototype, "heroes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GamePanelComponent.prototype, "firstToPlay", void 0);
    GamePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-panel',
            template: __webpack_require__(/*! ./game-panel.component.html */ "./src/app/components/game-panel/game-panel.component.html"),
            styles: [__webpack_require__(/*! ./game-panel.component.css */ "./src/app/components/game-panel/game-panel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tic_tac_toe_service__WEBPACK_IMPORTED_MODULE_2__["TicTacToeService"]])
    ], GamePanelComponent);
    return GamePanelComponent;
}());



/***/ }),

/***/ "./src/app/components/game-panel/hero-card/hero-card.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/game-panel/hero-card/hero-card.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 160px;\r\n  width: 160px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  box-shadow: 0px 0px 20px 4px rgba(255, 255, 255, 0.8);\r\n}\r\n\r\nh2 {\r\n  max-height: 72px;\r\n}\r\n\r\n.border {\r\n  border: 4px solid white !important;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  #hero-card {\r\n    align-items: center;\r\n    flex-flow: column;\r\n  }\r\n\r\n  #hero-card.flex-row-reverse {\r\n    flex-direction: column !important;\r\n  }\r\n\r\n  #hero-info {\r\n    flex-flow: row !important;\r\n    margin: 0 !important;\r\n  }\r\n\r\n  img {\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 1.5rem;\r\n    max-height: 62px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  h1 {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    50% { border-color: black; };\r\n}\r\n\r\n@keyframes blink {\r\n    50% { border-color: black; };\r\n}\r\n\r\n.player-turn-animation {\r\n    -webkit-animation: blink 1s linear infinite;\r\n            animation: blink 1s linear infinite;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLXBhbmVsL2hlcm8tY2FyZC9oZXJvLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7SUFDSSxNQUFNLG1CQUFtQixFQUFFLENBQUE7QUFDL0I7O0FBRkE7SUFDSSxNQUFNLG1CQUFtQixFQUFFLENBQUE7QUFDL0I7O0FBRUE7SUFDSSwyQ0FBbUM7WUFBbkMsbUNBQW1DO0FBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lLXBhbmVsL2hlcm8tY2FyZC9oZXJvLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXgtaGVpZ2h0OiA3MnB4O1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAjaGVyby1jYXJkIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICNoZXJvLWNhcmQuZmxleC1yb3ctcmV2ZXJzZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjaGVyby1pbmZvIHtcclxuICAgIGZsZXgtZmxvdzogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXgtaGVpZ2h0OiA2MnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIDUwJSB7IGJvcmRlci1jb2xvcjogYmxhY2s7IH07XHJcbn1cclxuXHJcbi5wbGF5ZXItdHVybi1hbmltYXRpb24ge1xyXG4gICAgYW5pbWF0aW9uOiBibGluayAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/game-panel/hero-card/hero-card.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/game-panel/hero-card/hero-card.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-start m-3\" [ngClass]=\"{'flex-row-reverse': +player === 2}\" id=\"hero-card\">\r\n  <img [src]=\"hero ? hero.thumbnail : defaultThumbnail\" class=\"rounded-circle border my-2\" [ngClass]=\"{'player-turn-animation': myTurn}\"/>\r\n  <div class=\"d-flex flex-column justify-content-between align-items-center\" [ngClass]=\"{'ml-3': +player === 1, 'mr-3': +player === 2}\" id=\"hero-info\">\r\n    <h2 class=\"text-white font-weight-bold text-center my-2\">{{hero?.name}}</h2>\r\n    <h1 class=\"font-weight-bold text-white\" id=\"first-to-play\">{{firstToPlay? 'X' : 'O'}}</h1>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/game-panel/hero-card/hero-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/game-panel/hero-card/hero-card.component.ts ***!
  \************************************************************************/
/*! exports provided: HeroCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroCardComponent", function() { return HeroCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeroCardComponent = /** @class */ (function () {
    function HeroCardComponent() {
        this.defaultThumbnail = 'assets/images/default_hero_thumbnail.png';
    }
    HeroCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeroCardComponent.prototype, "hero", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], HeroCardComponent.prototype, "myTurn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], HeroCardComponent.prototype, "firstToPlay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HeroCardComponent.prototype, "player", void 0);
    HeroCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero-card',
            template: __webpack_require__(/*! ./hero-card.component.html */ "./src/app/components/game-panel/hero-card/hero-card.component.html"),
            styles: [__webpack_require__(/*! ./hero-card.component.css */ "./src/app/components/game-panel/hero-card/hero-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroCardComponent);
    return HeroCardComponent;
}());



/***/ }),

/***/ "./src/app/components/game-panel/scoreboard/scoreboard.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/game-panel/scoreboard/scoreboard.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\r\n    border: 2px solid white !important;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .player {\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLXBhbmVsL3Njb3JlYm9hcmQvc2NvcmVib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtcGFuZWwvc2NvcmVib2FyZC9zY29yZWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLnBsYXllciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/game-panel/scoreboard/scoreboard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/game-panel/scoreboard/scoreboard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-stretch\">\r\n  <div class=\"d-flex flex-column align-items-center p-2 border\" *ngFor=\"let userScore of score; index as i\">\r\n    <h2 class=\"text-white font-weight-bold\">{{userScore}}</h2>\r\n    <h5 class=\"text-white text-center player\">Player {{i + 1}} </h5>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/game-panel/scoreboard/scoreboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/game-panel/scoreboard/scoreboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScoreboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreboardComponent", function() { return ScoreboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tic_tac_toe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/tic-tac-toe.service */ "./src/app/services/tic-tac-toe.service.ts");



var ScoreboardComponent = /** @class */ (function () {
    function ScoreboardComponent(ticTacToeService) {
        this.ticTacToeService = ticTacToeService;
    }
    ScoreboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ticTacToeService.getScore().subscribe(function (result) {
            _this.score = result.slice();
        });
    };
    ScoreboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scoreboard',
            template: __webpack_require__(/*! ./scoreboard.component.html */ "./src/app/components/game-panel/scoreboard/scoreboard.component.html"),
            styles: [__webpack_require__(/*! ./scoreboard.component.css */ "./src/app/components/game-panel/scoreboard/scoreboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tic_tac_toe_service__WEBPACK_IMPORTED_MODULE_2__["TicTacToeService"]])
    ], ScoreboardComponent);
    return ScoreboardComponent;
}());



/***/ }),

/***/ "./src/app/components/select-hero/select-hero.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/select-hero/select-hero.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transform-character-1 {\r\n    -webkit-clip-path: polygon(0 18%, 70% 18%, 100% 50%, 70% 82%, 0 82%);\r\n    clip-path: polygon(0 18%, 70% 18%, 100% 50%, 70% 82%, 0 82%);\r\n    float: left;\r\n}\r\n\r\n.transform-character-2 {\r\n    -webkit-clip-path: polygon(30% 18%, 100% 18%, 100% 82%, 30% 82%, 0 50%);\r\n    clip-path: polygon(30% 18%, 100% 18%, 100% 82%, 30% 82%, 0 50%);\r\n    float: right;\r\n}\r\n\r\n.transform-character-1,\r\n.transform-character-2 {\r\n    height: 500px;\r\n    width: 700px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.transform-out{    \r\n  -webkit-filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.5));    \r\n          filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.5));\r\n}\r\n\r\n.background{\r\n    background-image: url('background-light.png');\r\n    background-size: cover;\r\n}\r\n\r\n#start-button {\r\n    box-shadow: 0px 0px 10px rgba(255,255,255,1);\r\n    text-shadow: 0px 0px 10px rgba(255,255,255,1);\r\n}\r\n\r\n#start-button:hover {\r\n    color: #FB240D !important;\r\n}\r\n\r\n.vs-icon {\r\n    width: 160px; \r\n    height: 200px; \r\n    -o-object-fit: contain; \r\n       object-fit: contain;\r\n}\r\n\r\n@media (max-width: 768px) { \r\n    .transform-character-1,\r\n    .transform-character-2 {\r\n        height: 300px;\r\n        width: 500px;\r\n    }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .background {\r\n        overflow-y: scroll !important;\r\n    }\r\n    #col {\r\n        height: auto !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3QtaGVyby9zZWxlY3QtaGVyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0VBQW9FO0lBQ3BFLDREQUE0RDtJQUM1RCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1RUFBdUU7SUFDdkUsK0RBQStEO0lBQy9ELFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDs7QUFFQTtJQUNJLDZDQUFvRTtJQUNwRSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBbUI7T0FBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7O1FBRUksYUFBYTtRQUNiLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsZWN0LWhlcm8vc2VsZWN0LWhlcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc2Zvcm0tY2hhcmFjdGVyLTEge1xyXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAxOCUsIDcwJSAxOCUsIDEwMCUgNTAlLCA3MCUgODIlLCAwIDgyJSk7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxOCUsIDcwJSAxOCUsIDEwMCUgNTAlLCA3MCUgODIlLCAwIDgyJSk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnRyYW5zZm9ybS1jaGFyYWN0ZXItMiB7XHJcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigzMCUgMTglLCAxMDAlIDE4JSwgMTAwJSA4MiUsIDMwJSA4MiUsIDAgNTAlKTtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigzMCUgMTglLCAxMDAlIDE4JSwgMTAwJSA4MiUsIDMwJSA4MiUsIDAgNTAlKTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRyYW5zZm9ybS1jaGFyYWN0ZXItMSxcclxuLnRyYW5zZm9ybS1jaGFyYWN0ZXItMiB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi50cmFuc2Zvcm0tb3V0eyAgICBcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNSkpO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1saWdodC5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4jc3RhcnQtYnV0dG9uIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG59XHJcblxyXG4jc3RhcnQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjRkIyNDBEICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52cy1pY29uIHtcclxuICAgIHdpZHRoOiAxNjBweDsgXHJcbiAgICBoZWlnaHQ6IDIwMHB4OyBcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgIC50cmFuc2Zvcm0tY2hhcmFjdGVyLTEsXHJcbiAgICAudHJhbnNmb3JtLWNoYXJhY3Rlci0yIHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjY29sIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/select-hero/select-hero.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/select-hero/select-hero.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background position-relative overflow-hidden\" style=\"height: 100vh\">\r\n  <div class=\"row h-100\">\r\n    <div class=\"col-md-12 col-lg-5 h-100 d-flex justify-content-space-evenly flex-column\" id=\"col\">\r\n      <div class=\"transform-out\">\r\n        <img class=\"transform-character-1 d-block mx-auto\" [src]=\"heroPlayer1 ? heroPlayer1.thumbnail : defaultHeroThumbnail\" style=\"max-width: 100%\"/>\r\n      </div>\r\n      <app-search-input (selectedHero)=\"onSelectedHero($event, 1)\" placeholder=\"Jogador 1\"></app-search-input>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-2 h-100 d-flex justify-content-center align-items-center flex-column my-5\" id=\"col\">\r\n      <img [src]=\"vsIcon\" class=\"vs-icon\"/>\r\n      <button type=\"button\" class=\"btn btn-lg btn-outline-light px-5 text-white font-weight-bold\" (click)=\"onStartGame()\" id=\"start-button\">START</button>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-5 h-100 d-flex justify-content-space-evenly flex-column\" id=\"col\">\r\n      <app-search-input (selectedHero)=\"onSelectedHero($event, 2)\" placeholder=\"Jogador 2\"></app-search-input>\r\n      <div class=\"transform-out\">\r\n        <img class=\"transform-character-2 d-block mx-auto\" [src]=\"heroPlayer2 ? heroPlayer2.thumbnail : defaultHeroThumbnail\" style=\"max-width: 100%\"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/select-hero/select-hero.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/select-hero/select-hero.component.ts ***!
  \*****************************************************************/
/*! exports provided: SelectHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectHeroComponent", function() { return SelectHeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");



var SelectHeroComponent = /** @class */ (function () {
    function SelectHeroComponent(alertService) {
        this.alertService = alertService;
        this.selectedHeroes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadGame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.defaultHeroThumbnail = 'assets/images/default_hero_thumbnail.png';
        this.vsIcon = 'assets/images/vs-icon.png';
    }
    SelectHeroComponent.prototype.ngOnInit = function () {
    };
    SelectHeroComponent.prototype.onSelectedHero = function (hero, player) {
        if (player === 1) {
            this.heroPlayer1 = hero ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, hero) : undefined;
        }
        else {
            this.heroPlayer2 = hero ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, hero) : undefined;
        }
    };
    SelectHeroComponent.prototype.onStartGame = function () {
        var _this = this;
        if (!this.heroPlayer1 || !this.heroPlayer2) {
            this.alertService.onHeroError();
        }
        else {
            this.loadGame.emit(true);
            this.alertService.onHeroSuccess(function () {
                _this.selectedHeroes.emit([_this.heroPlayer1, _this.heroPlayer2]);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectHeroComponent.prototype, "selectedHeroes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectHeroComponent.prototype, "loadGame", void 0);
    SelectHeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-hero',
            template: __webpack_require__(/*! ./select-hero.component.html */ "./src/app/components/select-hero/select-hero.component.html"),
            styles: [__webpack_require__(/*! ./select-hero.component.css */ "./src/app/components/select-hero/select-hero.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], SelectHeroComponent);
    return SelectHeroComponent;
}());



/***/ }),

/***/ "./src/app/components/tic-tac-toe/tic-tac-toe.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/tic-tac-toe/tic-tac-toe.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    background-image: url('background-tic-tac-toe.png');\r\n    background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aWMtdGFjLXRvZS90aWMtdGFjLXRvZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbURBQTBFO0lBQzFFLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGljLXRhYy10b2UvdGljLXRhYy10b2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLXRpYy10YWMtdG9lLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/tic-tac-toe/tic-tac-toe.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/tic-tac-toe/tic-tac-toe.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-select-hero *ngIf=\"!startGame\" (selectedHeroes)=\"selectedHeroes($event)\" (loadGame)=\"onLoadGame($event)\">\r\n</app-select-hero>\r\n<div *ngIf=\"loadGame\">\r\n    <div class=\"background mt-0 d-flex flex-column justify-content-around\" style=\"min-height: 100vh\">\r\n        <app-game-panel [heroes]=\"heroes\" [firstToPlay]=\"firstToPlay\"></app-game-panel>\r\n        <app-game-board></app-game-board>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/tic-tac-toe/tic-tac-toe.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/tic-tac-toe/tic-tac-toe.component.ts ***!
  \*****************************************************************/
/*! exports provided: TicTacToeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToeComponent", function() { return TicTacToeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tic_tac_toe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tic-tac-toe.service */ "./src/app/services/tic-tac-toe.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");




var TicTacToeComponent = /** @class */ (function () {
    function TicTacToeComponent(ticTacToeService, alertService) {
        this.ticTacToeService = ticTacToeService;
        this.alertService = alertService;
        this.startGame = false;
        this.loadGame = false;
    }
    TicTacToeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firstToPlay = this.ticTacToeService.getFirstToPlay();
        this.ticTacToeService.getTicTacToeResult().subscribe(function (result) {
            if (result.winner) {
                _this.alertService.onGameWinner(_this.heroes[result.winner - 1], result.winner).subscribe(function () {
                    _this.startNewGame();
                });
            }
            else if (result.gameOver) {
                _this.alertService.onGameDraw().subscribe(function () {
                    _this.startNewGame();
                });
            }
        });
    };
    TicTacToeComponent.prototype.startNewGame = function () {
        this.ticTacToeService.initializeGame();
        this.firstToPlay = this.ticTacToeService.getFirstToPlay();
    };
    TicTacToeComponent.prototype.onLoadGame = function () {
        this.loadGame = true;
    };
    TicTacToeComponent.prototype.selectedHeroes = function (heroes) {
        this.heroes = heroes.slice();
        this.startGame = true;
    };
    TicTacToeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tic-tac-toe',
            template: __webpack_require__(/*! ./tic-tac-toe.component.html */ "./src/app/components/tic-tac-toe/tic-tac-toe.component.html"),
            styles: [__webpack_require__(/*! ./tic-tac-toe.component.css */ "./src/app/components/tic-tac-toe/tic-tac-toe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tic_tac_toe_service__WEBPACK_IMPORTED_MODULE_2__["TicTacToeService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], TicTacToeComponent);
    return TicTacToeComponent;
}());



/***/ }),

/***/ "./src/app/components/ui/search-input/search-input.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/ui/search-input/search-input.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\r\n    max-width: 460px;\r\n}\r\n\r\n.search-input {\r\n    background-color: transparent;\r\n    border-radius: 0;\r\n    border: none;      \r\n    font-weight: bold;\r\n    color: aliceblue !important;\r\n    font-size: 1.5em;\r\n    text-shadow: 0px 0px 10px rgba(255,255,255,1);\r\n}\r\n\r\n::-webkit-input-placeholder{\r\n    color: aliceblue !important;    \r\n}\r\n\r\n::-ms-input-placeholder{\r\n    color: aliceblue !important;    \r\n}\r\n\r\n::placeholder{\r\n    color: aliceblue !important;    \r\n}\r\n\r\nli.list-group-item:first-of-type {\r\n    border-top: none;\r\n}\r\n\r\ninput:focus {\r\n    box-shadow: none;\r\n}\r\n\r\n.border-default {\r\n    border-bottom: 2px solid #ccd4da; \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRkE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRkE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VpL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cCB7XHJcbiAgICBtYXgtd2lkdGg6IDQ2MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogbm9uZTsgICAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDsgICAgXHJcbn1cclxuXHJcbmxpLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3JkZXItZGVmYXVsdCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjZDRkYTsgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/ui/search-input/search-input.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/ui/search-input/search-input.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (focusout)=\"onFocusOut()\">\r\n  <div class=\"input-group border-default m-auto\">\r\n    <input type=\"text\" class=\"form-control text-center search-input text-dark\" [formControl]=\"heroName\" (click)=\"onFocus()\" [placeholder]=\"placeholder\">\r\n    <div class=\"input-group-append\" [hidden]=\"!isLoading\">\r\n      <div class=\"spinner-border text-light\" role=\"status\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ul class=\"list-group overflow-auto\" style=\"max-height: 200px\">\r\n    <li class=\"list-group-item list-group-item-action\" *ngFor=\"let hero of heroes\"  (mousedown)=\"onSelectHero(hero)\">\r\n      {{hero.name}}\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/ui/search-input/search-input.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/ui/search-input/search-input.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_marvel_hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/marvel-hero.service */ "./src/app/services/marvel-hero.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent(marvelHeroService) {
        this.marvelHeroService = marvelHeroService;
        this.selectedHero = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.heroName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.isLoading = false;
    }
    SearchInputComponent.prototype.ngOnInit = function () {
        this.onChanges();
        this.placeholderText = this.placeholder;
    };
    SearchInputComponent.prototype.onChanges = function () {
        var _this = this;
        this.heroName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (text) {
            if (text !== _this.selectedHeroName && text !== '') {
                _this.onHeroChange(text);
            }
            else if (text === '') {
                _this.heroes = undefined;
                _this.selectedHero.emit(undefined);
            }
        });
    };
    SearchInputComponent.prototype.onHeroChange = function (heroName) {
        var _this = this;
        this.isLoading = true;
        this.marvelHeroService.getHero(heroName, 'name').subscribe(function (heroes) {
            if (!heroes || heroes.length <= 0) {
                _this.marvelHeroService.getHero(heroName, 'nameStartsWith').subscribe(function (heroList) {
                    _this.heroes = heroList;
                    _this.isLoading = false;
                    _this.selectedHero.emit(undefined);
                });
            }
            else {
                _this.onSelectHero(heroes[0]);
                _this.isLoading = false;
            }
        });
    };
    SearchInputComponent.prototype.onSelectHero = function (hero) {
        this.heroName.setValue((this.selectedHeroName = hero.name));
        this.selectedHero.emit(hero);
        this.heroes = undefined;
    };
    SearchInputComponent.prototype.onFocusOut = function () {
        this.heroes = undefined;
        if (!this.heroName.value || this.heroName.value === '') {
            this.placeholder = this.placeholderText;
        }
    };
    SearchInputComponent.prototype.onFocus = function () {
        if (this.heroName.value && this.heroName.value !== '') {
            this.onHeroChange(this.heroName.value);
        }
        else {
            this.placeholder = '';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchInputComponent.prototype, "selectedHero", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SearchInputComponent.prototype, "placeholder", void 0);
    SearchInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-input',
            template: __webpack_require__(/*! ./search-input.component.html */ "./src/app/components/ui/search-input/search-input.component.html"),
            styles: [__webpack_require__(/*! ./search-input.component.css */ "./src/app/components/ui/search-input/search-input.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_marvel_hero_service__WEBPACK_IMPORTED_MODULE_3__["MarvelHeroService"]])
    ], SearchInputComponent);
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/interceptor/http-config.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/interceptor/http-config.interceptor.ts ***!
  \********************************************************/
/*! exports provided: HttpConfigInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function() { return HttpConfigInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var HttpConfigInterceptor = /** @class */ (function () {
    function HttpConfigInterceptor(authService) {
        this.authService = authService;
    }
    HttpConfigInterceptor.prototype.intercept = function (req, next) {
        var timestamp = this.authService.getTimeStamp();
        var authUrl = '&ts=' + timestamp + '&apikey=' + this.authService.getPublicKey() + '&hash=' + this.authService.getHash(timestamp);
        var apiReq = req.clone({ url: req.url + authUrl });
        return next.handle(apiReq);
    };
    HttpConfigInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HttpConfigInterceptor);
    return HttpConfigInterceptor;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService() {
    }
    AlertService.prototype.onHeroError = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Atenção! Parece que há algo de errado com o herói selecionado.'
        });
    };
    AlertService.prototype.onHeroSuccess = function (callback) {
        var timerInterval;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Tudo pronto!',
            html: 'Seu jogo comecará em <strong></strong> segundos.',
            timer: 5000,
            onBeforeOpen: function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading();
                timerInterval = setInterval(function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.getContent().querySelector('strong')
                        .textContent = (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.getTimerLeft() / 1000 | 0).toString();
                }, 100);
            },
            onClose: function () {
                clearInterval(timerInterval);
            }
        }).then(function (result) {
            if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.timer) {
                callback();
            }
        });
    };
    AlertService.prototype.onGameDraw = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Resultado',
            text: 'Acredite se quiser, deu velha!',
            imageUrl: 'https://media.giphy.com/media/fNBFa6NCMeZJm/giphy.gif',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'facepalm',
            animation: false,
            confirmButtonText: 'Jogar Novamente',
            allowOutsideClick: false
        }));
    };
    AlertService.prototype.onGameWinner = function (hero, playerNumber) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Resultado',
            text: 'Jogador número: ' + playerNumber + ' - ' + hero.name + ' ganhou!',
            imageUrl: hero.thumbnail,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: hero.name,
            animation: false,
            customClass: 'object-cover',
            confirmButtonText: 'Revanche',
            allowOutsideClick: false
        }));
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);



var AuthService = /** @class */ (function () {
    function AuthService() {
        this.publicKey = '4c0dc4701d397d82609a8906ef642407';
        this.privateKey = '3432c61dd5d29334205e54a350807b961f47524a';
    }
    AuthService.prototype.getHash = function (timeStamp) {
        var hashGenerator = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"]();
        hashGenerator.appendStr(timeStamp);
        hashGenerator.appendStr(this.privateKey);
        hashGenerator.appendStr(this.publicKey);
        var hash = hashGenerator.end().toString();
        return hash;
    };
    AuthService.prototype.getTimeStamp = function () {
        return (Date.now() / 1000 | 0).toString();
    };
    AuthService.prototype.getPublicKey = function () {
        return this.publicKey;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/marvel-hero.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/marvel-hero.service.ts ***!
  \*************************************************/
/*! exports provided: MarvelHeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarvelHeroService", function() { return MarvelHeroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MarvelHeroService = /** @class */ (function () {
    function MarvelHeroService(http) {
        this.http = http;
        this.baseUrl = 'https://gateway.marvel.com:443/v1/public/';
    }
    MarvelHeroService.prototype.getHero = function (name, by) {
        var url = this.baseUrl + 'characters?' + by + '=' + name;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var heroes = new Array();
            response.data.results.forEach(function (element) {
                var hero = { name: element.name, thumbnail: element.thumbnail.path + '.' + element.thumbnail.extension };
                heroes.push(hero);
            });
            return heroes;
        }));
    };
    MarvelHeroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MarvelHeroService);
    return MarvelHeroService;
}());



/***/ }),

/***/ "./src/app/services/tic-tac-toe-result.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/tic-tac-toe-result.service.ts ***!
  \********************************************************/
/*! exports provided: TicTacToeResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToeResultService", function() { return TicTacToeResultService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TicTacToeResultService = /** @class */ (function () {
    function TicTacToeResultService() {
    }
    TicTacToeResultService.prototype.isWinner = function (player, gameBoard) {
        for (var _i = 0, _a = this.getWinnerCombination(); _i < _a.length; _i++) {
            var pattern = _a[_i];
            if (gameBoard.get(pattern[0]) === player && gameBoard.get(pattern[1]) === player && gameBoard.get(pattern[2]) === player) {
                return true;
            }
        }
    };
    TicTacToeResultService.prototype.isDraw = function (gameBoard) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (gameBoard.get(i.toString().concat(j.toString())) === '') {
                    return false;
                }
            }
        }
        return true;
    };
    TicTacToeResultService.prototype.getWinnerCombination = function () {
        return [
            ['00', '01', '02'],
            ['10', '11', '12'],
            ['20', '21', '22'],
            ['00', '10', '20'],
            ['01', '11', '21'],
            ['02', '12', '22'],
            ['00', '11', '22'],
            ['20', '11', '02']
        ];
    };
    TicTacToeResultService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TicTacToeResultService);
    return TicTacToeResultService;
}());



/***/ }),

/***/ "./src/app/services/tic-tac-toe.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/tic-tac-toe.service.ts ***!
  \*************************************************/
/*! exports provided: TicTacToeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToeService", function() { return TicTacToeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _tic_tac_toe_result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tic-tac-toe-result.service */ "./src/app/services/tic-tac-toe-result.service.ts");




var TicTacToeService = /** @class */ (function () {
    function TicTacToeService(ticTacToeResultService) {
        this.ticTacToeResultService = ticTacToeResultService;
        this.score = new Array(0, 0);
        this.ticTacToeResult = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.gameBoardSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.gameBoard);
        this.scoreSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.score);
        this.initializeGame();
    }
    TicTacToeService.prototype.initializeGame = function () {
        this.initializeGameBoard();
        this.firstToPlay = this.whoIsGoingToStart();
        this.turn = 'X';
        if (!this.playerTurnSubject) {
            this.playerTurnSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.firstToPlay);
        }
        else {
            this.playerTurnSubject.next(this.firstToPlay);
        }
    };
    TicTacToeService.prototype.initializeGameBoard = function () {
        this.gameBoard = new Map();
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                this.gameBoard.set((i.toString().concat(j.toString())), '');
            }
        }
        this.gameBoardSubject.next(this.gameBoard);
    };
    TicTacToeService.prototype.whoIsGoingToStart = function () {
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        return randomNumber % 2 === 0 ? 1 : 2;
    };
    TicTacToeService.prototype.getGameBoard = function () {
        return this.gameBoardSubject.asObservable();
    };
    TicTacToeService.prototype.getTicTacToeResult = function () {
        return this.ticTacToeResult.asObservable();
    };
    TicTacToeService.prototype.getPlayerTurn = function () {
        return this.playerTurnSubject.asObservable();
    };
    TicTacToeService.prototype.getFirstToPlay = function () {
        return this.firstToPlay;
    };
    TicTacToeService.prototype.getScore = function () {
        return this.scoreSubject.asObservable();
    };
    TicTacToeService.prototype.setValueToGameBoard = function (key) {
        if (this.gameBoard.get(key) === '') {
            this.gameBoard.set(key, this.turn);
            this.gameBoardSubject.next(this.gameBoard);
            this.checkBoard();
            this.playerTurnSubject.next(this.getCurrentPlayer());
        }
    };
    TicTacToeService.prototype.checkBoard = function () {
        if (this.ticTacToeResultService.isWinner(this.turn, this.gameBoard)) {
            var winnerPlayer = this.getCurrentPlayer();
            this.score[winnerPlayer - 1] = this.score[winnerPlayer - 1] + 1;
            this.ticTacToeResult.next({ winner: winnerPlayer });
            this.scoreSubject.next(this.score);
        }
        else if (this.ticTacToeResultService.isDraw(this.gameBoard)) {
            this.ticTacToeResult.next({ gameOver: true });
        }
        else {
            this.turn = this.turn === 'X' ? 'O' : 'X';
        }
    };
    TicTacToeService.prototype.getCurrentPlayer = function () {
        var secondToPlay = this.firstToPlay === 1 ? 2 : 1;
        return this.turn === 'X' ? this.firstToPlay : secondToPlay;
    };
    TicTacToeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tic_tac_toe_result_service__WEBPACK_IMPORTED_MODULE_3__["TicTacToeResultService"]])
    ], TicTacToeService);
    return TicTacToeService;
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

module.exports = __webpack_require__(/*! D:\Projetos\Bruna\Projetos Github\JogoDaVelha\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map