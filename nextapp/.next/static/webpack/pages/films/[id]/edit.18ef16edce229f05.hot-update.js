"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/films/[id]/edit",{

/***/ "./src/pages/films/[id]/edit.tsx":
/*!***************************************!*\
  !*** ./src/pages/films/[id]/edit.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Edit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Edit() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();\n    function submit() {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \" Edit Movie \",\n                    router.query.id,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(submit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \" Title \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...register(\"title\"),\n                        name: \"title\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Edit, \"/WC00mDCAqyasR0q9ra9Aixmegw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = Edit;\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmlsbXMvW2lkXS9lZGl0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSXFDO0FBRUk7QUFFMUIsU0FBU0U7O0lBQ3BCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLEVBQUNJLFFBQVEsRUFBRUMsWUFBWSxFQUFDLEdBQUdKLHdEQUFPQTtJQUN4QyxTQUFTSyxVQUVUO0lBQ0EscUJBQ0k7OzBCQUNJLDhEQUFDQzs7b0JBQUc7b0JBQWFKLE9BQU9LLE1BQU1DO29CQUFHOzs7Ozs7OzBCQUNqQyw4REFBQ0M7Z0JBQUtDLFVBQVVOLGFBQWFDOztrQ0FDekIsOERBQUNNO3dCQUFNQyxTQUFRO2tDQUFROzs7Ozs7a0NBQ3ZCLDhEQUFDQzt3QkFBTyxHQUFHVixTQUFTLFFBQVE7d0JBQUVXLE1BQUs7Ozs7Ozs7Ozs7Ozs7O0FBT25EO0dBbEJ3QmI7O1FBQ0xGLGtEQUFTQTtRQUNTQyxvREFBT0E7OztLQUZwQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ZpbG1zL1tpZF0vZWRpdC50c3g/ZTk0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHtRdWVyeUNsaWVudFByb3ZpZGVyLCBRdWVyeUNsaWVudCwgdXNlUXVlcnl9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSdcbmltcG9ydCBheGlvcywgKiBhcyBvdGhlcnMgZnJvbSAnYXhpb3MnXG5pbXBvcnQgcmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KCl7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7cmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdH0gPSB1c2VGb3JtKClcbiAgICBmdW5jdGlvbiBzdWJtaXQoKXtcblxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+IEVkaXQgTW92aWUge3JvdXRlci5xdWVyeS5pZH0gPC9oMT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3RpdGxlJz4gVGl0bGUgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCd0aXRsZScpfSBuYW1lPSd0aXRsZScgLz5cblxuXG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwiRWRpdCIsInJvdXRlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwic3VibWl0IiwiaDEiLCJxdWVyeSIsImlkIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/films/[id]/edit.tsx\n"));

/***/ })

});