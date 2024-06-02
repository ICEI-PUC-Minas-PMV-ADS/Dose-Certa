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
const Graph = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "graph-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 154a29.87 29.87 0 0 0-19.5 7.23l-25.62-19.93A29.83 29.83 0 0 0 158 128a30.52 30.52 0 0 0-.22-3.6L174 119a30 30 0 1 0-4-15 30.52 30.52 0 0 0 .22 3.6L154 113a29.91 29.91 0 0 0-32.42-14.31l-8.14-18.3a30 30 0 1 0-11 4.88l8.14 18.3a29.92 29.92 0 0 0-8.52 39.43L74 168a30.08 30.08 0 1 0 8 9l28-25a29.91 29.91 0 0 0 37.47-1.23l25.62 19.93A30 30 0 1 0 200 154Zm0-68a18 18 0 1 1-18 18 18 18 0 0 1 18-18ZM78 56a18 18 0 1 1 18 18 18 18 0 0 1-18-18ZM56 210a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm72-64a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm72 56a18 18 0 1 1 18-18 18 18 0 0 1-18 18Z"
}));
var _default = exports.default = Graph;