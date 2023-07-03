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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Edit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/useQuery.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Edit() {\n    _s();\n    axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].defaults.baseURL = \"http://localhost:1337\";\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { push } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const mutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)({\n        mutationFn: async (data)=>{\n            console.log(data);\n            return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"/api/films/\".concat(router.query.id), {\n                data: {\n                    title: data.title,\n                    director: data.director,\n                    plot: data.plot\n                }\n            }).then(()=>{\n                push(\"/films\");\n            });\n        }\n    });\n    const movieQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)({\n        queryKey: [\n            \"movie\"\n        ],\n        queryFn: async ()=>{\n            return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/films/\".concat(router.query.id)).then((res)=>{\n                console.log(res.data.data);\n                setMovie(res.data.data);\n                return res;\n            });\n        }\n    });\n    if (movieQuery.isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \" Loading movie data \"\n        }, void 0, false, {\n            fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n            lineNumber: 45,\n            columnNumber: 16\n        }, this);\n    }\n    function submit(e) {\n        mutation.mutate(e);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \" Edit Movie \",\n                    router.query.id,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(submit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \" Title \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 56\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...register(\"title\"),\n                        name: \"title\",\n                        value: movie.attributes.title\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 94\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 99\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"director\",\n                        children: \" Director \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 62\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...register(\"director\"),\n                        name: \"director\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 69\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 74\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \" Plot \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 55\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        ...register(\"plot\"),\n                        name: \"plot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 64\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 69\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \" Create Film \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/films/\".concat(router.query.id),\n                children: \" Back \"\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/edit.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Edit, \"LjLMvkQNXN60SGiI5qsi24Ik7Lg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery\n    ];\n});\n_c = Edit;\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmlsbXMvW2lkXS9lZGl0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUM2RjtBQUN2RDtBQUNEO0FBQ0E7QUFDVDtBQUNhO0FBRTFCLFNBQVNPOztJQUNwQkwsNkNBQUtBLENBQUNNLFNBQVNDLFVBQVU7SUFDekIsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU0sRUFBQ08sSUFBSSxFQUFDLEdBQUdQLHNEQUFTQTtJQUN4QixNQUFNLEVBQUNRLFFBQVEsRUFBRUMsWUFBWSxFQUFDLEdBQUdQLHdEQUFPQTtJQUN4QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUMsQ0FBQztJQUVwQyxNQUFNYSxXQUFXZixrRUFBV0EsQ0FBQztRQUN6QmdCLFlBQVksT0FBT0M7WUFDZkMsUUFBUUMsSUFBSUY7WUFDWixPQUFPaEIsNkNBQUtBLENBQUNtQixJQUFJLGNBQThCLE9BQWhCWCxPQUFPWSxNQUFNQyxLQUFNO2dCQUM5Q0wsTUFBTTtvQkFDRk0sT0FBT04sS0FBS007b0JBQ1pDLFVBQVVQLEtBQUtPO29CQUNmQyxNQUFNUixLQUFLUTtnQkFDZjtZQUNKLEdBQUdDLEtBQUs7Z0JBQ0poQixLQUFLO1lBQ1Q7UUFFSjtJQUNKO0lBRUEsTUFBTWlCLGFBQWE1QiwrREFBUUEsQ0FBQztRQUN4QjZCLFVBQVU7WUFBQztTQUFRO1FBQ25CQyxTQUFTO1lBQ0wsT0FBTzVCLDZDQUFLQSxDQUFDNkIsSUFBSSxjQUE4QixPQUFoQnJCLE9BQU9ZLE1BQU1DLEtBQzNDSSxLQUFLSyxDQUFBQTtnQkFDRmIsUUFBUUMsSUFBSVksSUFBSWQsS0FBS0E7Z0JBQ3JCSCxTQUFTaUIsSUFBSWQsS0FBS0E7Z0JBQ2xCLE9BQU9jO1lBQ1g7UUFDSjtJQUNKO0lBRUEsSUFBSUosV0FBV0ssV0FBVTtRQUNyQixxQkFBTyw4REFBQ0M7c0JBQUc7Ozs7OztJQUNmO0lBRUEsU0FBU0MsT0FBT0MsQ0FBQztRQUNicEIsU0FBU3FCLE9BQU9EO0lBQ3BCO0lBQ0EscUJBQ0k7OzBCQUNJLDhEQUFDRjs7b0JBQUc7b0JBQWF4QixPQUFPWSxNQUFNQztvQkFBRzs7Ozs7OzswQkFDakMsOERBQUNlO2dCQUFLQyxVQUFVMUIsYUFBYXNCOztrQ0FDekIsOERBQUNLO3dCQUFNQyxTQUFRO2tDQUFROzs7Ozs7b0JBQWU7a0NBQUMsOERBQUNDOzs7OztrQ0FDeEMsOERBQUNDO3dCQUFPLEdBQUcvQixTQUFTLFFBQVE7d0JBQUVnQyxNQUFLO3dCQUFRQyxPQUFPL0IsTUFBTWdDLFdBQVd0Qjs7Ozs7O29CQUFTO2tDQUFDLDhEQUFDa0I7Ozs7O2tDQUFJLDhEQUFDQTs7Ozs7a0NBRW5GLDhEQUFDRjt3QkFBTUMsU0FBUTtrQ0FBVzs7Ozs7O29CQUFrQjtrQ0FBQyw4REFBQ0M7Ozs7O2tDQUM5Qyw4REFBQ0M7d0JBQU8sR0FBRy9CLFNBQVMsV0FBVzt3QkFBRWdDLE1BQUs7Ozs7OztvQkFBYTtrQ0FBQyw4REFBQ0Y7Ozs7O2tDQUFJLDhEQUFDQTs7Ozs7a0NBRTFELDhEQUFDRjt3QkFBTUMsU0FBUTtrQ0FBUTs7Ozs7O29CQUFjO2tDQUFDLDhEQUFDQzs7Ozs7a0NBQ3ZDLDhEQUFDSzt3QkFBVSxHQUFHbkMsU0FBUyxPQUFPO3dCQUFFZ0MsTUFBSzs7Ozs7O29CQUFTO2tDQUFDLDhEQUFDRjs7Ozs7a0NBQUksOERBQUNBOzs7OztrQ0FFckQsOERBQUNNO3dCQUFPQyxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRzFCLDhEQUFDNUMsa0RBQUlBO2dCQUFDNkMsTUFBTSxVQUEwQixPQUFoQnhDLE9BQU9ZLE1BQU1DOzBCQUFNOzs7Ozs7OztBQUdyRDtHQTdEd0JoQjs7UUFFTEgsa0RBQVNBO1FBQ1RBLGtEQUFTQTtRQUNTRSxvREFBT0E7UUFHdkJMLDhEQUFXQTtRQWdCVEQsMkRBQVFBOzs7S0F2QlBPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9maWxtcy9baWRdL2VkaXQudHN4P2U5NDciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7UXVlcnlDbGllbnRQcm92aWRlciwgUXVlcnlDbGllbnQsIHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbn0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5J1xuaW1wb3J0IGF4aW9zLCAqIGFzIG90aGVycyBmcm9tICdheGlvcydcbmltcG9ydCByZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQoKXtcbiAgICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNydcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHtwdXNofSA9IHVzZVJvdXRlcigpXG4gICAgY29uc3Qge3JlZ2lzdGVyLCBoYW5kbGVTdWJtaXR9ID0gdXNlRm9ybSgpXG4gICAgY29uc3QgW21vdmllLCBzZXRNb3ZpZV0gPSB1c2VTdGF0ZSh7fSlcblxuICAgIGNvbnN0IG11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xuICAgICAgICBtdXRhdGlvbkZuOiBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wdXQoYC9hcGkvZmlsbXMvJHtyb3V0ZXIucXVlcnkuaWR9YCwge1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yOiBkYXRhLmRpcmVjdG9yLFxuICAgICAgICAgICAgICAgICAgICBwbG90OiBkYXRhLnBsb3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgcHVzaCgnL2ZpbG1zJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBtb3ZpZVF1ZXJ5ID0gdXNlUXVlcnkoe1xuICAgICAgICBxdWVyeUtleTogWydtb3ZpZSddLFxuICAgICAgICBxdWVyeUZuOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL2ZpbG1zLyR7cm91dGVyLnF1ZXJ5LmlkfWApXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgc2V0TW92aWUocmVzLmRhdGEuZGF0YSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChtb3ZpZVF1ZXJ5LmlzTG9hZGluZyl7XG4gICAgICAgIHJldHVybiA8aDE+IExvYWRpbmcgbW92aWUgZGF0YSA8L2gxPlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1Ym1pdChlKXtcbiAgICAgICAgbXV0YXRpb24ubXV0YXRlKGUpXG4gICAgfVxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT4gRWRpdCBNb3ZpZSB7cm91dGVyLnF1ZXJ5LmlkfSA8L2gxPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndGl0bGUnPiBUaXRsZSA8L2xhYmVsPiA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ3RpdGxlJyl9IG5hbWU9J3RpdGxlJyB2YWx1ZT17bW92aWUuYXR0cmlidXRlcy50aXRsZX0gLz4gPGJyLz48YnIvPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2RpcmVjdG9yJz4gRGlyZWN0b3IgPC9sYWJlbD4gPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdkaXJlY3RvcicpfSBuYW1lPSdkaXJlY3RvcicgLz4gPGJyLz48YnIvPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3RpdGxlJz4gUGxvdCA8L2xhYmVsPiA8YnIvPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB7Li4ucmVnaXN0ZXIoJ3Bsb3QnKX0gbmFtZT0ncGxvdCcgLz4gPGJyLz48YnIvPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPiBDcmVhdGUgRmlsbSA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9maWxtcy8ke3JvdXRlci5xdWVyeS5pZH1gfT4gQmFjayA8L0xpbms+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJ1c2VNdXRhdGlvbiIsImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwidXNlRm9ybSIsIkVkaXQiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJyb3V0ZXIiLCJwdXNoIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJtb3ZpZSIsInNldE1vdmllIiwibXV0YXRpb24iLCJtdXRhdGlvbkZuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJxdWVyeSIsImlkIiwidGl0bGUiLCJkaXJlY3RvciIsInBsb3QiLCJ0aGVuIiwibW92aWVRdWVyeSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImdldCIsInJlcyIsImlzTG9hZGluZyIsImgxIiwic3VibWl0IiwiZSIsIm11dGF0ZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImJyIiwiaW5wdXQiLCJuYW1lIiwidmFsdWUiLCJhdHRyaWJ1dGVzIiwidGV4dGFyZWEiLCJidXR0b24iLCJ0eXBlIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/films/[id]/edit.tsx\n"));

/***/ })

});