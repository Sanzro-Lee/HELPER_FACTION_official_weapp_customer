
var window = window || {};

window["webpackJsonp"] = require("../../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "m1e8ae030"
global.currentResource = "/Volumes/Resources/Work Space/Develop/Demo Project/mpx-project/node_modules/vant-weapp/dist/card/index.js"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* harmony import */ var _index_js_packageName_main_resourcePath_Volumes_Resources_Work_Space_Develop_Demo_Project_mpx_project_node_modules_vant_weapp_dist_card_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* empty/unused harmony star reexport */global.currentModuleId;
/* json */
__webpack_require__(275)

/* script */


/* template */
__webpack_require__(278)

/* styles */
__webpack_require__(279)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(229);


Object(_common_component__WEBPACK_IMPORTED_MODULE_1__["VantComponent"])({
    classes: [
        'num-class',
        'desc-class',
        'thumb-class',
        'title-class',
        'price-class',
        'origin-price-class',
    ],
    mixins: [_mixins_link__WEBPACK_IMPORTED_MODULE_0__["link"]],
    props: {
        tag: String,
        num: String,
        desc: String,
        thumb: String,
        title: String,
        price: String,
        centered: Boolean,
        lazyLoad: Boolean,
        thumbLink: String,
        originPrice: String,
        thumbMode: {
            type: String,
            value: 'aspectFit'
        },
        currency: {
            type: String,
            value: '¥'
        }
    },
    methods: {
        onClickThumb() {
            this.jumpLink('thumbLink');
        }
    }
});


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
const link = Behavior({
    properties: {
        url: String,
        linkType: {
            type: String,
            value: 'navigateTo'
        }
    },
    methods: {
        jumpLink(urlKey = 'url') {
            const url = this.data[urlKey];
            if (url) {
                wx[this.data.linkType]({ url });
            }
        }
    }
});


/***/ }),

/***/ 278:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[274,1]]]);