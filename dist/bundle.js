/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/decorator/BoxDecorator.ts":
/*!***************************************!*\
  !*** ./src/decorator/BoxDecorator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var BoxDecorator = /** @class */ (function (_super) {
    __extends(BoxDecorator, _super);
    function BoxDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    BoxDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount() + 2;
    };
    BoxDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + 2;
    };
    BoxDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 2;
    };
    BoxDecorator.prototype.getString = function (i) {
        var maxWidth = this.getMaxLength();
        if (i === 0 || i === this.getLinesCount() - 1) {
            return "<span style='color:yellow'>+".concat("-".repeat(maxWidth - 2), "+</span>");
        }
        else {
            return ("<span style='color:yellow'>|</span>" +
                "".concat(this.targetItem.getString(i - 1)).concat(" ".repeat(maxWidth - this.getLength(i - 1))) +
                "<span style='color:yellow'>|</span>");
        }
    };
    return BoxDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxDecorator);


/***/ }),

/***/ "./src/decorator/Decorator.ts":
/*!************************************!*\
  !*** ./src/decorator/Decorator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/decorator/Item.ts");
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

var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator(targetItem) {
        var _this = _super.call(this) || this;
        _this.targetItem = targetItem;
        return _this;
    }
    return Decorator;
}(_Item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Decorator);


/***/ }),

/***/ "./src/decorator/Item.ts":
/*!*******************************!*\
  !*** ./src/decorator/Item.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.print = function (dom) {
        var result = [];
        var cntLines = this.getLinesCount();
        for (var i = 0; i < cntLines; i++) {
            var string = this.getString(i);
            result.push(string);
        }
        dom.innerHTML = result.join("\n");
    };
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ "./src/decorator/LineNumberDecorator.ts":
/*!**********************************************!*\
  !*** ./src/decorator/LineNumberDecorator.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var LineNumberDecorator = /** @class */ (function (_super) {
    __extends(LineNumberDecorator, _super);
    function LineNumberDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    LineNumberDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    LineNumberDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + 6;
    };
    LineNumberDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 6;
    };
    LineNumberDecorator.prototype.getString = function (i) {
        return ('<span style="color:green">' +
            "".concat(i).padStart(4, "0") +
            "</span><span style='color:dimgray'>: </span>".concat(this.targetItem.getString(i)));
    };
    return LineNumberDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineNumberDecorator);


/***/ }),

/***/ "./src/decorator/SideDecorator.ts":
/*!****************************************!*\
  !*** ./src/decorator/SideDecorator.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var SideDecorator = /** @class */ (function (_super) {
    __extends(SideDecorator, _super);
    function SideDecorator(targetItem, ch) {
        var _this = _super.call(this, targetItem) || this;
        _this.ch = ch;
        return _this;
    }
    SideDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    SideDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + this.ch.length * 2;
    };
    SideDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + this.ch.length * 2;
    };
    SideDecorator.prototype.getString = function (i) {
        return ("<span style='color:gray'>".concat(this.ch, "</span>") +
            "".concat(this.targetItem.getString(i)) +
            "<span style='color:gray'>".concat(this.ch, "</span>"));
    };
    return SideDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideDecorator);


/***/ }),

/***/ "./src/decorator/Strings.ts":
/*!**********************************!*\
  !*** ./src/decorator/Strings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/decorator/Item.ts");
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

var Strings = /** @class */ (function (_super) {
    __extends(Strings, _super);
    function Strings() {
        var _this = _super.call(this) || this;
        _this.data = new Array();
        return _this;
    }
    Strings.prototype.getLinesCount = function () {
        return this.data.length;
    };
    Strings.prototype.getLength = function (i) {
        return this.data[i].length;
    };
    Strings.prototype.getMaxLength = function () {
        var maxLength = 0;
        this.data.forEach(function (item) {
            if (item.length > maxLength)
                maxLength = item.length;
        });
        return maxLength;
    };
    Strings.prototype.getString = function (i) {
        return this.data[i];
    };
    Strings.prototype.add = function (str) {
        this.data.push(str);
    };
    return Strings;
}(_Item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Strings);


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
/*!********************************!*\
  !*** ./src/decorator/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxDecorator */ "./src/decorator/BoxDecorator.ts");
/* harmony import */ var _LineNumberDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineNumberDecorator */ "./src/decorator/LineNumberDecorator.ts");
/* harmony import */ var _SideDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideDecorator */ "./src/decorator/SideDecorator.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strings */ "./src/decorator/Strings.ts");




var strs = new _Strings__WEBPACK_IMPORTED_MODULE_3__["default"]();
strs.add("Hello!");
strs.add("My name is Kim Amugae");
strs.add("I am a Front Developer");
strs.add("Design-Pattern is powerful tool.");
var domPre = document.querySelector("pre");
// strs.print(domPre);
var d1 = new _SideDecorator__WEBPACK_IMPORTED_MODULE_2__["default"](strs, "");
// d1.print(domPre);
var d2 = new _LineNumberDecorator__WEBPACK_IMPORTED_MODULE_1__["default"](d1);
// d2.print(domPre);
var d3 = new _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__["default"](d2);
d3.print(domPre);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ2M7QUFDWjtBQUNaO0FBRWhDLElBQU0sSUFBSSxHQUFHLElBQUksZ0RBQU8sRUFBRSxDQUFDO0FBRTNCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFFN0MsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxzQkFBc0I7QUFFdEIsSUFBTSxFQUFFLEdBQUcsSUFBSSxzREFBYSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN2QyxvQkFBb0I7QUFFcEIsSUFBTSxFQUFFLEdBQUcsSUFBSSw0REFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QyxvQkFBb0I7QUFFcEIsSUFBTSxFQUFFLEdBQUcsSUFBSSxxREFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZGVjb3JhdG9yL0JveERlY29yYXRvci50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZGVjb3JhdG9yL0RlY29yYXRvci50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZGVjb3JhdG9yL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2RlY29yYXRvci9MaW5lTnVtYmVyRGVjb3JhdG9yLnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9kZWNvcmF0b3IvU2lkZURlY29yYXRvci50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZGVjb3JhdG9yL1N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2RlY29yYXRvci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVjb3JhdG9yIGZyb20gXCIuL0RlY29yYXRvclwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3hEZWNvcmF0b3IgZXh0ZW5kcyBEZWNvcmF0b3Ige1xuICBnZXRMaW5lc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRMaW5lc0NvdW50KCkgKyAyO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKGk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRMZW5ndGgoaSkgKyAyO1xuICB9XG5cbiAgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRNYXhMZW5ndGgoKSArIDI7XG4gIH1cblxuICBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXhXaWR0aCA9IHRoaXMuZ2V0TWF4TGVuZ3RoKCk7XG4gICAgaWYgKGkgPT09IDAgfHwgaSA9PT0gdGhpcy5nZXRMaW5lc0NvdW50KCkgLSAxKSB7XG4gICAgICByZXR1cm4gYDxzcGFuIHN0eWxlPSdjb2xvcjp5ZWxsb3cnPiske1wiLVwiLnJlcGVhdChtYXhXaWR0aCAtIDIpfSs8L3NwYW4+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYDxzcGFuIHN0eWxlPSdjb2xvcjp5ZWxsb3cnPnw8L3NwYW4+YCArXG4gICAgICAgIGAke3RoaXMudGFyZ2V0SXRlbS5nZXRTdHJpbmcoaSAtIDEpfSR7XCIgXCIucmVwZWF0KFxuICAgICAgICAgIG1heFdpZHRoIC0gdGhpcy5nZXRMZW5ndGgoaSAtIDEpXG4gICAgICAgICl9YCArXG4gICAgICAgIGA8c3BhbiBzdHlsZT0nY29sb3I6eWVsbG93Jz58PC9zcGFuPmBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IodGFyZ2V0SXRlbTogSXRlbSkge1xuICAgIHN1cGVyKHRhcmdldEl0ZW0pO1xuICB9XG59XG4iLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIERlY29yYXRvciBleHRlbmRzIEl0ZW0ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGFyZ2V0SXRlbTogSXRlbSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEl0ZW0ge1xuICBhYnN0cmFjdCBnZXRMaW5lc0NvdW50KCk6IG51bWJlcjtcbiAgYWJzdHJhY3QgZ2V0TGVuZ3RoKGk6IG51bWJlcik6IG51bWJlcjtcbiAgYWJzdHJhY3QgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlcjtcbiAgYWJzdHJhY3QgZ2V0U3RyaW5nKGk6IG51bWJlcik6IHN0cmluZztcblxuICBwcmludChkb206IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgY250TGluZXMgPSB0aGlzLmdldExpbmVzQ291bnQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNudExpbmVzOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGkpO1xuICAgICAgcmVzdWx0LnB1c2goc3RyaW5nKTtcbiAgICB9XG4gICAgZG9tLmlubmVySFRNTCA9IHJlc3VsdC5qb2luKFwiXFxuXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgRGVjb3JhdG9yIGZyb20gXCIuL0RlY29yYXRvclwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lTnVtYmVyRGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcbiAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGluZXNDb3VudCgpO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKGk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRMZW5ndGgoaSkgKyA2O1xuICB9XG5cbiAgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRNYXhMZW5ndGgoKSArIDY7XG4gIH1cblxuICBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgJzxzcGFuIHN0eWxlPVwiY29sb3I6Z3JlZW5cIj4nICtcbiAgICAgIGAke2l9YC5wYWRTdGFydCg0LCBcIjBcIikgK1xuICAgICAgYDwvc3Bhbj48c3BhbiBzdHlsZT0nY29sb3I6ZGltZ3JheSc+OiA8L3NwYW4+JHt0aGlzLnRhcmdldEl0ZW0uZ2V0U3RyaW5nKFxuICAgICAgICBpXG4gICAgICApfWBcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IodGFyZ2V0SXRlbTogSXRlbSkge1xuICAgIHN1cGVyKHRhcmdldEl0ZW0pO1xuICB9XG59XG4iLCJpbXBvcnQgRGVjb3JhdG9yIGZyb20gXCIuL0RlY29yYXRvclwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcbiAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGluZXNDb3VudCgpO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKGk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRMZW5ndGgoaSkgKyB0aGlzLmNoLmxlbmd0aCAqIDI7XG4gIH1cblxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldE1heExlbmd0aCgpICsgdGhpcy5jaC5sZW5ndGggKiAyO1xuICB9XG5cbiAgZ2V0U3RyaW5nKGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIGA8c3BhbiBzdHlsZT0nY29sb3I6Z3JheSc+JHt0aGlzLmNofTwvc3Bhbj5gICtcbiAgICAgIGAke3RoaXMudGFyZ2V0SXRlbS5nZXRTdHJpbmcoaSl9YCArXG4gICAgICBgPHNwYW4gc3R5bGU9J2NvbG9yOmdyYXknPiR7dGhpcy5jaH08L3NwYW4+YFxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih0YXJnZXRJdGVtOiBJdGVtLCBwcml2YXRlIGNoOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0YXJnZXRJdGVtKTtcbiAgfVxufVxuIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdzIGV4dGVuZHMgSXRlbSB7XG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgfVxuXG4gIGdldExlbmd0aChpOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRhdGFbaV0ubGVuZ3RoO1xuICB9XG5cbiAgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgbGV0IG1heExlbmd0aCA9IDA7XG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmxlbmd0aCA+IG1heExlbmd0aCkgbWF4TGVuZ3RoID0gaXRlbS5sZW5ndGg7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heExlbmd0aDtcbiAgfVxuXG4gIGdldFN0cmluZyhpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGFbaV07XG4gIH1cblxuICBwcml2YXRlIGRhdGEgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhZGQoc3RyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEucHVzaChzdHIpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCb3hEZWNvcmF0b3IgZnJvbSBcIi4vQm94RGVjb3JhdG9yXCI7XG5pbXBvcnQgTGluZU51bWJlckRlY29yYXRvciBmcm9tIFwiLi9MaW5lTnVtYmVyRGVjb3JhdG9yXCI7XG5pbXBvcnQgU2lkZURlY29yYXRvciBmcm9tIFwiLi9TaWRlRGVjb3JhdG9yXCI7XG5pbXBvcnQgU3RyaW5ncyBmcm9tIFwiLi9TdHJpbmdzXCI7XG5cbmNvbnN0IHN0cnMgPSBuZXcgU3RyaW5ncygpO1xuXG5zdHJzLmFkZChcIkhlbGxvIVwiKTtcbnN0cnMuYWRkKFwiTXkgbmFtZSBpcyBLaW0gQW11Z2FlXCIpO1xuc3Rycy5hZGQoXCJJIGFtIGEgRnJvbnQgRGV2ZWxvcGVyXCIpO1xuc3Rycy5hZGQoXCJEZXNpZ24tUGF0dGVybiBpcyBwb3dlcmZ1bCB0b29sLlwiKTtcblxuY29uc3QgZG9tUHJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInByZVwiKTtcbi8vIHN0cnMucHJpbnQoZG9tUHJlKTtcblxuY29uc3QgZDEgPSBuZXcgU2lkZURlY29yYXRvcihzdHJzLCBcIlwiKTtcbi8vIGQxLnByaW50KGRvbVByZSk7XG5cbmNvbnN0IGQyID0gbmV3IExpbmVOdW1iZXJEZWNvcmF0b3IoZDEpO1xuLy8gZDIucHJpbnQoZG9tUHJlKTtcblxuY29uc3QgZDMgPSBuZXcgQm94RGVjb3JhdG9yKGQyKTtcbmQzLnByaW50KGRvbVByZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=