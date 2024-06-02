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
const Cake = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cake-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M230 112a22 22 0 0 0-22-22h-74V77.4A30.05 30.05 0 0 0 158 48c0-26.9-25.58-44.27-26.67-45a6 6 0 0 0-6.66 0C123.58 3.73 98 21.1 98 48a30.05 30.05 0 0 0 24 29.4V90H48a22 22 0 0 0-22 22v23.33a38.81 38.81 0 0 0 8 23.57V200a22 22 0 0 0 22 22h144a22 22 0 0 0 22-22v-41.1a38.81 38.81 0 0 0 8-23.57ZM110 48c0-15.4 12-27.41 18-32.44 6 5 18 17 18 32.44a18 18 0 0 1-36 0Zm-72 64a10 10 0 0 1 10-10h160a10 10 0 0 1 10 10v23.33c0 14.32-11.33 26.28-25.26 26.66A26 26 0 0 1 166 136a6 6 0 0 0-12 0 26 26 0 0 1-52 0 6 6 0 0 0-12 0 26 26 0 0 1-26.74 26C49.33 161.61 38 149.65 38 135.33Zm162 98H56a10 10 0 0 1-10-10v-30.69A36.8 36.8 0 0 0 62.94 174a37.82 37.82 0 0 0 27.56-10.76 38.83 38.83 0 0 0 5.5-6.74 38 38 0 0 0 64 0 38.83 38.83 0 0 0 5.52 6.74A37.73 37.73 0 0 0 192 174h1.07a36.8 36.8 0 0 0 16.93-4.69V200a10 10 0 0 1-10 10Z"
}));
var _default = exports.default = Cake;