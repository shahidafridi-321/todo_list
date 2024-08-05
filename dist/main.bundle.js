"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --padding-top-bottom: 50px;
  --paading-left-right: 80px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  display: grid;
  background-color: #f0f0f0;
  max-width: 100%;
  overflow-x: hidden;
}

.header-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #2b312c;
  color: #fff;
  padding: 10px;
}

.logo {
  width: 70px;
  aspect-ratio: 1/1;
}

.logo-title-container {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-bar {
  display: flex;
  gap: 30px;
}

.introduction {
  width: 100%;
  background: rgb(223, 223, 235);
  display: flex;
  justify-content: center;
  padding: 80px 20px;
}

.intro-content {
  max-width: 570px;
  text-align: center;
}

.intro-content h2 {
  color: #2b312c;
  margin-bottom: 20px;
  font-variant: small-caps;
}

.intro-content p {
  line-height: 1.5rem;
  word-break: normal;
  word-spacing: 4px;
}

.main-content {
  display: flex;
  gap: 10px;
  max-width: 1440px;
  justify-self: center;
  padding: 50px 10px;
}

.todos-container {
  padding: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
}

.todo-manager {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  justify-content: flex-start;
}

.form-container {
  padding: 10px;
  grid-area: form-container;
}

#todosContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #fff;
  box-shadow: 0 0 10px #3d3d3d;
  padding: 20px;
  border-radius: 20px;
}

.todo-item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  box-shadow: 0 0 5px #3d3d3d;
  border-radius: 10px;
  align-items: start;
  max-width: 400px;
  text-align: center;
}

.task-header {
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
}

.new-todo {
  background: none;
  border: none;
}

.delete-btn {
  border: none;
  background: none;
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  color: red;
  font-size: 1.3rem;
  width: 100%;
  height: 100%;
  background: none;
}

.add-todo-btn {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  font-size: 4rem;
  color: blue;
}

.task-details {
  display: flex;
  text-align: center;
  word-break: break-all;
}

.projects-container {
  order: -1;
  padding: 10px;
  border: 1px solid #000;
}

.project-form-container {
  padding: 10px;
}

.project h2 {
  margin: 10px;
}

.home-btn,
.contact-btn,
.about-btn,
.new-project {
  border: 1px solid #976d6d;
  padding: 10px 30px;
  font-weight: bold;
  background: none;
  font-size: inherit;
  cursor: pointer;
  transition: all 0.6s;
  color: #fff;
}

.new-project {
  color: rgba(0, 0, 0, 0.5);
}

button:active {
  background: #000;
  color: #fff;
  transition: all 0.6s;
}

.input-data-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid #976d6d;
  width: auto;
  padding-right: 30px;
  gap: 20px;
}

.todo-item {
  display: flex;
  gap: 8px;
  align-items: center;
}

p,
h2,
input,
strong,
h3 {
  margin: 0;
  padding: 0;
}

.input-data-form,
.project-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: white;
  padding: 20px;
  padding-right: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.input-data-form input,
.input-data-form textarea,
.input-data-form select,
.project-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-data-form input:focus,
.input-data-form textarea:focus,
.input-data-form select:focus,
.project-form input:focus {
  outline: none;
  border-color: #4caf50;
}

.input-data-form button,
.project-form button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.input-data-form button:hover,
.project-form button:hover {
  background-color: #45a049;
}

.input-data-form textarea {
  resize: none;
}

.footer {
  width: 100%;
  background-color: #2b312c;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --padding-top-bottom: 50px;\n  --paading-left-right: 80px;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-size: 1rem;\n  font-family: Arial, Helvetica, sans-serif;\n  height: 100vh;\n  display: grid;\n  background-color: #f0f0f0;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n\n.header-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  background-color: #2b312c;\n  color: #fff;\n  padding: 10px;\n}\n\n.logo {\n  width: 70px;\n  aspect-ratio: 1/1;\n}\n\n.logo-title-container {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\n.nav-bar {\n  display: flex;\n  gap: 30px;\n}\n\n.introduction {\n  width: 100%;\n  background: rgb(223, 223, 235);\n  display: flex;\n  justify-content: center;\n  padding: 80px 20px;\n}\n\n.intro-content {\n  max-width: 570px;\n  text-align: center;\n}\n\n.intro-content h2 {\n  color: #2b312c;\n  margin-bottom: 20px;\n  font-variant: small-caps;\n}\n\n.intro-content p {\n  line-height: 1.5rem;\n  word-break: normal;\n  word-spacing: 4px;\n}\n\n.main-content {\n  display: flex;\n  gap: 10px;\n  max-width: 1440px;\n  justify-self: center;\n  padding: 50px 10px;\n}\n\n.todos-container {\n  padding: 10px;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\n.todo-manager {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: start;\n  justify-content: flex-start;\n}\n\n.form-container {\n  padding: 10px;\n  grid-area: form-container;\n}\n\n#todosContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background: #fff;\n  box-shadow: 0 0 10px #3d3d3d;\n  padding: 20px;\n  border-radius: 20px;\n}\n\n.todo-item {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  gap: 10px;\n  box-shadow: 0 0 5px #3d3d3d;\n  border-radius: 10px;\n  align-items: start;\n  max-width: 400px;\n  text-align: center;\n}\n\n.task-header {\n  display: flex;\n  gap: 5px;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.new-todo {\n  background: none;\n  border: none;\n}\n\n.delete-btn {\n  border: none;\n  background: none;\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n    'FILL' 0,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 24;\n  color: red;\n  font-size: 1.3rem;\n  width: 100%;\n  height: 100%;\n  background: none;\n}\n\n.add-todo-btn {\n  font-variation-settings:\n    'FILL' 0,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 24;\n  font-size: 4rem;\n  color: blue;\n}\n\n.task-details {\n  display: flex;\n  text-align: center;\n  word-break: break-all;\n}\n\n.projects-container {\n  order: -1;\n  padding: 10px;\n  border: 1px solid #000;\n}\n\n.project-form-container {\n  padding: 10px;\n}\n\n.project h2 {\n  margin: 10px;\n}\n\n.home-btn,\n.contact-btn,\n.about-btn,\n.new-project {\n  border: 1px solid #976d6d;\n  padding: 10px 30px;\n  font-weight: bold;\n  background: none;\n  font-size: inherit;\n  cursor: pointer;\n  transition: all 0.6s;\n  color: #fff;\n}\n\n.new-project {\n  color: rgba(0, 0, 0, 0.5);\n}\n\nbutton:active {\n  background: #000;\n  color: #fff;\n  transition: all 0.6s;\n}\n\n.input-data-form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border: 2px solid #976d6d;\n  width: auto;\n  padding-right: 30px;\n  gap: 20px;\n}\n\n.todo-item {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\np,\nh2,\ninput,\nstrong,\nh3 {\n  margin: 0;\n  padding: 0;\n}\n\n.input-data-form,\n.project-form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  background: white;\n  padding: 20px;\n  padding-right: 30px;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.input-data-form input,\n.input-data-form textarea,\n.input-data-form select,\n.project-form input {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.input-data-form input:focus,\n.input-data-form textarea:focus,\n.input-data-form select:focus,\n.project-form input:focus {\n  outline: none;\n  border-color: #4caf50;\n}\n\n.input-data-form button,\n.project-form button {\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background-color 0.3s;\n}\n\n.input-data-form button:hover,\n.project-form button:hover {\n  background-color: #45a049;\n}\n\n.input-data-form textarea {\n  resize: none;\n}\n\n.footer {\n  width: 100%;\n  background-color: #2b312c;\n  height: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/localStorage */ "./src/modules/localStorage.js");
/* harmony import */ var _modules_DOMmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOMmanager */ "./src/modules/DOMmanager.js");
/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createProject */ "./src/modules/createProject.js");
/* harmony import */ var _assets_images_todo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/todo.svg */ "./src/assets/images/todo.svg");


// if the local storage contains todos take it from there other wise Create a default project to be displayed on screen

(0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage)(_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__.defaultProject);

// The new task button is selected and an eventListener is added which generates a form

document.querySelector('.new-todo').addEventListener('click', _modules_DOMmanager__WEBPACK_IMPORTED_MODULE_2__.generateFrom);

// Call for a method that sets the name of the project

(0,_modules_createProject__WEBPACK_IMPORTED_MODULE_3__.setProjectName)(_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__.defaultProject, '.project-name');

// Call for displaying all todos
(0,_modules_DOMmanager__WEBPACK_IMPORTED_MODULE_2__.displayTodos)(_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__.defaultProject, 'todosContainer');

document.querySelector('.new-project').addEventListener('click', _modules_DOMmanager__WEBPACK_IMPORTED_MODULE_2__.generateProjectForm);


// sets the logo of the page

document.getElementById('logo').src = _assets_images_todo_svg__WEBPACK_IMPORTED_MODULE_4__;

/***/ }),

/***/ "./src/modules/DOMmanager.js":
/*!***********************************!*\
  !*** ./src/modules/DOMmanager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayTodos: () => (/* binding */ displayTodos),
/* harmony export */   generateFrom: () => (/* binding */ generateFrom),
/* harmony export */   generateProjectForm: () => (/* binding */ generateProjectForm)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo */ "./src/modules/createTodo.js");
/* harmony import */ var _utils_fetchFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchFormData */ "./src/utils/fetchFormData.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");



// Form generator
function generateFrom() {
  let formContainer = document.getElementById('form-container');
  formContainer.innerHTML = `
    <form action="" class="input-data-form">
      <input type="text" name="" id="title" required placeholder="title">
      <textarea name="" id="description" required placeholder="description" resize="none"></textarea>
      <div class="date-container">
        <label for="duedate">Due Date</label>
        <input type="date" name="" id="duedate" required>
      </div>
      <div class="priority-container">
        <label for="priority">Priority</label>
        <select name="" id="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high" selected>High</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>`;
  let form = document.querySelector('.input-data-form');
  form.addEventListener('submit', (e) => {
    handleForm(e);
    displayTodos(_localStorage__WEBPACK_IMPORTED_MODULE_0__.defaultProject, 'todosContainer');
  });
}

// This function handles form submission
function handleForm(event) {
  event.preventDefault();
  let newTodo = (0,_utils_fetchFormData__WEBPACK_IMPORTED_MODULE_2__.fetchFormData)();
  if (newTodo.title && newTodo.description && newTodo.dueDate && newTodo.priority) {
    (0,_createTodo__WEBPACK_IMPORTED_MODULE_1__.addTodoToProject)(_localStorage__WEBPACK_IMPORTED_MODULE_0__.defaultProject, newTodo.title, newTodo.description, newTodo.dueDate, newTodo.priority);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage)(_localStorage__WEBPACK_IMPORTED_MODULE_0__.defaultProject);
  }
  let formContainer = document.getElementById('form-container');
  formContainer.innerHTML = '';
}

// It fetches data from form


// Function for displaying all todos
function displayTodos(project, todosContainerId) {
  let todosContainer = document.getElementById(todosContainerId);
  todosContainer.innerHTML = '';
  todosContainer.innerHTML += `<h2>${project.name}</h2>`;
  let todos = project.todos;
  todos.forEach((todo, index) => {
    todosContainer.innerHTML += `
      <div class="todo-item">
        <div class="task-header">
          <h2>${todo.title}</h2>
          <p>${todo.dueDate}</p>
          <strong>${todo.priority}</strong>
          <button class="delete-btn" data-index="${index}"><span title="Delete todo" class="material-symbols-outlined">
delete
</span></button>
        </div>
        <div class="task-details">
          <p class="description">${todo.description}</p>
        </div>
      </div>`;
  });

  deleteTodo();
}

// this funtion deletes todo when a delete btn is clicked
function deleteTodo() {
  let deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let index = e.currentTarget.getAttribute('data-index');
      _localStorage__WEBPACK_IMPORTED_MODULE_0__.defaultProject.todos.splice(index, 1);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage)(_localStorage__WEBPACK_IMPORTED_MODULE_0__.defaultProject);
      displayTodos(_localStorage__WEBPACK_IMPORTED_MODULE_0__.defaultProject, 'todosContainer');
    });
  });
}

// Generates a form that asks for project name

function generateProjectForm() {
  let formContainer = document.querySelector('.project-form-container');
  formContainer.innerHTML = `
    <form class="project-form">
      <input type="text" required placeholder="project name" id="project-name">
      <button type="submit">Submit</button>
    </form>`;
  let form = document.querySelector('.project-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchesProjectName('project-name');
    formContainer.innerHTML = '';
    (0,_createProject__WEBPACK_IMPORTED_MODULE_3__.createNewProject)();
  });
}


function fetchesProjectName(projectId) {
  let projectName = document.getElementById(projectId).value;
  _createProject__WEBPACK_IMPORTED_MODULE_3__.allNewProjects.push(projectName);
}


/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allNewProjects: () => (/* binding */ allNewProjects),
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   setProjectName: () => (/* binding */ setProjectName)
/* harmony export */ });
// This factory creates a project object
function createProject(name) {
  let todos = [];
  return {
    name,
    todos,
  };
}

// Sets project name
function setProjectName(project, projectClass) {
  let projectName = document.querySelector(projectClass);
  projectName.textContent = project.name;
}


// Stores new projects names
let allNewProjects = [];

// Gets values from generated form and pushes it to the projectNames array

// Creates new project for all the names in projectNames array
function createNewProject() {
  let projectContainer = document.querySelector('.projects');
  projectContainer.innerHTML = '';
  allNewProjects.forEach(project => {
    let div = document.createElement('div');
    div.classList.add('project');
    let name = document.createElement('h2');
    name.classList.add('project-name');
    name.textContent = project;
    div.appendChild(name);
    projectContainer.appendChild(div);
  });
}


/***/ }),

/***/ "./src/modules/createTodo.js":
/*!***********************************!*\
  !*** ./src/modules/createTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodoToProject: () => (/* binding */ addTodoToProject)
/* harmony export */ });
// This factory creates a todo object
function createTodo(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
  };
}

// It creates todo obj and pushes it in the provided project
function addTodoToProject(project, title, description, duedate, priority) {
  let todo = createTodo(title, description, duedate, priority);
  project.todos.push(todo);
}


/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultProject: () => (/* binding */ defaultProject),
/* harmony export */   saveProjectToLocalStorage: () => (/* binding */ saveProjectToLocalStorage)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");
// Save the updated project to local storage
function saveProjectToLocalStorage(project) {
  localStorage.setItem('localCopyOfDefaultProject', JSON.stringify(project));
}


let defaultProject = JSON.parse(localStorage.getItem('localCopyOfDefaultProject')) || (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)('Default Project');



/***/ }),

/***/ "./src/utils/fetchFormData.js":
/*!************************************!*\
  !*** ./src/utils/fetchFormData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchFormData: () => (/* binding */ fetchFormData)
/* harmony export */ });
function fetchFormData() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('duedate').value;
  const priority = document.getElementById('priority').value;

  return {
    title,
    description,
    dueDate,
    priority
  };
}


/***/ }),

/***/ "./src/assets/images/todo.svg":
/*!************************************!*\
  !*** ./src/assets/images/todo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f231f9c1b24159ac6b64.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFV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O0FBQ21EO0FBQzVDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQWdCO0FBQ3BCLEdBQUc7QUFDSDs7QUFFaUQ7QUFDakQ7QUFDQTtBQUNBLEVBQUUsMERBQWM7QUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7OztBQUdBO0FBQ087O0FBRVA7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDTztBQUNQO0FBQ0E7O0FBRThDO0FBQ3ZDLHNGQUFzRiw2REFBYTs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL0RPTW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3V0aWxzL2ZldGNoRm9ybURhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1wYWRkaW5nLXRvcC1ib3R0b206IDUwcHg7XG4gIC0tcGFhZGluZy1sZWZ0LXJpZ2h0OiA4MHB4O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjMxMmM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA3MHB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbn1cblxuLmxvZ28tdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbn1cblxuLmludHJvZHVjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjIzLCAyMjMsIDIzNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA4MHB4IDIwcHg7XG59XG5cbi5pbnRyby1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA1NzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW50cm8tY29udGVudCBoMiB7XG4gIGNvbG9yOiAjMmIzMTJjO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG59XG5cbi5pbnRyby1jb250ZW50IHAge1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtc3BhY2luZzogNHB4O1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHggMTBweDtcbn1cblxuLnRvZG9zLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG8tbWFuYWdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGdyaWQtYXJlYTogZm9ybS1jb250YWluZXI7XG59XG5cbiN0b2Rvc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzNkM2QzZDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnRvZG8taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGdhcDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjM2QzZDNkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhc2staGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5ldy10b2RvIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAnRklMTCcgMCxcbiAgICAnd2dodCcgNDAwLFxuICAgICdHUkFEJyAwLFxuICAgICdvcHN6JyAyNDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5hZGQtdG9kby1idG4ge1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAnRklMTCcgMCxcbiAgICAnd2dodCcgNDAwLFxuICAgICdHUkFEJyAwLFxuICAgICdvcHN6JyAyNDtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLnRhc2stZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgb3JkZXI6IC0xO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufVxuXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm9qZWN0IGgyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaG9tZS1idG4sXG4uY29udGFjdC1idG4sXG4uYWJvdXQtYnRuLFxuLm5ldy1wcm9qZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk3NmQ2ZDtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5ldy1wcm9qZWN0IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbn1cblxuLmlucHV0LWRhdGEtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTc2ZDZkO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4udG9kby1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnAsXG5oMixcbmlucHV0LFxuc3Ryb25nLFxuaDMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbnB1dC1kYXRhLWZvcm0sXG4ucHJvamVjdC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaW5wdXQtZGF0YS1mb3JtIGlucHV0LFxuLmlucHV0LWRhdGEtZm9ybSB0ZXh0YXJlYSxcbi5pbnB1dC1kYXRhLWZvcm0gc2VsZWN0LFxuLnByb2plY3QtZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbnB1dC1kYXRhLWZvcm0gaW5wdXQ6Zm9jdXMsXG4uaW5wdXQtZGF0YS1mb3JtIHRleHRhcmVhOmZvY3VzLFxuLmlucHV0LWRhdGEtZm9ybSBzZWxlY3Q6Zm9jdXMsXG4ucHJvamVjdC1mb3JtIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjNGNhZjUwO1xufVxuXG4uaW5wdXQtZGF0YS1mb3JtIGJ1dHRvbixcbi5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cblxuLmlucHV0LWRhdGEtZm9ybSBidXR0b246aG92ZXIsXG4ucHJvamVjdC1mb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XG59XG5cbi5pbnB1dC1kYXRhLWZvcm0gdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMzEyYztcbiAgaGVpZ2h0OiAxMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsMEJBQTBCO0FBQzVCOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsU0FBUztFQUNULDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFOzs7O2FBSVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7Ozs7YUFJVztFQUNYLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUUseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7O0VBS0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDOztBQUVBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBOzs7O0VBSUUsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wYWRkaW5nLXRvcC1ib3R0b206IDUwcHg7XFxuICAtLXBhYWRpbmctbGVmdC1yaWdodDogODBweDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMTJjO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogNzBweDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4ubG9nby10aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5pbnRyb2R1Y3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjIzLCAyMjMsIDIzNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4MHB4IDIwcHg7XFxufVxcblxcbi5pbnRyby1jb250ZW50IHtcXG4gIG1heC13aWR0aDogNTcwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbnRyby1jb250ZW50IGgyIHtcXG4gIGNvbG9yOiAjMmIzMTJjO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG59XFxuXFxuLmludHJvLWNvbnRlbnQgcCB7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgd29yZC1icmVhazogbm9ybWFsO1xcbiAgd29yZC1zcGFjaW5nOiA0cHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MHB4IDEwcHg7XFxufVxcblxcbi50b2Rvcy1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1tYW5hZ2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdyaWQtYXJlYTogZm9ybS1jb250YWluZXI7XFxufVxcblxcbiN0b2Rvc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjM2QzZDNkO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjM2QzZDNkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXRvZG8ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICdGSUxMJyAwLFxcbiAgICAnd2dodCcgNDAwLFxcbiAgICAnR1JBRCcgMCxcXG4gICAgJ29wc3onIDI0O1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAnRklMTCcgMCxcXG4gICAgJ3dnaHQnIDQwMCxcXG4gICAgJ0dSQUQnIDAsXFxuICAgICdvcHN6JyAyNDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgb3JkZXI6IC0xO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0IGgyIHtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmhvbWUtYnRuLFxcbi5jb250YWN0LWJ0bixcXG4uYWJvdXQtYnRuLFxcbi5uZXctcHJvamVjdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTc2ZDZkO1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxufVxcblxcbi5pbnB1dC1kYXRhLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NzZkNmQ7XFxuICB3aWR0aDogYXV0bztcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxucCxcXG5oMixcXG5pbnB1dCxcXG5zdHJvbmcsXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmlucHV0LWRhdGEtZm9ybSxcXG4ucHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5pbnB1dC1kYXRhLWZvcm0gaW5wdXQsXFxuLmlucHV0LWRhdGEtZm9ybSB0ZXh0YXJlYSxcXG4uaW5wdXQtZGF0YS1mb3JtIHNlbGVjdCxcXG4ucHJvamVjdC1mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pbnB1dC1kYXRhLWZvcm0gaW5wdXQ6Zm9jdXMsXFxuLmlucHV0LWRhdGEtZm9ybSB0ZXh0YXJlYTpmb2N1cyxcXG4uaW5wdXQtZGF0YS1mb3JtIHNlbGVjdDpmb2N1cyxcXG4ucHJvamVjdC1mb3JtIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6ICM0Y2FmNTA7XFxufVxcblxcbi5pbnB1dC1kYXRhLWZvcm0gYnV0dG9uLFxcbi5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcblxcbi5pbnB1dC1kYXRhLWZvcm0gYnV0dG9uOmhvdmVyLFxcbi5wcm9qZWN0LWZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XFxufVxcblxcbi5pbnB1dC1kYXRhLWZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMzEyYztcXG4gIGhlaWdodDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuXG4vLyBpZiB0aGUgbG9jYWwgc3RvcmFnZSBjb250YWlucyB0b2RvcyB0YWtlIGl0IGZyb20gdGhlcmUgb3RoZXIgd2lzZSBDcmVhdGUgYSBkZWZhdWx0IHByb2plY3QgdG8gYmUgZGlzcGxheWVkIG9uIHNjcmVlblxuaW1wb3J0IHtzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlICwgZGVmYXVsdFByb2plY3R9IGZyb20gJy4vbW9kdWxlcy9sb2NhbFN0b3JhZ2UnO1xuc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZShkZWZhdWx0UHJvamVjdCk7XG5cbi8vIFRoZSBuZXcgdGFzayBidXR0b24gaXMgc2VsZWN0ZWQgYW5kIGFuIGV2ZW50TGlzdGVuZXIgaXMgYWRkZWQgd2hpY2ggZ2VuZXJhdGVzIGEgZm9ybVxuaW1wb3J0e2dlbmVyYXRlRnJvbSxnZW5lcmF0ZVByb2plY3RGb3JtLGRpc3BsYXlUb2Rvc30gZnJvbSAnLi9tb2R1bGVzL0RPTW1hbmFnZXInO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZUZyb20pO1xuXG4vLyBDYWxsIGZvciBhIG1ldGhvZCB0aGF0IHNldHMgdGhlIG5hbWUgb2YgdGhlIHByb2plY3RcbmltcG9ydCB7IHNldFByb2plY3ROYW1lIH0gZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZVByb2plY3QnO1xuc2V0UHJvamVjdE5hbWUoZGVmYXVsdFByb2plY3QsICcucHJvamVjdC1uYW1lJyk7XG5cbi8vIENhbGwgZm9yIGRpc3BsYXlpbmcgYWxsIHRvZG9zXG5kaXNwbGF5VG9kb3MoZGVmYXVsdFByb2plY3QsICd0b2Rvc0NvbnRhaW5lcicpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlUHJvamVjdEZvcm0pO1xuXG5cbi8vIHNldHMgdGhlIGxvZ28gb2YgdGhlIHBhZ2VcbmltcG9ydCBpbWFnZSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdG9kby5zdmcnO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKS5zcmMgPSBpbWFnZTsiLCJpbXBvcnQgeyBkZWZhdWx0UHJvamVjdCAsc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZX0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHthZGRUb2RvVG9Qcm9qZWN0fSBmcm9tICcuL2NyZWF0ZVRvZG8nO1xuXG4vLyBGb3JtIGdlbmVyYXRvclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRnJvbSgpIHtcbiAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKTtcbiAgZm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJpbnB1dC1kYXRhLWZvcm1cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiBpZD1cInRpdGxlXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiPlxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJcIiBpZD1cImRlc2NyaXB0aW9uXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiIHJlc2l6ZT1cIm5vbmVcIj48L3RleHRhcmVhPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGUtY29udGFpbmVyXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkdWVkYXRlXCI+RHVlIERhdGU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiXCIgaWQ9XCJkdWVkYXRlXCIgcmVxdWlyZWQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1jb250YWluZXJcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cInByaW9yaXR5XCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiIHNlbGVjdGVkPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5gO1xuICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1kYXRhLWZvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGhhbmRsZUZvcm0oZSk7XG4gICAgZGlzcGxheVRvZG9zKGRlZmF1bHRQcm9qZWN0LCAndG9kb3NDb250YWluZXInKTtcbiAgfSk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyBmb3JtIHN1Ym1pc3Npb25cbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG5ld1RvZG8gPSBmZXRjaEZvcm1EYXRhKCk7XG4gIGlmIChuZXdUb2RvLnRpdGxlICYmIG5ld1RvZG8uZGVzY3JpcHRpb24gJiYgbmV3VG9kby5kdWVEYXRlICYmIG5ld1RvZG8ucHJpb3JpdHkpIHtcbiAgICBhZGRUb2RvVG9Qcm9qZWN0KGRlZmF1bHRQcm9qZWN0LCBuZXdUb2RvLnRpdGxlLCBuZXdUb2RvLmRlc2NyaXB0aW9uLCBuZXdUb2RvLmR1ZURhdGUsIG5ld1RvZG8ucHJpb3JpdHkpO1xuICAgIHNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UoZGVmYXVsdFByb2plY3QpO1xuICB9XG4gIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gIGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59XG5cbi8vIEl0IGZldGNoZXMgZGF0YSBmcm9tIGZvcm1cbmltcG9ydCB7IGZldGNoRm9ybURhdGEgfSBmcm9tICcuLi91dGlscy9mZXRjaEZvcm1EYXRhJztcblxuLy8gRnVuY3Rpb24gZm9yIGRpc3BsYXlpbmcgYWxsIHRvZG9zXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZG9zKHByb2plY3QsIHRvZG9zQ29udGFpbmVySWQpIHtcbiAgbGV0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb3NDb250YWluZXJJZCk7XG4gIHRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxoMj4ke3Byb2plY3QubmFtZX08L2gyPmA7XG4gIGxldCB0b2RvcyA9IHByb2plY3QudG9kb3M7XG4gIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgdG9kb3NDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWl0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyXCI+XG4gICAgICAgICAgPGgyPiR7dG9kby50aXRsZX08L2gyPlxuICAgICAgICAgIDxwPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgICA8c3Ryb25nPiR7dG9kby5wcmlvcml0eX08L3N0cm9uZz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWJ0blwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiPjxzcGFuIHRpdGxlPVwiRGVsZXRlIHRvZG9cIiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbmRlbGV0ZVxuPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsc1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gIH0pO1xuXG4gIGRlbGV0ZVRvZG8oKTtcbn1cblxuLy8gdGhpcyBmdW50aW9uIGRlbGV0ZXMgdG9kbyB3aGVuIGEgZGVsZXRlIGJ0biBpcyBjbGlja2VkXG5mdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICBsZXQgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtYnRuJyk7XG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICBkZWZhdWx0UHJvamVjdC50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZShkZWZhdWx0UHJvamVjdCk7XG4gICAgICBkaXNwbGF5VG9kb3MoZGVmYXVsdFByb2plY3QsICd0b2Rvc0NvbnRhaW5lcicpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gR2VuZXJhdGVzIGEgZm9ybSB0aGF0IGFza3MgZm9yIHByb2plY3QgbmFtZVxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuICBmb3JtQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8Zm9ybSBjbGFzcz1cInByb2plY3QtZm9ybVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJwcm9qZWN0IG5hbWVcIiBpZD1cInByb2plY3QtbmFtZVwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPmA7XG4gIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoZXNQcm9qZWN0TmFtZSgncHJvamVjdC1uYW1lJyk7XG4gICAgZm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjcmVhdGVOZXdQcm9qZWN0KCk7XG4gIH0pO1xufVxuXG5pbXBvcnQgeyBhbGxOZXdQcm9qZWN0cyB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5mdW5jdGlvbiBmZXRjaGVzUHJvamVjdE5hbWUocHJvamVjdElkKSB7XG4gIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3RJZCkudmFsdWU7XG4gIGFsbE5ld1Byb2plY3RzLnB1c2gocHJvamVjdE5hbWUpO1xufVxuIiwiLy8gVGhpcyBmYWN0b3J5IGNyZWF0ZXMgYSBwcm9qZWN0IG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICBsZXQgdG9kb3MgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHRvZG9zLFxuICB9O1xufVxuXG4vLyBTZXRzIHByb2plY3QgbmFtZVxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2plY3ROYW1lKHByb2plY3QsIHByb2plY3RDbGFzcykge1xuICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2plY3RDbGFzcyk7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xufVxuXG5cbi8vIFN0b3JlcyBuZXcgcHJvamVjdHMgbmFtZXNcbmV4cG9ydCBsZXQgYWxsTmV3UHJvamVjdHMgPSBbXTtcblxuLy8gR2V0cyB2YWx1ZXMgZnJvbSBnZW5lcmF0ZWQgZm9ybSBhbmQgcHVzaGVzIGl0IHRvIHRoZSBwcm9qZWN0TmFtZXMgYXJyYXlcblxuLy8gQ3JlYXRlcyBuZXcgcHJvamVjdCBmb3IgYWxsIHRoZSBuYW1lcyBpbiBwcm9qZWN0TmFtZXMgYXJyYXlcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBhbGxOZXdQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgIGRpdi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xufVxuIiwiLy8gVGhpcyBmYWN0b3J5IGNyZWF0ZXMgYSB0b2RvIG9iamVjdFxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgfTtcbn1cblxuLy8gSXQgY3JlYXRlcyB0b2RvIG9iaiBhbmQgcHVzaGVzIGl0IGluIHRoZSBwcm92aWRlZCBwcm9qZWN0XG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kb1RvUHJvamVjdChwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KSB7XG4gIGxldCB0b2RvID0gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcbiAgcHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xufVxuIiwiLy8gU2F2ZSB0aGUgdXBkYXRlZCBwcm9qZWN0IHRvIGxvY2FsIHN0b3JhZ2VcbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKHByb2plY3QpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsQ29weU9mRGVmYXVsdFByb2plY3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG59XG5cbmltcG9ydCB7Y3JlYXRlUHJvamVjdH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0JztcbmV4cG9ydCBsZXQgZGVmYXVsdFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbENvcHlPZkRlZmF1bHRQcm9qZWN0JykpIHx8IGNyZWF0ZVByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcpO1xuXG4iLCJleHBvcnQgZnVuY3Rpb24gZmV0Y2hGb3JtRGF0YSgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVkYXRlJykudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=