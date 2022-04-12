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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/links */ \"./modules/links.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_carusel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/carusel */ \"./modules/carusel.js\");\n/* harmony import */ var _modules_accord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accord */ \"./modules/accord.js\");\n/* harmony import */ var _modules_arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/arrow */ \"./modules/arrow.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_links__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_carusel__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_accord__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_arrow__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__.sendForm)();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accord.js":
/*!***************************!*\
  !*** ./modules/accord.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n    const accordeons = document.querySelectorAll('.accordeon > .element');\r\n    const desc = document.querySelector('.element-content');\r\n\r\n\r\n    accordeons.forEach((accordeon, index) => {\r\n        accordeon.addEventListener('click', (e) => {\r\n\r\n            accordeons.forEach(accordeon => {\r\n                accordeon.classList.remove('active');\r\n                accordeon.querySelector('.element-content').style.display = 'none';\r\n            });\r\n\r\n            accordeon.classList.add('active');\r\n            accordeon.querySelector('.element-content').style.display = 'block';\r\n\r\n        })\r\n\r\n\r\n        \r\n    })\r\n    \r\n\r\n\r\n    // accordeons.addEventListener('click', (e) => {\r\n    //     // if (e.target.matches('.title')) {\r\n    //     //     \r\n    //     // }\r\n    //     console.log(accordeons)\r\n    // })\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack:///./modules/accord.js?");

/***/ }),

/***/ "./modules/arrow.js":
/*!**************************!*\
  !*** ./modules/arrow.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst arrow = () => {\r\n    const arrow = document.querySelector('.up');\r\n    const header = document.querySelector('.header-push');\r\n\r\n\r\n    document.addEventListener('scroll', () => {\r\n        arrow.style.position = 'relative';\r\n\r\n        if (document.documentElement.scrollTop >= 576) {\r\n            arrow.style.position = 'fixed';\r\n        }\r\n\r\n        arrow.addEventListener('click', () => {\r\n            header.scrollIntoView({block: \"start\", behavior: \"smooth\"});\r\n        })\r\n\r\n    })\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrow);\n\n//# sourceURL=webpack:///./modules/arrow.js?");

/***/ }),

/***/ "./modules/carusel.js":
/*!****************************!*\
  !*** ./modules/carusel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carusel = () => {\r\n    const elems = document.querySelectorAll('.services-carousel > div > div');\r\n    const arrowRight = document.querySelector('.arrow-right');\r\n\r\n    // let counter = 3;\r\n\r\n    // elems.forEach(elem => {\r\n    //     elem.style.display = 'none';\r\n    // })\r\n\r\n    // elems[0].style.display = 'block';\r\n    // elems[1].style.display = 'block';\r\n    // elems[2].style.display = 'block';\r\n\r\n    // arrowRight.addEventListener('click', () => {\r\n    //     if (counter > 2) {\r\n    //         elems[0].style.display = 'none';\r\n    //         elems[3].style.display = 'block';\r\n    //     }\r\n    // })\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carusel);\n\n//# sourceURL=webpack:///./modules/carusel.js?");

/***/ }),

/***/ "./modules/links.js":
/*!**************************!*\
  !*** ./modules/links.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst links = () => {\r\n    const links = document.querySelectorAll('.top-menu > ul> li > a');\r\n\r\n    links.forEach(link => {\r\n        link.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            document.querySelector(link.getAttribute('href')).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n        })\r\n    })\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (links);\r\n\n\n//# sourceURL=webpack:///./modules/links.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modalOverlay = document.querySelector('.modal-overlay');\r\n    const modal = document.querySelector('.modal-callback');\r\n    let callbackBtns = document.querySelectorAll('.callback-btn');\r\n    const btnServises = document.querySelector('.button-services');\r\n    const orderBtns = document.querySelectorAll('.services-carousel > div > div > .img-wrapper');\r\n\r\n    callbackBtns = [...callbackBtns, btnServises];\r\n    \r\n    orderBtns.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            console.log(12)\r\n        })\r\n    })\r\n\r\n\r\n    document.addEventListener('click', (e) => {\r\n            if (e.target.closest('.modal-overlay') || e.target.closest('.modal-close')) {\r\n            modal.style.display = \"none\";\r\n            modalOverlay.style.display = \"none\";\r\n        }\r\n    })\r\n\r\n    const showModal = () => {\r\n        modal.style.display = \"flex\";\r\n        modalOverlay.style.display = \"flex\";\r\n    };\r\n\r\n\r\n    callbackBtns.forEach(btn => {\r\n        btn.addEventListener('click', (e) => {\r\n            // console.log(e.target)\r\n            // console.log(btn)\r\n            showModal();\r\n        })\r\n    })\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\n// const sendForm = () => {\r\n//     const form = document.querySelector('form');\r\n//     const statusBlock = document.createElement('div')\r\n//     const loadText = 'Загрузка...'\r\n//     const errorText = 'Ошибка...'\r\n//     const successText = 'Спасибо!Наш менеджер с вами свяжется.'\r\n    \r\n//     const validate = (list) => {\r\n//         let success = true;\r\n\r\n//         // list.forEach(input => {\r\n//         //     if(input.name === \"fio\" && (/[^а-яА-Я ]/g.test(input.value) || input.value.length < 2)){\r\n//         //         alert(\"Правильно введите имя\");\r\n//         //     success = false;\r\n//         //     }\r\n      \r\n//         //     if (input.name === \"tel\" && (!(/^[\\+]{1}([0-9]{11})+$/g.test(input.value)) || input.value === \"\")){\r\n//         //         alert(\"Правильно введите телефон\");\r\n//         //     success = false;\r\n//         //     }\r\n//         // })\r\n\r\n//         return success\r\n//     };\r\n\r\n//     const sendData = (data) => {\r\n//         return fetch('https://jsonplaceholder.typicode.com/pdffd', {\r\n//         method: 'POST',\r\n//         body: JSON.stringify(data),\r\n//         headers: {\r\n//             \"Content-Type\": \"application/json\"\r\n//         }\r\n//         }).then(res => res.json())\r\n//     };\r\n\r\n//     form.addEventListener('submit', (e) => {\r\n//         e.preventDefault();\r\n//         statusBlock.textContent = loadText;\r\n//         form.append(statusBlock)\r\n\r\n//         const formElems = form.querySelectorAll('.form-control');\r\n\r\n//         const formData = new FormData(form);\r\n//         const formBody = {};\r\n\r\n//         formData.forEach((val, key) => {\r\n//             formBody[key] = val;\r\n//         })\r\n\r\n//         if (validate(formElems)) {\r\n//             sendData(formBody).then(data => {\r\n//                 formElems.forEach(input => {\r\n//                     input.value = ''\r\n//                 })\r\n//             }).catch(error => {\r\n//                 statusBlock.textContent = errorText\r\n//                 setTimeout(() => {\r\n//                     form.removeChild(statusBlock);\r\n//                 }, 5000);\r\n//             })\r\n//         } else {\r\n//             alert('1')\r\n//         } \r\n\r\n//     }) \r\n  \r\n\r\n//     // form.addEventListener('submit', (e) => {\r\n//     //     e.preventDefault();\r\n\r\n//     //     const formData = new FormData(form);\r\n//     //     const formBody = {};\r\n\r\n//     //     statusBlock.textContent = loadText;\r\n//     //     form.append(statusBlock)\r\n\r\n//     //     formData.forEach((val, key) => {\r\n//     //         formBody[key] = val;\r\n//     //     })\r\n\r\n//     //     if (validate(formElems)) {\r\n//     //         sendData(formBody)\r\n//     //         .then(data => {\r\n//     //         statusBlock.textContent = successText;\r\n//     //         formElems.forEach(input => {\r\n//     //         input.value = ''\r\n//     //       });\r\n//     //     })\r\n//     //     .catch(error1 => {\r\n//     //         console.log('УРА!!!!!!!!!')\r\n//     //     })\r\n//     //     } else {\r\n//     //         console.log('Доделай (Неправильно ввели имя или фамилию)')\r\n//     //     }\r\n\r\n//     // })\r\n\r\n// };\r\n\r\n// export default sendForm\r\n\r\nconst sendForm = () => {\r\n  const arrow = document.querySelector('.up')\r\n  const modal = document.querySelector('.modal-callback')\r\n  const modalOverlay = document.querySelector('.modal-overlay')\r\n  const form = document.querySelector('form')\r\n  const statusBlock = document.createElement('div')\r\n  const loadText = 'Идёт отправка...'\r\n  const successText = 'Спасибо!Наш менеджер с вами свяжется.'\r\n  const errorText = 'Ошибка'\r\n\r\n  const formElements = form.querySelectorAll('input')\r\n\r\n  const sendData = (data) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/psts', {\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n    }).then((res) => res.json)\r\n  }\r\n\r\n  const cleanData = () => {\r\n    formElements.forEach((input) => {\r\n      if (input.name === 'tel' || input.name === 'fio') {\r\n        input.value = ''\r\n      }\r\n    })\r\n  }\r\n\r\n  const submitForm = () => {\r\n    const formData = new FormData(form)\r\n    const formBody = {}\r\n\r\n    statusBlock.textContent = loadText\r\n    form.append(statusBlock)\r\n\r\n    formData.forEach((value, key) => {\r\n      formBody[key] = value\r\n    })\r\n    \r\n    sendData(formBody)\r\n    .then(() => {\r\n      statusBlock.textContent = successText\r\n      setTimeout(() => {\r\n        modal.style.display = 'none'\r\n        modalOverlay.style.display = 'none'\r\n        statusBlock.textContent = ''\r\n        document.body.style.overflow = ''\r\n        if (window.pageYOffset > 520) {\r\n          arrow.style.display = 'block'\r\n        }\r\n      }, 3000)\r\n      cleanData()\r\n    })\r\n    .catch(() => {\r\n      statusBlock.textContent = errorText\r\n    })\r\n  }\r\n\r\n  const requiredPhone = () => {\r\n    formElements.forEach((input) => {\r\n      if (input.name === 'tel') {\r\n        input.setAttribute('required', true)\r\n      }\r\n    })\r\n  }\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error('Верните форму на место!')\r\n    }\r\n    requiredPhone()\r\n\r\n    form.addEventListener('submit', (e) => {\r\n      e.preventDefault()\r\n\r\n      submitForm()\r\n    })\r\n  } catch (error) {\r\n    console.log(error.message)\r\n  }\r\n}\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const slider = document.querySelector('.top-slider');\r\n    const sliders = document.querySelectorAll('.top-slider > .item');\r\n    const text = document.querySelectorAll('.table');\r\n    let currentSlide = 0;\r\n\r\n    const prevSlide = () => {\r\n        sliders[currentSlide].style.display = 'none';\r\n    };\r\n\r\n    const nextSlide = () => {\r\n        sliders[currentSlide].style.display = '';\r\n    };\r\n\r\n    text[0].style.opacity = 1;\r\n    text[0].style.visibility = 'visible';\r\n\r\n    const autoSlide = () => {\r\n        text[currentSlide].style.opacity = 0;\r\n        text[currentSlide].style.visibility = 'hidden';\r\n\r\n        prevSlide();\r\n        \r\n        currentSlide++;\r\n\r\n        if (currentSlide >= sliders.length) {\r\n            currentSlide = 0;\r\n        }\r\n\r\n        nextSlide();\r\n\r\n        text[currentSlide].style.opacity = 1;\r\n        text[currentSlide].style.visibility = 'visible';\r\n    };\r\n\r\n    const startSlide = () => {\r\n        setInterval(autoSlide, 3000)\r\n    };\r\n\r\n    startSlide()\r\n\r\n    // text[0].style.opacity = 1;\r\n    // text[0].style.visibility = 'visible';\r\n\r\n\r\n    // const showSlider = () => {\r\n    //     text[currentSlide + 1].style.opacity = 1;\r\n    //     text[currentSlide + 1].style.visibility = 'visible';\r\n\r\n    //     sliders[currentSlide].style.display = \"none\";\r\n        \r\n\r\n    //     currentSlide++\r\n    //     console.log(currentSlide)\r\n\r\n    //     if (currentSlide >= sliders.length) {\r\n    //         currentSlide = 0;\r\n    //         sliders.forEach(slider => {\r\n    //             slider.style.display = '';\r\n    //         })\r\n    //     }\r\n    // };\r\n\r\n    // const autoSlider = () => {\r\n    //     //setInterval(showSlider, 3000)\r\n    // };\r\n\r\n    // autoSlider();\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;