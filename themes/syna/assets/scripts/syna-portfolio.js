/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/helpers/jq-helpers.js":
/*!*****************************************!*\
  !*** ./assets/js/helpers/jq-helpers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serialize */ \"./assets/js/helpers/serialize.js\");\n\n\nfunction $(selector) {\n  var nodes = typeof selector === 'string' ? Array.from((this && Array.isArray(this) ? this[0] : document).querySelectorAll(selector)) : [selector];\n  var _returnee = {\n    $nodes: nodes,\n    $: $.bind(nodes),\n    on: function on(event, selector, callback) {\n      if (typeof callback === 'undefined') {\n        callback = selector;\n        selector = null;\n      }\n\n      if (selector) {\n        nodes.forEach(function (node) {\n          node.addEventListener(event, function (e) {\n            if (e.target.matches(selector)) {\n              callback.call(node, e);\n            }\n          });\n        });\n      } else {\n        nodes.forEach(function (node) {\n          return node[\"on\".concat(event)] = callback.bind(node);\n        });\n      }\n\n      return _returnee;\n    },\n    addClass: function addClass(className) {\n      nodes.forEach(function (node) {\n        return node.classList.add(className);\n      });\n      return _returnee;\n    },\n    removeClass: function removeClass(className) {\n      nodes.forEach(function (node) {\n        return node.classList.remove(className);\n      });\n      return _returnee;\n    },\n    attr: function attr(attribute, value) {\n      if (value === undefined && nodes.length > 1) {\n        throw new Error(\"Can't access value of several nodes' attributes\");\n      }\n\n      if (value === undefined) {\n        return nodes[0].getAttribute(attribute);\n      } else if (value !== null) {\n        nodes.forEach(function (node) {\n          return node.setAttribute(attribute, value);\n        });\n      }\n\n      return _returnee;\n    },\n    removeAttr: function removeAttr(attribute) {\n      nodes.forEach(function (node) {\n        return node.removeAttribute(attribute);\n      });\n      return _returnee;\n    },\n    append: function append(innerHTML) {\n      nodes.forEach(function (node) {\n        return node.insertAdjacentHTML('beforeend', innerHTML);\n      });\n      return _returnee;\n    },\n    html: function html(innerHTML) {\n      if (innerHTML === undefined) {\n        if (nodes.length > 1) {\n          throw new Error(\"Can't get several nodes innerHTML at once\");\n        }\n\n        return nodes[0].innerHTML;\n      }\n\n      nodes.forEach(function (node) {\n        return node.innerHTML = innerHTML;\n      });\n      return _returnee;\n    },\n    text: function text(innerText) {\n      if (innerText === undefined) {\n        if (nodes.length > 1) {\n          throw new Error(\"Can't get several nodes innerText at once\");\n        }\n\n        return nodes[0].innerText;\n      }\n\n      if (innerText !== null) {\n        nodes.forEach(function (node) {\n          return node.innerText = innerText;\n        });\n      }\n\n      return _returnee;\n    },\n    val: function val(value) {\n      if (value === undefined) {\n        if (nodes.length > 1) {\n          throw new Error(\"Can't get several nodes value at once\");\n        }\n\n        return nodes[0].value;\n      }\n\n      nodes.forEach(function (node) {\n        return node.value = value;\n      });\n      return _returnee;\n    },\n    submit: function submit() {\n      return nodes.forEach(function (node) {\n        return node.submit();\n      });\n    },\n    serialize: function serialize() {\n      var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      if (nodes.length > 1) {\n        //throw new Error(\"Can't serialize multiple forms at once\");\n        return;\n      }\n\n      if (json) {\n        return (0,_serialize__WEBPACK_IMPORTED_MODULE_0__.serializeJSON)(nodes[0]);\n      }\n\n      return (0,_serialize__WEBPACK_IMPORTED_MODULE_0__.default)(nodes[0]);\n    },\n    length: nodes.length\n  };\n  nodes.forEach(function (node, index) {\n    return _returnee[index] = node;\n  });\n  return _returnee;\n}\n\n$.scrollTo = function scrollTo(element, to, duration) {\n  if (duration <= 0) return;\n  var difference = to - element.scrollTop;\n  var perTick = difference / duration * 10;\n  setTimeout(function () {\n    element.scrollTop = element.scrollTop + perTick;\n    if (element.scrollTop === to) return;\n    scrollTo(element, to, duration - 10);\n  }, 10);\n};\n\n$.ajax = function ajax(_ref) {\n  var method = _ref.method,\n      url = _ref.url,\n      data = _ref.data,\n      _ref$options = _ref.options,\n      options = _ref$options === void 0 ? {\n    contentType: 'application/json;charset=UTF-8'\n  } : _ref$options;\n  var xhr = new XMLHttpRequest();\n  xhr.open(method.toUpperCase(), url);\n  xhr.setRequestHeader('Content-Type', options.contentType);\n  xhr.send(data);\n  return new Promise(function (resolve, reject) {\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState == 4) {\n        if (xhr.status == 200) {\n          if (xhr.getResponseHeader(\"content-type\") == \"text/html; charset=UTF-8\") {\n            resolve();\n          } else {\n            resolve(JSON.parse(xhr.responseXML || xhr.responseText));\n          }\n        } else {\n          reject(xhr.statusText);\n        }\n      }\n    };\n  });\n};\n\nfunction popup(url, windowName) {\n  var newwindow = window.open(url, windowName, 'height=200,width=150');\n\n  if (window.focus) {\n    newwindow.focus();\n  }\n\n  return false;\n}\n\n$.post = function (url, data, options) {\n  return $.ajax({\n    method: 'post',\n    url: url,\n    data: data,\n    options: options\n  });\n};\n\nif (window && window.testingMode) {\n  window.jqHelpers = $;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);\n\n//# sourceURL=webpack://syna/./assets/js/helpers/jq-helpers.js?");

/***/ }),

/***/ "./assets/js/helpers/serialize.js":
/*!****************************************!*\
  !*** ./assets/js/helpers/serialize.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ serialize),\n/* harmony export */   \"serializeJSON\": () => (/* binding */ serializeJSON)\n/* harmony export */ });\n// From https://code.google.com/archive/p/form-serialize/\nfunction serialize(form) {\n  if (!form || form.nodeName !== 'FORM') {\n    return;\n  }\n\n  var i,\n      j,\n      q = [];\n\n  for (i = form.elements.length - 1; i >= 0; i = i - 1) {\n    if (form.elements[i].name === '') {\n      continue;\n    }\n\n    switch (form.elements[i].nodeName) {\n      case 'INPUT':\n        switch (form.elements[i].type) {\n          case 'text':\n          case 'hidden':\n          case 'password':\n          case 'button':\n          case 'reset':\n          case 'submit':\n            q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));\n            break;\n\n          case 'checkbox':\n          case 'radio':\n            if (form.elements[i].checked) {\n              q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));\n            }\n\n            break;\n\n          case 'file':\n            break;\n        }\n\n        break;\n\n      case 'TEXTAREA':\n        q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));\n        break;\n\n      case 'SELECT':\n        switch (form.elements[i].type) {\n          case 'select-one':\n            q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));\n            break;\n\n          case 'select-multiple':\n            for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {\n              if (form.elements[i].options[j].selected) {\n                q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].options[j].value));\n              }\n            }\n\n            break;\n        }\n\n        break;\n\n      case 'BUTTON':\n        switch (form.elements[i].type) {\n          case 'reset':\n          case 'submit':\n          case 'button':\n            q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));\n            break;\n        }\n\n        break;\n    }\n  }\n\n  return q.join('&');\n}\nfunction serializeJSON(form) {\n  var obj = {};\n  var elements = form.querySelectorAll('input, select, textarea');\n\n  for (var i = 0; i < elements.length; ++i) {\n    var element = elements[i];\n    var name = element.name;\n    var value = element.value;\n\n    if (name) {\n      if (element.type === 'radio' || element.type === 'checkbox') {\n        if (element.checked) {\n          obj[name] = value;\n        }\n      } else if (element.type !== 'file') {\n        obj[name] = value;\n      }\n    }\n  }\n\n  return JSON.stringify(obj);\n}\n\n//# sourceURL=webpack://syna/./assets/js/helpers/serialize.js?");

/***/ }),

/***/ "./assets/js/portfolio.js":
/*!********************************!*\
  !*** ./assets/js/portfolio.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/jq-helpers */ \"./assets/js/helpers/jq-helpers.js\");\n\nvar portfolioItem = (0,_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(\".portfolio-item.has-modal\");\nvar _default = {\n  innerHTML: \"\"\n};\nportfolioItem.on(\"click\", function () {\n  window.syna.showModal({\n    title: (this.querySelector(\".title\") || _default).innerHTML,\n    subtitle: (this.querySelector(\".subtitle\") || _default).innerHTML,\n    content: (this.querySelector(\".content\") || _default).innerHTML,\n    background: (this.querySelector(\".portfolio-background\") || _default).src,\n    image: (this.querySelector(\".portfolio-image\") || _default).src,\n    icon: (this.querySelector(\".portfolio-icon\") || _default).innerHTML,\n    labels: (this.querySelector(\".badge-container\") || _default).innerHTML,\n    size: \"md\"\n  });\n});\n\n//# sourceURL=webpack://syna/./assets/js/portfolio.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/portfolio.js");
/******/ 	
/******/ })()
;