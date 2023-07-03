"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/films/create",{

/***/ "./src/pages/films/create.tsx":
/*!************************************!*\
  !*** ./src/pages/films/create.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Create; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Create() {\n    _s();\n    axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.baseURL = \"http://localhost:1337\";\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { push } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();\n    const mutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({\n        mutationFn: async (data)=>{\n            console.log(data);\n            return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"/api/films/\".concat(router.query.id), {\n                data: {\n                    title: data.title,\n                    director: data.director,\n                    plot: data.plot\n                }\n            }).then(()=>{\n                push(\"/films\");\n            });\n        }\n    });\n    function submit(e) {\n        if (e.title === \"\") {\n            push(\"/films\");\n        }\n        mutation.mutate(e);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Create Movie  \"\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(submit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \" Title \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 56\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...register(\"title\"),\n                        name: \"title\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 63\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 68\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"director\",\n                        children: \" Director \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 62\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...register(\"director\"),\n                        name: \"director\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 69\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 74\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \" Plot \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 55\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        ...register(\"plot\"),\n                        name: \"plot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 64\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 69\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \" Create Film \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/films\",\n                children: \" Back \"\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/create.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Create, \"eMNsnywJY7neYZiZEHRSoPo2F08=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = Create;\nvar _c;\n$RefreshReg$(_c, \"Create\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmlsbXMvY3JlYXRlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM2RjtBQUN2RDtBQUVEO0FBQ1Q7QUFDYTtBQUUxQixTQUFTSzs7SUFDcEJKLDZDQUFLQSxDQUFDSyxTQUFTQyxVQUFVO0lBQ3pCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLEVBQUNPLElBQUksRUFBQyxHQUFHUCxzREFBU0E7SUFDeEIsTUFBTSxFQUFDUSxRQUFRLEVBQUVDLFlBQVksRUFBQyxHQUFHUCx3REFBT0E7SUFFeEMsTUFBTVEsV0FBV1osa0VBQVdBLENBQUM7UUFDekJhLFlBQVksT0FBT0M7WUFDZkMsUUFBUUMsSUFBSUY7WUFDWixPQUFPYiw2Q0FBS0EsQ0FBQ2dCLElBQUksY0FBOEIsT0FBaEJULE9BQU9VLE1BQU1DLEtBQU07Z0JBQzlDTCxNQUFNO29CQUNGTSxPQUFPTixLQUFLTTtvQkFDWkMsVUFBVVAsS0FBS087b0JBQ2ZDLE1BQU1SLEtBQUtRO2dCQUNmO1lBQ0osR0FBR0MsS0FBSztnQkFDSmQsS0FBSztZQUNUO1FBRUo7SUFDSjtJQUVBLFNBQVNlLE9BQU9DLENBQUM7UUFDYixJQUFJQSxFQUFFTCxVQUFVLElBQUc7WUFDZlgsS0FBSztRQUNUO1FBQ0FHLFNBQVNjLE9BQU9EO0lBQ3BCO0lBQ0EscUJBQ0k7OzBCQUNJLDhEQUFDRTswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVWxCLGFBQWFhOztrQ0FDekIsOERBQUNNO3dCQUFNQyxTQUFRO2tDQUFROzs7Ozs7b0JBQWU7a0NBQUMsOERBQUNDOzs7OztrQ0FDeEMsOERBQUNDO3dCQUFPLEdBQUd2QixTQUFTLFFBQVE7d0JBQUV3QixNQUFLOzs7Ozs7b0JBQVU7a0NBQUMsOERBQUNGOzs7OztrQ0FBSSw4REFBQ0E7Ozs7O2tDQUVwRCw4REFBQ0Y7d0JBQU1DLFNBQVE7a0NBQVc7Ozs7OztvQkFBa0I7a0NBQUMsOERBQUNDOzs7OztrQ0FDOUMsOERBQUNDO3dCQUFPLEdBQUd2QixTQUFTLFdBQVc7d0JBQUV3QixNQUFLOzs7Ozs7b0JBQWE7a0NBQUMsOERBQUNGOzs7OztrQ0FBSSw4REFBQ0E7Ozs7O2tDQUUxRCw4REFBQ0Y7d0JBQU1DLFNBQVE7a0NBQVE7Ozs7OztvQkFBYztrQ0FBQyw4REFBQ0M7Ozs7O2tDQUN2Qyw4REFBQ0c7d0JBQVUsR0FBR3pCLFNBQVMsT0FBTzt3QkFBRXdCLE1BQUs7Ozs7OztvQkFBUztrQ0FBQyw4REFBQ0Y7Ozs7O2tDQUFJLDhEQUFDQTs7Ozs7a0NBRXJELDhEQUFDSTt3QkFBT0MsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUcxQiw4REFBQ2xDLGtEQUFJQTtnQkFBQ21DLE1BQU87MEJBQVM7Ozs7Ozs7O0FBSWxDO0dBaER3QmpDOztRQUVMSCxrREFBU0E7UUFDVEEsa0RBQVNBO1FBQ1NFLG9EQUFPQTtRQUV2QkosOERBQVdBOzs7S0FOUksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ZpbG1zL2NyZWF0ZS50c3g/OGViYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHtRdWVyeUNsaWVudFByb3ZpZGVyLCBRdWVyeUNsaWVudCwgdXNlUXVlcnksIHVzZU11dGF0aW9ufSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknXG5pbXBvcnQgYXhpb3MsICogYXMgb3RoZXJzIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlKCl7XG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7cHVzaH0gPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHtyZWdpc3RlciwgaGFuZGxlU3VibWl0fSA9IHVzZUZvcm0oKVxuXG4gICAgY29uc3QgbXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XG4gICAgICAgIG11dGF0aW9uRm46IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnB1dChgL2FwaS9maWxtcy8ke3JvdXRlci5xdWVyeS5pZH1gLCB7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3I6IGRhdGEuZGlyZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgIHBsb3Q6IGRhdGEucGxvdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBwdXNoKCcvZmlsbXMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHN1Ym1pdChlKXtcbiAgICAgICAgaWYgKGUudGl0bGUgPT09ICcnKXtcbiAgICAgICAgICAgIHB1c2goJy9maWxtcycpXG4gICAgICAgIH1cbiAgICAgICAgbXV0YXRpb24ubXV0YXRlKGUpXG4gICAgfVxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT4gQ3JlYXRlIE1vdmllICA8L2gxPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndGl0bGUnPiBUaXRsZSA8L2xhYmVsPiA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ3RpdGxlJyl9IG5hbWU9J3RpdGxlJyAvPiA8YnIvPjxici8+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGlyZWN0b3InPiBEaXJlY3RvciA8L2xhYmVsPiA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2RpcmVjdG9yJyl9IG5hbWU9J2RpcmVjdG9yJyAvPiA8YnIvPjxici8+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndGl0bGUnPiBQbG90IDwvbGFiZWw+IDxici8+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHsuLi5yZWdpc3RlcigncGxvdCcpfSBuYW1lPSdwbG90JyAvPiA8YnIvPjxici8+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+IENyZWF0ZSBGaWxtIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2ZpbG1zYH0+IEJhY2sgPC9MaW5rPlxuICAgICAgICA8Lz5cbiAgICApXG5cbn0iXSwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJheGlvcyIsInVzZVJvdXRlciIsIkxpbmsiLCJ1c2VGb3JtIiwiQ3JlYXRlIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicm91dGVyIiwicHVzaCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwibXV0YXRpb24iLCJtdXRhdGlvbkZuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJxdWVyeSIsImlkIiwidGl0bGUiLCJkaXJlY3RvciIsInBsb3QiLCJ0aGVuIiwic3VibWl0IiwiZSIsIm11dGF0ZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiYnIiLCJpbnB1dCIsIm5hbWUiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsInR5cGUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/films/create.tsx\n"));

/***/ })

});