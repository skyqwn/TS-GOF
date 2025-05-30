/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/composite/File.ts":
/*!*******************************!*\
  !*** ./src/composite/File.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./src/composite/Unit.ts");
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

var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(name, size) {
        var _this = _super.call(this, name) || this;
        _this.size = size;
        return _this;
    }
    File.prototype.getSize = function () {
        return this.size;
    };
    return File;
}(_Unit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (File);


/***/ }),

/***/ "./src/composite/Folder.ts":
/*!*********************************!*\
  !*** ./src/composite/Folder.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./src/composite/Unit.ts");
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

var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder(name) {
        var _this = _super.call(this, name) || this;
        _this.units = [];
        return _this;
    }
    Folder.prototype.getSize = function () {
        return this.units.reduce(function (accumulator, currentValue) { return accumulator + currentValue.getSize(); }, 0);
    };
    Folder.prototype.add = function (unit) {
        this.units.push(unit);
    };
    Folder.prototype.createUnit = function (unit, dom) {
        var domUnit = document.createElement("div");
        domUnit.classList.add("unit");
        domUnit.innerHTML = "<div><span>".concat(unit.getName(), "</span><span>(").concat(unit.getSize(), ")</span></div>");
        dom.append(domUnit);
        return domUnit;
    };
    Folder.prototype.list = function (dom) {
        var _this = this;
        var domUnit = this.createUnit(this, dom);
        var bFolder = this instanceof Folder;
        if (bFolder) {
            domUnit.classList.add("folder");
            this.units.forEach(function (unit) {
                if (unit instanceof Folder) {
                    unit.list(domUnit);
                }
                else {
                    _this.createUnit(unit, domUnit);
                }
            });
        }
    };
    return Folder;
}(_Unit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Folder);


/***/ }),

/***/ "./src/composite/Unit.ts":
/*!*******************************!*\
  !*** ./src/composite/Unit.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Unit = /** @class */ (function () {
    function Unit(name) {
        this.name = name;
    }
    Unit.prototype.getName = function () {
        return this.name;
    };
    return Unit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unit);


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
  !*** ./src/composite/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File */ "./src/composite/File.ts");
/* harmony import */ var _Folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Folder */ "./src/composite/Folder.ts");


var root = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("root");
root.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("a.txt", 1000));
root.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("b.txt", 2000));
var sub1 = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("sub1");
root.add(sub1);
sub1.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("sa.txt", 100));
sub1.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("sa.txt", 4000));
var subSub = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("sub3");
sub1.add(subSub);
subSub.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("subsub1.txt", 2250));
subSub.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("subsub1.txt", 5340));
var sub2 = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("sub2");
root.add(sub2);
sub2.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("SA.txt", 250));
sub2.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("SB.txt", 340));
var dom = document.querySelector("#list");
root.list(dom);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSw2Q0FBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSw2Q0FBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRWxDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLWdvZi8uL3NyYy9jb21wb3NpdGUvRmlsZS50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvY29tcG9zaXRlL0ZvbGRlci50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvY29tcG9zaXRlL1VuaXQudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2NvbXBvc2l0ZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVW5pdCBmcm9tIFwiLi9Vbml0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGUgZXh0ZW5kcyBVbml0IHtcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwcml2YXRlIHNpemU6IG51bWJlcikge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG4gIGdldFNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG59XG4iLCJpbXBvcnQgVW5pdCBmcm9tIFwiLi9Vbml0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGRlciBleHRlbmRzIFVuaXQge1xuICBwcml2YXRlIHVuaXRzOiBBcnJheTxVbml0PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG5cbiAgZ2V0U2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnVuaXRzLnJlZHVjZShcbiAgICAgIChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiBhY2N1bXVsYXRvciArIGN1cnJlbnRWYWx1ZS5nZXRTaXplKCksXG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIGFkZCh1bml0OiBVbml0KSB7XG4gICAgdGhpcy51bml0cy5wdXNoKHVuaXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVVbml0KHVuaXQ6IFVuaXQsIGRvbTogRWxlbWVudCkge1xuICAgIGNvbnN0IGRvbVVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvbVVuaXQuY2xhc3NMaXN0LmFkZChcInVuaXRcIik7XG4gICAgZG9tVW5pdC5pbm5lckhUTUwgPSBgPGRpdj48c3Bhbj4ke3VuaXQuZ2V0TmFtZSgpfTwvc3Bhbj48c3Bhbj4oJHt1bml0LmdldFNpemUoKX0pPC9zcGFuPjwvZGl2PmA7XG4gICAgZG9tLmFwcGVuZChkb21Vbml0KTtcbiAgICByZXR1cm4gZG9tVW5pdDtcbiAgfVxuXG4gIGxpc3QoZG9tOiBFbGVtZW50KSB7XG4gICAgY29uc3QgZG9tVW5pdCA9IHRoaXMuY3JlYXRlVW5pdCh0aGlzLCBkb20pO1xuICAgIGNvbnN0IGJGb2xkZXIgPSB0aGlzIGluc3RhbmNlb2YgRm9sZGVyO1xuXG4gICAgaWYgKGJGb2xkZXIpIHtcbiAgICAgIGRvbVVuaXQuY2xhc3NMaXN0LmFkZChcImZvbGRlclwiKTtcbiAgICAgIHRoaXMudW5pdHMuZm9yRWFjaCgodW5pdCkgPT4ge1xuICAgICAgICBpZiAodW5pdCBpbnN0YW5jZW9mIEZvbGRlcikge1xuICAgICAgICAgIHVuaXQubGlzdChkb21Vbml0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZVVuaXQodW5pdCwgZG9tVW5pdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmFtZTogc3RyaW5nKSB7fVxuXG4gIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0U2l6ZSgpOiBudW1iZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBGaWxlIGZyb20gXCIuL0ZpbGVcIjtcbmltcG9ydCBGb2xkZXIgZnJvbSBcIi4vRm9sZGVyXCI7XG5cbmNvbnN0IHJvb3QgPSBuZXcgRm9sZGVyKFwicm9vdFwiKTtcbnJvb3QuYWRkKG5ldyBGaWxlKFwiYS50eHRcIiwgMTAwMCkpO1xucm9vdC5hZGQobmV3IEZpbGUoXCJiLnR4dFwiLCAyMDAwKSk7XG5cbmNvbnN0IHN1YjEgPSBuZXcgRm9sZGVyKFwic3ViMVwiKTtcbnJvb3QuYWRkKHN1YjEpO1xuc3ViMS5hZGQobmV3IEZpbGUoXCJzYS50eHRcIiwgMTAwKSk7XG5zdWIxLmFkZChuZXcgRmlsZShcInNhLnR4dFwiLCA0MDAwKSk7XG5cbmNvbnN0IHN1YlN1YiA9IG5ldyBGb2xkZXIoXCJzdWIzXCIpO1xuc3ViMS5hZGQoc3ViU3ViKTtcbnN1YlN1Yi5hZGQobmV3IEZpbGUoXCJzdWJzdWIxLnR4dFwiLCAyMjUwKSk7XG5zdWJTdWIuYWRkKG5ldyBGaWxlKFwic3Vic3ViMS50eHRcIiwgNTM0MCkpO1xuXG5jb25zdCBzdWIyID0gbmV3IEZvbGRlcihcInN1YjJcIik7XG5yb290LmFkZChzdWIyKTtcbnN1YjIuYWRkKG5ldyBGaWxlKFwiU0EudHh0XCIsIDI1MCkpO1xuc3ViMi5hZGQobmV3IEZpbGUoXCJTQi50eHRcIiwgMzQwKSk7XG5cbmNvbnN0IGRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdFwiKTtcbnJvb3QubGlzdChkb20pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9