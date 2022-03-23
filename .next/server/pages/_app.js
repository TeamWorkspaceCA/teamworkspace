"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(290);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Navbar.tsx





const Navbar = ()=>{
    //let deviceSize: deviceSize = 'pc';
    let { 0: deviceSize , 1: setDeviceSize  } = (0,external_react_.useState)("pc");
    let { 0: links , 1: setLinks  } = (0,external_react_.useState)([
        {
            text: "Sign In",
            float: "right",
            href: "/signin"
        },
        {
            text: "Sign Up",
            float: "right",
            href: "/signup"
        },
        {
            text: "Contact Us",
            float: "right",
            href: "/contact"
        },
        {
            text: "Prices",
            float: "left",
            href: "/pricing"
        }, 
    ]);
    let { 0: navbarOpenState , 1: setNavbarOpenState  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setInterval(()=>{
            if (false) {}
        }, 50);
    }, []);
    let ChangeNavbarMenu = ()=>{
        setNavbarOpenState(!navbarOpenState);
        const menu = document.querySelector(".navbar-menu");
        menu.style.animation = `slide-${navbarOpenState ? "in" : "out"} 1s infinite`;
        setTimeout(()=>{
            menu.style.animation = "";
            menu.style.left = `${navbarOpenState ? "0" : "-100%"}`;
        }, 1000);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "navbar",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "navbar-btn",
                            style: {
                                float: deviceSize == "pc" ? "left" : "right"
                            },
                            children: "Home"
                        })
                    }),
                    deviceSize == "pc" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: links.map((x)=>/*#__PURE__*/ jsx_runtime_.jsx(NavbarButton, {
                                ChangeNavbarMenu: ()=>{
                                },
                                text: x.text,
                                float: x.float,
                                href: x.href
                            }, x.href)
                        )
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "navbar-btn",
                            onClick: ChangeNavbarMenu,
                            style: {
                                float: "left"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaBars, {
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-menu",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navbar-items",
                    children: links.map((x)=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarButton, {
                                ChangeNavbarMenu: ChangeNavbarMenu,
                                text: x.text,
                                float: "",
                                href: x.href
                            })
                        }));
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Navbar = (Navbar);
const NavbarButton = ({ text , float , href , ChangeNavbarMenu ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            onClick: ChangeNavbarMenu,
            className: "navbar-btn",
            style: {
                float: float
            },
            children: text
        }, text)
    }));
};

;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(135)));
module.exports = __webpack_exports__;

})();