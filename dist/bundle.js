/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/flyweight/Digit.ts":
/*!********************************!*\
  !*** ./src/flyweight/Digit.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Digit = /** @class */ (function () {
    function Digit(url) {
        this.url = url;
        this.data = null;
    }
    Digit.prototype.load = function (url, domOutput) {
        var _this = this;
        fetch(url)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            _this.data = json;
            if (domOutput)
                _this.put(domOutput);
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    Digit.prototype.put = function (dom) {
        if (!this.data)
            this.load(this.url, dom);
        else {
            dom.innerHTML = "<div class=\"digit-layout\"></div>";
            var domLayout_1 = dom.querySelector(".digit-layout");
            this.data.forEach(function (item) {
                var len = item.length;
                for (var i = 0; i < len; i++) {
                    var domCell = document.createElement("div");
                    domCell.style.backgroundColor = item[i] === "1" ? "#ff0" : "#333";
                    domLayout_1.append(domCell);
                }
            });
        }
    };
    return Digit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Digit);


/***/ }),

/***/ "./src/flyweight/DigitFactory.ts":
/*!***************************************!*\
  !*** ./src/flyweight/DigitFactory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Digit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Digit */ "./src/flyweight/Digit.ts");

var DigitFactory = /** @class */ (function () {
    function DigitFactory() {
        this.pool = new Array(10).fill(null);
    }
    DigitFactory.prototype.getDigit = function (n) {
        if (!this.pool[n])
            this.pool[n] = new _Digit__WEBPACK_IMPORTED_MODULE_0__["default"]("./data/".concat(n, ".json"));
        return this.pool[n];
    };
    return DigitFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DigitFactory);


/***/ }),

/***/ "./src/flyweight/Number.ts":
/*!*********************************!*\
  !*** ./src/flyweight/Number.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Number = /** @class */ (function () {
    function Number(factory, num) {
        this.factory = factory;
        this.num = num;
    }
    Number.prototype.put = function (dom) {
        var strNum = this.num.toString();
        var len = strNum.length;
        dom.innerHTML = "";
        for (var i = 0; i < len; i++) {
            var div = document.createElement("div");
            this.factory.getDigit(parseInt(strNum[i])).put(div);
            dom.append(div);
        }
    };
    return Number;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Number);


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
  !*** ./src/flyweight/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DigitFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DigitFactory */ "./src/flyweight/DigitFactory.ts");
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Number */ "./src/flyweight/Number.ts");


var factory = new _DigitFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var domTarget = document.querySelector("#tmp");
var value = 434331;
var number = new _Number__WEBPACK_IMPORTED_MODULE_1__["default"](factory, value++);
number.put(domTarget);
setInterval(function () { }, 100);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3RzLWdvZi8uL3NyYy9mbHl3ZWlnaHQvRGlnaXQudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2ZseXdlaWdodC9EaWdpdEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2ZseXdlaWdodC9OdW1iZXIudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2ZseXdlaWdodC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWdpdCB7XG4gIHByaXZhdGUgZGF0YTogQXJyYXk8c3RyaW5nPiA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1cmw6IHN0cmluZykge31cblxuICBwcml2YXRlIGxvYWQodXJsOiBzdHJpbmcsIGRvbU91dHB1dDogRWxlbWVudCkge1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGpzb247XG4gICAgICAgIGlmIChkb21PdXRwdXQpIHRoaXMucHV0KGRvbU91dHB1dCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBwdXQoZG9tOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRhdGEpIHRoaXMubG9hZCh0aGlzLnVybCwgZG9tKTtcbiAgICBlbHNlIHtcbiAgICAgIGRvbS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImRpZ2l0LWxheW91dFwiPjwvZGl2PmA7XG4gICAgICBjb25zdCBkb21MYXlvdXQgPSBkb20ucXVlcnlTZWxlY3RvcihcIi5kaWdpdC1sYXlvdXRcIik7XG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgbGVuID0gaXRlbS5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBkb21DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBkb21DZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGl0ZW1baV0gPT09IFwiMVwiID8gXCIjZmYwXCIgOiBcIiMzMzNcIjtcbiAgICAgICAgICBkb21MYXlvdXQuYXBwZW5kKGRvbUNlbGwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBEaWdpdCBmcm9tIFwiLi9EaWdpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWdpdEZhY3Rvcnkge1xuICBwcml2YXRlIHBvb2w6IEFycmF5PERpZ2l0IHwgbnVsbD4gPSBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCk7XG5cbiAgZ2V0RGlnaXQobjogbnVtYmVyKTogRGlnaXQge1xuICAgIGlmICghdGhpcy5wb29sW25dKSB0aGlzLnBvb2xbbl0gPSBuZXcgRGlnaXQoYC4vZGF0YS8ke259Lmpzb25gKTtcbiAgICByZXR1cm4gdGhpcy5wb29sW25dO1xuICB9XG59XG4iLCJpbXBvcnQgRGlnaXRGYWN0b3J5IGZyb20gXCIuL0RpZ2l0RmFjdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhY3Rvcnk6IERpZ2l0RmFjdG9yeSwgcHJpdmF0ZSBudW06IG51bWJlcikge31cblxuICBwdXQoZG9tOiBFbGVtZW50KSB7XG4gICAgY29uc3Qgc3RyTnVtID0gdGhpcy5udW0udG9TdHJpbmcoKTtcbiAgICBjb25zdCBsZW4gPSBzdHJOdW0ubGVuZ3RoO1xuICAgIGRvbS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0aGlzLmZhY3RvcnkuZ2V0RGlnaXQocGFyc2VJbnQoc3RyTnVtW2ldKSkucHV0KGRpdik7XG4gICAgICBkb20uYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBEaWdpdEZhY3RvcnkgZnJvbSBcIi4vRGlnaXRGYWN0b3J5XCI7XG5pbXBvcnQgTnVtYmVyIGZyb20gXCIuL051bWJlclwiO1xuXG5jb25zdCBmYWN0b3J5ID0gbmV3IERpZ2l0RmFjdG9yeSgpO1xuXG5jb25zdCBkb21UYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RtcFwiKTtcblxubGV0IHZhbHVlID0gNDM0MzMxO1xuXG5jb25zdCBudW1iZXIgPSBuZXcgTnVtYmVyKGZhY3RvcnksIHZhbHVlKyspO1xuXG5udW1iZXIucHV0KGRvbVRhcmdldCk7XG5zZXRJbnRlcnZhbCgoKSA9PiB7fSwgMTAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==