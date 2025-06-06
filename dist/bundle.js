/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/facade/Cache.ts":
/*!*****************************!*\
  !*** ./src/facade/Cache.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Cache = /** @class */ (function () {
    function Cache() {
        this.cache = new Map();
    }
    Cache.prototype.put = function (row) {
        this.cache.set(row.name, row);
    };
    Cache.prototype.get = function (name) {
        return this.cache.get(name);
    };
    return Cache;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cache);


/***/ }),

/***/ "./src/facade/DBMS.ts":
/*!****************************!*\
  !*** ./src/facade/DBMS.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Row */ "./src/facade/Row.ts");

var DBMS = /** @class */ (function () {
    function DBMS() {
        this.db = new Map();
        this.db.set("jane", new _Row__WEBPACK_IMPORTED_MODULE_0__["default"]("jane", "1990-02-14", "jane09@geosee.co.kr"));
        this.db.set("robert", new _Row__WEBPACK_IMPORTED_MODULE_0__["default"]("robert", "1979-11-05", "nice@gmail.com"));
        this.db.set("dorosh", new _Row__WEBPACK_IMPORTED_MODULE_0__["default"]("dorosh", "1985-08-21", "dorosh@naver.com"));
    }
    DBMS.prototype.query = function (name, callback) {
        var _this = this;
        setTimeout(function () {
            callback(_this.db.get(name));
        }, 1500);
    };
    return DBMS;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DBMS);


/***/ }),

/***/ "./src/facade/Facade.ts":
/*!******************************!*\
  !*** ./src/facade/Facade.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DBMS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DBMS */ "./src/facade/DBMS.ts");
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cache */ "./src/facade/Cache.ts");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ "./src/facade/Message.ts");



var Facade = /** @class */ (function () {
    function Facade() {
        this.dbms = new _DBMS__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.cache = new _Cache__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    Facade.prototype.queryName = function (name, onBeforeQuery, onAfterQury, domOutput) {
        var _this = this;
        var row = this.cache.get(name);
        if (!row) {
            onBeforeQuery();
            this.dbms.query(name, function (row) {
                onAfterQury();
                if (row) {
                    _this.cache.put(row);
                }
                var message = new _Message__WEBPACK_IMPORTED_MODULE_2__["default"](row);
                message.print(domOutput);
            });
        }
        else {
            var message = new _Message__WEBPACK_IMPORTED_MODULE_2__["default"](row);
            message.print(domOutput);
        }
    };
    return Facade;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Facade);


/***/ }),

/***/ "./src/facade/Message.ts":
/*!*******************************!*\
  !*** ./src/facade/Message.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Message = /** @class */ (function () {
    function Message(row) {
        this.row = row;
    }
    Message.prototype.print = function (dom) {
        var domLayout = document.createElement("div");
        domLayout.classList.add("layout");
        if (this.row) {
            domLayout.innerHTML = "\n                <div class=\"name\">".concat(this.row.name, "</div>\n                <div class=\"birthday\">").concat(this.row.birthday, "</div>\n                <div class=\"email\">").concat(this.row.email, "</div>\n            ");
        }
        else {
            domLayout.innerText = "NO RESULT";
        }
        dom.append(domLayout);
    };
    return Message;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);


/***/ }),

/***/ "./src/facade/Row.ts":
/*!***************************!*\
  !*** ./src/facade/Row.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Raw = /** @class */ (function () {
    function Raw(_name, _birthday, _email) {
        this._name = _name;
        this._birthday = _birthday;
        this._email = _email;
    }
    Object.defineProperty(Raw.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Raw.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Raw.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    return Raw;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Raw);


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
/*!*****************************!*\
  !*** ./src/facade/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Facade */ "./src/facade/Facade.ts");

var domInput = document.querySelector("input");
var domButton = document.querySelector("button");
var domResult = document.querySelector(".result");
var facade = new _Facade__WEBPACK_IMPORTED_MODULE_0__["default"]();
domButton.addEventListener("click", function () {
    var name = domInput.value;
    facade.queryName(name, function () {
        domInput.value = "(조회 중...)";
        domButton.disabled = true;
    }, function () {
        domInput.value = name;
        domButton.disabled = false;
    }, domResult);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCO0FBRTlCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakQsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXBELElBQU0sTUFBTSxHQUFHLElBQUksK0NBQU0sRUFBRSxDQUFDO0FBRTVCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDbEMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUU1QixNQUFNLENBQUMsU0FBUyxDQUNkLElBQUksRUFDSjtRQUNFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1FBQzdCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUMsRUFDRDtRQUNFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUMsRUFDRCxTQUFTLENBQ1YsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2ZhY2FkZS9DYWNoZS50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZmFjYWRlL0RCTVMudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2ZhY2FkZS9GYWNhZGUudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2ZhY2FkZS9NZXNzYWdlLnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9mYWNhZGUvUm93LnRzIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9mYWNhZGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FjaGUge1xuICBwcml2YXRlIGNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIFJvdz4oKTtcblxuICBwdXQocm93OiBSb3cpOiB2b2lkIHtcbiAgICB0aGlzLmNhY2hlLnNldChyb3cubmFtZSwgcm93KTtcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpOiBSb3cge1xuICAgIHJldHVybiB0aGlzLmNhY2hlLmdldChuYW1lKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgREJNUyB7XG4gIHByaXZhdGUgZGIgPSBuZXcgTWFwPHN0cmluZywgUm93PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGIuc2V0KFwiamFuZVwiLCBuZXcgUm93KFwiamFuZVwiLCBcIjE5OTAtMDItMTRcIiwgXCJqYW5lMDlAZ2Vvc2VlLmNvLmtyXCIpKTtcbiAgICB0aGlzLmRiLnNldChcInJvYmVydFwiLCBuZXcgUm93KFwicm9iZXJ0XCIsIFwiMTk3OS0xMS0wNVwiLCBcIm5pY2VAZ21haWwuY29tXCIpKTtcbiAgICB0aGlzLmRiLnNldChcImRvcm9zaFwiLCBuZXcgUm93KFwiZG9yb3NoXCIsIFwiMTk4NS0wOC0yMVwiLCBcImRvcm9zaEBuYXZlci5jb21cIikpO1xuICB9XG5cbiAgcXVlcnkobmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHJvdzogUm93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjayh0aGlzLmRiLmdldChuYW1lKSk7XG4gICAgfSwgMTUwMCk7XG4gIH1cbn1cbiIsImltcG9ydCBEQk1TIGZyb20gXCIuL0RCTVNcIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi9DYWNoZVwiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vTWVzc2FnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNhZGUge1xuICBwcml2YXRlIGRibXMgPSBuZXcgREJNUygpO1xuICBwcml2YXRlIGNhY2hlID0gbmV3IENhY2hlKCk7XG5cbiAgcXVlcnlOYW1lKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBvbkJlZm9yZVF1ZXJ5OiAoKSA9PiB2b2lkLFxuICAgIG9uQWZ0ZXJRdXJ5OiAoKSA9PiB2b2lkLFxuICAgIGRvbU91dHB1dDogRWxlbWVudFxuICApOiB2b2lkIHtcbiAgICBjb25zdCByb3cgPSB0aGlzLmNhY2hlLmdldChuYW1lKTtcbiAgICBpZiAoIXJvdykge1xuICAgICAgb25CZWZvcmVRdWVyeSgpO1xuICAgICAgdGhpcy5kYm1zLnF1ZXJ5KG5hbWUsIChyb3cpID0+IHtcbiAgICAgICAgb25BZnRlclF1cnkoKTtcbiAgICAgICAgaWYgKHJvdykge1xuICAgICAgICAgIHRoaXMuY2FjaGUucHV0KHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJvdyk7XG4gICAgICAgIG1lc3NhZ2UucHJpbnQoZG9tT3V0cHV0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uocm93KTtcbiAgICAgIG1lc3NhZ2UucHJpbnQoZG9tT3V0cHV0KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBSb3cgZnJvbSBcIi4vUm93XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdzogUm93KSB7fVxuXG4gIHByaW50KGRvbTogRWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBkb21MYXlvdXQuY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcblxuICAgIGlmICh0aGlzLnJvdykge1xuICAgICAgZG9tTGF5b3V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7dGhpcy5yb3cubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmlydGhkYXlcIj4ke3RoaXMucm93LmJpcnRoZGF5fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbWFpbFwiPiR7dGhpcy5yb3cuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21MYXlvdXQuaW5uZXJUZXh0ID0gYE5PIFJFU1VMVGA7XG4gICAgfVxuICAgIGRvbS5hcHBlbmQoZG9tTGF5b3V0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF3IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2JpcnRoZGF5OiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfZW1haWw6IHN0cmluZ1xuICApIHt9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBnZXQgYmlydGhkYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYmlydGhkYXk7XG4gIH1cbiAgZ2V0IGVtYWlsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBGYWNhZGUgZnJvbSBcIi4vRmFjYWRlXCI7XG5cbmNvbnN0IGRvbUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuY29uc3QgZG9tQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbmNvbnN0IGRvbVJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0XCIpO1xuXG5jb25zdCBmYWNhZGUgPSBuZXcgRmFjYWRlKCk7XG5cbmRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9tSW5wdXQudmFsdWU7XG5cbiAgZmFjYWRlLnF1ZXJ5TmFtZShcbiAgICBuYW1lLFxuICAgICgpID0+IHtcbiAgICAgIGRvbUlucHV0LnZhbHVlID0gXCIo7KGw7ZqMIOykkS4uLilcIjtcbiAgICAgIGRvbUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSxcbiAgICAoKSA9PiB7XG4gICAgICBkb21JbnB1dC52YWx1ZSA9IG5hbWU7XG4gICAgICBkb21CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9LFxuICAgIGRvbVJlc3VsdFxuICApO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=