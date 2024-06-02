"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* GENERATED FILE */
const FileXls = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-xls-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M160 208a12 12 0 0 1-12 12h-28a12 12 0 0 1-12-12v-56a12 12 0 0 1 24 0v44h16a12 12 0 0 1 12 12Zm-69-65.78A12 12 0 0 0 74.24 145L64 159.34 53.77 145a12 12 0 1 0-19.53 14l15 21-15 21a12 12 0 1 0 19.53 14L64 200.62 74.24 215a12 12 0 0 0 19.53-14l-15-21 15-21A12 12 0 0 0 91 142.22Zm122.53 32.05c-5.12-3.45-11.32-5.24-16.79-6.82a79.69 79.69 0 0 1-7.92-2.59c2.45-1.18 9.71-1.3 16.07.33A12 12 0 0 0 211 142a69 69 0 0 0-12-1.86c-9.93-.66-18 1.08-24.1 5.17a24.45 24.45 0 0 0-10.69 17.76c-1.1 8.74 2.49 16.27 10.11 21.19 4.78 3.09 10.36 4.7 15.75 6.26 3 .89 7.94 2.3 9.88 3.53a2.48 2.48 0 0 1-.21.71c-1.37 1.55-9.58 1.79-16.39-.06a12 12 0 1 0-6.46 23.11A63.75 63.75 0 0 0 193.1 220c6.46 0 13.73-1.17 19.73-5.15a24.73 24.73 0 0 0 10.95-18c1.22-9.32-2.45-17.32-10.27-22.58ZM36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88v20a12 12 0 1 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 1 1-24 0Zm124-28h23l-23-23Z"
}));
var _default = exports.default = FileXls;