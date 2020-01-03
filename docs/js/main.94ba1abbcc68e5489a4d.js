(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  font-family: 'Roboto', sans-serif;\\n  font-weight: 100;\\n  color: #2F2F2F; }\\n\\ninput::-webkit-input-placeholder {\\n  font-weight: 100;\\n  color: #898989; }\\n\\ninput::-moz-placeholder {\\n  font-weight: 100;\\n  color: #898989; }\\n\\ninput:-ms-input-placeholder {\\n  font-weight: 100;\\n  color: #898989; }\\n\\ninput:-moz-placeholder {\\n  font-weight: 100;\\n  color: #898989; }\\n\\ninput::placeholder {\\n  font-weight: 100;\\n  color: #898989; }\\n\\nbody {\\n  margin-top: 5px;\\n  margin-left: 0;\\n  margin-right: 0;\\n  margin-bottom: 0; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux */ \"./src/redux/index.js\");\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/App */ \"./src/pages/App.js\");\n\n\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], {\n  basename:  true ? `/${\"todolist-react\"}` : undefined\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n  store: _redux__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null))), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages */ \"./src/pages/index.js\");\n\n\n // catalog for all routings\n\nconst App = props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _pages__WEBPACK_IMPORTED_MODULE_2__[\"Home\"]\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/pages/App.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\n/* harmony import */ var _utils_withSplitting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/withSplitting */ \"./src/utils/withSplitting.js\");\n// URL에 따라 보여줄 컴포넌트들의 모음\n\nconst Home = Object(_utils_withSplitting__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Home */ \"./src/pages/Home.js\")));\n\n//# sourceURL=webpack:///./src/pages/index.js?");

/***/ }),

/***/ "./src/redux/index.js":
/*!****************************!*\
  !*** ./src/redux/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules */ \"./src/redux/modules/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n// export the function's result\n// can be editted when ssr is used\n\n\n // const store = createStore(rootReducer, applyMiddleware(reduxThunk))\n\nconst composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_modules__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n/* preloadedState, */\ncomposeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"])));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/redux/index.js?");

/***/ }),

/***/ "./src/redux/modules/app.js":
/*!**********************************!*\
  !*** ./src/redux/modules/app.js ***!
  \**********************************/
/*! exports provided: onComplete, changeInput, getTodoList, createTodo, updateTodo, deleteTodo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onComplete\", function() { return onComplete; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeInput\", function() { return changeInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodoList\", function() { return getTodoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodo\", function() { return createTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTodo\", function() { return updateTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTodo\", function() { return deleteTodo; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"./node_modules/redux-actions/es/index.js\");\n/* harmony import */ var _utils_lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/lib/api */ \"./src/utils/lib/api.js\");\n\n // #################### ACTION TYPES ###################\n// action for changing app's state\n// const ON_LOADING = 'app/ON_LOADING'\n\nconst ON_COMPLETE = 'app/ON_COMPLETE'; // action for keyboard action\n\nconst CHANGE_INPUT = 'app/CHANGE_INPUT'; // actions for DB apis\n\nconst CREATE_TODO = 'app/CREATE_TODO';\nconst UPDATE_TODO = 'app/UPDATE_TODO';\nconst DELETE_TODO = 'app/DELETE_TODO'; // actions for app's status\n\nconst GET_TODOLIST = 'app/GET_TODOLIST'; // ############ ACTION GENERATOR FUNCTIONS #############\n// ## NAMES WILL BE RE-USED WITH `bindActionCreators` ##\n// action for completing data loading task\n\nconst onComplete = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(ON_COMPLETE, (payload = {}) => payload); // action for keyboard input\n\nconst _changeInput = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(CHANGE_INPUT, payload => ({\n  key: payload.key,\n  value: payload.value\n}));\n\nconst changeInput = ({\n  key,\n  value\n}) => dispatch => {\n  return new Promise(resolve => {\n    dispatch(_changeInput({\n      key,\n      value\n    }));\n    resolve();\n  });\n}; // action for querying all todos\n\nconst _getTodoList = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(GET_TODOLIST, payload => ({\n  todoList: payload.todoList\n}));\n\nconst getTodoList = () => dispatch => {\n  _utils_lib_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList().then(({\n    data: {\n      listTodos: {\n        items\n      }\n    }\n  }) => {\n    return new Promise(resolve => {\n      dispatch(_getTodoList({\n        todoList: items\n      }));\n      resolve();\n    });\n  }).then(() => {\n    dispatch(onComplete());\n  }).catch(e => {\n    console.error(e);\n  });\n}; // action for adding new todo in the internal todoList\n\nconst _createTodo = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(CREATE_TODO, payload => ({\n  newTodo: payload.newTodo\n})); // action for creating new todo\n\n\nconst createTodo = desc => dispatch => {\n  _utils_lib_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTodo(desc).then(({\n    data: {\n      createTodo: newTodo\n    }\n  }) => {\n    return new Promise(resolve => {\n      dispatch(changeInput({\n        key: 'todoDesc',\n        value: ''\n      })).then(() => {\n        resolve({\n          newTodo\n        });\n      });\n    });\n  }).then(({\n    newTodo\n  }) => {\n    dispatch(_createTodo({\n      newTodo\n    }));\n  }).catch(e => {\n    console.error(e);\n  });\n}; // action for modifying the updated todo's status\n\nconst _updateTodo = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(UPDATE_TODO, payload => ({\n  id: payload.id,\n  newStatus: payload.newStatus\n})); // action for updating a todo\n\n\nconst updateTodo = (id, prevStatus) => dispatch => {\n  _utils_lib_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTodo(id, prevStatus).then(({\n    data: {\n      updateTodo\n    }\n  }) => {\n    dispatch(_updateTodo({\n      id: updateTodo.id,\n      newStatus: updateTodo.status\n    }));\n  }).catch(e => {\n    console.error(e);\n  });\n}; // action for eliminating the deleted todo\n\nconst _deleteTodo = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(DELETE_TODO, payload => ({\n  id: payload.id\n})); // action for deleting a todo\n\n\nconst deleteTodo = id => dispatch => {\n  _utils_lib_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTodo(id).then(({\n    data: {\n      deleteTodo\n    }\n  }) => {\n    dispatch(_deleteTodo({\n      id: deleteTodo.id\n    }));\n  }).catch(e => {\n    console.error(e);\n  });\n}; // ######## DEFAULT STATE FOR THIS SLICE STATE #########\n\nconst initialState = {\n  isLoading: true,\n  todoDesc: '',\n  todoList: []\n}; // ########### REDUCER FOR THIS SLICE STATE ############\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"handleActions\"])({\n  [ON_COMPLETE]: (state, action) => ({ ...state,\n    isLoading: !state.isLoading\n  }),\n  [CHANGE_INPUT]: (state, action) => ({ ...state,\n    [action.payload.key]: action.payload.value\n  }),\n  [GET_TODOLIST]: (state, action) => ({ ...state,\n    todoList: action.payload.todoList\n  }),\n  [CREATE_TODO]: (state, action) => ({ ...state,\n    todoList: state.todoList.concat(action.payload.newTodo)\n  }),\n  [UPDATE_TODO]: (state, action) => ({ ...state,\n    todoList: state.todoList.map(todo => {\n      // find the updated todo and change the status\n      if (todo.id === action.payload.id) {\n        todo.status = action.payload.newStatus;\n      }\n\n      return todo;\n    })\n  }),\n  [DELETE_TODO]: (state, action) => ({ ...state,\n    todoList: state.todoList.filter(todo => {\n      // exclude the deleted todo using payload's id\n      if (todo.id === action.payload.id) {\n        return false;\n      } else {\n        return true;\n      }\n    })\n  })\n}, initialState));\n\n//# sourceURL=webpack:///./src/redux/modules/app.js?");

/***/ }),

/***/ "./src/redux/modules/index.js":
/*!************************************!*\
  !*** ./src/redux/modules/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/redux/modules/app.js\");\n// combine reducers and this will be used when store is generated\n// using Ducks pattern for each slices\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  app: _app__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/redux/modules/index.js?");

/***/ }),

/***/ "./src/utils/data/tasks.js":
/*!*********************************!*\
  !*** ./src/utils/data/tasks.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst tasks = [{\n  id: 1,\n  desc: '운동 하기',\n  status: 'DONE',\n  date: '1577706674964'\n}, {\n  id: 2,\n  desc: '공부 하기',\n  status: 'PENDING',\n  date: '1577906674964'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (tasks);\n\n//# sourceURL=webpack:///./src/utils/data/tasks.js?");

/***/ }),

/***/ "./src/utils/lib/api.js":
/*!******************************!*\
  !*** ./src/utils/lib/api.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ \"./node_modules/uuid/v4.js\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _postpone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postpone */ \"./src/utils/lib/postpone.js\");\n\n\n\nlet {\n  default: todos\n} = __webpack_require__(/*! ../data/tasks */ \"./src/utils/data/tasks.js\");\n\nconst getTodoList = () => {\n  // get a copy of current dataset for immutability\n  const _todos = todos.map(todo => Object.assign({}, todo)); // return current dataset\n\n\n  return new Promise((resolve, reject) => {\n    const result = {\n      data: {\n        listTodos: {\n          items: _todos\n        }\n      }\n    }; // don't use in production\n\n    Object(_postpone__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1.5, () => resolve(result));\n  });\n};\n\nconst createTodo = desc => {\n  // generate new todo\n  const newTodo = {\n    id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),\n    desc: desc,\n    status: 'PENDING',\n    date: new Date().getTime()\n  }; // add it in the dataset\n\n  todos.push(newTodo); // attach new todo on the dataset\n\n  return new Promise((resolve, reject) => {\n    const result = {\n      data: {\n        createTodo: newTodo\n      }\n    };\n    resolve(result);\n  });\n};\n\nconst updateTodo = (id, prevStatus) => {\n  const newStatus = prevStatus === 'PENDING' ? 'DONE' : 'PENDING'; // modify the todo which has the id from parameter\n\n  for (let i = 0; i < todos.length; i++) {\n    if (todos[i].id === id) {\n      todos[i].status = newStatus;\n    }\n  }\n\n  return new Promise((resolve, reject) => {\n    const result = {\n      data: {\n        updateTodo: {\n          id,\n          status: newStatus\n        }\n      }\n    };\n    resolve(result);\n  });\n};\n\nconst deleteTodo = id => {\n  // find where the target todo exists\n  let index = -1;\n  todos.forEach((todo, _index) => {\n    if (todo.id === id) {\n      index = _index;\n    }\n  });\n\n  if (index !== -1) {\n    const front = todos.slice(0, index);\n    const back = todos.slice(index + 1);\n    todos = front.concat(back);\n    return new Promise((resolve, reject) => {\n      const result = {\n        data: {\n          deleteTodo: {\n            id\n          }\n        }\n      };\n      resolve(result);\n    });\n  } else {\n    return new Error('Invalid ID');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getTodoList,\n  createTodo,\n  updateTodo,\n  deleteTodo\n});\n\n//# sourceURL=webpack:///./src/utils/lib/api.js?");

/***/ }),

/***/ "./src/utils/lib/postpone.js":
/*!***********************************!*\
  !*** ./src/utils/lib/postpone.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst postpone = (seconds, callback) => {\n  setTimeout(callback, seconds * 1000);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (postpone);\n\n//# sourceURL=webpack:///./src/utils/lib/postpone.js?");

/***/ }),

/***/ "./src/utils/withSplitting.js":
/*!************************************!*\
  !*** ./src/utils/withSplitting.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst withSplitting = getComponent => {\n  // getComponent is callback with ` () => require('./COMPONENT') `\n  class LoadedComponent extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(props) {\n      super(props);\n      this.state = {\n        Splitted: null\n      };\n      getComponent().then(({\n        default: Splitted\n      }) => {\n        this.setState({\n          Splitted\n        });\n      });\n    }\n\n    render() {\n      if (!this.state.Splitted) return null;else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.state.Splitted, this.props);\n    }\n\n  }\n\n  return LoadedComponent;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withSplitting);\n\n//# sourceURL=webpack:///./src/utils/withSplitting.js?");

/***/ }),

/***/ 0:
/*!***********************************************************************!*\
  !*** multi core-js/stable regenerator-runtime/runtime ./src/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/stable */\"./node_modules/core-js/stable/index.js\");\n__webpack_require__(/*! regenerator-runtime/runtime */\"./node_modules/regenerator-runtime/runtime.js\");\nmodule.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_core-js/stable_regenerator-runtime/runtime_./src/index.js?");

/***/ })

},[[0,"runtime","vendors"]]]);