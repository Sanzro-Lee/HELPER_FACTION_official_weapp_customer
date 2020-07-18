
var window = window || {};

window["webpackJsonp"] = require("../../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "m52833494"
global.currentResource = "/Volumes/Resources/Work Space/Develop/Demo Project/mpx-project/node_modules/vant-weapp/dist/tabbar/index.js"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* harmony import */ var _index_js_packageName_main_resourcePath_Volumes_Resources_Work_Space_Develop_Demo_Project_mpx_project_node_modules_vant_weapp_dist_tabbar_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* empty/unused harmony star reexport */global.currentModuleId;
/* json */
__webpack_require__(259)

/* script */


/* template */
__webpack_require__(262)

/* styles */
__webpack_require__(263)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
/* harmony import */ var _mixins_safe_area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(261);


Object(_common_component__WEBPACK_IMPORTED_MODULE_0__["VantComponent"])({
    mixins: [Object(_mixins_safe_area__WEBPACK_IMPORTED_MODULE_1__["safeArea"])()],
    relation: {
        name: 'tabbar-item',
        type: 'descendant',
        linked(target) {
            this.children.push(target);
            target.parent = this;
            target.updateFromParent();
        },
        unlinked(target) {
            this.children = this.children.filter((item) => item !== target);
            this.updateChildren();
        }
    },
    props: {
        active: {
            type: [Number, String],
            observer: 'updateChildren'
        },
        activeColor: {
            type: String,
            observer: 'updateChildren'
        },
        inactiveColor: {
            type: String,
            observer: 'updateChildren'
        },
        fixed: {
            type: Boolean,
            value: true
        },
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    beforeCreate() {
        this.children = [];
    },
    methods: {
        updateChildren() {
            const { children } = this;
            if (!Array.isArray(children) || !children.length) {
                return Promise.resolve();
            }
            return Promise.all(children.map((child) => child.updateFromParent()));
        },
        onChange(child) {
            const index = this.children.indexOf(child);
            const active = child.data.name || index;
            if (active !== this.data.active) {
                this.$emit('change', active);
            }
        }
    }
});


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeArea", function() { return safeArea; });
let cache = null;
function getSafeArea() {
    return new Promise((resolve, reject) => {
        if (cache != null) {
            resolve(cache);
        }
        else {
            wx.getSystemInfo({
                success: ({ model, statusBarHeight }) => {
                    const deviceType = model.replace(/\s/g, '-');
                    const iphoneNew = /iphone-x|iPhone11|iPhone12/i.test(deviceType);
                    cache = {
                        isIPhoneX: iphoneNew,
                        statusBarHeight
                    };
                    resolve(cache);
                },
                fail: reject
            });
        }
    });
}
const safeArea = ({ safeAreaInsetBottom = true, safeAreaInsetTop = false } = {}) => Behavior({
    properties: {
        safeAreaInsetTop: {
            type: Boolean,
            value: safeAreaInsetTop
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: safeAreaInsetBottom
        }
    },
    created() {
        getSafeArea().then(({ isIPhoneX, statusBarHeight }) => {
            this.set({ isIPhoneX, statusBarHeight });
        });
    }
});


/***/ }),

/***/ 262:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[258,1]]]);