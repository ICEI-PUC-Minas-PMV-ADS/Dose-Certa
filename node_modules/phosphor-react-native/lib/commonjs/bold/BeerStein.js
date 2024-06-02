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
const BeerStein = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "beer-stein-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 84h-12V72a44.05 44.05 0 0 0-44-44h-9.73c-12.5-10.22-29.09-16-46.27-16-37.5 0-68 26.92-68 60v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20v-4h12a28 28 0 0 0 28-28v-64a28 28 0 0 0-28-28ZM104 36c12.85 0 25 4.62 33.44 12.67a12 12 0 0 0 8.3 3.33H160a20 20 0 0 1 19.6 16H60.28C62.72 50 81.39 36 104 36Zm76 168H60V92h120Zm40-28a4 4 0 0 1-4 4h-12v-72h12a4 4 0 0 1 4 4Zm-112-56v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0Zm48 0v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0Z"
}));
var _default = exports.default = BeerStein;