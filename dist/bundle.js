/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/abstractfactory/3DButton.ts":
/*!*****************************************!*\
  !*** ./src/abstractfactory/3DButton.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/abstractfactory/Button.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ThreeDButton = /** @class */ (function (_super) {
    __extends(ThreeDButton, _super);
    function ThreeDButton(dom, caption) {
        var _this = _super.call(this, dom, caption) || this;
        _this.render();
        return _this;
    }
    ThreeDButton.prototype.render = function () {
        this.dom.innerHTML = "\n            ".concat(this.caption, "\n            <div></div>\n            <div></div>\n        ");
        this.dom.classList.add("threeD-button");
    };
    return ThreeDButton;
}(_Button__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDButton);


/***/ }),

/***/ "./src/abstractfactory/3DCheckBox.ts":
/*!*******************************************!*\
  !*** ./src/abstractfactory/3DCheckBox.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox */ "./src/abstractfactory/CheckBox.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ThreeDCheckBox = /** @class */ (function (_super) {
    __extends(ThreeDCheckBox, _super);
    function ThreeDCheckBox(dom, label, checked) {
        var _this = _super.call(this, dom, label, checked) || this;
        _this.render();
        return _this;
    }
    ThreeDCheckBox.prototype.render = function () {
        this.dom.innerHTML = "\n            <label>CheckBox\n                <input type=\"checkbox\" ".concat(this.checked ? 'checked="checked"' : "", "/>\n                <div class=\"box\"></div>\n                <div class=\"line\"></div>\n            </label>\n        ");
        this.dom.classList.add("threeD-checkbox");
    };
    return ThreeDCheckBox;
}(_CheckBox__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDCheckBox);


/***/ }),

/***/ "./src/abstractfactory/3DTextEdit.ts":
/*!*******************************************!*\
  !*** ./src/abstractfactory/3DTextEdit.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextEdit */ "./src/abstractfactory/TextEdit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ThreeDTextEdit = /** @class */ (function (_super) {
    __extends(ThreeDTextEdit, _super);
    function ThreeDTextEdit(dom, text) {
        var _this = _super.call(this, dom, text) || this;
        _this.render();
        return _this;
    }
    ThreeDTextEdit.prototype.render = function () {
        this.dom.innerHTML = "<input value=".concat(this.text, "/>");
        this.dom.classList.add("threeD-input");
    };
    return ThreeDTextEdit;
}(_TextEdit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDTextEdit);


/***/ }),

/***/ "./src/abstractfactory/3DUIFactory.ts":
/*!********************************************!*\
  !*** ./src/abstractfactory/3DUIFactory.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _3DButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3DButton */ "./src/abstractfactory/3DButton.ts");
/* harmony import */ var _3DCheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3DCheckBox */ "./src/abstractfactory/3DCheckBox.ts");
/* harmony import */ var _3DTextEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3DTextEdit */ "./src/abstractfactory/3DTextEdit.ts");
/* harmony import */ var _UIFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIFactory */ "./src/abstractfactory/UIFactory.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ThreeDUIFactory = /** @class */ (function (_super) {
    __extends(ThreeDUIFactory, _super);
    function ThreeDUIFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeDUIFactory.prototype.createButton = function (dom, caption) {
        return new _3DButton__WEBPACK_IMPORTED_MODULE_0__["default"](dom, caption);
    };
    ThreeDUIFactory.prototype.createCheckBox = function (dom, label, checked) {
        return new _3DCheckBox__WEBPACK_IMPORTED_MODULE_1__["default"](dom, label, checked);
    };
    ThreeDUIFactory.prototype.createTextEdit = function (dom, text) {
        return new _3DTextEdit__WEBPACK_IMPORTED_MODULE_2__["default"](dom, text);
    };
    return ThreeDUIFactory;
}(_UIFactory__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDUIFactory);


/***/ }),

/***/ "./src/abstractfactory/Button.ts":
/*!***************************************!*\
  !*** ./src/abstractfactory/Button.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Button = /** @class */ (function () {
    function Button(dom, caption) {
        this.dom = dom;
        this.caption = caption;
    }
    return Button;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/abstractfactory/CheckBox.ts":
/*!*****************************************!*\
  !*** ./src/abstractfactory/CheckBox.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CheckBox = /** @class */ (function () {
    function CheckBox(dom, label, checked) {
        this.dom = dom;
        this.label = label;
        this.checked = checked;
    }
    return CheckBox;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);


/***/ }),

/***/ "./src/abstractfactory/FlatButton.ts":
/*!*******************************************!*\
  !*** ./src/abstractfactory/FlatButton.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/abstractfactory/Button.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlatButton = /** @class */ (function (_super) {
    __extends(FlatButton, _super);
    function FlatButton(dom, caption) {
        var _this = _super.call(this, dom, caption) || this;
        _this.render();
        return _this;
    }
    FlatButton.prototype.render = function () {
        this.dom.innerText = this.caption;
        this.dom.classList.add("flat-button");
    };
    return FlatButton;
}(_Button__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatButton);


/***/ }),

/***/ "./src/abstractfactory/FlatCheckBox.ts":
/*!*********************************************!*\
  !*** ./src/abstractfactory/FlatCheckBox.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox */ "./src/abstractfactory/CheckBox.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlatCheckBox = /** @class */ (function (_super) {
    __extends(FlatCheckBox, _super);
    function FlatCheckBox(dom, label, checked) {
        var _this = _super.call(this, dom, label, checked) || this;
        _this.render();
        return _this;
    }
    FlatCheckBox.prototype.render = function () {
        this.dom.innerHTML = "\n            <label>".concat(this.label, "\n                <input type=\"checkbox\" ").concat(this.checked ? 'checked="checked"' : "", "/>\n                <span></span>\n            </label>\n        ");
    };
    return FlatCheckBox;
}(_CheckBox__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatCheckBox);


/***/ }),

/***/ "./src/abstractfactory/FlatTextEdit.ts":
/*!*********************************************!*\
  !*** ./src/abstractfactory/FlatTextEdit.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextEdit */ "./src/abstractfactory/TextEdit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlatTextEdit = /** @class */ (function (_super) {
    __extends(FlatTextEdit, _super);
    function FlatTextEdit(dom, text) {
        var _this = _super.call(this, dom, text) || this;
        _this.render();
        return _this;
    }
    FlatTextEdit.prototype.render = function () {
        this.dom.innerHTML = "<input  value=\"".concat(this.text, "\"/>");
        this.dom.classList.add("flat-input");
    };
    return FlatTextEdit;
}(_TextEdit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatTextEdit);


/***/ }),

/***/ "./src/abstractfactory/FlatUIFactory.ts":
/*!**********************************************!*\
  !*** ./src/abstractfactory/FlatUIFactory.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FlatButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlatButton */ "./src/abstractfactory/FlatButton.ts");
/* harmony import */ var _FlatCheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlatCheckBox */ "./src/abstractfactory/FlatCheckBox.ts");
/* harmony import */ var _FlatTextEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlatTextEdit */ "./src/abstractfactory/FlatTextEdit.ts");
/* harmony import */ var _UIFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIFactory */ "./src/abstractfactory/UIFactory.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FlatUIFactory = /** @class */ (function (_super) {
    __extends(FlatUIFactory, _super);
    function FlatUIFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlatUIFactory.prototype.createButton = function (dom, caption) {
        return new _FlatButton__WEBPACK_IMPORTED_MODULE_0__["default"](dom, caption);
    };
    FlatUIFactory.prototype.createCheckBox = function (dom, label, checked) {
        return new _FlatCheckBox__WEBPACK_IMPORTED_MODULE_1__["default"](dom, label, checked);
    };
    FlatUIFactory.prototype.createTextEdit = function (dom, text) {
        return new _FlatTextEdit__WEBPACK_IMPORTED_MODULE_2__["default"](dom, text);
    };
    return FlatUIFactory;
}(_UIFactory__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatUIFactory);


/***/ }),

/***/ "./src/abstractfactory/TextEdit.ts":
/*!*****************************************!*\
  !*** ./src/abstractfactory/TextEdit.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var TextEdit = /** @class */ (function () {
    function TextEdit(dom, text) {
        this.dom = dom;
        this.text = text;
    }
    return TextEdit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextEdit);


/***/ }),

/***/ "./src/abstractfactory/UIFactory.ts":
/*!******************************************!*\
  !*** ./src/abstractfactory/UIFactory.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var UIFactory = /** @class */ (function () {
    function UIFactory() {
    }
    return UIFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIFactory);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/abstractfactory/index.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _3DUIFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3DUIFactory */ "./src/abstractfactory/3DUIFactory.ts");
/* harmony import */ var _FlatUIFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlatUIFactory */ "./src/abstractfactory/FlatUIFactory.ts");


var factory;
var flatMode = false;
if (flatMode) {
    factory = new _FlatUIFactory__WEBPACK_IMPORTED_MODULE_1__["default"]();
}
else {
    factory = new _3DUIFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
}
var domButton = document.querySelector(".button");
var domCheckBox = document.querySelector(".checkbox");
var domTextEdit = document.querySelector(".textedit");
factory.createButton(domButton, "Button");
factory.createCheckBox(domCheckBox, "CheckBox", true);
factory.createTextEdit(domTextEdit, "DesignPattern");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL2Fic3RyYWN0ZmFjdG9yeS8zREJ1dHRvbi50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvYWJzdHJhY3RmYWN0b3J5LzNEQ2hlY2tCb3gudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2Fic3RyYWN0ZmFjdG9yeS8zRFRleHRFZGl0LnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9hYnN0cmFjdGZhY3RvcnkvM0RVSUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2Fic3RyYWN0ZmFjdG9yeS9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2Fic3RyYWN0ZmFjdG9yeS9DaGVja0JveC50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvYWJzdHJhY3RmYWN0b3J5L0ZsYXRCdXR0b24udHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2Fic3RyYWN0ZmFjdG9yeS9GbGF0Q2hlY2tCb3gudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2Fic3RyYWN0ZmFjdG9yeS9GbGF0VGV4dEVkaXQudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2Fic3RyYWN0ZmFjdG9yeS9GbGF0VUlGYWN0b3J5LnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9hYnN0cmFjdGZhY3RvcnkvVGV4dEVkaXQudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2Fic3RyYWN0ZmFjdG9yeS9VSUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2Fic3RyYWN0ZmFjdG9yeS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZURCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjb25zdHJ1Y3Rvcihkb206IEhUTUxFbGVtZW50LCBjYXB0aW9uOiBzdHJpbmcpIHtcbiAgICBzdXBlcihkb20sIGNhcHRpb24pO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kb20uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgJHt0aGlzLmNhcHRpb259XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgYDtcbiAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKFwidGhyZWVELWJ1dHRvblwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IENoZWNrQm94IGZyb20gXCIuL0NoZWNrQm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlRENoZWNrQm94IGV4dGVuZHMgQ2hlY2tCb3gge1xuICBjb25zdHJ1Y3Rvcihkb206IEhUTUxFbGVtZW50LCBsYWJlbDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgc3VwZXIoZG9tLCBsYWJlbCwgY2hlY2tlZCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8bGFiZWw+Q2hlY2tCb3hcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA/ICdjaGVja2VkPVwiY2hlY2tlZFwiJyA6IFwiXCJcbiAgICAgICAgICAgICAgICB9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIGA7XG5cbiAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKFwidGhyZWVELWNoZWNrYm94XCIpO1xuICB9XG59XG4iLCJpbXBvcnQgVGV4dEVkaXQgZnJvbSBcIi4vVGV4dEVkaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVEVGV4dEVkaXQgZXh0ZW5kcyBUZXh0RWRpdCB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgdGV4dCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgPGlucHV0IHZhbHVlPSR7dGhpcy50ZXh0fS8+YDtcbiAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKFwidGhyZWVELWlucHV0XCIpO1xuICB9XG59XG4iLCJpbXBvcnQgVGhyZWVEQnV0dG9uIGZyb20gXCIuLzNEQnV0dG9uXCI7XG5pbXBvcnQgVGhyZWVEQ2hlY2tCb3ggZnJvbSBcIi4vM0RDaGVja0JveFwiO1xuaW1wb3J0IFRocmVlRFRleHRFZGl0IGZyb20gXCIuLzNEVGV4dEVkaXRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSBcIi4vQ2hlY2tCb3hcIjtcbmltcG9ydCBUZXh0RWRpdCBmcm9tIFwiLi9UZXh0RWRpdFwiO1xuaW1wb3J0IFVJRmFjdG9yeSBmcm9tIFwiLi9VSUZhY3RvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVEVUlGYWN0b3J5IGV4dGVuZHMgVUlGYWN0b3J5IHtcbiAgY3JlYXRlQnV0dG9uKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZyk6IEJ1dHRvbiB7XG4gICAgcmV0dXJuIG5ldyBUaHJlZURCdXR0b24oZG9tLCBjYXB0aW9uKTtcbiAgfVxuICBjcmVhdGVDaGVja0JveChkb206IEhUTUxFbGVtZW50LCBsYWJlbDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKTogQ2hlY2tCb3gge1xuICAgIHJldHVybiBuZXcgVGhyZWVEQ2hlY2tCb3goZG9tLCBsYWJlbCwgY2hlY2tlZCk7XG4gIH1cbiAgY3JlYXRlVGV4dEVkaXQoZG9tOiBIVE1MRWxlbWVudCwgdGV4dDogc3RyaW5nKTogVGV4dEVkaXQge1xuICAgIHJldHVybiBuZXcgVGhyZWVEVGV4dEVkaXQoZG9tLCB0ZXh0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRvbTogSFRNTEVsZW1lbnQsIHByb3RlY3RlZCBjYXB0aW9uOiBzdHJpbmcpIHt9XG4gIGFic3RyYWN0IHJlbmRlcigpOiB2b2lkO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ2hlY2tCb3gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZG9tOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgbGFiZWw6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgY2hlY2tlZDogYm9vbGVhblxuICApIHt9XG4gIGFic3RyYWN0IHJlbmRlcigpOiB2b2lkO1xufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhdEJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgY2FwdGlvbik7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lclRleHQgPSB0aGlzLmNhcHRpb247XG4gICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChcImZsYXQtYnV0dG9uXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgQ2hlY2tCb3ggZnJvbSBcIi4vQ2hlY2tCb3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhdENoZWNrQm94IGV4dGVuZHMgQ2hlY2tCb3gge1xuICBjb25zdHJ1Y3Rvcihkb206IEhUTUxFbGVtZW50LCBsYWJlbDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgc3VwZXIoZG9tLCBsYWJlbCwgY2hlY2tlZCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8bGFiZWw+JHt0aGlzLmxhYmVsfVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke1xuICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkID8gJ2NoZWNrZWQ9XCJjaGVja2VkXCInIDogXCJcIlxuICAgICAgICAgICAgICAgIH0vPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIGA7XG4gIH1cbn1cbiIsImltcG9ydCBUZXh0RWRpdCBmcm9tIFwiLi9UZXh0RWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGF0VGV4dEVkaXQgZXh0ZW5kcyBUZXh0RWRpdCB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgdGV4dCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgPGlucHV0ICB2YWx1ZT1cIiR7dGhpcy50ZXh0fVwiLz5gO1xuICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoXCJmbGF0LWlucHV0XCIpO1xuICB9XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IENoZWNrQm94IGZyb20gXCIuL0NoZWNrQm94XCI7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tIFwiLi9GbGF0QnV0dG9uXCI7XG5pbXBvcnQgRmxhdENoZWNrQm94IGZyb20gXCIuL0ZsYXRDaGVja0JveFwiO1xuaW1wb3J0IEZsYXRUZXh0RWRpdCBmcm9tIFwiLi9GbGF0VGV4dEVkaXRcIjtcbmltcG9ydCBUZXh0RWRpdCBmcm9tIFwiLi9UZXh0RWRpdFwiO1xuaW1wb3J0IFVJRmFjdG9yeSBmcm9tIFwiLi9VSUZhY3RvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhdFVJRmFjdG9yeSBleHRlbmRzIFVJRmFjdG9yeSB7XG4gIGNyZWF0ZUJ1dHRvbihkb206IEhUTUxFbGVtZW50LCBjYXB0aW9uOiBzdHJpbmcpOiBCdXR0b24ge1xuICAgIHJldHVybiBuZXcgRmxhdEJ1dHRvbihkb20sIGNhcHRpb24pO1xuICB9XG4gIGNyZWF0ZUNoZWNrQm94KGRvbTogSFRNTEVsZW1lbnQsIGxhYmVsOiBzdHJpbmcsIGNoZWNrZWQ6IGJvb2xlYW4pOiBDaGVja0JveCB7XG4gICAgcmV0dXJuIG5ldyBGbGF0Q2hlY2tCb3goZG9tLCBsYWJlbCwgY2hlY2tlZCk7XG4gIH1cbiAgY3JlYXRlVGV4dEVkaXQoZG9tOiBIVE1MRWxlbWVudCwgdGV4dDogc3RyaW5nKTogVGV4dEVkaXQge1xuICAgIHJldHVybiBuZXcgRmxhdFRleHRFZGl0KGRvbSwgdGV4dCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFRleHRFZGl0IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRvbTogSFRNTEVsZW1lbnQsIHByb3RlY3RlZCB0ZXh0OiBzdHJpbmcpIHt9XG4gIGFic3RyYWN0IHJlbmRlcigpOiB2b2lkO1xufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBDaGVja0JveCBmcm9tIFwiLi9DaGVja0JveFwiO1xuaW1wb3J0IFRleHRFZGl0IGZyb20gXCIuL1RleHRFZGl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFVJRmFjdG9yeSB7XG4gIGFic3RyYWN0IGNyZWF0ZUJ1dHRvbihkb206IEhUTUxFbGVtZW50LCBjYXB0aW9uOiBzdHJpbmcpOiBCdXR0b247XG4gIGFic3RyYWN0IGNyZWF0ZUNoZWNrQm94KFxuICAgIGRvbTogSFRNTEVsZW1lbnQsXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBjaGVja2VkOiBib29sZWFuXG4gICk6IENoZWNrQm94O1xuICBhYnN0cmFjdCBjcmVhdGVUZXh0RWRpdChkb206IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcpOiBUZXh0RWRpdDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRocmVlRFVJRmFjdG9yeSBmcm9tIFwiLi8zRFVJRmFjdG9yeVwiO1xuaW1wb3J0IEZsYXRVSUZhY3RvcnkgZnJvbSBcIi4vRmxhdFVJRmFjdG9yeVwiO1xuaW1wb3J0IFVJRmFjdG9yeSBmcm9tIFwiLi9VSUZhY3RvcnlcIjtcblxubGV0IGZhY3Rvcnk6IFVJRmFjdG9yeTtcblxuY29uc3QgZmxhdE1vZGUgPSBmYWxzZTtcblxuaWYgKGZsYXRNb2RlKSB7XG4gIGZhY3RvcnkgPSBuZXcgRmxhdFVJRmFjdG9yeSgpO1xufSBlbHNlIHtcbiAgZmFjdG9yeSA9IG5ldyBUaHJlZURVSUZhY3RvcnkoKTtcbn1cblxuY29uc3QgZG9tQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25cIikgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBkb21DaGVja0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tib3hcIikgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBkb21UZXh0RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dGVkaXRcIikgYXMgSFRNTEVsZW1lbnQ7XG5cbmZhY3RvcnkuY3JlYXRlQnV0dG9uKGRvbUJ1dHRvbiwgXCJCdXR0b25cIik7XG5mYWN0b3J5LmNyZWF0ZUNoZWNrQm94KGRvbUNoZWNrQm94LCBcIkNoZWNrQm94XCIsIHRydWUpO1xuZmFjdG9yeS5jcmVhdGVUZXh0RWRpdChkb21UZXh0RWRpdCwgXCJEZXNpZ25QYXR0ZXJuXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9