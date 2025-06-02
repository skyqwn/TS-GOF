/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/proxy/ProxyImage.ts":
/*!*********************************!*\
  !*** ./src/proxy/ProxyImage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RealImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RealImage */ "./src/proxy/RealImage.ts");

var ProxyImage = /** @class */ (function () {
    function ProxyImage(title, url, parent) {
        this.title = title;
        this.url = url;
        this.parent = parent;
        this.image = null;
        this.domLayout = null;
        this.domTitle = null;
        this.domLayout = document.createElement("div");
        this.domLayout.classList.add("layout");
        this.parent.append(this.domLayout);
        this.domTitle = document.createElement("div");
        this.domTitle.classList.add("title-proxy");
        this.domTitle.innerHTML = "<span>".concat(this.title, "</span><br/><span>Click to load</span>");
        this.domLayout.append(this.domTitle);
    }
    ProxyImage.prototype.append = function () {
        var _this = this;
        if (this.image)
            return;
        this.domLayout.addEventListener("click", function () {
            _this.domLayout.style.border = "none";
            _this.domLayout.innerHTML = "";
            _this.image = new _RealImage__WEBPACK_IMPORTED_MODULE_0__["default"](_this.title, _this.url, _this.domLayout);
            _this.image.append();
        });
    };
    return ProxyImage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProxyImage);


/***/ }),

/***/ "./src/proxy/RealImage.ts":
/*!********************************!*\
  !*** ./src/proxy/RealImage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RealImage = /** @class */ (function () {
    function RealImage(title, url, parent) {
        this.title = title;
        this.url = url;
        this.parent = parent;
        this.domLayout = null;
        this.domTitle = null;
        this.domImage = null;
        this.domLoading = null;
        this.domLayout = document.createElement("div");
        this.domLayout.classList.add("layout");
        this.parent.append(this.domLayout);
        this.domTitle = document.createElement("div");
        this.domTitle.classList.add("title");
        this.domTitle.innerText = this.title;
        this.domLayout.append(this.domTitle);
        this.domLoading = document.createElement("div");
        this.domLoading.classList.add("loading");
        this.domLoading.innerText = "Loading...";
    }
    RealImage.prototype.append = function () {
        var _this = this;
        if (this.domImage)
            return;
        this.domImage = new Image();
        this.domLayout.append(this.domLoading);
        //@ts-ignore
        this.domImage.src = this.url;
        this.domImage.onload = function () {
            setTimeout(function () {
                _this.domLayout.removeChild(_this.domLoading);
                _this.domLayout.append(_this.domImage);
            }, Math.random() * 5000 + 3000);
        };
    };
    return RealImage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RealImage);


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
/*!****************************!*\
  !*** ./src/proxy/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProxyImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProxyImage */ "./src/proxy/ProxyImage.ts");

var items = [
    [
        "설산야경",
        "https://cdn.bhdw.net/im/snow-mountain-night-wallpaper-81305_w635.webp",
    ],
    [
        "외로운늑대",
        "https://cdn.bhdw.net/im/fantasy-world-wallpaper-29897_w635.webp",
    ],
    [
        "강변황혼",
        "https://cdn.bhdw.net/im/sunset-minimalist-wallpaper-81072_w635.webp",
    ],
    [
        "일출",
        "https://cdn.bhdw.net/im/sunset-scenery-minimalist-wallpaper-81379_w635.webp",
    ],
    ["지구탈출", "https://cdn.bhdw.net/im/mountain-scen..."],
    ["고양이", "https://wallpapers.com/images/hd/cute..."],
    ["사마귀", "https://wallpapers.com/images/high/sp..."],
    ["앵무새", "https://wallpapers.com/images/high/go..."],
    ["비둘기", "https://wallpapers.com/images/high/fl..."],
    ["벌", "https://wallpapers.com/images/high/be..."],
    ["닭", "https://wallpapers.com/images/high/ro..."],
    ["도마뱀", "https://wallpapers.com/images/high/gr..."],
    ["노란앵무새", "https://wallpapers.com/images/high/tw..."],
    ["하얀비둘기", "https://wallpapers.com/images/high/el..."],
    ["부엉이", "https://wallpapers.com/images/high/li..."],
    ["무지개비둘기", "https://wallpapers.com/images/high/co..."],
    ["뱀", "https://wallpapers.com/images/high/co..."],
];
var domList = document.querySelector(".list");
items.forEach(function (item) {
    var title = item[0];
    var url = item[1];
    //   const img = new RealImage(title, url, domList);
    var img = new _ProxyImage__WEBPACK_IMPORTED_MODULE_0__["default"](title, url, domList);
    img.append();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQztJQUVoRCxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLWdvZi8uL3NyYy9wcm94eS9Qcm94eUltYWdlLnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9wcm94eS9SZWFsSW1hZ2UudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL3Byb3h5L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwiLi9JbWFnZVwiO1xuaW1wb3J0IFJlYWxJbWFnZSBmcm9tIFwiLi9SZWFsSW1hZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJveHlJbWFnZSBpbXBsZW1lbnRzIEltYWdlIHtcbiAgcHJpdmF0ZSBpbWFnZTogUmVhbEltYWdlID0gbnVsbDtcbiAgcHJpdmF0ZSBkb21MYXlvdXQ6IEhUTUxEaXZFbGVtZW50ID0gbnVsbDtcbiAgcHJpdmF0ZSBkb21UaXRsZTogSFRNTERpdkVsZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZyxcbiAgICBwcml2YXRlIHVybDogc3RyaW5nLFxuICAgIHByaXZhdGUgcGFyZW50OiBFbGVtZW50XG4gICkge1xuICAgIHRoaXMuZG9tTGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmRvbUxheW91dC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmRvbUxheW91dCk7XG5cbiAgICB0aGlzLmRvbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmRvbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1wcm94eVwiKTtcbiAgICB0aGlzLmRvbVRpdGxlLmlubmVySFRNTCA9IGA8c3Bhbj4ke3RoaXMudGl0bGV9PC9zcGFuPjxici8+PHNwYW4+Q2xpY2sgdG8gbG9hZDwvc3Bhbj5gO1xuICAgIHRoaXMuZG9tTGF5b3V0LmFwcGVuZCh0aGlzLmRvbVRpdGxlKTtcbiAgfVxuXG4gIGFwcGVuZCgpIHtcbiAgICBpZiAodGhpcy5pbWFnZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5kb21MYXlvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZG9tTGF5b3V0LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgICAgdGhpcy5kb21MYXlvdXQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgUmVhbEltYWdlKHRoaXMudGl0bGUsIHRoaXMudXJsLCB0aGlzLmRvbUxheW91dCk7XG4gICAgICB0aGlzLmltYWdlLmFwcGVuZCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIi4vSW1hZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhbEltYWdlIGltcGxlbWVudHMgSW1hZ2Uge1xuICBwcml2YXRlIGRvbUxheW91dDogSFRNTERpdkVsZW1lbnQgPSBudWxsO1xuICBwcml2YXRlIGRvbVRpdGxlOiBIVE1MRGl2RWxlbWVudCA9IG51bGw7XG4gIHByaXZhdGUgZG9tSW1hZ2U6IEhUTUxEaXZFbGVtZW50ID0gbnVsbDtcbiAgcHJpdmF0ZSBkb21Mb2FkaW5nOiBIVE1MRGl2RWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IEVsZW1lbnRcbiAgKSB7XG4gICAgdGhpcy5kb21MYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZG9tTGF5b3V0LmNsYXNzTGlzdC5hZGQoXCJsYXlvdXRcIik7XG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMuZG9tTGF5b3V0KTtcblxuICAgIHRoaXMuZG9tVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZG9tVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRoaXMuZG9tVGl0bGUuaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcbiAgICB0aGlzLmRvbUxheW91dC5hcHBlbmQodGhpcy5kb21UaXRsZSk7XG5cbiAgICB0aGlzLmRvbUxvYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZG9tTG9hZGluZy5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ1wiKTtcbiAgICB0aGlzLmRvbUxvYWRpbmcuaW5uZXJUZXh0ID0gXCJMb2FkaW5nLi4uXCI7XG4gIH1cblxuICBhcHBlbmQoKSB7XG4gICAgaWYgKHRoaXMuZG9tSW1hZ2UpIHJldHVybjtcbiAgICB0aGlzLmRvbUltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICB0aGlzLmRvbUxheW91dC5hcHBlbmQodGhpcy5kb21Mb2FkaW5nKTtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICB0aGlzLmRvbUltYWdlLnNyYyA9IHRoaXMudXJsO1xuXG4gICAgdGhpcy5kb21JbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kb21MYXlvdXQucmVtb3ZlQ2hpbGQodGhpcy5kb21Mb2FkaW5nKTtcbiAgICAgICAgdGhpcy5kb21MYXlvdXQuYXBwZW5kKHRoaXMuZG9tSW1hZ2UpO1xuICAgICAgfSwgTWF0aC5yYW5kb20oKSAqIDUwMDAgKyAzMDAwKTtcbiAgICB9O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm94eUltYWdlIGZyb20gXCIuL1Byb3h5SW1hZ2VcIjtcbmltcG9ydCBSZWFsSW1hZ2UgZnJvbSBcIi4vUmVhbEltYWdlXCI7XG5cbmNvbnN0IGl0ZW1zID0gW1xuICBbXG4gICAgXCLshKTsgrDslbzqsr1cIixcbiAgICBcImh0dHBzOi8vY2RuLmJoZHcubmV0L2ltL3Nub3ctbW91bnRhaW4tbmlnaHQtd2FsbHBhcGVyLTgxMzA1X3c2MzUud2VicFwiLFxuICBdLFxuICBbXG4gICAgXCLsmbjroZzsmrTripHrjIBcIixcbiAgICBcImh0dHBzOi8vY2RuLmJoZHcubmV0L2ltL2ZhbnRhc3ktd29ybGQtd2FsbHBhcGVyLTI5ODk3X3c2MzUud2VicFwiLFxuICBdLFxuICBbXG4gICAgXCLqsJXrs4DtmantmLxcIixcbiAgICBcImh0dHBzOi8vY2RuLmJoZHcubmV0L2ltL3N1bnNldC1taW5pbWFsaXN0LXdhbGxwYXBlci04MTA3Ml93NjM1LndlYnBcIixcbiAgXSxcbiAgW1xuICAgIFwi7J287LacXCIsXG4gICAgXCJodHRwczovL2Nkbi5iaGR3Lm5ldC9pbS9zdW5zZXQtc2NlbmVyeS1taW5pbWFsaXN0LXdhbGxwYXBlci04MTM3OV93NjM1LndlYnBcIixcbiAgXSxcbiAgW1wi7KeA6rWs7YOI7LacXCIsIFwiaHR0cHM6Ly9jZG4uYmhkdy5uZXQvaW0vbW91bnRhaW4tc2Nlbi4uLlwiXSxcbiAgW1wi6rOg7JaR7J20XCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGQvY3V0ZS4uLlwiXSxcbiAgW1wi7IKs66eI6reAXCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9zcC4uLlwiXSxcbiAgW1wi7JW166y07IOIXCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9nby4uLlwiXSxcbiAgW1wi67mE65GY6riwXCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9mbC4uLlwiXSxcbiAgW1wi67KMXCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9iZS4uLlwiXSxcbiAgW1wi64utXCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9yby4uLlwiXSxcbiAgW1wi64+E66eI67GAXCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9nci4uLlwiXSxcbiAgW1wi64W4656A7JW166y07IOIXCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC90dy4uLlwiXSxcbiAgW1wi7ZWY7JaA67mE65GY6riwXCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9lbC4uLlwiXSxcbiAgW1wi67aA7JeJ7J20XCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9saS4uLlwiXSxcbiAgW1wi66y07KeA6rCc67mE65GY6riwXCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9jby4uLlwiXSxcbiAgW1wi67GAXCIsIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9jby4uLlwiXSxcbl07XG5cbmNvbnN0IGRvbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RcIik7XG5cbml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgY29uc3QgdGl0bGUgPSBpdGVtWzBdO1xuICBjb25zdCB1cmwgPSBpdGVtWzFdO1xuXG4gIC8vICAgY29uc3QgaW1nID0gbmV3IFJlYWxJbWFnZSh0aXRsZSwgdXJsLCBkb21MaXN0KTtcbiAgY29uc3QgaW1nID0gbmV3IFByb3h5SW1hZ2UodGl0bGUsIHVybCwgZG9tTGlzdCk7XG5cbiAgaW1nLmFwcGVuZCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=