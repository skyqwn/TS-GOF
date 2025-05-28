/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template/Article.ts":
/*!*********************************!*\
  !*** ./src/template/Article.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Article = /** @class */ (function () {
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    Article.prototype.getTitle = function () {
        return this.title;
    };
    Article.prototype.getContent = function () {
        return this.content;
    };
    Article.prototype.getFooter = function () {
        return this.footer;
    };
    return Article;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ "./src/template/DisplayArticleTemplate.ts":
/*!************************************************!*\
  !*** ./src/template/DisplayArticleTemplate.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DisPlayArticleTemplate = /** @class */ (function () {
    function DisPlayArticleTemplate(article) {
        var _this = this;
        this.article = article;
        this.displayHtml = function () {
            return "\n            ".concat(_this.titleHtml(), "\n            ").concat(_this.contentHtml(), "\n            ").concat(_this.footerHtml(), "\n        ");
        };
    }
    return DisPlayArticleTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisPlayArticleTemplate);


/***/ }),

/***/ "./src/template/EditableDisplayArticle.ts":
/*!************************************************!*\
  !*** ./src/template/EditableDisplayArticle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
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

var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    function EditableDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    EditableDisplayArticle.prototype.titleHtml = function () {
        return "<div><span>\uC81C\uBAA9</span><input value='".concat(this.article.getTitle(), "'/></div>");
    };
    EditableDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "".concat(item, "\n"); });
        return "<span>\uB0B4\uC6A9</span><br/><textarea cols='50' rows='5'>".concat(items.join(""), "</textarea>");
    };
    EditableDisplayArticle.prototype.footerHtml = function () {
        return "<div><span>\uAE00\uC4F4\uC774</span><input value='".concat(this.article.getFooter(), "'/></div>");
    };
    return EditableDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableDisplayArticle);


/***/ }),

/***/ "./src/template/SimpleDisplayAricle.ts":
/*!*********************************************!*\
  !*** ./src/template/SimpleDisplayAricle.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
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

var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    function SimpleDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    SimpleDisplayArticle.prototype.titleHtml = function () {
        return "<h1>".concat(this.article.getTitle(), "</h1>");
    };
    SimpleDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "<li>".concat(item, "</li>"); });
        return "<ul>".concat(items.join(""), "</ul>");
    };
    SimpleDisplayArticle.prototype.footerHtml = function () {
        return "<h3>".concat(this.article.getFooter(), "</h3>");
    };
    return SimpleDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplayArticle);


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
  !*** ./src/template/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/template/Article.ts");
/* harmony import */ var _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDisplayArticle */ "./src/template/EditableDisplayArticle.ts");
/* harmony import */ var _SimpleDisplayAricle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleDisplayAricle */ "./src/template/SimpleDisplayAricle.ts");



var article = new _Article__WEBPACK_IMPORTED_MODULE_0__["default"]("디자인패턴", ["프론트엔드 개발", "퍼블리싱", "리액트", "타입스크립트", "넥스트제이에스"], "FRONT DEVELOPER");
var display = new _SimpleDisplayAricle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
document.querySelector(".content").innerHTML = display.displayHtml();
document.querySelector(".edit-mode").addEventListener("change", function (e) {
    var display;
    if (e.target.checked) {
        display = new _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__["default"](article);
    }
    else {
        display = new _SimpleDisplayAricle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
    }
    document.querySelector(".content").innerHTML = display.displayHtml();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDOEI7QUFDTDtBQUV6RCxJQUFNLE9BQU8sR0FBRyxJQUFJLGdEQUFPLENBQ3pCLE9BQU8sRUFDUCxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFDaEQsaUJBQWlCLENBQ2xCLENBQUM7QUFFRixJQUFNLE9BQU8sR0FBRyxJQUFJLDREQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUVyRSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7SUFDaEUsSUFBSSxPQUFPLENBQUM7SUFFWixJQUF1QixDQUFDLENBQUMsTUFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLE9BQU8sR0FBRyxJQUFJLCtEQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxHQUFHLElBQUksNERBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2RSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLWdvZi8uL3NyYy90ZW1wbGF0ZS9BcnRpY2xlLnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy90ZW1wbGF0ZS9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlLnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy90ZW1wbGF0ZS9FZGl0YWJsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy90ZW1wbGF0ZS9TaW1wbGVEaXNwbGF5QXJpY2xlLnRzIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLWdvZi8uL3NyYy90ZW1wbGF0ZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcnRpY2xlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgY29udGVudDogc3RyaW5nW10sXG4gICAgcHJpdmF0ZSBmb290ZXI6IHN0cmluZ1xuICApIHt9XG5cbiAgcHVibGljIGdldFRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29udGVudCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGb290ZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb290ZXI7XG4gIH1cbn1cbiIsImltcG9ydCBBcnRpY2xlIGZyb20gXCIuL0FydGljbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRGlzUGxheUFydGljbGVUZW1wbGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcnRpY2xlOiBBcnRpY2xlKSB7fVxuXG4gIHB1YmxpYyByZWFkb25seSBkaXNwbGF5SHRtbCA9ICgpID0+IHtcbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgJHt0aGlzLnRpdGxlSHRtbCgpfVxuICAgICAgICAgICAgJHt0aGlzLmNvbnRlbnRIdG1sKCl9XG4gICAgICAgICAgICAke3RoaXMuZm9vdGVySHRtbCgpfVxuICAgICAgICBgO1xuICB9O1xuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCB0aXRsZUh0bWwoKTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY29udGVudEh0bWwoKTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZm9vdGVySHRtbCgpOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XG5pbXBvcnQgRGlzUGxheUFydGljbGVUZW1wbGF0ZSBmcm9tIFwiLi9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRhYmxlRGlzcGxheUFydGljbGUgZXh0ZW5kcyBEaXNQbGF5QXJ0aWNsZVRlbXBsYXRlIHtcbiAgcHJvdGVjdGVkIHRpdGxlSHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdj48c3Bhbj7soJzrqqk8L3NwYW4+PGlucHV0IHZhbHVlPScke3RoaXMuYXJ0aWNsZS5nZXRUaXRsZSgpfScvPjwvZGl2PmA7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29udGVudEh0bWwoKTogc3RyaW5nIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuYXJ0aWNsZS5nZXRDb250ZW50KCkubWFwKChpdGVtKSA9PiBgJHtpdGVtfVxcbmApO1xuICAgIHJldHVybiBgPHNwYW4+64K07JqpPC9zcGFuPjxici8+PHRleHRhcmVhIGNvbHM9JzUwJyByb3dzPSc1Jz4ke2l0ZW1zLmpvaW4oXG4gICAgICBcIlwiXG4gICAgKX08L3RleHRhcmVhPmA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZm9vdGVySHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdj48c3Bhbj7quIDsk7TsnbQ8L3NwYW4+PGlucHV0IHZhbHVlPScke3RoaXMuYXJ0aWNsZS5nZXRGb290ZXIoKX0nLz48L2Rpdj5gO1xuICB9XG5cbiAgY29uc3RydWN0b3IoYXJ0aWNsZTogQXJ0aWNsZSkge1xuICAgIHN1cGVyKGFydGljbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XG5pbXBvcnQgRGlzUGxheUFydGljbGVUZW1wbGF0ZSBmcm9tIFwiLi9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZURpc3BsYXlBcnRpY2xlIGV4dGVuZHMgRGlzUGxheUFydGljbGVUZW1wbGF0ZSB7XG4gIHByb3RlY3RlZCB0aXRsZUh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxoMT4ke3RoaXMuYXJ0aWNsZS5nZXRUaXRsZSgpfTwvaDE+YDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb250ZW50SHRtbCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoKGl0ZW0pID0+IGA8bGk+JHtpdGVtfTwvbGk+YCk7XG4gICAgcmV0dXJuIGA8dWw+JHtpdGVtcy5qb2luKFwiXCIpfTwvdWw+YDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmb290ZXJIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8aDM+JHt0aGlzLmFydGljbGUuZ2V0Rm9vdGVyKCl9PC9oMz5gO1xuICB9XG5cbiAgY29uc3RydWN0b3IoYXJ0aWNsZTogQXJ0aWNsZSkge1xuICAgIHN1cGVyKGFydGljbGUpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcnRpY2xlIGZyb20gXCIuL0FydGljbGVcIjtcbmltcG9ydCBFZGl0YWJsZURpc3BsYXlBcnRpY2xlIGZyb20gXCIuL0VkaXRhYmxlRGlzcGxheUFydGljbGVcIjtcbmltcG9ydCBTaW1wbGVEaXNwbGF5QXJ0aWNsZSBmcm9tIFwiLi9TaW1wbGVEaXNwbGF5QXJpY2xlXCI7XG5cbmNvbnN0IGFydGljbGUgPSBuZXcgQXJ0aWNsZShcbiAgXCLrlJTsnpDsnbjtjKjthLRcIixcbiAgW1wi7ZSE66Gg7Yq47JeU65OcIOqwnOuwnFwiLCBcIu2NvOu4lOumrOyLsVwiLCBcIuumrOyVoe2KuFwiLCBcIu2DgOyeheyKpO2BrOumve2KuFwiLCBcIuuEpeyKpO2KuOygnOydtOyXkOyKpFwiXSxcbiAgXCJGUk9OVCBERVZFTE9QRVJcIlxuKTtcblxuY29uc3QgZGlzcGxheSA9IG5ldyBTaW1wbGVEaXNwbGF5QXJ0aWNsZShhcnRpY2xlKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5pbm5lckhUTUwgPSBkaXNwbGF5LmRpc3BsYXlIdG1sKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgbGV0IGRpc3BsYXk7XG5cbiAgaWYgKCg8SFRNTElucHV0RWxlbWVudD5lLnRhcmdldCkuY2hlY2tlZCkge1xuICAgIGRpc3BsYXkgPSBuZXcgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZShhcnRpY2xlKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5ID0gbmV3IFNpbXBsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLmlubmVySFRNTCA9IGRpc3BsYXkuZGlzcGxheUh0bWwoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9