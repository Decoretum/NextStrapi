"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/films/[id]",{

/***/ "./src/pages/films/[id]/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/films/[id]/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Info; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/useQuery.mjs\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].defaults.baseURL = \"http://localhost:1337\";\nfunction Info() {\n    _s();\n    const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const movieQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)({\n        queryKey: [\n            \"movie\"\n        ],\n        queryFn: async ()=>{\n            return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/films/\".concat(router.query.id)).then((res)=>{\n                setMovie(res.data.data);\n                return res.data.data;\n            });\n        }\n    });\n    if (movieQuery.isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \" Movie Loading \"\n        }, void 0, false, {\n            fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n            lineNumber: 27,\n            columnNumber: 16\n        }, this);\n    }\n    const deleteMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)({\n        mutationFn: async (data)=>{\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"/api/films/\".concat(router.query.id), {\n                data: {\n                    title: data.title,\n                    director: data.director,\n                    plot: data.plot\n                }\n            });\n        }\n    });\n    function del(e) {\n        deleteMutation.mutate(e);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \" This is for Film number \",\n                    router.query.id,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \" Movie: \",\n                    movie.attributes.title,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \" Director: \",\n                    movie.attributes.director,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \" Plot: \"\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    movie.attributes.plot,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    marginTop: \"5vh\"\n                },\n                children: [\n                    \" Date Released: \",\n                    movie.attributes.released,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/films/\".concat(router.query.id, \"/edit\"),\n                children: \" Edit Film \"\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 78\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 83\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/films\",\n                children: \" Back to Films Pages \"\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(del),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        ...register(\"title\"),\n                        value: movie.attributes.title\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        ...register(\"plot\"),\n                        value: movie.attributes.plot\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        ...register(\"director\"),\n                        value: movie.attributes.director\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \" Delete Film \"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CynderNextStrapi/nextapp/src/pages/films/[id]/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Info, \"dwomt0wcGIYXbYkmDmqWXk4Bv/g=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation\n    ];\n});\n_c = Info;\nvar _c;\n$RefreshReg$(_c, \"Info\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmlsbXMvW2lkXS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMkQ7QUFDckI7QUFDRDtBQUNBO0FBQ1Q7QUFDYTtBQUd6Q0UsNkNBQUtBLENBQUNLLFNBQVNDLFVBQVM7QUFDVCxTQUFTQzs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDLENBQUM7SUFDcEMsTUFBTSxFQUFDUyxRQUFRLEVBQUVDLFlBQVksRUFBQyxHQUFHUCx3REFBT0E7SUFDeEMsTUFBTVEsU0FBU1Ysc0RBQVNBO0lBQ3hCLE1BQU1XLGFBQWFkLCtEQUFRQSxDQUFDO1FBQ3hCZSxVQUFVO1lBQUM7U0FBUTtRQUNuQkMsU0FBUztZQUNMLE9BQU9mLDZDQUFLQSxDQUFDZ0IsSUFBSSxjQUE4QixPQUFoQkosT0FBT0ssTUFBTUMsS0FDM0NDLEtBQUtDLENBQUFBO2dCQUNGWCxTQUFTVyxJQUFJQyxLQUFLQTtnQkFDbEIsT0FBT0QsSUFBSUMsS0FBS0E7WUFDcEI7UUFDSjtJQUNKO0lBRUEsSUFBSVIsV0FBV1MsV0FBVTtRQUNyQixxQkFBTyw4REFBQ0M7c0JBQUc7Ozs7OztJQUNmO0lBRUEsTUFBTUMsaUJBQWlCMUIsa0VBQVdBLENBQUM7UUFDL0IyQixZQUFZLE9BQU9KO1lBQ2ZyQiw2Q0FBS0EsQ0FBQzBCLE9BQU8sY0FBOEIsT0FBaEJkLE9BQU9LLE1BQU1DLEtBQU07Z0JBQzFDRyxNQUFPO29CQUNITSxPQUFPTixLQUFLTTtvQkFDWkMsVUFBVVAsS0FBS087b0JBQ2ZDLE1BQU1SLEtBQUtRO2dCQUNmO1lBQ0o7UUFDSjtJQUNKO0lBRUEsU0FBU0MsSUFBSUMsQ0FBQztRQUNWUCxlQUFlUSxPQUFPRDtJQUMxQjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ1I7O29CQUFHO29CQUEwQlgsT0FBT0ssTUFBTUM7b0JBQUc7Ozs7Ozs7MEJBQzlDLDhEQUFDZTs7b0JBQUc7b0JBQVN6QixNQUFNMEIsV0FBV1A7b0JBQU07Ozs7Ozs7MEJBQ3BDLDhEQUFDTTs7b0JBQUc7b0JBQVl6QixNQUFNMEIsV0FBV047b0JBQVM7Ozs7Ozs7MEJBQzFDLDhEQUFDSzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRTs7b0JBQUU7b0JBQUUzQixNQUFNMEIsV0FBV0w7b0JBQUs7Ozs7Ozs7MEJBQzNCLDhEQUFDSTtnQkFBR0csT0FBTztvQkFBQ0MsV0FBVztnQkFBSzs7b0JBQUc7b0JBQWlCN0IsTUFBTTBCLFdBQVdJO29CQUFTOzs7Ozs7OzBCQUUxRSw4REFBQ25DLGtEQUFJQTtnQkFBQ29DLE1BQU0sVUFBMEIsT0FBaEIzQixPQUFPSyxNQUFNQyxJQUFHOzBCQUFROzs7Ozs7WUFBa0I7MEJBQUMsOERBQUNzQjs7Ozs7MEJBQUksOERBQUNBOzs7OzswQkFDdkUsOERBQUNyQyxrREFBSUE7Z0JBQUNvQyxNQUFNOzBCQUFVOzs7Ozs7MEJBRXRCLDhEQUFDRTtnQkFBS0MsVUFBVS9CLGFBQWFtQjs7a0NBQ3pCLDhEQUFDYTt3QkFBTUMsTUFBSzt3QkFBVSxHQUFHbEMsU0FBUyxRQUFRO3dCQUFFbUMsT0FBT3JDLE1BQU0wQixXQUFXUDs7Ozs7O2tDQUNwRSw4REFBQ2dCO3dCQUFNQyxNQUFLO3dCQUFVLEdBQUdsQyxTQUFTLE9BQU87d0JBQUVtQyxPQUFPckMsTUFBTTBCLFdBQVdMOzs7Ozs7a0NBQ25FLDhEQUFDYzt3QkFBTUMsTUFBSzt3QkFBVSxHQUFHbEMsU0FBUyxXQUFXO3dCQUFFbUMsT0FBT3JDLE1BQU0wQixXQUFXTjs7Ozs7O2tDQUN2RSw4REFBQ2tCO3dCQUFPRixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7OztBQUl0QztHQXZEd0JyQzs7UUFFYUgsb0RBQU9BO1FBQ3pCRixrREFBU0E7UUFDTEgsMkRBQVFBO1FBZUpELDhEQUFXQTs7O0tBbkJkUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZmlsbXMvW2lkXS9pbmRleC50c3g/ZDI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHt1c2VNdXRhdGlvbiwgdXNlUXVlcnl9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSdcbmltcG9ydCBheGlvcywgKiBhcyBvdGhlcnMgZnJvbSAnYXhpb3MnXG5pbXBvcnQgcmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuXG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkw9ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvKCl7XG4gICAgY29uc3QgW21vdmllLCBzZXRNb3ZpZV0gPSB1c2VTdGF0ZSh7fSlcbiAgICBjb25zdCB7cmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdH0gPSB1c2VGb3JtKClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IG1vdmllUXVlcnkgPSB1c2VRdWVyeSh7XG4gICAgICAgIHF1ZXJ5S2V5OiBbJ21vdmllJ10sXG4gICAgICAgIHF1ZXJ5Rm46IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5nZXQoYC9hcGkvZmlsbXMvJHtyb3V0ZXIucXVlcnkuaWR9YClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TW92aWUocmVzLmRhdGEuZGF0YSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAobW92aWVRdWVyeS5pc0xvYWRpbmcpe1xuICAgICAgICByZXR1cm4gPGgxPiBNb3ZpZSBMb2FkaW5nIDwvaDE+XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlTXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XG4gICAgICAgIG11dGF0aW9uRm46IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBheGlvcy5kZWxldGUoYC9hcGkvZmlsbXMvJHtyb3V0ZXIucXVlcnkuaWR9YCwge1xuICAgICAgICAgICAgICAgIGRhdGEgOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RvcjogZGF0YS5kaXJlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgcGxvdDogZGF0YS5wbG90XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZGVsKGUpe1xuICAgICAgICBkZWxldGVNdXRhdGlvbi5tdXRhdGUoZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PiAgXG4gICAgICAgICAgICA8aDE+IFRoaXMgaXMgZm9yIEZpbG0gbnVtYmVyIHtyb3V0ZXIucXVlcnkuaWR9IDwvaDE+XG4gICAgICAgICAgICA8aDI+IE1vdmllOiB7bW92aWUuYXR0cmlidXRlcy50aXRsZX0gPC9oMj5cbiAgICAgICAgICAgIDxoMj4gRGlyZWN0b3I6IHttb3ZpZS5hdHRyaWJ1dGVzLmRpcmVjdG9yfSA8L2gyPlxuICAgICAgICAgICAgPGgyPiBQbG90OiA8L2gyPlxuICAgICAgICAgICAgPHA+IHttb3ZpZS5hdHRyaWJ1dGVzLnBsb3R9IDwvcD5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpblRvcDogJzV2aCd9fT4gRGF0ZSBSZWxlYXNlZDoge21vdmllLmF0dHJpYnV0ZXMucmVsZWFzZWR9IDwvaDI+IFxuXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2ZpbG1zLyR7cm91dGVyLnF1ZXJ5LmlkfS9lZGl0YH0+IEVkaXQgRmlsbSA8L0xpbms+IDxici8+PGJyLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvZmlsbXMnfT4gQmFjayB0byBGaWxtcyBQYWdlcyA8L0xpbms+XG5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoZGVsKX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2hpZGRlbicgey4uLnJlZ2lzdGVyKCd0aXRsZScpfSB2YWx1ZT17bW92aWUuYXR0cmlidXRlcy50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0naGlkZGVuJyB7Li4ucmVnaXN0ZXIoJ3Bsb3QnKX0gdmFsdWU9e21vdmllLmF0dHJpYnV0ZXMucGxvdH0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0naGlkZGVuJyB7Li4ucmVnaXN0ZXIoJ2RpcmVjdG9yJyl9IHZhbHVlPXttb3ZpZS5hdHRyaWJ1dGVzLmRpcmVjdG9yfSAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz4gRGVsZXRlIEZpbG0gPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwidXNlRm9ybSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkluZm8iLCJtb3ZpZSIsInNldE1vdmllIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyb3V0ZXIiLCJtb3ZpZVF1ZXJ5IiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZ2V0IiwicXVlcnkiLCJpZCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaDEiLCJkZWxldGVNdXRhdGlvbiIsIm11dGF0aW9uRm4iLCJkZWxldGUiLCJ0aXRsZSIsImRpcmVjdG9yIiwicGxvdCIsImRlbCIsImUiLCJtdXRhdGUiLCJoMiIsImF0dHJpYnV0ZXMiLCJwIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJyZWxlYXNlZCIsImhyZWYiLCJiciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/films/[id]/index.tsx\n"));

/***/ })

});