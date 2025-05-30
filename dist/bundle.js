/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factorymethod/Bow.ts":
/*!**********************************!*\
  !*** ./src/factorymethod/Bow.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Bow = /** @class */ (function () {
    function Bow() {
    }
    Bow.prototype.use = function () {
        return "화살로 멀리서 쐈다!";
    };
    return Bow;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bow);


/***/ }),

/***/ "./src/factorymethod/Factory.ts":
/*!**************************************!*\
  !*** ./src/factorymethod/Factory.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.create = function (name) {
        var bCreatable = this.isCreatable(name);
        if (bCreatable) {
            var item = this.createItem(name);
            this.postprocessItem(name);
            return item;
        }
    };
    return Factory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Factory);


/***/ }),

/***/ "./src/factorymethod/ItemFactory.ts":
/*!******************************************!*\
  !*** ./src/factorymethod/ItemFactory.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bow */ "./src/factorymethod/Bow.ts");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory */ "./src/factorymethod/Factory.ts");
/* harmony import */ var _Shield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shield */ "./src/factorymethod/Shield.ts");
/* harmony import */ var _Sword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sword */ "./src/factorymethod/Sword.ts");
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




var ItemCount = /** @class */ (function () {
    function ItemCount(_maxCount) {
        this._maxCount = _maxCount;
        this._currentCount = 0;
    }
    Object.defineProperty(ItemCount.prototype, "maxCount", {
        get: function () {
            return this._maxCount;
        },
        enumerable: false,
        configurable: true
    });
    ItemCount.prototype.isCreatable = function () {
        return this._currentCount < this.maxCount;
    };
    ItemCount.prototype.increaseCount = function () {
        if (this.isCreatable)
            this._currentCount++;
    };
    return ItemCount;
}());
var ItemFactory = /** @class */ (function (_super) {
    __extends(ItemFactory, _super);
    function ItemFactory() {
        var _this = _super.call(this) || this;
        _this.repository = new Map();
        _this.repository.set("sword", new ItemCount(3));
        _this.repository.set("shield", new ItemCount(5));
        _this.repository.set("bow", new ItemCount(2));
        return _this;
    }
    ItemFactory.prototype.isCreatable = function (name) {
        var ItemCount = this.repository.get(name);
        return ItemCount.isCreatable();
    };
    ItemFactory.prototype.createItem = function (name) {
        var result = null;
        if (name === "sword")
            result = new _Sword__WEBPACK_IMPORTED_MODULE_3__["default"]();
        else if (name === "shield")
            result = new _Shield__WEBPACK_IMPORTED_MODULE_2__["default"]();
        else if (name === "bow")
            result = new _Bow__WEBPACK_IMPORTED_MODULE_0__["default"]();
        return result;
    };
    ItemFactory.prototype.postprocessItem = function (name) {
        var itemCount = this.repository.get(name);
        itemCount.increaseCount();
    };
    return ItemFactory;
}(_Factory__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFactory);


/***/ }),

/***/ "./src/factorymethod/Shield.ts":
/*!*************************************!*\
  !*** ./src/factorymethod/Shield.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Shield = /** @class */ (function () {
    function Shield() {
    }
    Shield.prototype.use = function () {
        return "방어를 하였다.";
    };
    return Shield;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shield);


/***/ }),

/***/ "./src/factorymethod/Sword.ts":
/*!************************************!*\
  !*** ./src/factorymethod/Sword.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Sword = /** @class */ (function () {
    function Sword() {
    }
    Sword.prototype.use = function () {
        return "칼로 베엇다.";
    };
    return Sword;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sword);


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
/*!************************************!*\
  !*** ./src/factorymethod/index.ts ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemFactory */ "./src/factorymethod/ItemFactory.ts");

var factory = new _ItemFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var domOutput = document.querySelector("textarea");
var buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    return button.addEventListener("click", function (event) {
        var itemName = event.target.innerHTML;
        var item = factory.create(itemName);
        if (item) {
            domOutput.value += "\n".concat(item.use());
        }
        else {
            domOutput.value += "\n".concat(itemName, "\uC744 \uC0AC\uC6A9\uD560\uC218\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4! \u3160_\u3160");
        }
        domOutput.scrollTop = domOutput.scrollHeight;
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q04sU0FBUyxDQUFDLEtBQUssSUFBSSxZQUFLLFFBQVEsa0ZBQW1CLENBQUM7UUFDdEQsQ0FBQztRQUVELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUMvQyxDQUFDLENBQUM7QUFYRixDQVdFLENBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLWdvZi8uL3NyYy9mYWN0b3J5bWV0aG9kL0Jvdy50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZmFjdG9yeW1ldGhvZC9GYWN0b3J5LnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9mYWN0b3J5bWV0aG9kL0l0ZW1GYWN0b3J5LnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9mYWN0b3J5bWV0aG9kL1NoaWVsZC50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZmFjdG9yeW1ldGhvZC9Td29yZC50cyIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZmFjdG9yeW1ldGhvZC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdyBpbXBsZW1lbnRzIEl0ZW0ge1xuICB1c2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCLtmZTsgrTroZwg66mA66as7IScIOyQiOuLpCFcIjtcbiAgfVxufVxuIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5leHBvcnQgdHlwZSBJdGVtTmFtZSA9IFwic3dvcmRcIiB8IFwic2hpZWxkXCIgfCBcImJvd1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBGYWN0b3J5IHtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGlzQ3JlYXRhYmxlKG5hbWU6IEl0ZW1OYW1lKTogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUl0ZW0obmFtZTogSXRlbU5hbWUpOiBJdGVtO1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcG9zdHByb2Nlc3NJdGVtKG5hbWU6IEl0ZW1OYW1lKTogdm9pZDtcblxuICBjcmVhdGUobmFtZTogSXRlbU5hbWUpOiBJdGVtIHtcbiAgICBjb25zdCBiQ3JlYXRhYmxlID0gdGhpcy5pc0NyZWF0YWJsZShuYW1lKTtcbiAgICBpZiAoYkNyZWF0YWJsZSkge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY3JlYXRlSXRlbShuYW1lKTtcbiAgICAgIHRoaXMucG9zdHByb2Nlc3NJdGVtKG5hbWUpO1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQm93IGZyb20gXCIuL0Jvd1wiO1xuaW1wb3J0IEZhY3RvcnksIHsgSXRlbU5hbWUgfSBmcm9tIFwiLi9GYWN0b3J5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5pbXBvcnQgU2hpZWxkIGZyb20gXCIuL1NoaWVsZFwiO1xuaW1wb3J0IFN3b3JkIGZyb20gXCIuL1N3b3JkXCI7XG5cbmNsYXNzIEl0ZW1Db3VudCB7XG4gIHByaXZhdGUgX2N1cnJlbnRDb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWF4Q291bnQ6IG51bWJlcikge31cblxuICBnZXQgbWF4Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heENvdW50O1xuICB9XG5cbiAgaXNDcmVhdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDb3VudCA8IHRoaXMubWF4Q291bnQ7XG4gIH1cblxuICBpbmNyZWFzZUNvdW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQ3JlYXRhYmxlKSB0aGlzLl9jdXJyZW50Q291bnQrKztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtRmFjdG9yeSBleHRlbmRzIEZhY3Rvcnkge1xuICBwcm90ZWN0ZWQgaXNDcmVhdGFibGUobmFtZTogSXRlbU5hbWUpOiBib29sZWFuIHtcbiAgICBjb25zdCBJdGVtQ291bnQgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0KG5hbWUpO1xuICAgIHJldHVybiBJdGVtQ291bnQuaXNDcmVhdGFibGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVJdGVtKG5hbWU6IEl0ZW1OYW1lKTogSXRlbSB7XG4gICAgbGV0IHJlc3VsdDogSXRlbSA9IG51bGw7XG5cbiAgICBpZiAobmFtZSA9PT0gXCJzd29yZFwiKSByZXN1bHQgPSBuZXcgU3dvcmQoKTtcbiAgICBlbHNlIGlmIChuYW1lID09PSBcInNoaWVsZFwiKSByZXN1bHQgPSBuZXcgU2hpZWxkKCk7XG4gICAgZWxzZSBpZiAobmFtZSA9PT0gXCJib3dcIikgcmVzdWx0ID0gbmV3IEJvdygpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByb3RlY3RlZCBwb3N0cHJvY2Vzc0l0ZW0obmFtZTogSXRlbU5hbWUpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtQ291bnQgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0KG5hbWUpO1xuICAgIGl0ZW1Db3VudC5pbmNyZWFzZUNvdW50KCk7XG4gIH1cblxuICBwcml2YXRlIHJlcG9zaXRvcnkgPSBuZXcgTWFwPEl0ZW1OYW1lLCBJdGVtQ291bnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVwb3NpdG9yeS5zZXQoXCJzd29yZFwiLCBuZXcgSXRlbUNvdW50KDMpKTtcbiAgICB0aGlzLnJlcG9zaXRvcnkuc2V0KFwic2hpZWxkXCIsIG5ldyBJdGVtQ291bnQoNSkpO1xuICAgIHRoaXMucmVwb3NpdG9yeS5zZXQoXCJib3dcIiwgbmV3IEl0ZW1Db3VudCgyKSk7XG4gIH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpZWxkIGltcGxlbWVudHMgSXRlbSB7XG4gIHVzZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIuuwqeyWtOulvCDtlZjsmIDri6QuXCI7XG4gIH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dvcmQgaW1wbGVtZW50cyBJdGVtIHtcbiAgdXNlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwi7Lm866GcIOuyoOyXh+uLpC5cIjtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJdGVtTmFtZSB9IGZyb20gXCIuL0ZhY3RvcnlcIjtcbmltcG9ydCBJdGVtRmFjdG9yeSBmcm9tIFwiLi9JdGVtRmFjdG9yeVwiO1xuXG5jb25zdCBmYWN0b3J5ID0gbmV3IEl0ZW1GYWN0b3J5KCk7XG5cbmNvbnN0IGRvbU91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuXG5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBpdGVtTmFtZSA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTDtcblxuICAgIGNvbnN0IGl0ZW0gPSBmYWN0b3J5LmNyZWF0ZShpdGVtTmFtZSBhcyBJdGVtTmFtZSk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGRvbU91dHB1dC52YWx1ZSArPSBgXFxuJHtpdGVtLnVzZSgpfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbU91dHB1dC52YWx1ZSArPSBgXFxuJHtpdGVtTmFtZX3snYQg7IKs7Jqp7ZWg7IiY6rCAIOyXhuyKteuLiOuLpCEg44WgX+OFoGA7XG4gICAgfVxuXG4gICAgZG9tT3V0cHV0LnNjcm9sbFRvcCA9IGRvbU91dHB1dC5zY3JvbGxIZWlnaHQ7XG4gIH0pXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9