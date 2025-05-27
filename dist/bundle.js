/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/iterator/Array.ts":
/*!*******************************!*\
  !*** ./src/iterator/Array.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayIterator */ "./src/iterator/ArrayIterator.ts");

var Array = /** @class */ (function () {
    function Array(items) {
        this.items = items;
    }
    Array.prototype.getItem = function (index) {
        return this.items[index];
    };
    Object.defineProperty(Array.prototype, "count", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Array.prototype.iterator = function () {
        return new _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    };
    return Array;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array);


/***/ }),

/***/ "./src/iterator/ArrayIterator.ts":
/*!***************************************!*\
  !*** ./src/iterator/ArrayIterator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(array) {
        this.array = array;
        this.index = -1;
    }
    ArrayIterator.prototype.next = function () {
        this.index++;
        return this.index < this.array.count;
    };
    ArrayIterator.prototype.current = function () {
        return this.array.getItem(this.index);
    };
    return ArrayIterator;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayIterator);


/***/ }),

/***/ "./src/iterator/Item.ts":
/*!******************************!*\
  !*** ./src/iterator/Item.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item(_name, _cost) {
        this._name = _name;
        this._cost = _cost;
    }
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


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
/*!*******************************!*\
  !*** ./src/iterator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./src/iterator/Array.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/iterator/Item.ts");


var items = [
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("쿠쿠다스", 2500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("새우깡", 1800),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("뺴뺴로", 1200),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("초코파이", 4600),
];
var array = new _Array__WEBPACK_IMPORTED_MODULE_0__["default"](items);
var iter = array.iterator();
while (iter.next()) {
    var item = iter.current();
    var domItem = document.createElement("div");
    domItem.innerText = "".concat(item.name, " : ").concat(item.cost, "\uC6D0");
    document.body.appendChild(domItem);
    domItem.classList.add("iterator-item");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksZ0JBQU0sSUFBSSxDQUFDLElBQUksV0FBRyxDQUFDO0lBQ25ELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvaXRlcmF0b3IvQXJyYXkudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2l0ZXJhdG9yL0FycmF5SXRlcmF0b3IudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2l0ZXJhdG9yL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2l0ZXJhdG9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZ2dyZWdhdG9yIGZyb20gXCIuL0FnZ3JlZ2F0b3JcIjtcbmltcG9ydCBBcnJheUl0ZXJhdG9yIGZyb20gXCIuL0FycmF5SXRlcmF0b3JcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcbmltcG9ydCBJdGVyYXRvciBmcm9tIFwiLi9JdGVyYXRvclwiO1xuXG5jbGFzcyBBcnJheSBpbXBsZW1lbnRzIEFnZ3JlZ2F0b3I8SXRlbT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1zOiBJdGVtW10pIHt9XG5cbiAgcHVibGljIGdldEl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgaXRlcmF0b3IoKTogSXRlcmF0b3I8SXRlbT4ge1xuICAgIHJldHVybiBuZXcgQXJyYXlJdGVyYXRvcih0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheTtcbiIsImltcG9ydCBBcnJheSBmcm9tIFwiLi9BcnJheVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuaW1wb3J0IEl0ZXJhdG9yIGZyb20gXCIuL0l0ZXJhdG9yXCI7XG5cbmNsYXNzIEFycmF5SXRlcmF0b3IgaW1wbGVtZW50cyBJdGVyYXRvcjxJdGVtPiB7XG4gIHByaXZhdGUgaW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFycmF5OiBBcnJheSkge1xuICAgIHRoaXMuaW5kZXggPSAtMTtcbiAgfVxuXG4gIG5leHQoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5pbmRleCsrO1xuICAgIHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy5hcnJheS5jb3VudDtcbiAgfVxuICBjdXJyZW50KCk6IEl0ZW0ge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmdldEl0ZW0odGhpcy5pbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlJdGVyYXRvcjtcbiIsImNsYXNzIEl0ZW0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcsIHByaXZhdGUgX2Nvc3Q6IG51bWJlcikge31cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIGdldCBjb3N0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3N0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcnJheSBmcm9tIFwiLi9BcnJheVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5jb25zdCBpdGVtcyA9IFtcbiAgbmV3IEl0ZW0oXCLsv6Dsv6Dri6TsiqRcIiwgMjUwMCksXG4gIG5ldyBJdGVtKFwi7IOI7Jqw6rmhXCIsIDE4MDApLFxuICBuZXcgSXRlbShcIuu6tOu6tOuhnFwiLCAxMjAwKSxcbiAgbmV3IEl0ZW0oXCLstIjsvZTtjIzsnbRcIiwgNDYwMCksXG5dO1xuXG5jb25zdCBhcnJheSA9IG5ldyBBcnJheShpdGVtcyk7XG5jb25zdCBpdGVyID0gYXJyYXkuaXRlcmF0b3IoKTtcblxud2hpbGUgKGl0ZXIubmV4dCgpKSB7XG4gIGNvbnN0IGl0ZW0gPSBpdGVyLmN1cnJlbnQoKTtcblxuICBjb25zdCBkb21JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZG9tSXRlbS5pbm5lclRleHQgPSBgJHtpdGVtLm5hbWV9IDogJHtpdGVtLmNvc3R97JuQYDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21JdGVtKTtcblxuICBkb21JdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVyYXRvci1pdGVtXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9