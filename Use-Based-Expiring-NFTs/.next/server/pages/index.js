/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @onflow/fcl */ \"@onflow/fcl\");\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _flow_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flow/config.js */ \"./flow/config.js\");\n/* harmony import */ var _flow_config_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_flow_config_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/alexanderzwerner/Desktop/Flow-Conditional-NFTs-Websites/Use-Based-Expiring-NFTs/components/Navbar.jsx\";\n\n\n\n\n\nfunction Navbar() {\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    loggedIn: false,\n    addr: undefined\n  });\n  const {\n    0: flow,\n    1: setFlow\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // console.log(user)\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    _onflow_fcl__WEBPACK_IMPORTED_MODULE_2__.currentUser.subscribe(setUser);\n    if (user.addr != \"\") getFlow(user.addr);\n  }, [user.addr]);\n\n  const logOut = async () => {\n    await _onflow_fcl__WEBPACK_IMPORTED_MODULE_2__.unauthenticate();\n    setUser({\n      addr: undefined,\n      loggedIn: false\n    });\n  };\n\n  const logIn = async () => {\n    const res = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_2__.authenticate();\n  };\n\n  const signUp = () => {\n    _onflow_fcl__WEBPACK_IMPORTED_MODULE_2__.signUp();\n  };\n\n  async function getFlow(address) {\n    try {\n      const res = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_2__.query({\n        cadence: `\n                import FlowToken from 0x7e60df042a9c0868\n                import FungibleToken from 0x9a0766d93b6608b7\n  \n                pub fun main(address: Address): UFix64{\n                  let balanceVault =  getAccount(address).getCapability(/public/flowTokenBalance).borrow<&FlowToken.Vault{FungibleToken.Balance}>()!\n                  return balanceVault.balance\n                }`,\n        args: (arg, t) => [arg(address, t.Address)]\n      });\n      setFlow(res);\n    } catch (error) {\n      console.log(\"err:\", error);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n      children: \"Conditional NFTs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      onClick: () => logIn(),\n      children: \"Login\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      onClick: () => logOut(),\n      children: \"LogOut\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      children: user.addr\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      children: flow\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().nav.withConfig({\n  displayName: \"Navbar__Wrapper\",\n  componentId: \"sc-eh3pqc-0\"\n})([\"width:100%;background-color:#f1f1f1;top:0;display:flex;justify-content:space-between;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ssTUFBVCxHQUFrQjtFQUMvQixNQUFNO0lBQUEsR0FBQ0MsSUFBRDtJQUFBLEdBQU9DO0VBQVAsSUFBa0JOLCtDQUFRLENBQUM7SUFBRU8sUUFBUSxFQUFFLEtBQVo7SUFBbUJDLElBQUksRUFBRUM7RUFBekIsQ0FBRCxDQUFoQztFQUNBLE1BQU07SUFBQSxHQUFDQyxJQUFEO0lBQUEsR0FBT0M7RUFBUCxJQUFrQlgsK0NBQVEsQ0FBQyxDQUFELENBQWhDLENBRitCLENBSS9COztFQUVBQyxnREFBUyxDQUFDLE1BQU07SUFDZEUsOERBQUEsQ0FBMEJHLE9BQTFCO0lBQ0EsSUFBSUQsSUFBSSxDQUFDRyxJQUFMLElBQWEsRUFBakIsRUFBcUJNLE9BQU8sQ0FBQ1QsSUFBSSxDQUFDRyxJQUFOLENBQVA7RUFDdEIsQ0FIUSxFQUdOLENBQUNILElBQUksQ0FBQ0csSUFBTixDQUhNLENBQVQ7O0VBS0EsTUFBTU8sTUFBTSxHQUFHLFlBQVk7SUFDekIsTUFBTVosdURBQUEsRUFBTjtJQUNBRyxPQUFPLENBQUM7TUFBRUUsSUFBSSxFQUFFQyxTQUFSO01BQW1CRixRQUFRLEVBQUU7SUFBN0IsQ0FBRCxDQUFQO0VBQ0QsQ0FIRDs7RUFLQSxNQUFNVSxLQUFLLEdBQUcsWUFBWTtJQUN4QixNQUFNQyxHQUFHLEdBQUcsTUFBTWYscURBQUEsRUFBbEI7RUFDRCxDQUZEOztFQUlBLE1BQU1pQixNQUFNLEdBQUcsTUFBTTtJQUNuQmpCLCtDQUFBO0VBQ0QsQ0FGRDs7RUFJQSxlQUFlVyxPQUFmLENBQXVCTyxPQUF2QixFQUFnQztJQUM5QixJQUFJO01BQ0YsTUFBTUgsR0FBRyxHQUFHLE1BQU1mLDhDQUFBLENBQVU7UUFDMUJvQixPQUFPLEVBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBUmtDO1FBUzFCQyxJQUFJLEVBQUUsQ0FBQ0MsR0FBRCxFQUFNQyxDQUFOLEtBQVksQ0FBQ0QsR0FBRyxDQUFDSixPQUFELEVBQVVLLENBQUMsQ0FBQ0MsT0FBWixDQUFKO01BVFEsQ0FBVixDQUFsQjtNQVdBaEIsT0FBTyxDQUFDTyxHQUFELENBQVA7SUFDRCxDQWJELENBYUUsT0FBT1UsS0FBUCxFQUFjO01BQ2RDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JGLEtBQXBCO0lBQ0Q7RUFDRjs7RUFFRCxvQkFDRSw4REFBQyxPQUFEO0lBQUEsd0JBQ0U7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUVFO01BQVEsT0FBTyxFQUFFLE1BQU1YLEtBQUssRUFBNUI7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRixlQUdFO01BQVEsT0FBTyxFQUFFLE1BQU1GLE1BQU0sRUFBN0I7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFIRixlQUlFO01BQUEsVUFBSVYsSUFBSSxDQUFDRztJQUFUO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFKRixlQUtFO01BQUEsVUFBSUU7SUFBSjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBTEY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFTRDtBQUVELE1BQU1xQixPQUFPLEdBQUc3Qix1RUFBSDtFQUFBO0VBQUE7QUFBQSw2RkFBYiIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWUtbmZ0cy13ZWIvLi9jb21wb25lbnRzL05hdmJhci5qc3g/M2FhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIGZjbCBmcm9tIFwiQG9uZmxvdy9mY2xcIjtcbmltcG9ydCBcIi4uL2Zsb3cvY29uZmlnLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoeyBsb2dnZWRJbjogZmFsc2UsIGFkZHI6IHVuZGVmaW5lZCB9KTtcbiAgY29uc3QgW2Zsb3csIHNldEZsb3ddID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gY29uc29sZS5sb2codXNlcilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZjbC5jdXJyZW50VXNlci5zdWJzY3JpYmUoc2V0VXNlcik7XG4gICAgaWYgKHVzZXIuYWRkciAhPSBcIlwiKSBnZXRGbG93KHVzZXIuYWRkcik7XG4gIH0sIFt1c2VyLmFkZHJdKTtcblxuICBjb25zdCBsb2dPdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZmNsLnVuYXV0aGVudGljYXRlKCk7XG4gICAgc2V0VXNlcih7IGFkZHI6IHVuZGVmaW5lZCwgbG9nZ2VkSW46IGZhbHNlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvZ0luID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZjbC5hdXRoZW50aWNhdGUoKTtcbiAgfTtcblxuICBjb25zdCBzaWduVXAgPSAoKSA9PiB7XG4gICAgZmNsLnNpZ25VcCgpO1xuICB9O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEZsb3coYWRkcmVzcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmY2wucXVlcnkoe1xuICAgICAgICBjYWRlbmNlOiBgXG4gICAgICAgICAgICAgICAgaW1wb3J0IEZsb3dUb2tlbiBmcm9tIDB4N2U2MGRmMDQyYTljMDg2OFxuICAgICAgICAgICAgICAgIGltcG9ydCBGdW5naWJsZVRva2VuIGZyb20gMHg5YTA3NjZkOTNiNjYwOGI3XG4gIFxuICAgICAgICAgICAgICAgIHB1YiBmdW4gbWFpbihhZGRyZXNzOiBBZGRyZXNzKTogVUZpeDY0e1xuICAgICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VWYXVsdCA9ICBnZXRBY2NvdW50KGFkZHJlc3MpLmdldENhcGFiaWxpdHkoL3B1YmxpYy9mbG93VG9rZW5CYWxhbmNlKS5ib3Jyb3c8JkZsb3dUb2tlbi5WYXVsdHtGdW5naWJsZVRva2VuLkJhbGFuY2V9PigpIVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhbGFuY2VWYXVsdC5iYWxhbmNlXG4gICAgICAgICAgICAgICAgfWAsXG4gICAgICAgIGFyZ3M6IChhcmcsIHQpID0+IFthcmcoYWRkcmVzcywgdC5BZGRyZXNzKV0sXG4gICAgICB9KTtcbiAgICAgIHNldEZsb3cocmVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnI6XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPGgyPkNvbmRpdGlvbmFsIE5GVHM8L2gyPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2dJbigpfT5Mb2dpbjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2dPdXQoKX0+TG9nT3V0PC9idXR0b24+XG4gICAgICA8cD57dXNlci5hZGRyfTwvcD5cbiAgICAgIDxwPntmbG93fTwvcD5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubmF2YFxuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJmY2wiLCJOYXZiYXIiLCJ1c2VyIiwic2V0VXNlciIsImxvZ2dlZEluIiwiYWRkciIsInVuZGVmaW5lZCIsImZsb3ciLCJzZXRGbG93IiwiY3VycmVudFVzZXIiLCJzdWJzY3JpYmUiLCJnZXRGbG93IiwibG9nT3V0IiwidW5hdXRoZW50aWNhdGUiLCJsb2dJbiIsInJlcyIsImF1dGhlbnRpY2F0ZSIsInNpZ25VcCIsImFkZHJlc3MiLCJxdWVyeSIsImNhZGVuY2UiLCJhcmdzIiwiYXJnIiwidCIsIkFkZHJlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJXcmFwcGVyIiwibmF2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n");

/***/ }),

/***/ "./flow/config.js":
/*!************************!*\
  !*** ./flow/config.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const fcl = __webpack_require__(/*! @onflow/fcl */ \"@onflow/fcl\");\n\nfcl.config({\n  \"app.detail.title\": \"Conditional NFTs\",\n  // this adds a custom name to our wallet\n  \"accessNode.api\": \"https://rest-testnet.onflow.org\",\n  // this is for the local emulator\n  \"discovery.wallet\": \"https://fcl-discovery.onflow.org/testnet/authn\",\n  // this is for the local dev wallet\n  \"0xDeployer\": \"0xae95963d3be2cd41\" // this auto configures `0xDeployer` to be replaced by the address in txs and scripts\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mbG93L2NvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFHLEdBQUdDLG1CQUFPLENBQUMsZ0NBQUQsQ0FBbkI7O0FBRUFELEdBQUcsQ0FBQ0UsTUFBSixDQUFXO0VBQ1Qsb0JBQW9CLGtCQURYO0VBQytCO0VBQ3hDLGtCQUFrQixpQ0FGVDtFQUU0QztFQUNyRCxvQkFBb0IsZ0RBSFg7RUFHNkQ7RUFDdEUsY0FBYyxvQkFKTCxDQUkyQjs7QUFKM0IsQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWUtbmZ0cy13ZWIvLi9mbG93L2NvbmZpZy5qcz8zYjE2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZjbCA9IHJlcXVpcmUoXCJAb25mbG93L2ZjbFwiKTtcblxuZmNsLmNvbmZpZyh7XG4gIFwiYXBwLmRldGFpbC50aXRsZVwiOiBcIkNvbmRpdGlvbmFsIE5GVHNcIiwgLy8gdGhpcyBhZGRzIGEgY3VzdG9tIG5hbWUgdG8gb3VyIHdhbGxldFxuICBcImFjY2Vzc05vZGUuYXBpXCI6IFwiaHR0cHM6Ly9yZXN0LXRlc3RuZXQub25mbG93Lm9yZ1wiLCAvLyB0aGlzIGlzIGZvciB0aGUgbG9jYWwgZW11bGF0b3JcbiAgXCJkaXNjb3Zlcnkud2FsbGV0XCI6IFwiaHR0cHM6Ly9mY2wtZGlzY292ZXJ5Lm9uZmxvdy5vcmcvdGVzdG5ldC9hdXRoblwiLCAvLyB0aGlzIGlzIGZvciB0aGUgbG9jYWwgZGV2IHdhbGxldFxuICBcIjB4RGVwbG95ZXJcIjogXCIweGFlOTU5NjNkM2JlMmNkNDFcIiwgLy8gdGhpcyBhdXRvIGNvbmZpZ3VyZXMgYDB4RGVwbG95ZXJgIHRvIGJlIHJlcGxhY2VkIGJ5IHRoZSBhZGRyZXNzIGluIHR4cyBhbmQgc2NyaXB0c1xufSlcbiJdLCJuYW1lcyI6WyJmY2wiLCJyZXF1aXJlIiwiY29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./flow/config.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @onflow/fcl */ \"@onflow/fcl\");\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _flow_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flow/config.js */ \"./flow/config.js\");\n/* harmony import */ var _flow_config_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_flow_config_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/alexanderzwerner/Desktop/Flow-Conditional-NFTs-Websites/Use-Based-Expiring-NFTs/pages/index.js\";\n\n\n\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"main\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n        children: \"Conditional NFTs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU08sSUFBVCxHQUFnQjtFQUM3QixvQkFDRTtJQUFLLFNBQVMsRUFBRU4sMEVBQWhCO0lBQUEsd0JBQ0UsOERBQUMsa0RBQUQ7TUFBQSx3QkFDRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBRUU7UUFBTSxJQUFJLEVBQUMsYUFBWDtRQUF5QixPQUFPLEVBQUM7TUFBakM7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZGLGVBR0U7UUFBTSxHQUFHLEVBQUMsTUFBVjtRQUFpQixJQUFJLEVBQUM7TUFBdEI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUhGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBTUUsOERBQUMsMERBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQU5GLGVBUUU7TUFBTSxTQUFTLEVBQUVBLHFFQUFqQjtNQUFBLHVCQUNFO1FBQUksU0FBUyxFQUFFQSxzRUFBZjtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFSRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQWNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZS1uZnRzLXdlYi8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGZjbCBmcm9tIFwiQG9uZmxvdy9mY2xcIjtcbmltcG9ydCBcIi4uL2Zsb3cvY29uZmlnLmpzXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2YmFyIC8+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkNvbmRpdGlvbmFsIE5GVHM8L2gxPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmNsIiwiTmF2YmFyIiwiSG9tZSIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWUtbmZ0cy13ZWIvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzcxMjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fX19UN0tcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX3N1UEVSXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fR3hRODVcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19fTHBMMVwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "@onflow/fcl":
/*!******************************!*\
  !*** external "@onflow/fcl" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@onflow/fcl");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();