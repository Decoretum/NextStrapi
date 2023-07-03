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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Edit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/useQuery.mjs\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Edit() {\n    _s();\n    axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.baseURL = \"http://localhost:1337\";\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { push } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();\n    const movieQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)({\n        queryKey: [\n            \"movie\"\n        ],\n        queryFn: async ()=>{\n            return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"api/films/\".concat(router.query.id)).then((res)=>{\n                console.log(res.data.data);\n                return res;\n            });\n        }\n    });\n    const mutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)({\n        mutationFn: async (data)=>{\n            console.log(data);\n            return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"/api/films/\".concat(router.query.id), {\n                data: {\n                    title: data.title,\n                    director: data.director,\n                    plot: data.plot\n                }\n            }).then(()=>{\n                push(\"/films\");\n            });\n        }\n    });\n    function submit(e) {\n        if (e.title === \"\") {\n            push(\"/films\");\n        }\n        mutation.mutate(e);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \" Edit Movie \",\n                    router.query.id,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(submit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \" Title \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 56\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...register(\"title\"),\n                        name: \"title\",\n                        value: movieQuery.data.attributes.title\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 104\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 109\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"director\",\n                        children: \" Director \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 62\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...register(\"director\"),\n                        name: \"director\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 69\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 74\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \" Plot \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 55\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        ...register(\"plot\"),\n                        name: \"plot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 64\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 69\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \" Create Film \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/films/\".concat(router.query.id),\n                children: \" Back \"\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Edit, \"W4Lz0e9kkje/F6KcN2MoFcYLZuw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation\n    ];\n});\n_c = Edit;\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmlsbXMvW2lkXS9lZGl0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDNkY7QUFDdkQ7QUFFRDtBQUNUO0FBQ2E7QUFFMUIsU0FBU007O0lBQ3BCSiw2Q0FBS0EsQ0FBQ0ssU0FBU0MsVUFBVTtJQUN6QixNQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxFQUFDTyxJQUFJLEVBQUMsR0FBR1Asc0RBQVNBO0lBQ3hCLE1BQU0sRUFBQ1EsUUFBUSxFQUFFQyxZQUFZLEVBQUMsR0FBR1Asd0RBQU9BO0lBRXhDLE1BQU1RLGFBQWFiLCtEQUFRQSxDQUFDO1FBQ3hCYyxVQUFVO1lBQUM7U0FBUTtRQUNuQkMsU0FBUztZQUNMLE9BQU9iLDZDQUFLQSxDQUFDYyxJQUFJLGFBQTZCLE9BQWhCUCxPQUFPUSxNQUFNQyxLQUMxQ0MsS0FBS0MsQ0FBQUE7Z0JBQ0ZDLFFBQVFDLElBQUlGLElBQUlHLEtBQUtBO2dCQUNyQixPQUFPSDtZQUNYO1FBQ0o7SUFDSjtJQUVBLE1BQU1JLFdBQVd2QixrRUFBV0EsQ0FBQztRQUN6QndCLFlBQVksT0FBT0Y7WUFDZkYsUUFBUUMsSUFBSUM7WUFDWixPQUFPckIsNkNBQUtBLENBQUN3QixJQUFJLGNBQThCLE9BQWhCakIsT0FBT1EsTUFBTUMsS0FBTTtnQkFDOUNLLE1BQU07b0JBQ0ZJLE9BQU9KLEtBQUtJO29CQUNaQyxVQUFVTCxLQUFLSztvQkFDZkMsTUFBTU4sS0FBS007Z0JBQ2Y7WUFDSixHQUFHVixLQUFLO2dCQUNKVCxLQUFLO1lBQ1Q7UUFFSjtJQUNKO0lBRUEsU0FBU29CLE9BQU9DLENBQUM7UUFDYixJQUFJQSxFQUFFSixVQUFVLElBQUc7WUFDZmpCLEtBQUs7UUFDVDtRQUNBYyxTQUFTUSxPQUFPRDtJQUNwQjtJQUNBLHFCQUNJOzswQkFDSSw4REFBQ0U7O29CQUFHO29CQUFheEIsT0FBT1EsTUFBTUM7b0JBQUc7Ozs7Ozs7MEJBQ2pDLDhEQUFDZ0I7Z0JBQUtDLFVBQVV2QixhQUFha0I7O2tDQUN6Qiw4REFBQ007d0JBQU1DLFNBQVE7a0NBQVE7Ozs7OztvQkFBZTtrQ0FBQyw4REFBQ0M7Ozs7O2tDQUN4Qyw4REFBQ0M7d0JBQU8sR0FBRzVCLFNBQVMsUUFBUTt3QkFBRTZCLE1BQUs7d0JBQVFDLE9BQU81QixXQUFXVSxLQUFLbUIsV0FBV2Y7Ozs7OztvQkFBUztrQ0FBQyw4REFBQ1c7Ozs7O2tDQUFJLDhEQUFDQTs7Ozs7a0NBRTdGLDhEQUFDRjt3QkFBTUMsU0FBUTtrQ0FBVzs7Ozs7O29CQUFrQjtrQ0FBQyw4REFBQ0M7Ozs7O2tDQUM5Qyw4REFBQ0M7d0JBQU8sR0FBRzVCLFNBQVMsV0FBVzt3QkFBRTZCLE1BQUs7Ozs7OztvQkFBYTtrQ0FBQyw4REFBQ0Y7Ozs7O2tDQUFJLDhEQUFDQTs7Ozs7a0NBRTFELDhEQUFDRjt3QkFBTUMsU0FBUTtrQ0FBUTs7Ozs7O29CQUFjO2tDQUFDLDhEQUFDQzs7Ozs7a0NBQ3ZDLDhEQUFDSzt3QkFBVSxHQUFHaEMsU0FBUyxPQUFPO3dCQUFFNkIsTUFBSzs7Ozs7O29CQUFTO2tDQUFDLDhEQUFDRjs7Ozs7a0NBQUksOERBQUNBOzs7OztrQ0FFckQsOERBQUNNO3dCQUFPQyxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRzFCLDhEQUFDekMsa0RBQUlBO2dCQUFDMEMsTUFBTSxVQUEwQixPQUFoQnJDLE9BQU9RLE1BQU1DOzBCQUFNOzs7Ozs7OztBQUdyRDtHQTFEd0JaOztRQUVMSCxrREFBU0E7UUFDVEEsa0RBQVNBO1FBQ1NFLG9EQUFPQTtRQUVyQkwsMkRBQVFBO1FBV1ZDLDhEQUFXQTs7O0tBakJSSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZmlsbXMvW2lkXS9lZGl0LnRzeD9lOTQ3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQge1F1ZXJ5Q2xpZW50UHJvdmlkZXIsIFF1ZXJ5Q2xpZW50LCB1c2VRdWVyeSwgdXNlTXV0YXRpb259IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSdcbmltcG9ydCBheGlvcywgKiBhcyBvdGhlcnMgZnJvbSAnYXhpb3MnXG5pbXBvcnQgcmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KCl7XG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7cHVzaH0gPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHtyZWdpc3RlciwgaGFuZGxlU3VibWl0fSA9IHVzZUZvcm0oKVxuXG4gICAgY29uc3QgbW92aWVRdWVyeSA9IHVzZVF1ZXJ5KHtcbiAgICAgICAgcXVlcnlLZXk6IFsnbW92aWUnXSxcbiAgICAgICAgcXVlcnlGbjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgYXBpL2ZpbG1zLyR7cm91dGVyLnF1ZXJ5LmlkfWApXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcbiAgICAgICAgbXV0YXRpb25GbjogYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucHV0KGAvYXBpL2ZpbG1zLyR7cm91dGVyLnF1ZXJ5LmlkfWAsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RvcjogZGF0YS5kaXJlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgcGxvdDogZGF0YS5wbG90XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIHB1c2goJy9maWxtcycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gc3VibWl0KGUpe1xuICAgICAgICBpZiAoZS50aXRsZSA9PT0gJycpe1xuICAgICAgICAgICAgcHVzaCgnL2ZpbG1zJylcbiAgICAgICAgfVxuICAgICAgICBtdXRhdGlvbi5tdXRhdGUoZSlcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPiBFZGl0IE1vdmllIHtyb3V0ZXIucXVlcnkuaWR9IDwvaDE+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd0aXRsZSc+IFRpdGxlIDwvbGFiZWw+IDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcigndGl0bGUnKX0gbmFtZT0ndGl0bGUnIHZhbHVlPXttb3ZpZVF1ZXJ5LmRhdGEuYXR0cmlidXRlcy50aXRsZX0gLz4gPGJyLz48YnIvPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2RpcmVjdG9yJz4gRGlyZWN0b3IgPC9sYWJlbD4gPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdkaXJlY3RvcicpfSBuYW1lPSdkaXJlY3RvcicgLz4gPGJyLz48YnIvPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3RpdGxlJz4gUGxvdCA8L2xhYmVsPiA8YnIvPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB7Li4ucmVnaXN0ZXIoJ3Bsb3QnKX0gbmFtZT0ncGxvdCcgLz4gPGJyLz48YnIvPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPiBDcmVhdGUgRmlsbSA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9maWxtcy8ke3JvdXRlci5xdWVyeS5pZH1gfT4gQmFjayA8L0xpbms+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJ1c2VNdXRhdGlvbiIsImF4aW9zIiwidXNlUm91dGVyIiwiTGluayIsInVzZUZvcm0iLCJFZGl0IiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicm91dGVyIiwicHVzaCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwibW92aWVRdWVyeSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImdldCIsInF1ZXJ5IiwiaWQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtdXRhdGlvbiIsIm11dGF0aW9uRm4iLCJwdXQiLCJ0aXRsZSIsImRpcmVjdG9yIiwicGxvdCIsInN1Ym1pdCIsImUiLCJtdXRhdGUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImJyIiwiaW5wdXQiLCJuYW1lIiwidmFsdWUiLCJhdHRyaWJ1dGVzIiwidGV4dGFyZWEiLCJidXR0b24iLCJ0eXBlIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/films/[id]/edit.tsx\n"));

/***/ })

});