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


// if the local storage contains todos take it from there other wise Create a default project to be displayed on screen

(0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage)(_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__.defaultProject);

// The new task button is selected and an eventListener is added which generates a form

document.querySelector('.new-todo').addEventListener('click', _modules_DOMmanager__WEBPACK_IMPORTED_MODULE_2__.generateFrom);

// Call for a method that sets the name of the project

(0,_modules_createProject__WEBPACK_IMPORTED_MODULE_3__.setProjectName)(_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__.defaultProject, '.project-name');

// Call for displaying all todos
(0,_modules_DOMmanager__WEBPACK_IMPORTED_MODULE_2__.displayTodos)(_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__.defaultProject, 'todosContainer');

document.querySelector('.new-project').addEventListener('click', _modules_DOMmanager__WEBPACK_IMPORTED_MODULE_2__.generateProjectForm);





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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFV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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBZ0I7QUFDcEIsR0FBRztBQUNIOztBQUVpRDtBQUNqRDtBQUNBO0FBQ0EsRUFBRSwwREFBYztBQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7QUFDTzs7QUFFUDs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNPO0FBQ1A7QUFDQTs7QUFFOEM7QUFDdkMsc0ZBQXNGLDZEQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FDTm5HO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvRE9NbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvY3JlYXRlVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdXRpbHMvZmV0Y2hGb3JtRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXBhZGRpbmctdG9wLWJvdHRvbTogNTBweDtcbiAgLS1wYWFkaW5nLWxlZnQtcmlnaHQ6IDgwcHg7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMzEyYztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xufVxuXG4ubG9nby10aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzMHB4O1xufVxuXG4uaW50cm9kdWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYigyMjMsIDIyMywgMjM1KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDgwcHggMjBweDtcbn1cblxuLmludHJvLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDU3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnRyby1jb250ZW50IGgyIHtcbiAgY29sb3I6ICMyYjMxMmM7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2Fwcztcbn1cblxuLmludHJvLWNvbnRlbnQgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiA0cHg7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCAxMHB4O1xufVxuXG4udG9kb3MtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9kby1tYW5hZ2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZ3JpZC1hcmVhOiBmb3JtLWNvbnRhaW5lcjtcbn1cblxuI3RvZG9zQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjM2QzZDNkO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4udG9kby1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweDtcbiAgZ2FwOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICMzZDNkM2Q7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzay1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmV3LXRvZG8ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICdGSUxMJyAwLFxuICAgICd3Z2h0JyA0MDAsXG4gICAgJ0dSQUQnIDAsXG4gICAgJ29wc3onIDI0O1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmFkZC10b2RvLWJ0biB7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICdGSUxMJyAwLFxuICAgICd3Z2h0JyA0MDAsXG4gICAgJ0dSQUQnIDAsXG4gICAgJ29wc3onIDI0O1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiBibHVlO1xufVxuXG4udGFzay1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuICBvcmRlcjogLTE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnByb2plY3QgaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5ob21lLWJ0bixcbi5jb250YWN0LWJ0bixcbi5hYm91dC1idG4sXG4ubmV3LXByb2plY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTc2ZDZkO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmV3LXByb2plY3Qge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xufVxuXG4uaW5wdXQtZGF0YS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NzZkNmQ7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBnYXA6IDIwcHg7XG59XG5cbi50b2RvLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucCxcbmgyLFxuaW5wdXQsXG5zdHJvbmcsXG5oMyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmlucHV0LWRhdGEtZm9ybSxcbi5wcm9qZWN0LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pbnB1dC1kYXRhLWZvcm0gaW5wdXQsXG4uaW5wdXQtZGF0YS1mb3JtIHRleHRhcmVhLFxuLmlucHV0LWRhdGEtZm9ybSBzZWxlY3QsXG4ucHJvamVjdC1mb3JtIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmlucHV0LWRhdGEtZm9ybSBpbnB1dDpmb2N1cyxcbi5pbnB1dC1kYXRhLWZvcm0gdGV4dGFyZWE6Zm9jdXMsXG4uaW5wdXQtZGF0YS1mb3JtIHNlbGVjdDpmb2N1cyxcbi5wcm9qZWN0LWZvcm0gaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICM0Y2FmNTA7XG59XG5cbi5pbnB1dC1kYXRhLWZvcm0gYnV0dG9uLFxuLnByb2plY3QtZm9ybSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuXG4uaW5wdXQtZGF0YS1mb3JtIGJ1dHRvbjpob3Zlcixcbi5wcm9qZWN0LWZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbn1cblxuLmlucHV0LWRhdGEtZm9ybSB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMTJjO1xuICBoZWlnaHQ6IDEwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQiwwQkFBMEI7QUFDNUI7O0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7Ozs7YUFJVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTs7OzthQUlXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7RUFLRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXBhZGRpbmctdG9wLWJvdHRvbTogNTBweDtcXG4gIC0tcGFhZGluZy1sZWZ0LXJpZ2h0OiA4MHB4O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjMxMmM7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5sb2dvLXRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLmludHJvZHVjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYigyMjMsIDIyMywgMjM1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDgwcHggMjBweDtcXG59XFxuXFxuLmludHJvLWNvbnRlbnQge1xcbiAgbWF4LXdpZHRoOiA1NzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmludHJvLWNvbnRlbnQgaDIge1xcbiAgY29sb3I6ICMyYjMxMmM7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbn1cXG5cXG4uaW50cm8tY29udGVudCBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICB3b3JkLWJyZWFrOiBub3JtYWw7XFxuICB3b3JkLXNwYWNpbmc6IDRweDtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDUwcHggMTBweDtcXG59XFxuXFxuLnRvZG9zLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLW1hbmFnZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ3JpZC1hcmVhOiBmb3JtLWNvbnRhaW5lcjtcXG59XFxuXFxuI3RvZG9zQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMzZDNkM2Q7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4ICMzZDNkM2Q7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZXctdG9kbyB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgJ0ZJTEwnIDAsXFxuICAgICd3Z2h0JyA0MDAsXFxuICAgICdHUkFEJyAwLFxcbiAgICAnb3BzeicgMjQ7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5hZGQtdG9kby1idG4ge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICdGSUxMJyAwLFxcbiAgICAnd2dodCcgNDAwLFxcbiAgICAnR1JBRCcgMCxcXG4gICAgJ29wc3onIDI0O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi50YXNrLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBvcmRlcjogLTE7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnByb2plY3QgaDIge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uaG9tZS1idG4sXFxuLmNvbnRhY3QtYnRuLFxcbi5hYm91dC1idG4sXFxuLm5ldy1wcm9qZWN0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NzZkNmQ7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXG59XFxuXFxuLmlucHV0LWRhdGEtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzk3NmQ2ZDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5wLFxcbmgyLFxcbmlucHV0LFxcbnN0cm9uZyxcXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaW5wdXQtZGF0YS1mb3JtLFxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmlucHV0LWRhdGEtZm9ybSBpbnB1dCxcXG4uaW5wdXQtZGF0YS1mb3JtIHRleHRhcmVhLFxcbi5pbnB1dC1kYXRhLWZvcm0gc2VsZWN0LFxcbi5wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmlucHV0LWRhdGEtZm9ybSBpbnB1dDpmb2N1cyxcXG4uaW5wdXQtZGF0YS1mb3JtIHRleHRhcmVhOmZvY3VzLFxcbi5pbnB1dC1kYXRhLWZvcm0gc2VsZWN0OmZvY3VzLFxcbi5wcm9qZWN0LWZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogIzRjYWY1MDtcXG59XFxuXFxuLmlucHV0LWRhdGEtZm9ybSBidXR0b24sXFxuLnByb2plY3QtZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLmlucHV0LWRhdGEtZm9ybSBidXR0b246aG92ZXIsXFxuLnByb2plY3QtZm9ybSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcXG59XFxuXFxuLmlucHV0LWRhdGEtZm9ybSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMTJjO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbi8vIGlmIHRoZSBsb2NhbCBzdG9yYWdlIGNvbnRhaW5zIHRvZG9zIHRha2UgaXQgZnJvbSB0aGVyZSBvdGhlciB3aXNlIENyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdCB0byBiZSBkaXNwbGF5ZWQgb24gc2NyZWVuXG5pbXBvcnQge3NhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UgLCBkZWZhdWx0UHJvamVjdH0gZnJvbSAnLi9tb2R1bGVzL2xvY2FsU3RvcmFnZSc7XG5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKGRlZmF1bHRQcm9qZWN0KTtcblxuLy8gVGhlIG5ldyB0YXNrIGJ1dHRvbiBpcyBzZWxlY3RlZCBhbmQgYW4gZXZlbnRMaXN0ZW5lciBpcyBhZGRlZCB3aGljaCBnZW5lcmF0ZXMgYSBmb3JtXG5pbXBvcnR7Z2VuZXJhdGVGcm9tLGdlbmVyYXRlUHJvamVjdEZvcm0sZGlzcGxheVRvZG9zfSBmcm9tICcuL21vZHVsZXMvRE9NbWFuYWdlcic7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlRnJvbSk7XG5cbi8vIENhbGwgZm9yIGEgbWV0aG9kIHRoYXQgc2V0cyB0aGUgbmFtZSBvZiB0aGUgcHJvamVjdFxuaW1wb3J0IHsgc2V0UHJvamVjdE5hbWUgfSBmcm9tICcuL21vZHVsZXMvY3JlYXRlUHJvamVjdCc7XG5zZXRQcm9qZWN0TmFtZShkZWZhdWx0UHJvamVjdCwgJy5wcm9qZWN0LW5hbWUnKTtcblxuLy8gQ2FsbCBmb3IgZGlzcGxheWluZyBhbGwgdG9kb3NcbmRpc3BsYXlUb2RvcyhkZWZhdWx0UHJvamVjdCwgJ3RvZG9zQ29udGFpbmVyJyk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVQcm9qZWN0Rm9ybSk7XG5cblxuXG4iLCJpbXBvcnQgeyBkZWZhdWx0UHJvamVjdCAsc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZX0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHthZGRUb2RvVG9Qcm9qZWN0fSBmcm9tICcuL2NyZWF0ZVRvZG8nO1xuXG4vLyBGb3JtIGdlbmVyYXRvclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRnJvbSgpIHtcbiAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKTtcbiAgZm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJpbnB1dC1kYXRhLWZvcm1cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiBpZD1cInRpdGxlXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiPlxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJcIiBpZD1cImRlc2NyaXB0aW9uXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiIHJlc2l6ZT1cIm5vbmVcIj48L3RleHRhcmVhPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGUtY29udGFpbmVyXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkdWVkYXRlXCI+RHVlIERhdGU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiXCIgaWQ9XCJkdWVkYXRlXCIgcmVxdWlyZWQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1jb250YWluZXJcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cInByaW9yaXR5XCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiIHNlbGVjdGVkPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5gO1xuICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1kYXRhLWZvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGhhbmRsZUZvcm0oZSk7XG4gICAgZGlzcGxheVRvZG9zKGRlZmF1bHRQcm9qZWN0LCAndG9kb3NDb250YWluZXInKTtcbiAgfSk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyBmb3JtIHN1Ym1pc3Npb25cbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG5ld1RvZG8gPSBmZXRjaEZvcm1EYXRhKCk7XG4gIGlmIChuZXdUb2RvLnRpdGxlICYmIG5ld1RvZG8uZGVzY3JpcHRpb24gJiYgbmV3VG9kby5kdWVEYXRlICYmIG5ld1RvZG8ucHJpb3JpdHkpIHtcbiAgICBhZGRUb2RvVG9Qcm9qZWN0KGRlZmF1bHRQcm9qZWN0LCBuZXdUb2RvLnRpdGxlLCBuZXdUb2RvLmRlc2NyaXB0aW9uLCBuZXdUb2RvLmR1ZURhdGUsIG5ld1RvZG8ucHJpb3JpdHkpO1xuICAgIHNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UoZGVmYXVsdFByb2plY3QpO1xuICB9XG4gIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gIGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59XG5cbi8vIEl0IGZldGNoZXMgZGF0YSBmcm9tIGZvcm1cbmltcG9ydCB7IGZldGNoRm9ybURhdGEgfSBmcm9tICcuLi91dGlscy9mZXRjaEZvcm1EYXRhJztcblxuLy8gRnVuY3Rpb24gZm9yIGRpc3BsYXlpbmcgYWxsIHRvZG9zXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZG9zKHByb2plY3QsIHRvZG9zQ29udGFpbmVySWQpIHtcbiAgbGV0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb3NDb250YWluZXJJZCk7XG4gIHRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxoMj4ke3Byb2plY3QubmFtZX08L2gyPmA7XG4gIGxldCB0b2RvcyA9IHByb2plY3QudG9kb3M7XG4gIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgdG9kb3NDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWl0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyXCI+XG4gICAgICAgICAgPGgyPiR7dG9kby50aXRsZX08L2gyPlxuICAgICAgICAgIDxwPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgICA8c3Ryb25nPiR7dG9kby5wcmlvcml0eX08L3N0cm9uZz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWJ0blwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiPjxzcGFuIHRpdGxlPVwiRGVsZXRlIHRvZG9cIiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbmRlbGV0ZVxuPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsc1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gIH0pO1xuXG4gIGRlbGV0ZVRvZG8oKTtcbn1cblxuLy8gdGhpcyBmdW50aW9uIGRlbGV0ZXMgdG9kbyB3aGVuIGEgZGVsZXRlIGJ0biBpcyBjbGlja2VkXG5mdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICBsZXQgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtYnRuJyk7XG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICBkZWZhdWx0UHJvamVjdC50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZShkZWZhdWx0UHJvamVjdCk7XG4gICAgICBkaXNwbGF5VG9kb3MoZGVmYXVsdFByb2plY3QsICd0b2Rvc0NvbnRhaW5lcicpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gR2VuZXJhdGVzIGEgZm9ybSB0aGF0IGFza3MgZm9yIHByb2plY3QgbmFtZVxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuICBmb3JtQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8Zm9ybSBjbGFzcz1cInByb2plY3QtZm9ybVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJwcm9qZWN0IG5hbWVcIiBpZD1cInByb2plY3QtbmFtZVwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPmA7XG4gIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoZXNQcm9qZWN0TmFtZSgncHJvamVjdC1uYW1lJyk7XG4gICAgZm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjcmVhdGVOZXdQcm9qZWN0KCk7XG4gIH0pO1xufVxuXG5pbXBvcnQgeyBhbGxOZXdQcm9qZWN0cyB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5mdW5jdGlvbiBmZXRjaGVzUHJvamVjdE5hbWUocHJvamVjdElkKSB7XG4gIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3RJZCkudmFsdWU7XG4gIGFsbE5ld1Byb2plY3RzLnB1c2gocHJvamVjdE5hbWUpO1xufVxuIiwiLy8gVGhpcyBmYWN0b3J5IGNyZWF0ZXMgYSBwcm9qZWN0IG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICBsZXQgdG9kb3MgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHRvZG9zLFxuICB9O1xufVxuXG4vLyBTZXRzIHByb2plY3QgbmFtZVxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2plY3ROYW1lKHByb2plY3QsIHByb2plY3RDbGFzcykge1xuICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2plY3RDbGFzcyk7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xufVxuXG5cbi8vIFN0b3JlcyBuZXcgcHJvamVjdHMgbmFtZXNcbmV4cG9ydCBsZXQgYWxsTmV3UHJvamVjdHMgPSBbXTtcblxuLy8gR2V0cyB2YWx1ZXMgZnJvbSBnZW5lcmF0ZWQgZm9ybSBhbmQgcHVzaGVzIGl0IHRvIHRoZSBwcm9qZWN0TmFtZXMgYXJyYXlcblxuLy8gQ3JlYXRlcyBuZXcgcHJvamVjdCBmb3IgYWxsIHRoZSBuYW1lcyBpbiBwcm9qZWN0TmFtZXMgYXJyYXlcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBhbGxOZXdQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgIGRpdi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xufVxuIiwiLy8gVGhpcyBmYWN0b3J5IGNyZWF0ZXMgYSB0b2RvIG9iamVjdFxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgfTtcbn1cblxuLy8gSXQgY3JlYXRlcyB0b2RvIG9iaiBhbmQgcHVzaGVzIGl0IGluIHRoZSBwcm92aWRlZCBwcm9qZWN0XG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kb1RvUHJvamVjdChwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KSB7XG4gIGxldCB0b2RvID0gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcbiAgcHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xufVxuIiwiLy8gU2F2ZSB0aGUgdXBkYXRlZCBwcm9qZWN0IHRvIGxvY2FsIHN0b3JhZ2VcbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKHByb2plY3QpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsQ29weU9mRGVmYXVsdFByb2plY3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG59XG5cbmltcG9ydCB7Y3JlYXRlUHJvamVjdH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0JztcbmV4cG9ydCBsZXQgZGVmYXVsdFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbENvcHlPZkRlZmF1bHRQcm9qZWN0JykpIHx8IGNyZWF0ZVByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcpO1xuXG4iLCJleHBvcnQgZnVuY3Rpb24gZmV0Y2hGb3JtRGF0YSgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVkYXRlJykudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=