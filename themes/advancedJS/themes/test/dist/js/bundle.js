/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/main.js":
/*!****************************!*\
  !*** ./src/script/main.js ***!
  \****************************/
/***/ ((module) => {

function myModule() {
    this.hello = function() {
        console.log('hello world');
    };

    this.goodbye = function() {
        console.log('bye!');
    };
}

module.exports = myModule;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/script/script.js ***!
  \******************************/
const myModule = __webpack_require__(/*! ./main */ "./src/script/main.js");

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();

// галп планировщик задач с помощью него можно создавать различные таски, он не умеет собирать скрипты
// вебпак же сборщик модулей его запускают для сборки проекта
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map