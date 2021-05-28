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

/***/ "./assets/js/helpers/jq-helpers.js":
/*!*****************************************!*\
  !*** ./assets/js/helpers/jq-helpers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serialize */ \"./assets/js/helpers/serialize.js\");\n\n\nfunction $(selector) {\n  var nodes = typeof selector === 'string' ? Array.from((this && Array.isArray(this) ? this[0] : document).querySelectorAll(selector)) : [selector];\n  var _returnee = {\n    $nodes: nodes,\n    $: $.bind(nodes),\n    on: function on(event, selector, callback) {\n      if (typeof callback === 'undefined') {\n        callback = selector;\n        selector = null;\n      }\n\n      if (selector) {\n        nodes.forEach(function (node) {\n          node.addEventListener(event, function (e) {\n            if (e.target.matches(selector)) {\n              callback.call(node, e);\n            }\n          });\n        });\n      } else {\n        nodes.forEach(function (node) {\n          return node[\"on\".concat(event)] = callback.bind(node);\n        });\n      }\n\n      return _returnee;\n    },\n    addClass: function addClass(className) {\n      nodes.forEach(function (node) {\n        return node.classList.add(className);\n      });\n      return _returnee;\n    },\n    removeClass: function removeClass(className) {\n      nodes.forEach(function (node) {\n        return node.classList.remove(className);\n      });\n      return _returnee;\n    },\n    attr: function attr(attribute, value) {\n      if (value === undefined && nodes.length > 1) {\n        throw new Error(\"Can't access value of several nodes' attributes\");\n      }\n\n      if (value === undefined) {\n        return nodes[0].getAttribute(attribute);\n      } else if (value !== null) {\n        nodes.forEach(function (node) {\n          return node.setAttribute(attribute, value);\n        });\n      }\n\n      return _returnee;\n    },\n    removeAttr: function removeAttr(attribute) {\n      nodes.forEach(function (node) {\n        return node.removeAttribute(attribute);\n      });\n      return _returnee;\n    },\n    append: function append(innerHTML) {\n      nodes.forEach(function (node) {\n        return node.insertAdjacentHTML('beforeend', innerHTML);\n      });\n      return _returnee;\n    },\n    html: function html(innerHTML) {\n      if (innerHTML === undefined) {\n        if (nodes.length > 1) {\n          throw new Error(\"Can't get several nodes innerHTML at once\");\n        }\n\n        return nodes[0].innerHTML;\n      }\n\n      nodes.forEach(function (node) {\n        return node.innerHTML = innerHTML;\n      });\n      return _returnee;\n    },\n    text: function text(innerText) {\n      if (innerText === undefined) {\n        if (nodes.length > 1) {\n          throw new Error(\"Can't get several nodes innerText at once\");\n        }\n\n        return nodes[0].innerText;\n      }\n\n      if (innerText !== null) {\n        nodes.forEach(function (node) {\n          return node.innerText = innerText;\n        });\n      }\n\n      return _returnee;\n    },\n    val: function val(value) {\n      if (value === undefined) {\n        if (nodes.length > 1) {\n          throw new Error(\"Can't get several nodes value at once\");\n        }\n\n        return nodes[0].value;\n      }\n\n      nodes.forEach(function (node) {\n        return node.value = value;\n      });\n      return _returnee;\n    },\n    submit: function submit() {\n      return nodes.forEach(function (node) {\n        return node.submit();\n      });\n    },\n    serialize: function serialize() {\n      var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      if (nodes.length > 1) {\n        //throw new Error(\"Can't serialize multiple forms at once\");\n        return;\n      }\n\n      if (json) {\n        return (0,_serialize__WEBPACK_IMPORTED_MODULE_0__.serializeJSON)(nodes[0]);\n      }\n\n      return (0,_serialize__WEBPACK_IMPORTED_MODULE_0__.default)(nodes[0]);\n    },\n    length: nodes.length\n  };\n  nodes.forEach(function (node, index) {\n    return _returnee[index] = node;\n  });\n  return _returnee;\n}\n\n$.scrollTo = function scrollTo(element, to, duration) {\n  if (duration <= 0) return;\n  var difference = to - element.scrollTop;\n  var perTick = difference / duration * 10;\n  setTimeout(function () {\n    element.scrollTop = element.scrollTop + perTick;\n    if (element.scrollTop === to) return;\n    scrollTo(element, to, duration - 10);\n  }, 10);\n};\n\n$.ajax = function ajax(_ref) {\n  var method = _ref.method,\n      url = _ref.url,\n      data = _ref.data,\n      _ref$options = _ref.options,\n      options = _ref$options === void 0 ? {\n    contentType: 'application/json;charset=UTF-8'\n  } : _ref$options;\n  var xhr = new XMLHttpRequest();\n  xhr.open(method.toUpperCase(), url);\n  xhr.setRequestHeader('Content-Type', options.contentType);\n  xhr.send(data);\n  return new Promise(function (resolve, reject) {\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState == 4) {\n        if (xhr.status == 200) {\n          if (xhr.getResponseHeader(\"content-type\") == \"text/html; charset=UTF-8\") {\n            resolve();\n          } else {\n            resolve(JSON.parse(xhr.responseXML || xhr.responseText));\n          }\n        } else {\n          reject(xhr.statusText);\n        }\n      }\n    };\n  });\n};\n\nfunction popup(url, windowName) {\n  var newwindow = window.open(url, windowName, 'height=200,width=150');\n\n  if (window.focus) {\n    newwindow.focus();\n  }\n\n  return false;\n}\n\n$.post = function (url, data, options) {\n  return $.ajax({\n    method: 'post',\n    url: url,\n    data: data,\n    options: options\n  });\n};\n\nif (window && window.testingMode) {\n  window.jqHelpers = $;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);\n\n//# sourceURL=webpack://syna/./assets/js/helpers/jq-helpers.js?");

/***/ }),

/***/ "./assets/js/helpers/serialize.js":
/*!****************************************!*\
  !*** ./assets/js/helpers/serialize.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ serialize),\n/* harmony export */   \"serializeJSON\": () => (/* binding */ serializeJSON)\n/* harmony export */ });\n// From https://code.google.com/archive/p/form-serialize/\nfunction serialize(form) {\n  if (!form || form.nodeName !== 'FORM') {\n    return;\n  }\n\n  var i,\n      j,\n      q = [];\n\n  for (i = form.elements.length - 1; i >= 0; i = i - 1) {\n    if (form.elements[i].name === '') {\n      continue;\n    }\n\n    switch (form.elements[i].nodeName) {\n      case 'INPUT':\n        switch (form.elements[i].type) {\n          case 'text':\n          case 'hidden':\n          case 'password':\n          case 'button':\n          case 'reset':\n          case 'submit':\n            q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));\n            break;\n\n          case 'checkbox':\n          case 'radio':\n            if (form.elements[i].checked) {\n              q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));\n            }\n\n            break;\n\n          case 'file':\n            break;\n        }\n\n        break;\n\n      case 'TEXTAREA':\n        q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));\n        break;\n\n      case 'SELECT':\n        switch (form.elements[i].type) {\n          case 'select-one':\n            q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));\n            break;\n\n          case 'select-multiple':\n            for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {\n              if (form.elements[i].options[j].selected) {\n                q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].options[j].value));\n              }\n            }\n\n            break;\n        }\n\n        break;\n\n      case 'BUTTON':\n        switch (form.elements[i].type) {\n          case 'reset':\n          case 'submit':\n          case 'button':\n            q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));\n            break;\n        }\n\n        break;\n    }\n  }\n\n  return q.join('&');\n}\nfunction serializeJSON(form) {\n  var obj = {};\n  var elements = form.querySelectorAll('input, select, textarea');\n\n  for (var i = 0; i < elements.length; ++i) {\n    var element = elements[i];\n    var name = element.name;\n    var value = element.value;\n\n    if (name) {\n      if (element.type === 'radio' || element.type === 'checkbox') {\n        if (element.checked) {\n          obj[name] = value;\n        }\n      } else if (element.type !== 'file') {\n        obj[name] = value;\n      }\n    }\n  }\n\n  return JSON.stringify(obj);\n}\n\n//# sourceURL=webpack://syna/./assets/js/helpers/serialize.js?");

/***/ }),

/***/ "./assets/js/stripe.js":
/*!*****************************!*\
  !*** ./assets/js/stripe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/jq-helpers */ \"./assets/js/helpers/jq-helpers.js\");\n/* harmony import */ var form_validator_simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! form-validator-simple */ \"../../../node_modules/form-validator-simple/dist/bundle.js\");\n/* harmony import */ var form_validator_simple__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(form_validator_simple__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var parse_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse-price */ \"../../../node_modules/parse-price/src/index.js\");\n/* harmony import */ var parse_price__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse_price__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction initFormValidation(form) {\n  var onSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {\n    return false;\n  };\n  new (form_validator_simple__WEBPACK_IMPORTED_MODULE_1___default())({\n    errorTemplate: '<span class=\"help-block form-error\">%s</span>',\n    onFormValidate: function onFormValidate(isFormValid, form) {\n      form.querySelector('button').disabled = !isFormValid;\n    },\n    onError: function onError(e, form) {\n      form.querySelector('.generic-error').removeClass('d-none');\n    },\n    onSuccess: onSuccess,\n    form: form\n  });\n}\n\nfunction onSubmit(configId, form, stripe, card) {\n  return function (e) {\n    e.preventDefault();\n    var config = window.syna.api.get('stripe', configId);\n    var button = form.$('button.submit-btn');\n    button.attr('disabled', true).addClass('disabled');\n    form.$('#generic-error').addClass('d-none');\n    form.$('#generic-success').addClass('hidden');\n    form.removeClass('success').removeClass('error'); // Stripe requires creating a token for user data to avoid sending data to other server\n\n    stripe.createToken(card).then(function (result) {\n      if (result.error) {\n        (0,_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__.default)('.invalid-feedback').text(result.error.message);\n        button.removeAttr('disabled').removeClass('disabled');\n        card.clear();\n        card.focus();\n        form.addClass('error');\n      } else {\n        var action = form.attr('action'); // Parse the form data and calculate the price based on whether the form\n        // had single value, custom value or multiple values\n\n        var formData = JSON.parse(form.serialize(true));\n        var price = formData.price_text;\n        var serializedForm = {\n          email: formData.email,\n          stripeToken: result.token.id,\n          metadata: Object.assign(formData, {\n            product: config.product,\n            description: config.description,\n            from: window.location.href\n          })\n        };\n\n        if (formData.custom_value === 'true') {\n          price = formData.custom_price_text;\n          serializedForm.currency = form.$('[data-input=currency]').attr('data-value');\n        } else {\n          serializedForm.currency = form.$('input[name=price_text]:checked').attr('data-currency');\n        }\n\n        serializedForm.metadata.price_text = price;\n        serializedForm.price = parse_price__WEBPACK_IMPORTED_MODULE_2___default()(price) * (currencies[serializedForm.currency.toUpperCase()] || 1);\n        _helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__.default.post(action, JSON.stringify(serializedForm)).then(function () {\n          button.removeAttr('disabled').removeClass('disabled');\n          form.$('#generic-success').removeClass('hidden');\n          form.addClass('success');\n        })[\"catch\"](function () {\n          button.removeAttr('disabled').removeClass('disabled');\n          form.$('#generic-error').removeClass('d-none');\n          form.addClass('error');\n          card.clear();\n          card.focus();\n        });\n      }\n    });\n  };\n}\n\nvar stripeFragments = window.syna.api.getScope('stripe');\nObject.keys(stripeFragments).forEach(function (key) {\n  var config = stripeFragments[key];\n  var stripe = Stripe(config.token);\n  var elements = stripe.elements();\n  var card = elements.create('card', config.options);\n  card.mount(\"#payment-form-\".concat(config.form, \" #card-element\"));\n  card.addEventListener('change', function (e) {\n    var displayError = (0,_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__.default)('.invalid-feedback');\n\n    if (event.error) {\n      displayError.text(event.error.message);\n    } else {\n      displayError.text('');\n    }\n  });\n  var form = (0,_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(\"#payment-form-\".concat(config.form));\n  initFormValidation(form[0], onSubmit(key, form, stripe, card));\n\n  if (form.$('input[name=custom_price_text]').length > 0) {\n    form.$('[data-render=\"price-value\"]').text(form.$('input[name=custom_price_text]').val() + form.$('[data-input=currency]').text());\n  }\n\n  var choices = (0,_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(\"#payment-form-\".concat(config.form, \" input[name=price_text]\"));\n\n  if (choices.length > 0) {\n    choices.$nodes[0].setAttribute('checked', true);\n    choices.$nodes[0].parentElement.classList.add('active');\n    form.$('[data-render=\"price-value\"]').text(choices.$nodes[0].value);\n  }\n\n  form.$('[data-action=\"toggle-price-change\"]').on('click', function () {\n    var isEditable = false;\n    return function () {\n      if (isEditable) {\n        form.$('.price-display').removeClass('hidden');\n        form.$('.price-input').addClass('hidden');\n        form.$('input[name=custom_value]').val('false');\n        form.$('[data-render=\"price-value\"]').text(form.$('input[name=price_text][checked]').val());\n      } else {\n        form.$('.price-display').addClass('hidden');\n        form.$('.price-input').removeClass('hidden');\n        form.$('input[name=custom_value]').val('true');\n        form.$('[data-render=\"price-value\"]').text(form.$('input[name=custom_price_text]').val() + form.$('[data-input=currency]').text());\n      }\n\n      isEditable = !isEditable;\n    };\n  }());\n  form.on('input', 'input[name=price_text]', function (e) {\n    var price = parseInt(e.target.value.match(/\\w+/g).reduce(function (tmp, match) {\n      return tmp + match;\n    }, ''), 10);\n    form.$('input[name=price]').val(price);\n    form.$('[data-render=\"price-value\"]').text(e.target.value);\n  });\n  form.on('input', 'input[name=custom_price_text]', function (e) {\n    form.$('[data-render=\"price-value\"]').text(e.target.value + form.$('[data-input=currency]').text());\n  });\n  form.$('#generic-success [data-action=\"return-form\"]').on('click', function () {\n    form.$('#generic-success').addClass('hidden');\n    form.removeClass('success');\n  });\n});\nwindow.syna.stream.subscribe('pricing:change', function (_ref) {\n  var product = _ref.product,\n      description = _ref.description,\n      price = _ref.price,\n      currency = _ref.currency;\n  updateStripeFragments(product, description, price, currency);\n});\n\nfunction updateStripeFragments(product, description, price, currency) {\n  window.syna.api.toArray('stripe').forEach(function (config) {\n    var form = (0,_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(\"#payment-form-\".concat(config.form));\n    config.description = description;\n    config.product = product;\n\n    if (product) {\n      (0,_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__.default)('[data-render=\"product\"]').html(window.syna.api.renderTemplate((0,_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(\"#stripe-product-template-\".concat(config.form)).html(), {\n        product: product\n      }));\n    }\n\n    if (price) {\n      var priceTemplate = (0,_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(\"#stripe-price-template-\".concat(config.form)).html();\n      var data = {\n        price: price,\n        currency: currency\n      };\n\n      if (form.$('[data-render=price]').length > 0) {\n        form.$('[data-render=price]').html(window.syna.api.renderTemplate(priceTemplate, data));\n      }\n\n      if (form.$('[data-value=price]').length > 0) {\n        form.$('[data-value=price]').val(price);\n      }\n\n      form.$('[data-render=\"price-value\"]').text(price);\n      setTimeout(function () {\n        var choices = (0,_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(\"#payment-form-\".concat(config.form, \" input[name=price_text]\"));\n\n        if (choices.length > 0) {\n          choices.$nodes[0].setAttribute('checked', true);\n          choices.$nodes[0].parentElement.classList.add('active');\n        }\n      }, 0);\n    }\n\n    if (currency) {\n      form.$('input[name=currency]').text(currency);\n    }\n\n    form.$('input[name=email]')[0].focus(); // TODO: REVISIT: Remove the following line whenever firefox fixes center on focus\n\n    form[0].scrollIntoView({\n      behavior: 'instant',\n      block: 'center'\n    });\n  });\n}\n\nvar currencies = {\n  AED: 100,\n  AFN: 100,\n  ALL: 100,\n  AMD: 100,\n  ANG: 100,\n  AOA: 100,\n  ARS: 100,\n  AUD: 100,\n  AWG: 100,\n  AZN: 100,\n  BAM: 100,\n  BBD: 100,\n  BDT: 100,\n  BGN: 100,\n  BHD: 1000,\n  BIF: 1,\n  BMD: 100,\n  BND: 100,\n  BOB: 100,\n  BRL: 100,\n  BSD: 100,\n  BTN: 100,\n  BWP: 100,\n  BYN: 100,\n  BZD: 100,\n  CAD: 100,\n  CDF: 100,\n  CHF: 100,\n  CLP: 1,\n  CNY: 100,\n  COP: 100,\n  CRC: 100,\n  CUC: 100,\n  CUP: 100,\n  CVE: 100,\n  CZK: 100,\n  DJF: 1,\n  DKK: 100,\n  DOP: 100,\n  DZD: 100,\n  EGP: 100,\n  ERN: 100,\n  ETB: 100,\n  EUR: 100,\n  FJD: 100,\n  FKP: 100,\n  GBP: 100,\n  GEL: 100,\n  GGP: 100,\n  GHS: 100,\n  GIP: 100,\n  GMD: 100,\n  GNF: 1,\n  GTQ: 100,\n  GYD: 100,\n  HKD: 100,\n  HNL: 100,\n  HRK: 100,\n  HTG: 100,\n  HUF: 100,\n  IDR: 100,\n  ILS: 100,\n  IMP: 100,\n  INR: 100,\n  IQD: 1000,\n  IRR: 100,\n  ISK: 100,\n  JEP: 100,\n  JMD: 100,\n  JOD: 100,\n  JPY: 1,\n  KES: 100,\n  KGS: 100,\n  KHR: 100,\n  KID: 100,\n  KMF: 1,\n  KPW: 100,\n  KRW: 1,\n  KWD: 1000,\n  KYD: 100,\n  KZT: 100,\n  LAK: 100,\n  LBP: 100,\n  LKR: 100,\n  LRD: 100,\n  LSL: 100,\n  LYD: 1000,\n  MAD: 100,\n  MDL: 100,\n  MGA: 1,\n  MKD: 100,\n  MMK: 100,\n  MNT: 100,\n  MOP: 100,\n  MRU: 5,\n  MUR: 100,\n  MVR: 100,\n  MWK: 100,\n  MXN: 100,\n  MYR: 100,\n  MZN: 100,\n  NAD: 100,\n  NGN: 100,\n  NIO: 100,\n  NOK: 100,\n  NPR: 100,\n  NZD: 100,\n  OMR: 1000,\n  PAB: 100,\n  PEN: 100,\n  PGK: 100,\n  PHP: 100,\n  PKR: 100,\n  PLN: 100,\n  PRB: 100,\n  PYG: 1,\n  QAR: 100,\n  RON: 100,\n  RSD: 100,\n  RUB: 100,\n  RWF: 1,\n  SAR: 100,\n  SBD: 100,\n  SCR: 100,\n  SDG: 100,\n  SEK: 100,\n  SGD: 100,\n  SHP: 100,\n  SLL: 100,\n  SLS: 100,\n  SOS: 100,\n  SRD: 100,\n  SSP: 100,\n  STN: 100,\n  SYP: 100,\n  SZL: 100,\n  THB: 100,\n  TJS: 100,\n  TMT: 100,\n  TND: 1000,\n  TOP: 100,\n  TRY: 100,\n  TTD: 100,\n  TVD: 100,\n  TWD: 100,\n  TZS: 100,\n  UAH: 100,\n  UGX: 1,\n  USD: 100,\n  UYU: 100,\n  UZS: 100,\n  VES: 100,\n  VND: 1,\n  VUV: 1,\n  WST: 100,\n  XAF: 1,\n  XCD: 100,\n  XOF: 1,\n  XPF: 1,\n  YER: 100,\n  ZAR: 100,\n  ZMW: 100,\n  ZWB: 100\n};\n\n//# sourceURL=webpack://syna/./assets/js/stripe.js?");

/***/ }),

/***/ "../../../node_modules/form-validator-simple/dist/bundle.js":
/*!******************************************************************!*\
  !*** ../../../node_modules/form-validator-simple/dist/bundle.js ***!
  \******************************************************************/
/***/ (function(module) {

eval("(function (global, factory) {\n   true ? module.exports = factory() :\n  0;\n}(this, (function () { 'use strict';\n\n  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n  var options = {\n    errors: {\n      email: 'Invalid email',\n      default: 'Invalid value'\n    },\n    regexes: {\n      email: /^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/\n    }\n  };\n\n  var Validator = function () {\n    function Validator() {\n      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n          _ref$regexes = _ref.regexes,\n          regexes = _ref$regexes === undefined ? {} : _ref$regexes,\n          _ref$errors = _ref.errors,\n          errors = _ref$errors === undefined ? {} : _ref$errors,\n          onFormValidate = _ref.onFormValidate,\n          onError = _ref.onError,\n          onSuccess = _ref.onSuccess,\n          _ref$errorTemplate = _ref.errorTemplate,\n          errorTemplate = _ref$errorTemplate === undefined ? '' : _ref$errorTemplate,\n          form = _ref.form;\n\n      _classCallCheck(this, Validator);\n\n      this.regexes = _extends({}, options.regexes, regexes);\n      this.errors = _extends({}, options.errors, errors);\n      this.onError = onError;\n      this.onSuccess = onSuccess;\n      this.errorTemplate = errorTemplate;\n\n      this._fieldTimers = {};\n\n      if (onFormValidate) {\n        this._onFormValidate = this._onFormValidate(onFormValidate);\n      } else {\n        this._onFormValidate = function () {};\n      }\n\n      if (form) {\n        this.init(form);\n      }\n\n      this._validate = this._validate.bind(this);\n      this.init = this.init.bind(this);\n    }\n\n    Validator.prototype.init = function init(form) {\n      var _this = this;\n\n      var fields = {};\n\n      try {\n        fields = form.querySelectorAll('[data-validation]');\n      } catch (err) {\n        throw new Error('Finding inputs in the form failed. Are you sure \"form\" is an HTML element?');\n      }\n\n      if (fields.length > 0) {\n        form.onsubmit = this._handleSubmit(form);\n      }\n\n      fields.forEach(function (field) {\n        field.setAttribute('data-validation-valid', _this._validateInput(field));\n\n        var id = Math.random();\n        field.addEventListener('input', _this._validate(field));\n        field.addEventListener('focus', function () {\n          _this._fieldTimers[id] = setInterval(_this._validate(field), 200);\n        });\n        field.addEventListener('blur', function () {\n          clearInterval(_this._fieldTimers[id]);\n          _this._fieldTimers[id] = null;\n        });\n      });\n\n      var isFormValid = this._isFormValid(form);\n      this._onFormValidate(isFormValid, form);\n      form.setAttribute('data-validation-valid', isFormValid);\n    };\n\n    Validator.prototype._handleSubmit = function _handleSubmit(form) {\n      var _this2 = this;\n\n      return function (e) {\n        if (form.getAttribute('data-validation-valid') === 'false') {\n          e.preventDefault();\n          e.stopPropagation();\n\n          if (_this2.onError) {\n            _this2.onError(e, form);\n          }\n\n          return false;\n        } else if (_this2.onSuccess) {\n          _this2.onSuccess(e, form);\n        }\n      };\n    };\n\n    Validator.prototype._isFormValid = function _isFormValid(form) {\n      return !Array.from(form.querySelectorAll('[data-validation]')).some(function (field) {\n        return field.getAttribute('data-validation-valid') === 'false';\n      });\n    };\n\n    Validator.prototype._onFormValidate = function _onFormValidate(callback) {\n      return function (validity, form) {\n        callback(validity, form);\n      };\n    };\n\n    Validator.prototype._validate = function _validate(field) {\n      var _this3 = this;\n\n      return function () {\n        var form = field.closest('form');\n        var errorContainer = field.closest('div').querySelector('[data-error]');\n        var isFieldValid = _this3._validateInput(field);\n        var isFormValid = isFieldValid ? _this3._isFormValid(form) : false;\n        field.setAttribute('data-validation-valid', isFieldValid);\n\n        if (isFieldValid) {\n          form.setAttribute('data-validation-valid', isFormValid);\n          field.classList.remove('error');\n          field.classList.add('valid');\n          _this3._hideError(field, errorContainer);\n        } else {\n          form.setAttribute('data-validation-valid', false);\n          field.classList.add('error');\n          field.classList.remove('valid');\n          _this3._displayError(field, errorContainer);\n        }\n\n        _this3._onFormValidate(isFormValid, form);\n      };\n    };\n\n    Validator.prototype._displayError = function _displayError(field, errorContainer) {\n      if (errorContainer) {\n        var errorMsg = field.getAttribute('data-validation-error-msg');\n        errorContainer.innerHTML = this._formatError(errorMsg || this.errors[field.getAttribute('data-validation')] || this.errors.default);\n        errorContainer.classList.add('has-error');\n      }\n    };\n\n    Validator.prototype._hideError = function _hideError(field, errorContainer) {\n      if (errorContainer) {\n        errorContainer.innerHTML = '';\n        errorContainer.classList.remove('has-error');\n      }\n    };\n\n    Validator.prototype._validateInput = function _validateInput(field) {\n      var value = field.value;\n      var validation = field.getAttribute('data-validation');\n      var regex = field.getAttribute('data-validation-regex');\n      var required = field.required;\n\n      switch (validation) {\n        case '':\n          return required ? !!value : true;\n\n        case 'regex':\n          return new RegExp(regex).test(value);\n\n        default:\n          return new RegExp(this.regexes[validation]).test(value);\n      }\n    };\n\n    Validator.prototype._formatError = function _formatError(string) {\n      return this.errorTemplate.replace('%s', string);\n    };\n\n    return Validator;\n  }();\n\n  return Validator;\n\n})));\n//# sourceMappingURL=bundle.js.map\n\n\n//# sourceURL=webpack://syna/../../../node_modules/form-validator-simple/dist/bundle.js?");

/***/ }),

/***/ "../../../node_modules/parse-price/src/index.js":
/*!******************************************************!*\
  !*** ../../../node_modules/parse-price/src/index.js ***!
  \******************************************************/
/***/ ((module) => {

eval("/**\n * @param {String} str\n * @return {String}\n */\nfunction filterNumbers (str) {\n  return str.replace(/[^\\d]/g, '')\n}\n\n/**\n * @param {String} str\n * @return {String}\n */\nfunction filterNumbersDotsAndCommas (str) {\n  return str\n    .replace(/[^\\d.,]/g, '')\n    .replace(/[.,]$/, '')\n}\n\nfunction getDecimalSymbol (str) {\n  var strFiltered = filterNumbersDotsAndCommas(str)\n  var endWithZero = strFiltered[strFiltered.length - 1] === '0'\n\n  // For each character starting from the end...\n  for (var i = strFiltered.length; i > 0; i--) {\n    // If the last character is a \"0\" and the decimal position > 3, no decimal\n    if (((strFiltered.length - i + 1) > 3) && endWithZero) {\n      return\n    }\n\n    var currentChar = strFiltered[i - 1]\n\n    if ([',', '.'].indexOf(currentChar) !== -1) {\n      return currentChar\n    }\n  }\n}\n\n//\n// API\n//\n\n/**\n * @param {Number|String} input\n * @return {Number}\n */\nfunction parsePrice (input) {\n  var str = String(input)\n\n  var decimalPart = '00'\n  var decimalSymbol = getDecimalSymbol(str)\n\n  if (decimalSymbol) {\n    decimalPart = str.split(decimalSymbol)[1]\n  }\n\n  var integerPart = str.split(decimalSymbol)[0]\n\n  return Number(filterNumbers(integerPart) + '.' + filterNumbers(decimalPart))\n}\n\nmodule.exports = parsePrice\n\n\n//# sourceURL=webpack://syna/../../../node_modules/parse-price/src/index.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/stripe.js");
/******/ 	
/******/ })()
;