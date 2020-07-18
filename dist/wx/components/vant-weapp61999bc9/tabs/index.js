
var window = window || {};

window["webpackJsonp"] = require("../../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "m4ae17ad6"
global.currentResource = "/Volumes/Resources/Work Space/Develop/Demo Project/mpx-project/node_modules/vant-weapp/dist/tabs/index.js"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* harmony import */ var _index_js_packageName_main_resourcePath_Volumes_Resources_Work_Space_Develop_Demo_Project_mpx_project_node_modules_vant_weapp_dist_tabs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);
/* empty/unused harmony star reexport */global.currentModuleId;
/* json */
__webpack_require__(227)

/* script */


/* template */
__webpack_require__(236)

/* styles */
__webpack_require__(237)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(234);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(235);



Object(_common_component__WEBPACK_IMPORTED_MODULE_0__["VantComponent"])({
    mixins: [_mixins_touch__WEBPACK_IMPORTED_MODULE_1__["touch"]],
    classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
    relation: {
        name: 'tab',
        type: 'descendant',
        linked(child) {
            this.child.push(child);
            this.updateTabs(this.data.tabs.concat(child.data));
        },
        unlinked(child) {
            const index = this.child.indexOf(child);
            const { tabs } = this.data;
            tabs.splice(index, 1);
            this.child.splice(index, 1);
            this.updateTabs(tabs);
        }
    },
    props: {
        color: String,
        sticky: Boolean,
        animated: Boolean,
        swipeable: Boolean,
        lineWidth: {
            type: Number,
            value: -1
        },
        lineHeight: {
            type: Number,
            value: -1
        },
        active: {
            type: Number,
            value: 0
        },
        type: {
            type: String,
            value: 'line'
        },
        border: {
            type: Boolean,
            value: true
        },
        duration: {
            type: Number,
            value: 0.3
        },
        zIndex: {
            type: Number,
            value: 1
        },
        swipeThreshold: {
            type: Number,
            value: 4
        },
        offsetTop: {
            type: Number,
            value: 0
        }
    },
    data: {
        tabs: [],
        lineStyle: '',
        scrollLeft: 0,
        scrollable: false,
        trackStyle: '',
        wrapStyle: '',
        position: ''
    },
    watch: {
        swipeThreshold() {
            this.set({
                scrollable: this.child.length > this.data.swipeThreshold
            });
        },
        color: 'setLine',
        lineWidth: 'setLine',
        lineHeight: 'setLine',
        active: 'setActiveTab',
        animated: 'setTrack',
        offsetTop: 'setWrapStyle'
    },
    beforeCreate() {
        this.child = [];
    },
    mounted() {
        this.setLine(true);
        this.setTrack();
        this.scrollIntoView();
        this.getRect('.van-tabs__wrap').then((rect) => {
            this.navHeight = rect.height;
            this.observerContentScroll();
        });
    },
    destroyed() {
        // @ts-ignore
        this.createIntersectionObserver().disconnect();
    },
    methods: {
        updateTabs(tabs) {
            tabs = tabs || this.data.tabs;
            this.set({
                tabs,
                scrollable: tabs.length > this.data.swipeThreshold
            });
            this.setActiveTab();
        },
        trigger(eventName, index) {
            this.$emit(eventName, {
                index,
                title: this.data.tabs[index].title
            });
        },
        onTap(event) {
            const { index } = event.currentTarget.dataset;
            if (this.data.tabs[index].disabled) {
                this.trigger('disabled', index);
            }
            else {
                this.trigger('click', index);
                this.setActive(index);
            }
        },
        setActive(active) {
            if (active !== this.data.active) {
                this.trigger('change', active);
                this.set({ active });
                this.setActiveTab();
            }
        },
        setLine(skipTransition) {
            if (this.data.type !== 'line') {
                return;
            }
            const { color, active, duration, lineWidth, lineHeight } = this.data;
            this.getRect('.van-tab', true).then((rects) => {
                const rect = rects[active];
                const width = lineWidth !== -1 ? lineWidth : rect.width / 2;
                const height = lineHeight !== -1 ? `height: ${lineHeight}px;` : '';
                let left = rects
                    .slice(0, active)
                    .reduce((prev, curr) => prev + curr.width, 0);
                left += (rect.width - width) / 2;
                const transition = skipTransition
                    ? ''
                    : `transition-duration: ${duration}s; -webkit-transition-duration: ${duration}s;`;
                this.set({
                    lineStyle: `
            ${height}
            width: ${width}px;
            background-color: ${color};
            -webkit-transform: translateX(${left}px);
            transform: translateX(${left}px);
            ${transition}
          `
                });
            });
        },
        setTrack() {
            const { animated, active, duration } = this.data;
            if (!animated)
                return '';
            this.getRect('.van-tabs__content').then((rect) => {
                const { width } = rect;
                this.set({
                    trackStyle: `
            width: ${width * this.child.length}px;
            left: ${-1 * active * width}px;
            transition: left ${duration}s;
            display: -webkit-box;
            display: flex;
          `
                });
                const props = { width, animated };
                this.child.forEach((item) => {
                    item.set(props);
                });
            });
        },
        setActiveTab() {
            this.child.forEach((item, index) => {
                const data = {
                    active: index === this.data.active
                };
                if (data.active) {
                    data.inited = true;
                }
                if (data.active !== item.data.active) {
                    item.set(data);
                }
            });
            Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(() => {
                this.setLine();
                this.setTrack();
                this.scrollIntoView();
            });
        },
        // scroll active tab into view
        scrollIntoView() {
            const { active, scrollable } = this.data;
            if (!scrollable) {
                return;
            }
            Promise.all([
                this.getRect('.van-tab', true),
                this.getRect('.van-tabs__nav')
            ]).then(([tabRects, navRect]) => {
                const tabRect = tabRects[active];
                const offsetLeft = tabRects
                    .slice(0, active)
                    .reduce((prev, curr) => prev + curr.width, 0);
                this.set({
                    scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
                });
            });
        },
        onTouchStart(event) {
            if (!this.data.swipeable)
                return;
            this.touchStart(event);
        },
        onTouchMove(event) {
            if (!this.data.swipeable)
                return;
            this.touchMove(event);
        },
        // watch swipe touch end
        onTouchEnd() {
            if (!this.data.swipeable)
                return;
            const { active, tabs } = this.data;
            const { direction, deltaX, offsetX } = this;
            const minSwipeDistance = 50;
            if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
                if (deltaX > 0 && active !== 0) {
                    this.setActive(active - 1);
                }
                else if (deltaX < 0 && active !== tabs.length - 1) {
                    this.setActive(active + 1);
                }
            }
        },
        setWrapStyle() {
            const { offsetTop, position } = this.data;
            let wrapStyle;
            switch (position) {
                case 'top':
                    wrapStyle = `
            top: ${offsetTop}px;
            position: fixed;
          `;
                    break;
                case 'bottom':
                    wrapStyle = `
            top: auto;
            bottom: 0;
          `;
                    break;
                default:
                    wrapStyle = '';
            }
            // cut down `set`
            if (wrapStyle === this.data.wrapStyle)
                return;
            this.set({ wrapStyle });
        },
        observerContentScroll() {
            if (!this.data.sticky) {
                return;
            }
            const { offsetTop } = this.data;
            const { windowHeight } = wx.getSystemInfoSync();
            // @ts-ignore
            this.createIntersectionObserver().disconnect();
            // @ts-ignore
            this.createIntersectionObserver()
                .relativeToViewport({ top: -(this.navHeight + offsetTop) })
                .observe('.van-tabs', (res) => {
                const { top } = res.boundingClientRect;
                if (top > offsetTop) {
                    return;
                }
                const position = res.intersectionRatio > 0 ? 'top' : 'bottom';
                this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                this.setPosition(position);
            });
            // @ts-ignore
            this.createIntersectionObserver()
                .relativeToViewport({ bottom: -(windowHeight - 1 - offsetTop) })
                .observe('.van-tabs', (res) => {
                const { top, bottom } = res.boundingClientRect;
                if (bottom < this.navHeight) {
                    return;
                }
                const position = res.intersectionRatio > 0 ? 'top' : '';
                this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                this.setPosition(position);
            });
        },
        setPosition(position) {
            if (position !== this.data.position) {
                this.set({ position }).then(() => {
                    this.setWrapStyle();
                });
            }
        }
    }
});


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return touch; });
const touch = Behavior({
    methods: {
        touchStart(event) {
            const touch = event.touches[0];
            this.direction = '';
            this.deltaX = 0;
            this.deltaY = 0;
            this.offsetX = 0;
            this.offsetY = 0;
            this.startX = touch.clientX;
            this.startY = touch.clientY;
        },
        touchMove(event) {
            const touch = event.touches[0];
            this.deltaX = touch.clientX - this.startX;
            this.deltaY = touch.clientY - this.startY;
            this.offsetX = Math.abs(this.deltaX);
            this.offsetY = Math.abs(this.deltaY);
            this.direction =
                this.offsetX > this.offsetY
                    ? 'horizontal'
                    : this.offsetX < this.offsetY
                        ? 'vertical'
                        : '';
        }
    }
});


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObj", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return getSystemInfoSync; });
function isDef(value) {
    return value !== undefined && value !== null;
}
function isObj(x) {
    const type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
    return /^\d+$/.test(value);
}
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function nextTick(fn) {
    setTimeout(() => {
        fn();
    }, 1000 / 30);
}
let systemInfo = null;
function getSystemInfoSync() {
    if (systemInfo == null) {
        systemInfo = wx.getSystemInfoSync();
    }
    return systemInfo;
}


/***/ }),

/***/ 236:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[226,1]]]);