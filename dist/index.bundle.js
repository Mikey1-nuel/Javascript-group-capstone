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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: 'Poppins', sans-serif;\r\n  background: rgb(255, 240, 221);\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 8vh;\r\n  border: 1px solid aquamarine;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 2rem auto;\r\n  font-size: 2rem;\r\n  z-index: 1;\r\n}\r\n\r\n.list-item a {\r\n  text-decoration: none;\r\n  color: black;\r\n  margin-right: 30px;\r\n}\r\n\r\n.like-icon {\r\n  width: 2.5rem;\r\n  vertical-align: middle;\r\n  margin: 0 1.5rem 0.4rem;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n\r\nh3 {\r\n  margin-left: 130px;\r\n}\r\n\r\nh4 {\r\n  margin-left: 100px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\n.itemCard {\r\n  text-decoration: none;\r\n  list-style: none;\r\n  background-color: aquamarine;\r\n  border-radius: 4%;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n}\r\n\r\n.itemCard:hover {\r\n  transform: scale(1.03);\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 4rem;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n.foodCards {\r\n  display: grid;\r\n  gap: 1rem;\r\n  grid-template-columns: auto auto auto;\r\n  padding: 30px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.cardimage {\r\n  display: block;\r\n  max-width: 24rem;\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n  transition: 0.4s;\r\n  background-color: beige;\r\n  margin: 10px;\r\n}\r\n\r\n.btn {\r\n  width: 50%;\r\n  padding: 1rem;\r\n  cursor: pointer;\r\n  border-radius: 7px;\r\n  transition: 0.4s;\r\n  margin-bottom: 10px;\r\n  margin-left: 100px;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 19px;\r\n  box-shadow: 0 4px 5px black;\r\n  text-align: center;\r\n}\r\n\r\n.btn:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.popupcontainer {\r\n  background: aquamarine;\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 20px;\r\n  backdrop-filter: blur(10px);\r\n  border-radius: 20px;\r\n}\r\n\r\n.popup {\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n  display: none;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  align-items: center;\r\n  backdrop-filter: blur(15px);\r\n}\r\n\r\n.food-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.likeCalculation {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.likeSymbol {\r\n  font-size: 30px;\r\n  color: red;\r\n}\r\n\r\n.sub-cont {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n}\r\n\r\n.sub-cont2 {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  height: 30px;\r\n}\r\n\r\n.close {\r\n  width: 5%;\r\n  align-self: flex-end;\r\n}\r\n\r\n.popImg {\r\n  max-width: 85%;\r\n  border-radius: 20px;\r\n}\r\n\r\n.FoodName {\r\n  font-size: 30px;\r\n  color: black;\r\n  align-self: center;\r\n}\r\n\r\n.ingredients {\r\n  font-size: 26px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.ingredientC {\r\n  font-size: 18px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.commentTitle {\r\n  font-size: 20px;\r\n}\r\n\r\n.comments p {\r\n  font-size: 17px;\r\n}\r\n\r\n.flexForm {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.username {\r\n  width: 30%;\r\n  padding: 8px;\r\n  margin-top: 20px;\r\n  font-size: 16px;\r\n}\r\n\r\n#msg {\r\n  width: 30%;\r\n  padding: 8px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\n#msg::placeholder {\r\n  font-size: 16px;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.submit {\r\n  width: 13%;\r\n  padding: 8px 10px;\r\n  font-size: 16px;\r\n  text-align: center;\r\n}\r\n\r\n#footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 1px solid aquamarine;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;EAClC,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,WAAW;EACX,4BAA4B;EAC5B,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,4BAA4B;EAC5B,iBAAiB;EACjB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,qCAAqC;EACrC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,4BAA4B;AAC9B","sourcesContent":["body {\r\n  font-family: 'Poppins', sans-serif;\r\n  background: rgb(255, 240, 221);\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 8vh;\r\n  border: 1px solid aquamarine;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 2rem auto;\r\n  font-size: 2rem;\r\n  z-index: 1;\r\n}\r\n\r\n.list-item a {\r\n  text-decoration: none;\r\n  color: black;\r\n  margin-right: 30px;\r\n}\r\n\r\n.like-icon {\r\n  width: 2.5rem;\r\n  vertical-align: middle;\r\n  margin: 0 1.5rem 0.4rem;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n\r\nh3 {\r\n  margin-left: 130px;\r\n}\r\n\r\nh4 {\r\n  margin-left: 100px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\n.itemCard {\r\n  text-decoration: none;\r\n  list-style: none;\r\n  background-color: aquamarine;\r\n  border-radius: 4%;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n}\r\n\r\n.itemCard:hover {\r\n  transform: scale(1.03);\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 4rem;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n.foodCards {\r\n  display: grid;\r\n  gap: 1rem;\r\n  grid-template-columns: auto auto auto;\r\n  padding: 30px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.cardimage {\r\n  display: block;\r\n  max-width: 24rem;\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n  transition: 0.4s;\r\n  background-color: beige;\r\n  margin: 10px;\r\n}\r\n\r\n.btn {\r\n  width: 50%;\r\n  padding: 1rem;\r\n  cursor: pointer;\r\n  border-radius: 7px;\r\n  transition: 0.4s;\r\n  margin-bottom: 10px;\r\n  margin-left: 100px;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 19px;\r\n  box-shadow: 0 4px 5px black;\r\n  text-align: center;\r\n}\r\n\r\n.btn:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.popupcontainer {\r\n  background: aquamarine;\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 20px;\r\n  backdrop-filter: blur(10px);\r\n  border-radius: 20px;\r\n}\r\n\r\n.popup {\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n  display: none;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  align-items: center;\r\n  backdrop-filter: blur(15px);\r\n}\r\n\r\n.food-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.likeCalculation {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.likeSymbol {\r\n  font-size: 30px;\r\n  color: red;\r\n}\r\n\r\n.sub-cont {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n}\r\n\r\n.sub-cont2 {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  height: 30px;\r\n}\r\n\r\n.close {\r\n  width: 5%;\r\n  align-self: flex-end;\r\n}\r\n\r\n.popImg {\r\n  max-width: 85%;\r\n  border-radius: 20px;\r\n}\r\n\r\n.FoodName {\r\n  font-size: 30px;\r\n  color: black;\r\n  align-self: center;\r\n}\r\n\r\n.ingredients {\r\n  font-size: 26px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.ingredientC {\r\n  font-size: 18px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.commentTitle {\r\n  font-size: 20px;\r\n}\r\n\r\n.comments p {\r\n  font-size: 17px;\r\n}\r\n\r\n.flexForm {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.username {\r\n  width: 30%;\r\n  padding: 8px;\r\n  margin-top: 20px;\r\n  font-size: 16px;\r\n}\r\n\r\n#msg {\r\n  width: 30%;\r\n  padding: 8px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\n#msg::placeholder {\r\n  font-size: 16px;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.submit {\r\n  width: 13%;\r\n  padding: 8px 10px;\r\n  font-size: 16px;\r\n  text-align: center;\r\n}\r\n\r\n#footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 1px solid aquamarine;\r\n}"],"sourceRoot":""}]);
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



// import { fetchCategories } from './modules/categories.js';


document.addEventListener('DOMContentLoaded', _modules_render_js__WEBPACK_IMPORTED_MODULE_3__.foodRandomSelection.displayRandomFoodSelection);
window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_renderCategs_js__WEBPACK_IMPORTED_MODULE_1__.renderCategs)();
});
window.setTimeout(_modules_comment_js__WEBPACK_IMPORTED_MODULE_2__.createPop, 2700);
// document.addEventListener('DOMContentLoaded', fetchCategories);

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
  // eslint-disable-next-line
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
      submitC(// eslint-disable-next-line
		  e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value,
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
      // body: response,
    },
  );
  const result = await response.json();
  return result;
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
/* harmony export */   "mealsArray": () => (/* binding */ mealsArray)
/* harmony export */ });
// import itemCounterFunction from './ItemCount.js';

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
        // eslint-disable-next-line space-infix-ops
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
        // To add or Create like when Heart is pressed
        const likesButton = foodCards.querySelectorAll('.likeSymbol');
        likesButton.forEach((likeButton) => {
          likeButton.addEventListener('click', (e) => {
          // eslint-disable-next-line max-len
            const targetCounter = e.target.parentElement.nextElementSibling.children[0].innerText;
            // eslint-disable-next-line max-len
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
        // item counter
        const itemCounter = document.querySelector('.noOfItems');
        itemCounterFunction(counter, itemCounter);
      });
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodRandomSelection);
// eslint-disable-next-line space-infix-ops
const exporting = () => {
// eslint-disable-next-line
	mealsArray;
};

window.setTimeout(exporting, 2);



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
        <img class="like-icon" src="" alt="like-icon"></h4>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQixrQkFBa0IsRUFBRSxrQkFBa0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsbURBQW1EO0FBQ25ELGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIOztBQUVBLGlFQUFlLG1CQUFtQixFQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRytEO0FBQ2Y7O0FBRWhEO0FBQ0EseUJBQXlCLG1EQUFRO0FBQ2pDLGtCQUFrQixxQkFBcUI7QUFDdkMsa0RBQWtELG9CQUFvQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsK0RBQWU7QUFDN0MsaUNBQWlDLDJEQUFXOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGNBQWMsWUFBWSxjQUFjO0FBQ3ZFLGtDQUFrQyxvQkFBb0I7QUFDdEQsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQVE7QUFDcEI7QUFDQSxRQUFRLG1EQUFRO0FBQ2hCLE9BQU87O0FBRVA7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jYXRlZ29yaWVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9saWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvcmVuZGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZW5kZXJDYXRlZ3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNDAsIDIyMSk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogOHZoO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYXF1YW1hcmluZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1pY29uIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWFyZ2luOiAwIDEuNXJlbSAwLjRyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbUNhcmQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0JTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1DYXJkOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiA0cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZENhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRpbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMjRyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA1cHggYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGFxdWFtYXJpbmU7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZUNhbGN1bGF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZVN5bWJvbCB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLWNvbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5zdWItY29udDIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICB3aWR0aDogNSU7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcEltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDg1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5Gb29kTmFtZSB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50cyB7XFxyXFxuICBmb250LXNpemU6IDI2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ncmVkaWVudEMge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRUaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cyBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXhGb3JtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51c2VybmFtZSB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuI21zZyB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuI21zZzo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICB3aWR0aDogMTMlO1xcclxcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYXF1YW1hcmluZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw0QkFBNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjQwLCAyMjEpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDh2aDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGFxdWFtYXJpbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtaWNvbiB7XFxyXFxuICB3aWR0aDogMi41cmVtO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbjogMCAxLjVyZW0gMC40cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oNCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1DYXJkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtQ2FyZDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGdhcDogNHJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2RDYXJkcyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXgtd2lkdGg6IDI0cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggNXB4IGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cGNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBhcXVhbWFyaW5lO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VDYWxjdWxhdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VTeW1ib2wge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi1jb250IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLWNvbnQyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcbiAgd2lkdGg6IDUlO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5wb3BJbWcge1xcclxcbiAgbWF4LXdpZHRoOiA4NSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uRm9vZE5hbWUge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ncmVkaWVudHMge1xcclxcbiAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnRDIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50VGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMgcCB7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5mbGV4Rm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlcm5hbWUge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbiNtc2cge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbiNtc2c6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQge1xcclxcbiAgd2lkdGg6IDEzJTtcXHJcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGFxdWFtYXJpbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlckNhdGVncyB9IGZyb20gJy4vbW9kdWxlcy9yZW5kZXJDYXRlZ3MuanMnO1xuaW1wb3J0IHsgY3JlYXRlUG9wIH0gZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQuanMnO1xuLy8gaW1wb3J0IHsgZmV0Y2hDYXRlZ29yaWVzIH0gZnJvbSAnLi9tb2R1bGVzL2NhdGVnb3JpZXMuanMnO1xuaW1wb3J0IHsgZm9vZFJhbmRvbVNlbGVjdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9yZW5kZXIuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm9vZFJhbmRvbVNlbGVjdGlvbi5kaXNwbGF5UmFuZG9tRm9vZFNlbGVjdGlvbik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgcmVuZGVyQ2F0ZWdzKCk7XG59KTtcbndpbmRvdy5zZXRUaW1lb3V0KGNyZWF0ZVBvcCwgMjcwMCk7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZmV0Y2hDYXRlZ29yaWVzKTsiLCJpbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXMuanMnO1xuXG5jb25zdCBmZXRjaENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2NhdGVnb3JpZXMucGhwJyxcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdHMuanNvbigpO1xuICBjb25zdCB7IGNhdGVnb3JpZXMgfSA9IGRhdGE7XG4gIGdldExpa2VzKGNhdGVnb3JpZXMpO1xuICByZXR1cm4gY2F0ZWdvcmllcztcbn07XG5cbmNvbnN0IGNhdGVnTGVuZ3RoID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hDYXRlZ29yaWVzKCk7XG4gIHJldHVybiBjYXRlZ29yaWVzLmxlbmd0aDtcbn07XG5cbmV4cG9ydCB7IGZldGNoQ2F0ZWdvcmllcywgY2F0ZWdMZW5ndGggfTsiLCJpbXBvcnQgeyBtZWFsc0FycmF5IH0gZnJvbSAnLi9yZW5kZXIuanMnO1xuXG5jb25zdCBnZXQgPSBhc3luYyAoSUQsIENNVCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvRFExV1k3dGJrVUloUm5SYUlkeVovY29tbWVudHM/aXRlbV9pZD0ke0lEfWApO1xuICBsZXQgb3V0cHV0ID0gW107XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50cycpO1xuICBjb25zdCBjb21tZW50Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudEMnKTtcbiAgZGF0YS5mb3JFYWNoKChDb21tZW50KSA9PiB7XG4gICAgb3V0cHV0ICs9IGA8cD5bJHtDb21tZW50LmNyZWF0aW9uX2RhdGV9XSZuYnNwOyZuYnNwOyR7Q29tbWVudC51c2VybmFtZX06JHtDb21tZW50LmNvbW1lbnR9PC9wPmA7XG4gIH0pO1xuICBjb21tZW50Q291bnRbQ01UXS5pbm5lckhUTUwgPSBkYXRhLmxlbmd0aDtcbiAgY29tbWVudHNbQ01UXS5pbm5lckhUTUwgPSBvdXRwdXQ7XG59O1xuXG5jb25zdCBjcmVhdGVQb3AgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgY291bnR5ID0gMDtcblxuICBtZWFsc0FycmF5LmZvckVhY2goKGFwaSkgPT4ge1xuICAgIGNvbnN0IHBvcHVwQyA9IGBcbjxkaXYgY2xhc3M9XCJwb3B1cFwiPlxuPGltZyBjbGFzcz1cImNsb3NlXCIgb25jbGljaz1cInRoaXMucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1wiIHNyYz1cImh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3RodW1ibmFpbHMvMDIwLzA0OC83OTMvc21hbGwveC10cmFuc3BhcmVudC1iYWNrZ3JvdW5kLWZyZWUtcG5nLnBuZ1wiPlxuICA8ZGl2IGNsYXNzPVwicG9wdXBjb250YWluZXJcIj5cbiAgPGltZyBjbGFzcz1cInBvcEltZ1wiIHNyYz1cIiR7YXBpWzBdLnN0ck1lYWxUaHVtYn1cIj5cbiAgPGgzIGNsYXNzPVwiRm9vZE5hbWVcIj4ke2FwaVswXS5zdHJNZWFsfTwvaDM+XG4gIDxwIGNsYXNzPVwiaW5ncmVkaWVudHNcIj5cbiAgVGhlIEluZ3JlZGllbnRzXG4gIDwvcD5cbiAgPGRpdiBjbGFzcz1cImluZ3JlZGllbnRDXCI+XG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQxfSxcbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDJ9LFxuICAke2FwaVswXS5zdHJJbmdyZWRpZW50M30sXG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQ0fSxcbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDV9LFxuICAke2FwaVswXS5zdHJJbmdyZWRpZW50Nn0sXG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQ3fSxcbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDh9LFxuICAke2FwaVswXS5zdHJJbmdyZWRpZW50OX0sXG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQxMH0sXG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQxMX0sXG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQxMn0sXG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQxM30sXG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQxNH0sXG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQxNX0sXG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQxNn1cbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDE3fVxuICAke2FwaVswXS5zdHJJbmdyZWRpZW50MTh9XG4gICR7YXBpWzBdLnN0ckluZ3JlZGllbnQxOX1cbiAgJHthcGlbMF0uc3RySW5ncmVkaWVudDIwfVxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbW1lbnRUaXRsZVwiPlxuICAmbmJzcDtDb21tZW50cyZuYnNwO1s8c3BhbiBjbGFzcz1cImNvbW1lbnRDXCI+MDwvc3Bhbj5dXG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29tbWVudHNcIj5cbiAgPC9kaXY+PGJyPlxuICA8Zm9ybSBjbGFzcz1cImZsZXhGb3JtXCI+XG4gIDxkaXYgY2xhc3M9XCJjb21tZW50VGl0bGVcIiBhbGlnbj1cImNlbnRlclwiPlxuICBBZGQgY29tbWVudFxuICA8L2Rpdj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIj48YnI+XG4gIDx0ZXh0YXJlYSBpZD1cIm1zZ1wiIG5hbWU9XCJ1c2VyX21lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodFwiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjUwMFwiPjwvdGV4dGFyZWE+PGJyPlxuICA8YnV0dG9uIGNsYXNzPVwic3VibWl0XCIgdHlwZT1cImJ1dHRvblwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cImlkTWVhbFwiPiR7YXBpWzBdLmlkTWVhbH08L2Rpdj5cbiAgPC9mb3JtPlxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG4gICAgZ2V0KGBcIiR7YXBpWzBdLmlkTWVhbH1cImAsIGNvdW50eSk7XG5cbiAgICBjb3VudHkgKz0gMTtcbiAgICBkaXYuaW5uZXJIVE1MICs9IHBvcHVwQztcbiAgfSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbndpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgY29uc3QgcG9wQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wQnV0dG9uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgcG9wQnV0dG9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJylbaV0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9KTtcbiAgfVxufSwgMzAwMCk7XG5cbmNvbnN0IHN1Ym1pdEMgPSBhc3luYyAoaXRlbTEsIHVzZXIxLCBJRCkgPT4ge1xuICBsZXQgY291bnQgPSAwO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvRFExV1k3dGJrVUloUm5SYUlkeVovY29tbWVudHMvJywge1xuXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGBcIiR7SUR9XCJgLFxuICAgICAgdXNlcm5hbWU6IGl0ZW0xLFxuICAgICAgY29tbWVudDogdXNlcjEsXG4gICAgfSksXG4gIH0pO1xuXG4gIG1lYWxzQXJyYXkuZm9yRWFjaCgoYXBpKSA9PiB7XG4gICAgZ2V0KGBcIiR7YXBpWzBdLmlkTWVhbH1cImAsIGNvdW50KTtcbiAgICBjb3VudCArPSAxO1xuICB9KTtcbn07XG5cbndpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Ym1pdCcpO1xuICBzdWJtaXQuZm9yRWFjaCgoc3ViKSA9PiB7XG4gICAgc3ViLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHN1Ym1pdEMoLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cdFx0ICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlLFxuICAgICAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUsXG4gICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwsXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn0sIDMwMDApO1xuXG5leHBvcnQgeyBjcmVhdGVQb3AsIGdldCB9OyIsImNvbnN0IGludm9sdmVVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcblxuY29uc3QgcG9zdExpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtpbnZvbHZlVVJMfS9hcHBzL0FFekprRFhMZjdGR1hXbHBTNzd0L2xpa2VzYCxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgLy8gYm9keTogcmVzcG9uc2UsXG4gICAgfSxcbiAgKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0FFekprRFhMZjdGR1hXbHBTNzd0L2xpa2VzJyxcbiAgKTtcbiAgY29uc3QgbnVtT2ZMaWtlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIG51bU9mTGlrZXM7XG59O1xuZXhwb3J0IHsgcG9zdExpa2UsIGdldExpa2VzIH07IiwiLy8gaW1wb3J0IGl0ZW1Db3VudGVyRnVuY3Rpb24gZnJvbSAnLi9JdGVtQ291bnQuanMnO1xuXG5jb25zdCBpdGVtQ291bnRlckZ1bmN0aW9uID0gYXN5bmMgKGl0ZW0sIGVsZW1lbnQpID0+IHtcbiAgaWYgKGl0ZW0gPT09IDApIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcgKDApJztcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGAgKCR7aXRlbX0pYDtcbiAgfVxufTtcblxuY29uc3QgaW52b2x2ZW1lbnRBcGlVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IGludm9sdmVtZW50QXBpS2V5ID0gJ0FFekprRFhMZjdGR1hXbHBTNzd0JztcbmNvbnN0IGZvb2RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb29kQ2FyZHMnKTtcbmNvbnN0IG1lYWxzQXJyYXkgPSBbXTtcbmxldCBjb3VudGVyID0gMDtcbmNvbnN0IGZvb2RSYW5kb21TZWxlY3Rpb24gPSB7XG4gIGRpc3BsYXlSYW5kb21Gb29kU2VsZWN0aW9uOiAoKSA9PiB7XG4gICAgY29uc3QgZ2V0UmVzcG9uc2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICB3aGlsZSAoY291bnRlciA8IDkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9yYW5kb20ucGhwJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgY29uc3QgZm9vZFJhbmRvbWRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIG1lYWxzQXJyYXkucHVzaChmb29kUmFuZG9tZGF0YS5tZWFscyk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzcGFjZS1pbmZpeC1vcHNcbiAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lYWxzQXJyYXk7XG4gICAgfTtcbiAgICBnZXRSZXNwb25zZSgpXG4gICAgICAudGhlbigobWVhbHNBcnJheSkgPT4ge1xuICAgICAgICBjb25zdCBNZWFsc0RhdGEgPSBtZWFsc0FycmF5O1xuICAgICAgICBmb29kQ2FyZHMuaW5uZXJIVE1MID0gTWVhbHNEYXRhLm1hcChcbiAgICAgICAgICAobWVhbCkgPT4gYFxuPGRpdiBjbGFzcz1cIml0ZW1DYXJkXCI+XG48aW1nIHNyYz1cIiR7bWVhbFswXS5zdHJNZWFsVGh1bWJ9XCIgY2xhc3M9XCJjYXJkaW1hZ2VcIj5cbjxkaXYgY2xhc3M9XCJmb29kLWluZm9cIj5cbjxkaXYgY2xhc3M9XCJzdWItY29udFwiPlxuPGRpdiBjbGFzcz1cInN1Yi1jb250MlwiPlxuPHAgY2xhc3M9XCJmb29kLW5hbWVcIj4ke21lYWxbMF0uc3RyTWVhbH08L3A+XG48cCBjbGFzcz1cImxpa2VTeW1ib2xcIiBkYXRhLWlkPSR7bWVhbFswXS5pZE1lYWx9PiYjMTAwODQ7PC9wPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibGlrZUNhbGN1bGF0aW9uXCI+XG48ZGl2IGNsYXNzPVwibGlrZUNvdW50XCIgZGF0YS1pZD0ke21lYWxbMF0uaWRNZWFsfT4wPC9kaXY+XG48ZGl2IGNsYXNzPVwibGlrZXNcIj5saWtlczwvZGl2PlxuPC9kaXY+XG48L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5cIiB2YWx1ZT1cIkNvbW1lbnRzXCI+XG48L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICAgICAgKS5qb2luKCcnKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpa2VDb3VudGVyQVBJID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYCR7aW52b2x2ZW1lbnRBcGlVcmx9JHtpbnZvbHZlbWVudEFwaUtleX0vbGlrZXMvYCxcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhKTtcblxuICAgICAgICBjb25zdCBsaWtlc0NvdW50ZXIgPSBmb29kQ2FyZHMucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VDb3VudCcpO1xuICAgICAgICBsaWtlc0NvdW50ZXIuZm9yRWFjaCgobGlrZUNvdW50ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBsaWtlc0lkID0gbGlrZUNvdW50ZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGxpa2VDb3VudGVyO1xuICAgICAgICAgIGxpa2VDb3VudGVyQVBJLmZvckVhY2goKGxpa2VBUEkpID0+IHtcbiAgICAgICAgICAgIGlmIChsaWtlc0lkID09PSBsaWtlQVBJLml0ZW1faWQpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBsaWtlQVBJLmxpa2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVG8gYWRkIG9yIENyZWF0ZSBsaWtlIHdoZW4gSGVhcnQgaXMgcHJlc3NlZFxuICAgICAgICBjb25zdCBsaWtlc0J1dHRvbiA9IGZvb2RDYXJkcy5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZVN5bWJvbCcpO1xuICAgICAgICBsaWtlc0J1dHRvbi5mb3JFYWNoKChsaWtlQnV0dG9uKSA9PiB7XG4gICAgICAgICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldENvdW50ZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gK3RhcmdldENvdW50ZXIgKyAxO1xuICAgICAgICAgICAgZmV0Y2goYCR7aW52b2x2ZW1lbnRBcGlVcmx9JHtpbnZvbHZlbWVudEFwaUtleX0vbGlrZXMvYCwge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGl0ZW1faWQ6IGxpa2VCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaXRlbSBjb3VudGVyXG4gICAgICAgIGNvbnN0IGl0ZW1Db3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vT2ZJdGVtcycpO1xuICAgICAgICBpdGVtQ291bnRlckZ1bmN0aW9uKGNvdW50ZXIsIGl0ZW1Db3VudGVyKTtcbiAgICAgIH0pO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vZFJhbmRvbVNlbGVjdGlvbjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzcGFjZS1pbmZpeC1vcHNcbmNvbnN0IGV4cG9ydGluZyA9ICgpID0+IHtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRtZWFsc0FycmF5O1xufTtcblxud2luZG93LnNldFRpbWVvdXQoZXhwb3J0aW5nLCAyKTtcblxuZXhwb3J0IHsgZm9vZFJhbmRvbVNlbGVjdGlvbiwgbWVhbHNBcnJheSB9OyIsImltcG9ydCB7IGZldGNoQ2F0ZWdvcmllcywgY2F0ZWdMZW5ndGggfSBmcm9tICcuL2NhdGVnb3JpZXMuanMnO1xuaW1wb3J0IHsgcG9zdExpa2UsIGdldExpa2VzIH0gZnJvbSAnLi9saWtlcy5qcyc7XG5cbmNvbnN0IGRpc3BsYXlMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZXNOdW0gPSBhd2FpdCBnZXRMaWtlcygpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpa2VzTnVtLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YUlkPVwiJHtsaWtlc051bVtpXS5pdGVtX2lkfVwiXWApO1xuICAgIGlmIChpZCkge1xuICAgICAgY29uc3Qgc3BhbiA9IGlkLnF1ZXJ5U2VsZWN0b3IoJ2g0PnNwYW4nKTtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBsaWtlc051bVtpXS5saWtlcztcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlckNhdGVncyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoQ2F0ZWdvcmllcygpO1xuICBjb25zdCBjYXRlZ29yaWVzTnVtYmVyID0gYXdhaXQgY2F0ZWdMZW5ndGgoKTtcblxuICBjb25zdCBjYXRlZ29yaWVzQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcy1jb3VudCcpO1xuICBjb25zdCBjYXRlZ29yaWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG4gIGxldCBpdGVtc0hUTUwgPSAnJztcbiAgYWxsQ2F0ZWdvcmllcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGl0ZW1zSFRNTCArPSBgXG4gICAgPGxpIGNsYXNzPVwiaXRlbUNhcmRcIiBpZD1cIiR7ZWwuaWRDYXRlZ29yeX1cIiBkYXRhSWQ9XCIke2VsLmlkQ2F0ZWdvcnl9XCI+XG4gICAgPGltZyBjbGFzcz1cImNhcmRpbWFnZVwiIHNyYz1cIiR7ZWwuc3RyQ2F0ZWdvcnlUaHVtYn1cIiBhbHQ9XCJmb29kIEltYWdlXCI+XG4gICAgICAgIDxoMz4ke2VsLnN0ckNhdGVnb3J5fTwvaDM+XG4gICAgICAgIDxoNCA+TGlrZXMgKDxzcGFuPjA8L3NwYW4+KVxuICAgICAgICA8aW1nIGNsYXNzPVwibGlrZS1pY29uXCIgc3JjPVwiXCIgYWx0PVwibGlrZS1pY29uXCI+PC9oND5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWNhdGVnb3J5XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgIDwvbGk+XG4gICAgYDtcbiAgfSk7XG4gIGNhdGVnb3JpZXNDb3VudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBjYXRlZ29yaWVzTnVtYmVyKTtcbiAgY2F0ZWdvcmllc0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGl0ZW1zSFRNTCk7XG5cbiAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1pY29uJyk7XG4gIGxpa2VCdXR0b25zLmZvckVhY2goKGxpa2UpID0+IHtcbiAgICBsaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YUlkJyk7XG4gICAgICBhd2FpdCBwb3N0TGlrZShpZCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZ2V0TGlrZXMoYWxsQ2F0ZWdvcmllcyk7XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgYXdhaXQgZGlzcGxheUxpa2VzKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRpc3BsYXlMaWtlcygpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyQ2F0ZWdzLCBkaXNwbGF5TGlrZXMgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=