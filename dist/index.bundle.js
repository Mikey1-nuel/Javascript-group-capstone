"use strict";
(self["webpackChunkjavascript_group_capstone"] = self["webpackChunkjavascript_group_capstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: 'Poppins', sans-serif;\r\n  background: rgb(255, 240, 221);\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 8vh;\r\n  border: 1px solid aquamarine;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 2rem auto;\r\n  font-size: 2rem;\r\n  z-index: 1;\r\n}\r\n\r\n.list-item a {\r\n  text-decoration: none;\r\n  color: black;\r\n  margin-right: 30px;\r\n}\r\n\r\n.like-icon {\r\n  width: 2.5rem;\r\n  vertical-align: middle;\r\n  margin: 0 1.5rem 0.4rem;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n\r\nh3 {\r\n  margin-left: 130px;\r\n}\r\n\r\nh4 {\r\n  margin-left: 100px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\n.itemCard {\r\n  text-decoration: none;\r\n  list-style: none;\r\n  background-color: aquamarine;\r\n  border-radius: 4%;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n}\r\n\r\n.itemCard:hover {\r\n  transform: scale(1.03);\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 4rem;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n.foodCards {\r\n  display: grid;\r\n  gap: 1rem;\r\n  grid-template-columns: auto auto auto;\r\n  padding: 30px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.cardimage {\r\n  display: block;\r\n  max-width: 24rem;\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n  transition: 0.4s;\r\n  background-color: beige;\r\n  margin: 10px;\r\n}\r\n\r\n.btn {\r\n  width: 50%;\r\n  padding: 1rem;\r\n  cursor: pointer;\r\n  border-radius: 7px;\r\n  transition: 0.4s;\r\n  margin-bottom: 10px;\r\n  margin-left: 100px;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 19px;\r\n  box-shadow: 0 4px 5px black;\r\n  text-align: center;\r\n}\r\n\r\n.btn:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.popupcontainer {\r\n  background: aquamarine;\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 20px;\r\n  backdrop-filter: blur(10px);\r\n  border-radius: 20px;\r\n}\r\n\r\n.popup {\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n  display: none;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  align-items: center;\r\n  backdrop-filter: blur(15px);\r\n}\r\n\r\n.food-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.likeCalculation {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.likeSymbol {\r\n  font-size: 30px;\r\n  color: red;\r\n}\r\n\r\n.sub-cont {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n}\r\n\r\n.sub-cont2 {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  height: 30px;\r\n}\r\n\r\n.close {\r\n  width: 5%;\r\n  align-self: flex-end;\r\n}\r\n\r\n.popImg {\r\n  max-width: 85%;\r\n  border-radius: 20px;\r\n}\r\n\r\n.FoodName {\r\n  font-size: 30px;\r\n  color: black;\r\n  align-self: center;\r\n}\r\n\r\n.ingredients {\r\n  font-size: 26px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.ingredientC {\r\n  font-size: 18px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.commentTitle {\r\n  font-size: 20px;\r\n}\r\n\r\n.comments p {\r\n  font-size: 17px;\r\n}\r\n\r\n.flexForm {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.username {\r\n  width: 30%;\r\n  padding: 8px;\r\n  margin-top: 20px;\r\n  font-size: 16px;\r\n}\r\n\r\n#msg {\r\n  width: 30%;\r\n  padding: 8px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\n#msg::placeholder {\r\n  font-size: 16px;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.submit {\r\n  width: 13%;\r\n  padding: 8px 10px;\r\n  font-size: 16px;\r\n  text-align: center;\r\n}\r\n\r\n#footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 1px solid aquamarine;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;EAClC,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,WAAW;EACX,4BAA4B;EAC5B,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,4BAA4B;EAC5B,iBAAiB;EACjB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,qCAAqC;EACrC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,4BAA4B;AAC9B","sourcesContent":["body {\r\n  font-family: 'Poppins', sans-serif;\r\n  background: rgb(255, 240, 221);\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 8vh;\r\n  border: 1px solid aquamarine;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 2rem auto;\r\n  font-size: 2rem;\r\n  z-index: 1;\r\n}\r\n\r\n.list-item a {\r\n  text-decoration: none;\r\n  color: black;\r\n  margin-right: 30px;\r\n}\r\n\r\n.like-icon {\r\n  width: 2.5rem;\r\n  vertical-align: middle;\r\n  margin: 0 1.5rem 0.4rem;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n\r\nh3 {\r\n  margin-left: 130px;\r\n}\r\n\r\nh4 {\r\n  margin-left: 100px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\n.itemCard {\r\n  text-decoration: none;\r\n  list-style: none;\r\n  background-color: aquamarine;\r\n  border-radius: 4%;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n}\r\n\r\n.itemCard:hover {\r\n  transform: scale(1.03);\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 4rem;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n.foodCards {\r\n  display: grid;\r\n  gap: 1rem;\r\n  grid-template-columns: auto auto auto;\r\n  padding: 30px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.cardimage {\r\n  display: block;\r\n  max-width: 24rem;\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n  transition: 0.4s;\r\n  background-color: beige;\r\n  margin: 10px;\r\n}\r\n\r\n.btn {\r\n  width: 50%;\r\n  padding: 1rem;\r\n  cursor: pointer;\r\n  border-radius: 7px;\r\n  transition: 0.4s;\r\n  margin-bottom: 10px;\r\n  margin-left: 100px;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 19px;\r\n  box-shadow: 0 4px 5px black;\r\n  text-align: center;\r\n}\r\n\r\n.btn:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.popupcontainer {\r\n  background: aquamarine;\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 20px;\r\n  backdrop-filter: blur(10px);\r\n  border-radius: 20px;\r\n}\r\n\r\n.popup {\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n  display: none;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  align-items: center;\r\n  backdrop-filter: blur(15px);\r\n}\r\n\r\n.food-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.likeCalculation {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.likeSymbol {\r\n  font-size: 30px;\r\n  color: red;\r\n}\r\n\r\n.sub-cont {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n}\r\n\r\n.sub-cont2 {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  height: 30px;\r\n}\r\n\r\n.close {\r\n  width: 5%;\r\n  align-self: flex-end;\r\n}\r\n\r\n.popImg {\r\n  max-width: 85%;\r\n  border-radius: 20px;\r\n}\r\n\r\n.FoodName {\r\n  font-size: 30px;\r\n  color: black;\r\n  align-self: center;\r\n}\r\n\r\n.ingredients {\r\n  font-size: 26px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.ingredientC {\r\n  font-size: 18px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.commentTitle {\r\n  font-size: 20px;\r\n}\r\n\r\n.comments p {\r\n  font-size: 17px;\r\n}\r\n\r\n.flexForm {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.username {\r\n  width: 30%;\r\n  padding: 8px;\r\n  margin-top: 20px;\r\n  font-size: 16px;\r\n}\r\n\r\n#msg {\r\n  width: 30%;\r\n  padding: 8px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\n#msg::placeholder {\r\n  font-size: 16px;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.submit {\r\n  width: 13%;\r\n  padding: 8px 10px;\r\n  font-size: 16px;\r\n  text-align: center;\r\n}\r\n\r\n#footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 1px solid aquamarine;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_renderCategs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderCategs.js */ "./src/modules/renderCategs.js");
/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comment.js */ "./src/modules/comment.js");
/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render.js */ "./src/modules/render.js");





document.addEventListener('DOMContentLoaded', _modules_render_js__WEBPACK_IMPORTED_MODULE_3__.foodRandomSelection.displayRandomFoodSelection);
window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_renderCategs_js__WEBPACK_IMPORTED_MODULE_1__.renderCategs)();
});
window.setTimeout(_modules_comment_js__WEBPACK_IMPORTED_MODULE_2__.createPop, 2700);


/***/ }),

/***/ "./src/modules/categories.js":
/*!***********************************!*\
  !*** ./src/modules/categories.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categLength": () => (/* binding */ categLength),
/* harmony export */   "fetchCategories": () => (/* binding */ fetchCategories)
/* harmony export */ });
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");


const fetchCategories = async () => {
  const results = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );
  const data = await results.json();
  const { categories } = data;
  (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)(categories);
  return categories;
};

const categLength = async () => {
  const categories = await fetchCategories();
  return categories.length;
};



/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPop": () => (/* binding */ createPop),
/* harmony export */   "get": () => (/* binding */ get)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/modules/render.js");


const get = async (ID, CMT) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/comments?item_id=${ID}`);
  let output = [];
  const data = await res.json();
  const comments = document.querySelectorAll('.comments');
  const commentCount = document.querySelectorAll('.commentC');
  data.forEach((Comment) => {
    output += `<p>[${Comment.creation_date}]&nbsp;&nbsp;${Comment.username}:${Comment.comment}</p>`;
  });
  commentCount[CMT].innerHTML = data.length;
  comments[CMT].innerHTML = output;
};

const createPop = () => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  let county = 0;

  _render_js__WEBPACK_IMPORTED_MODULE_0__.mealsArray.forEach((api) => {
    const popupC = `
<div class="popup">
<img class="close" onclick="this.parentNode.style.display = 'none';" src="https://static.vecteezy.com/system/resources/thumbnails/020/048/793/small/x-transparent-background-free-png.png">
  <div class="popupcontainer">
  <img class="popImg" src="${api[0].strMealThumb}">
  <h3 class="FoodName">${api[0].strMeal}</h3>
  <p class="ingredients">
  The Ingredients
  </p>
  <div class="ingredientC">
  ${api[0].strIngredient1},
  ${api[0].strIngredient2},
  ${api[0].strIngredient3},
  ${api[0].strIngredient4},
  ${api[0].strIngredient5},
  ${api[0].strIngredient6},
  ${api[0].strIngredient7},
  ${api[0].strIngredient8},
  ${api[0].strIngredient9},
  ${api[0].strIngredient10},
  ${api[0].strIngredient11},
  ${api[0].strIngredient12},
  ${api[0].strIngredient13},
  ${api[0].strIngredient14},
  ${api[0].strIngredient15},
  ${api[0].strIngredient16}
  ${api[0].strIngredient17}
  ${api[0].strIngredient18}
  ${api[0].strIngredient19}
  ${api[0].strIngredient20}
  </div>
  <div class="commentTitle">
  &nbsp;Comments&nbsp;[<span class="commentC">0</span>]
  </div>
  <div class="comments">
  </div><br>
  <form class="flexForm">
  <div class="commentTitle" align="center">
  Add comment
  </div>
  <input type="text" class="username" placeholder="username"><br>
  <textarea id="msg" name="user_message" placeholder="Your insight" required maxlength="500"></textarea><br>
  <button class="submit" type="button">Comment</button>
  <div class="idMeal">${api[0].idMeal}</div>
  </form>
  </div>
  </div>
  `;
    get(`"${api[0].idMeal}"`, county);

    county += 1;
    div.innerHTML += popupC;
  });
  body.appendChild(div);
};

window.setTimeout(() => {
  const popButton = document.querySelectorAll('.btn');

  for (let i = 0; i < popButton.length; i += 1) {
    popButton[i].addEventListener('click', () => {
      document.querySelectorAll('.popup')[i].style.display = 'flex';
    });
  }
}, 3000);

const submitC = async (item1, user1, ID) => {
  let count = 0;
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/comments/', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `"${ID}"`,
      username: item1,
      comment: user1,
    }),
  });

  _render_js__WEBPACK_IMPORTED_MODULE_0__.mealsArray.forEach((api) => {
    get(`"${api[0].idMeal}"`, count);
    count += 1;
  });
};

window.setTimeout(() => {
  const submit = document.querySelectorAll('.submit');
  submit.forEach((sub) => {
    sub.addEventListener('click', (e) => {
      submitC(
		  e.target.previousElementSibling
      .previousElementSibling.previousElementSibling.previousElementSibling.value,
        e.target.previousElementSibling.previousElementSibling.value,
        e.target.nextElementSibling.innerHTML,
      );
    });
  });
}, 3000);



/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "postLike": () => (/* binding */ postLike)
/* harmony export */ });
const involveURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const postLike = async (id) => {
  const response = await fetch(
    `${involveURL}/apps/AEzJkDXLf7FGXWlpS77t/likes`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: { 'Content-Type': 'application/json' },
    },
  );
  response();
};

const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AEzJkDXLf7FGXWlpS77t/likes',
  );
  const numOfLikes = await response.json();
  return numOfLikes;
};


/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "foodRandomSelection": () => (/* binding */ foodRandomSelection),
/* harmony export */   "itemCounterFunction": () => (/* binding */ itemCounterFunction),
/* harmony export */   "mealsArray": () => (/* binding */ mealsArray)
/* harmony export */ });
const itemCounterFunction = async (item, element) => {
  if (item === 0) {
    element.innerHTML = ' (0)';
  } else {
    element.innerHTML = ` (${item})`;
  }
};

const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const involvementApiKey = 'AEzJkDXLf7FGXWlpS77t';
const foodCards = document.querySelector('.foodCards');
const mealsArray = [];
let counter = 0;
const foodRandomSelection = {
  displayRandomFoodSelection: () => {
    const getResponse = async () => {
      while (counter < 9) {
      // eslint-disable-next-line no-await-in-loop
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/random.php',
          {
            method: 'GET',
          },
        );

        // eslint-disable-next-line no-await-in-loop
        const foodRandomdata = await response.json();
        mealsArray.push(foodRandomdata.meals);
        counter += 1;
      }
      return mealsArray;
    };
    getResponse()
      .then((mealsArray) => {
        const MealsData = mealsArray;
        foodCards.innerHTML = MealsData.map(
          (meal) => `
<div class="itemCard">
<img src="${meal[0].strMealThumb}" class="cardimage">
<div class="food-info">
<div class="sub-cont">
<div class="sub-cont2">
<p class="food-name">${meal[0].strMeal}</p>
<p class="likeSymbol" data-id=${meal[0].idMeal}>&#10084;</p>
</div>
<div class="likeCalculation">
<div class="likeCount" data-id=${meal[0].idMeal}>0</div>
<div class="likes">likes</div>
</div>
</div>
</div>
<div class="buttons">
<input type="button" class="btn" value="Comments">
</div>
</div>
`,
        ).join('');
      })
      .then(async () => {
        const likeCounterAPI = await fetch(
          `${involvementApiUrl}${involvementApiKey}/likes/`,
        )
          .then((response) => response.json())
          .then((data) => data);

        const likesCounter = foodCards.querySelectorAll('.likeCount');
        likesCounter.forEach((likeCounter) => {
          const likesId = likeCounter.getAttribute('data-id');
          const element = likeCounter;
          likeCounterAPI.forEach((likeAPI) => {
            if (likesId === likeAPI.item_id) {
              element.innerHTML = likeAPI.likes;
            }
          });
        });
        const likesButton = foodCards.querySelectorAll('.likeSymbol');
        likesButton.forEach((likeButton) => {
          likeButton.addEventListener('click', (e) => {
            const targetCounter = e.target.parentElement.nextElementSibling.children[0].innerText;
            e.target.parentElement.nextElementSibling.children[0].innerText = +targetCounter + 1;
            fetch(`${involvementApiUrl}${involvementApiKey}/likes/`, {
              method: 'POST',
              body: JSON.stringify({
                item_id: likeButton.getAttribute('data-id'),
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
          });
        });
        const itemCounter = document.querySelector('.noOfItems');
        itemCounterFunction(counter, itemCounter);
      });
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodRandomSelection);

window.setTimeout(mealsArray, 2);



/***/ }),

/***/ "./src/modules/renderCategs.js":
/*!*************************************!*\
  !*** ./src/modules/renderCategs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayLikes": () => (/* binding */ displayLikes),
/* harmony export */   "renderCategs": () => (/* binding */ renderCategs)
/* harmony export */ });
/* harmony import */ var _categories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.js */ "./src/modules/categories.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");



const displayLikes = async () => {
  const likesNum = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();
  for (let i = 0; i < likesNum.length; i += 1) {
    const id = document.querySelector(`[dataId="${likesNum[i].item_id}"]`);
    if (id) {
      const span = id.querySelector('h4>span');
      span.textContent = likesNum[i].likes;
    }
  }
};

const renderCategs = async () => {
  const allCategories = await (0,_categories_js__WEBPACK_IMPORTED_MODULE_0__.fetchCategories)();
  const categoriesNumber = await (0,_categories_js__WEBPACK_IMPORTED_MODULE_0__.categLength)();

  const categoriesCount = document.querySelector('.categories-count');
  const categoriesContainer = document.querySelector('.card-container');
  let itemsHTML = '';
  allCategories.forEach((el) => {
    itemsHTML += `
    <li class="itemCard" id="${el.idCategory}" dataId="${el.idCategory}">
    <img class="cardimage" src="${el.strCategoryThumb}" alt="food Image">
        <h3>${el.strCategory}</h3>
        <h4 >Likes (<span>0</span>)
        <p class="like-icon">&#10084;<p></h4>
        <button type="button" class="btn btn-category">Comment</button>
    </li>
    `;
  });
  categoriesCount.insertAdjacentHTML('afterbegin', categoriesNumber);
  categoriesContainer.insertAdjacentHTML('beforeend', itemsHTML);
  const likeButtons = document.querySelectorAll('.like-icon');
  likeButtons.forEach((like) => {
    like.addEventListener('click', async (e) => {
      const id = e.target.parentNode.parentNode.getAttribute('dataId');

      await (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.postLike)(id);
      setTimeout(() => {
        (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)(allCategories);
      }, 1000);

      await displayLikes();
    });
  });

  displayLikes();
};



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bURBQW1EO0FBQ25ELGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxtQkFBbUIsRUFBQzs7QUFFbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRytEO0FBQ2Y7O0FBRWhEO0FBQ0EseUJBQXlCLG1EQUFRO0FBQ2pDLGtCQUFrQixxQkFBcUI7QUFDdkMsa0RBQWtELG9CQUFvQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsK0RBQWU7QUFDN0MsaUNBQWlDLDJEQUFXOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGNBQWMsWUFBWSxjQUFjO0FBQ3ZFLGtDQUFrQyxvQkFBb0I7QUFDdEQsY0FBYyxlQUFlO0FBQzdCO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxtREFBUTtBQUNwQjtBQUNBLFFBQVEsbURBQVE7QUFDaEIsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2xpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3JlbmRlckNhdGVncy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI0MCwgMjIxKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA4dmg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBhcXVhbWFyaW5lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDJyZW0gYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0gYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWljb24ge1xcclxcbiAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW46IDAgMS41cmVtIDAuNHJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtQ2FyZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDQlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbUNhcmQ6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDRyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb29kQ2FyZHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZGltYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAyNHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBjb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZDogYXF1YW1hcmluZTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlQ2FsY3VsYXRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlU3ltYm9sIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5zdWItY29udCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi1jb250MiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG4gIHdpZHRoOiA1JTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wSW1nIHtcXHJcXG4gIG1heC13aWR0aDogODUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkZvb2ROYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnRzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50QyB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudFRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIHAge1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleEZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJuYW1lIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbXNnIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbXNnOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0IHtcXHJcXG4gIHdpZHRoOiAxMyU7XFxyXFxuICBwYWRkaW5nOiA4cHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBhcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNDAsIDIyMSk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogOHZoO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYXF1YW1hcmluZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1pY29uIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWFyZ2luOiAwIDEuNXJlbSAwLjRyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbUNhcmQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0JTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1DYXJkOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiA0cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZENhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRpbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMjRyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA1cHggYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGFxdWFtYXJpbmU7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZUNhbGN1bGF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZVN5bWJvbCB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLWNvbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5zdWItY29udDIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICB3aWR0aDogNSU7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcEltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDg1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5Gb29kTmFtZSB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50cyB7XFxyXFxuICBmb250LXNpemU6IDI2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ncmVkaWVudEMge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRUaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cyBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXhGb3JtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51c2VybmFtZSB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuI21zZyB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuI21zZzo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICB3aWR0aDogMTMlO1xcclxcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYXF1YW1hcmluZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyQ2F0ZWdzIH0gZnJvbSAnLi9tb2R1bGVzL3JlbmRlckNhdGVncy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVQb3AgfSBmcm9tICcuL21vZHVsZXMvY29tbWVudC5qcyc7XG5pbXBvcnQgeyBmb29kUmFuZG9tU2VsZWN0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL3JlbmRlci5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmb29kUmFuZG9tU2VsZWN0aW9uLmRpc3BsYXlSYW5kb21Gb29kU2VsZWN0aW9uKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICByZW5kZXJDYXRlZ3MoKTtcbn0pO1xud2luZG93LnNldFRpbWVvdXQoY3JlYXRlUG9wLCAyNzAwKTtcbiIsImltcG9ydCB7IGdldExpa2VzIH0gZnJvbSAnLi9saWtlcy5qcyc7XG5cbmNvbnN0IGZldGNoQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvY2F0ZWdvcmllcy5waHAnLFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0cy5qc29uKCk7XG4gIGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gZGF0YTtcbiAgZ2V0TGlrZXMoY2F0ZWdvcmllcyk7XG4gIHJldHVybiBjYXRlZ29yaWVzO1xufTtcblxuY29uc3QgY2F0ZWdMZW5ndGggPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaENhdGVnb3JpZXMoKTtcbiAgcmV0dXJuIGNhdGVnb3JpZXMubGVuZ3RoO1xufTtcblxuZXhwb3J0IHsgZmV0Y2hDYXRlZ29yaWVzLCBjYXRlZ0xlbmd0aCB9OyIsImltcG9ydCB7IG1lYWxzQXJyYXkgfSBmcm9tICcuL3JlbmRlci5qcyc7XG5cbmNvbnN0IGdldCA9IGFzeW5jIChJRCwgQ01UKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9EUTFXWTd0YmtVSWhSblJhSWR5Wi9jb21tZW50cz9pdGVtX2lkPSR7SUR9YCk7XG4gIGxldCBvdXRwdXQgPSBbXTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRzJyk7XG4gIGNvbnN0IGNvbW1lbnRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50QycpO1xuICBkYXRhLmZvckVhY2goKENvbW1lbnQpID0+IHtcbiAgICBvdXRwdXQgKz0gYDxwPlske0NvbW1lbnQuY3JlYXRpb25fZGF0ZX1dJm5ic3A7Jm5ic3A7JHtDb21tZW50LnVzZXJuYW1lfToke0NvbW1lbnQuY29tbWVudH08L3A+YDtcbiAgfSk7XG4gIGNvbW1lbnRDb3VudFtDTVRdLmlubmVySFRNTCA9IGRhdGEubGVuZ3RoO1xuICBjb21tZW50c1tDTVRdLmlubmVySFRNTCA9IG91dHB1dDtcbn07XG5cbmNvbnN0IGNyZWF0ZVBvcCA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBjb3VudHkgPSAwO1xuXG4gIG1lYWxzQXJyYXkuZm9yRWFjaCgoYXBpKSA9PiB7XG4gICAgY29uc3QgcG9wdXBDID0gYFxuPGRpdiBjbGFzcz1cInBvcHVwXCI+XG48aW1nIGNsYXNzPVwiY2xvc2VcIiBvbmNsaWNrPVwidGhpcy5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XCIgc3JjPVwiaHR0cHM6Ly9zdGF0aWMudmVjdGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvdGh1bWJuYWlscy8wMjAvMDQ4Lzc5My9zbWFsbC94LXRyYW5zcGFyZW50LWJhY2tncm91bmQtZnJlZS1wbmcucG5nXCI+XG4gIDxkaXYgY2xhc3M9XCJwb3B1cGNvbnRhaW5lclwiPlxuICA8aW1nIGNsYXNzPVwicG9wSW1nXCIgc3JjPVwiJHthcGlbMF0uc3RyTWVhbFRodW1ifVwiPlxuICA8aDMgY2xhc3M9XCJGb29kTmFtZVwiPiR7YXBpWzBdLnN0ck1lYWx9PC9oMz5cbiAgPHAgY2xhc3M9XCJpbmdyZWRpZW50c1wiPlxuICBUaGUgSW5ncmVkaWVudHNcbiAgPC9wPlxuICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudENcIj5cbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDF9LFxuICAke2FwaVswXS5zdHJJbmdyZWRpZW50Mn0sXG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQzfSxcbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDR9LFxuICAke2FwaVswXS5zdHJJbmdyZWRpZW50NX0sXG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQ2fSxcbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDd9LFxuICAke2FwaVswXS5zdHJJbmdyZWRpZW50OH0sXG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQ5fSxcbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDEwfSxcbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDExfSxcbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDEyfSxcbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDEzfSxcbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDE0fSxcbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDE1fSxcbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDE2fVxuICAke2FwaVswXS5zdHJJbmdyZWRpZW50MTd9XG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQxOH1cbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDE5fVxuICAke2FwaVswXS5zdHJJbmdyZWRpZW50MjB9XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29tbWVudFRpdGxlXCI+XG4gICZuYnNwO0NvbW1lbnRzJm5ic3A7WzxzcGFuIGNsYXNzPVwiY29tbWVudENcIj4wPC9zcGFuPl1cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb21tZW50c1wiPlxuICA8L2Rpdj48YnI+XG4gIDxmb3JtIGNsYXNzPVwiZmxleEZvcm1cIj5cbiAgPGRpdiBjbGFzcz1cImNvbW1lbnRUaXRsZVwiIGFsaWduPVwiY2VudGVyXCI+XG4gIEFkZCBjb21tZW50XG4gIDwvZGl2PlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiPjxicj5cbiAgPHRleHRhcmVhIGlkPVwibXNnXCIgbmFtZT1cInVzZXJfbWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0XCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiNTAwXCI+PC90ZXh0YXJlYT48YnI+XG4gIDxidXR0b24gY2xhc3M9XCJzdWJtaXRcIiB0eXBlPVwiYnV0dG9uXCI+Q29tbWVudDwvYnV0dG9uPlxuICA8ZGl2IGNsYXNzPVwiaWRNZWFsXCI+JHthcGlbMF0uaWRNZWFsfTwvZGl2PlxuICA8L2Zvcm0+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbiAgICBnZXQoYFwiJHthcGlbMF0uaWRNZWFsfVwiYCwgY291bnR5KTtcblxuICAgIGNvdW50eSArPSAxO1xuICAgIGRpdi5pbm5lckhUTUwgKz0gcG9wdXBDO1xuICB9KTtcbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xufTtcblxud2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICBjb25zdCBwb3BCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3BCdXR0b24ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBwb3BCdXR0b25baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKVtpXS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0pO1xuICB9XG59LCAzMDAwKTtcblxuY29uc3Qgc3VibWl0QyA9IGFzeW5jIChpdGVtMSwgdXNlcjEsIElEKSA9PiB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0RRMVdZN3Ria1VJaFJuUmFJZHlaL2NvbW1lbnRzLycsIHtcblxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBgXCIke0lEfVwiYCxcbiAgICAgIHVzZXJuYW1lOiBpdGVtMSxcbiAgICAgIGNvbW1lbnQ6IHVzZXIxLFxuICAgIH0pLFxuICB9KTtcblxuICBtZWFsc0FycmF5LmZvckVhY2goKGFwaSkgPT4ge1xuICAgIGdldChgXCIke2FwaVswXS5pZE1lYWx9XCJgLCBjb3VudCk7XG4gICAgY291bnQgKz0gMTtcbiAgfSk7XG59O1xuXG53aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtaXQnKTtcbiAgc3VibWl0LmZvckVhY2goKHN1YikgPT4ge1xuICAgIHN1Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBzdWJtaXRDKFxuXHRcdCAgZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlLFxuICAgICAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUsXG4gICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwsXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn0sIDMwMDApO1xuXG5leHBvcnQgeyBjcmVhdGVQb3AsIGdldCB9OyIsImNvbnN0IGludm9sdmVVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcblxuY29uc3QgcG9zdExpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtpbnZvbHZlVVJMfS9hcHBzL0FFekprRFhMZjdGR1hXbHBTNzd0L2xpa2VzYCxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIH0sXG4gICk7XG4gIHJlc3BvbnNlKCk7XG59O1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQUV6SmtEWExmN0ZHWFdscFM3N3QvbGlrZXMnLFxuICApO1xuICBjb25zdCBudW1PZkxpa2VzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gbnVtT2ZMaWtlcztcbn07XG5leHBvcnQgeyBwb3N0TGlrZSwgZ2V0TGlrZXMgfTsiLCJjb25zdCBpdGVtQ291bnRlckZ1bmN0aW9uID0gYXN5bmMgKGl0ZW0sIGVsZW1lbnQpID0+IHtcbiAgaWYgKGl0ZW0gPT09IDApIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcgKDApJztcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGAgKCR7aXRlbX0pYDtcbiAgfVxufTtcblxuY29uc3QgaW52b2x2ZW1lbnRBcGlVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IGludm9sdmVtZW50QXBpS2V5ID0gJ0FFekprRFhMZjdGR1hXbHBTNzd0JztcbmNvbnN0IGZvb2RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb29kQ2FyZHMnKTtcbmNvbnN0IG1lYWxzQXJyYXkgPSBbXTtcbmxldCBjb3VudGVyID0gMDtcbmNvbnN0IGZvb2RSYW5kb21TZWxlY3Rpb24gPSB7XG4gIGRpc3BsYXlSYW5kb21Gb29kU2VsZWN0aW9uOiAoKSA9PiB7XG4gICAgY29uc3QgZ2V0UmVzcG9uc2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICB3aGlsZSAoY291bnRlciA8IDkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9yYW5kb20ucGhwJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgY29uc3QgZm9vZFJhbmRvbWRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIG1lYWxzQXJyYXkucHVzaChmb29kUmFuZG9tZGF0YS5tZWFscyk7XG4gICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZWFsc0FycmF5O1xuICAgIH07XG4gICAgZ2V0UmVzcG9uc2UoKVxuICAgICAgLnRoZW4oKG1lYWxzQXJyYXkpID0+IHtcbiAgICAgICAgY29uc3QgTWVhbHNEYXRhID0gbWVhbHNBcnJheTtcbiAgICAgICAgZm9vZENhcmRzLmlubmVySFRNTCA9IE1lYWxzRGF0YS5tYXAoXG4gICAgICAgICAgKG1lYWwpID0+IGBcbjxkaXYgY2xhc3M9XCJpdGVtQ2FyZFwiPlxuPGltZyBzcmM9XCIke21lYWxbMF0uc3RyTWVhbFRodW1ifVwiIGNsYXNzPVwiY2FyZGltYWdlXCI+XG48ZGl2IGNsYXNzPVwiZm9vZC1pbmZvXCI+XG48ZGl2IGNsYXNzPVwic3ViLWNvbnRcIj5cbjxkaXYgY2xhc3M9XCJzdWItY29udDJcIj5cbjxwIGNsYXNzPVwiZm9vZC1uYW1lXCI+JHttZWFsWzBdLnN0ck1lYWx9PC9wPlxuPHAgY2xhc3M9XCJsaWtlU3ltYm9sXCIgZGF0YS1pZD0ke21lYWxbMF0uaWRNZWFsfT4mIzEwMDg0OzwvcD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImxpa2VDYWxjdWxhdGlvblwiPlxuPGRpdiBjbGFzcz1cImxpa2VDb3VudFwiIGRhdGEtaWQ9JHttZWFsWzBdLmlkTWVhbH0+MDwvZGl2PlxuPGRpdiBjbGFzcz1cImxpa2VzXCI+bGlrZXM8L2Rpdj5cbjwvZGl2PlxuPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG48aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuXCIgdmFsdWU9XCJDb21tZW50c1wiPlxuPC9kaXY+XG48L2Rpdj5cbmAsXG4gICAgICAgICkuam9pbignJyk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBsaWtlQ291bnRlckFQSSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIGAke2ludm9sdmVtZW50QXBpVXJsfSR7aW52b2x2ZW1lbnRBcGlLZXl9L2xpa2VzL2AsXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbGlrZXNDb3VudGVyID0gZm9vZENhcmRzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlQ291bnQnKTtcbiAgICAgICAgbGlrZXNDb3VudGVyLmZvckVhY2goKGxpa2VDb3VudGVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGlrZXNJZCA9IGxpa2VDb3VudGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBsaWtlQ291bnRlcjtcbiAgICAgICAgICBsaWtlQ291bnRlckFQSS5mb3JFYWNoKChsaWtlQVBJKSA9PiB7XG4gICAgICAgICAgICBpZiAobGlrZXNJZCA9PT0gbGlrZUFQSS5pdGVtX2lkKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbGlrZUFQSS5saWtlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGxpa2VzQnV0dG9uID0gZm9vZENhcmRzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlU3ltYm9sJyk7XG4gICAgICAgIGxpa2VzQnV0dG9uLmZvckVhY2goKGxpa2VCdXR0b24pID0+IHtcbiAgICAgICAgICBsaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldENvdW50ZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlblswXS5pbm5lclRleHQgPSArdGFyZ2V0Q291bnRlciArIDE7XG4gICAgICAgICAgICBmZXRjaChgJHtpbnZvbHZlbWVudEFwaVVybH0ke2ludm9sdmVtZW50QXBpS2V5fS9saWtlcy9gLCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgaXRlbV9pZDogbGlrZUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBpdGVtQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub09mSXRlbXMnKTtcbiAgICAgICAgaXRlbUNvdW50ZXJGdW5jdGlvbihjb3VudGVyLCBpdGVtQ291bnRlcik7XG4gICAgICB9KTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvb2RSYW5kb21TZWxlY3Rpb247XG5cbndpbmRvdy5zZXRUaW1lb3V0KG1lYWxzQXJyYXksIDIpO1xuXG5leHBvcnQgeyBmb29kUmFuZG9tU2VsZWN0aW9uLCBtZWFsc0FycmF5LCBpdGVtQ291bnRlckZ1bmN0aW9uIH07IiwiaW1wb3J0IHsgZmV0Y2hDYXRlZ29yaWVzLCBjYXRlZ0xlbmd0aCB9IGZyb20gJy4vY2F0ZWdvcmllcy5qcyc7XG5pbXBvcnQgeyBwb3N0TGlrZSwgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VzLmpzJztcblxuY29uc3QgZGlzcGxheUxpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsaWtlc051bSA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlrZXNOdW0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhSWQ9XCIke2xpa2VzTnVtW2ldLml0ZW1faWR9XCJdYCk7XG4gICAgaWYgKGlkKSB7XG4gICAgICBjb25zdCBzcGFuID0gaWQucXVlcnlTZWxlY3RvcignaDQ+c3BhbicpO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGxpa2VzTnVtW2ldLmxpa2VzO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgcmVuZGVyQ2F0ZWdzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxDYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hDYXRlZ29yaWVzKCk7XG4gIGNvbnN0IGNhdGVnb3JpZXNOdW1iZXIgPSBhd2FpdCBjYXRlZ0xlbmd0aCgpO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXNDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzLWNvdW50Jyk7XG4gIGNvbnN0IGNhdGVnb3JpZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbiAgbGV0IGl0ZW1zSFRNTCA9ICcnO1xuICBhbGxDYXRlZ29yaWVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaXRlbXNIVE1MICs9IGBcbiAgICA8bGkgY2xhc3M9XCJpdGVtQ2FyZFwiIGlkPVwiJHtlbC5pZENhdGVnb3J5fVwiIGRhdGFJZD1cIiR7ZWwuaWRDYXRlZ29yeX1cIj5cbiAgICA8aW1nIGNsYXNzPVwiY2FyZGltYWdlXCIgc3JjPVwiJHtlbC5zdHJDYXRlZ29yeVRodW1ifVwiIGFsdD1cImZvb2QgSW1hZ2VcIj5cbiAgICAgICAgPGgzPiR7ZWwuc3RyQ2F0ZWdvcnl9PC9oMz5cbiAgICAgICAgPGg0ID5MaWtlcyAoPHNwYW4+MDwvc3Bhbj4pXG4gICAgICAgIDxwIGNsYXNzPVwibGlrZS1pY29uXCI+JiMxMDA4NDs8cD48L2g0PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tY2F0ZWdvcnlcIj5Db21tZW50PC9idXR0b24+XG4gICAgPC9saT5cbiAgICBgO1xuICB9KTtcbiAgY2F0ZWdvcmllc0NvdW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGNhdGVnb3JpZXNOdW1iZXIpO1xuICBjYXRlZ29yaWVzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaXRlbXNIVE1MKTtcbiAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1pY29uJyk7XG4gIGxpa2VCdXR0b25zLmZvckVhY2goKGxpa2UpID0+IHtcbiAgICBsaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YUlkJyk7XG5cbiAgICAgIGF3YWl0IHBvc3RMaWtlKGlkKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBnZXRMaWtlcyhhbGxDYXRlZ29yaWVzKTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICBhd2FpdCBkaXNwbGF5TGlrZXMoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGlzcGxheUxpa2VzKCk7XG59O1xuXG5leHBvcnQgeyByZW5kZXJDYXRlZ3MsIGRpc3BsYXlMaWtlcyB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==