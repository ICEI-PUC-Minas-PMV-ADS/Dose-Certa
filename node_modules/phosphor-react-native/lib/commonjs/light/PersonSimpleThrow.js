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
const PersonSimpleThrow = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-throw-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 86a30 30 0 1 0-30-30 30 30 0 0 0 30 30Zm0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18ZM50 96a14 14 0 1 1 14 14 14 14 0 0 1-14-14Zm170.68 13.35a6 6 0 0 1-8.41 1c-1.17-.92-25.06-18.91-62.52.94a214.64 214.64 0 0 1-3.23 32.38l33.32 27.77a6 6 0 0 1 1.85 6.51l-16 48a6 6 0 0 1-11.38-3.8L169 178l-25.49-21.25a141 141 0 0 1-5.86 17.07C124.15 206 100 227.48 65.73 237.75A6.14 6.14 0 0 1 64 238a6 6 0 0 1-1.72-11.75c64.82-19.45 73.42-78.76 75.11-107.41C109 137.65 86.8 142 72.39 142c-11.71 0-18.29-2.86-18.88-3.13a6 6 0 1 1 5-10.92c.21.09 27.6 11.28 74.14-20.35 26.44-18 48.5-19 62.36-16.67 15.37 2.57 24.39 9.7 24.76 10a6 6 0 0 1 .91 8.42Z"
}));
var _default = exports.default = PersonSimpleThrow;