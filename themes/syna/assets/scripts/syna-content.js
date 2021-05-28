/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/content.js":
/*!******************************!*\
  !*** ./assets/js/content.js ***!
  \******************************/
/***/ (() => {

eval("var sidebarContent = document.querySelector('.content-sidebar .sticky-top .content-sidebar-body');\n\nif (sidebarContent) {\n  var sidebarContentParent = sidebarContent.parentElement;\n  var sidebarContentParentPadding = parseInt(getComputedStyle(sidebarContentParent).paddingTop, 10);\n  var headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10);\n  document.addEventListener('scroll', function () {\n    var sidebarTop = sidebarContentParent.getBoundingClientRect().top;\n    var extraPadding = 0;\n\n    if (sidebarTop <= headerHeight) {\n      extraPadding = headerHeight;\n    }\n\n    sidebarContentParent.style.setProperty('padding-top', extraPadding + sidebarContentParentPadding + 'px', 'important');\n  });\n}\n\n//# sourceURL=webpack://syna/./assets/js/content.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/content.js"]();
/******/ 	
/******/ })()
;