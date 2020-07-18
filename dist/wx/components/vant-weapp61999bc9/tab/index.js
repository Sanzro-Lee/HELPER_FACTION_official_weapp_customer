
var window = window || {};

window["webpackJsonp"] = require("../../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "me4ca8dc6"
global.currentResource = "/Volumes/Resources/Work Space/Develop/Demo Project/mpx-project/node_modules/vant-weapp/dist/tab/index.js"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* harmony import */ var _index_js_packageName_main_resourcePath_Volumes_Resources_Work_Space_Develop_Demo_Project_mpx_project_node_modules_vant_weapp_dist_tab_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* empty/unused harmony star reexport */global.currentModuleId;
/* json */
__webpack_require__(239)

/* script */


/* template */
__webpack_require__(241)

/* styles */
__webpack_require__(242)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__["VantComponent"])({
    relation: {
        name: 'tabs',
        type: 'ancestor'
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean,
        titleStyle: String
    },
    data: {
        width: null,
        inited: false,
        active: false,
        animated: false
    },
    watch: {
        title: 'update',
        disabled: 'update',
        dot: 'update',
        info: 'update',
        titleStyle: 'update'
    },
    methods: {
        update() {
            const parent = this.getRelationNodes('../tabs/index')[0];
            if (parent) {
                parent.updateTabs();
            }
        }
    }
});


/***/ }),

/***/ 241:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[238,1]]]);