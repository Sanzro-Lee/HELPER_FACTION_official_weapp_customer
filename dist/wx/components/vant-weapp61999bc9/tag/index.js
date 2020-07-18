
var window = window || {};

window["webpackJsonp"] = require("../../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "ma79fe63c"
global.currentResource = "/Volumes/Resources/Work Space/Develop/Demo Project/mpx-project/node_modules/vant-weapp/dist/tag/index.js"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* harmony import */ var _index_js_packageName_main_resourcePath_Volumes_Resources_Work_Space_Develop_Demo_Project_mpx_project_node_modules_vant_weapp_dist_tag_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* empty/unused harmony star reexport */global.currentModuleId;
/* json */
__webpack_require__(281)

/* script */


/* template */
__webpack_require__(284)

/* styles */
__webpack_require__(285)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
/* harmony import */ var _common_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(283);


const DEFAULT_COLOR = '#999';
const COLOR_MAP = {
    danger: _common_color__WEBPACK_IMPORTED_MODULE_1__["RED"],
    primary: _common_color__WEBPACK_IMPORTED_MODULE_1__["BLUE"],
    success: _common_color__WEBPACK_IMPORTED_MODULE_1__["GREEN"],
    warning: _common_color__WEBPACK_IMPORTED_MODULE_1__["ORANGE"]
};
Object(_common_component__WEBPACK_IMPORTED_MODULE_0__["VantComponent"])({
    props: {
        size: String,
        type: String,
        mark: Boolean,
        color: String,
        plain: Boolean,
        round: Boolean,
        textColor: String
    },
    computed: {
        style() {
            const color = this.data.color || COLOR_MAP[this.data.type] || DEFAULT_COLOR;
            const key = this.data.plain ? 'color' : 'background-color';
            const style = { [key]: color };
            if (this.data.textColor) {
                style.color = this.data.textColor;
            }
            return Object.keys(style).map(key => `${key}: ${style[key]}`).join(';');
        }
    }
});


/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE", function() { return BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREEN", function() { return GREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE", function() { return ORANGE; });
const RED = '#f44';
const BLUE = '#1989fa';
const GREEN = '#07c160';
const ORANGE = '#ff976a';


/***/ }),

/***/ 284:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[280,1]]]);