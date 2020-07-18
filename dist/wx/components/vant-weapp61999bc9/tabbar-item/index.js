
var window = window || {};

window["webpackJsonp"] = require("../../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "m7d8beb2c"
global.currentResource = "/Volumes/Resources/Work Space/Develop/Demo Project/mpx-project/node_modules/vant-weapp/dist/tabbar-item/index.js"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* harmony import */ var _index_js_packageName_main_resourcePath_Volumes_Resources_Work_Space_Develop_Demo_Project_mpx_project_node_modules_vant_weapp_dist_tabbar_item_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* empty/unused harmony star reexport */global.currentModuleId;
/* json */
__webpack_require__(254)

/* script */


/* template */
__webpack_require__(256)

/* styles */
__webpack_require__(257)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__["VantComponent"])({
    props: {
        info: null,
        icon: String,
        dot: Boolean,
        name: {
            type: [String, Number]
        }
    },
    relation: {
        name: 'tabbar',
        type: 'ancestor'
    },
    data: {
        active: false
    },
    methods: {
        onClick() {
            if (this.parent) {
                this.parent.onChange(this);
            }
            this.$emit('click');
        },
        updateFromParent() {
            const { parent } = this;
            if (!parent) {
                return;
            }
            const index = parent.children.indexOf(this);
            const parentData = parent.data;
            const { data } = this;
            const active = (data.name || index) === parentData.active;
            const patch = {};
            if (active !== data.active) {
                patch.active = active;
            }
            if (parentData.activeColor !== data.activeColor) {
                patch.activeColor = parentData.activeColor;
            }
            if (parentData.inactiveColor !== data.inactiveColor) {
                patch.inactiveColor = parentData.inactiveColor;
            }
            return Object.keys(patch).length > 0
                ? this.set(patch)
                : Promise.resolve();
        }
    }
});


/***/ }),

/***/ 256:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[253,1]]]);