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
  className: "beer-stein-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 90h-18V72a38 38 0 0 0-38-38h-11.93c-11.6-10.2-27.51-16-44.07-16-34.19 0-62 24.22-62 54v136a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-10h18a22 22 0 0 0 22-22v-64a22 22 0 0 0-22-22ZM104 30c14.38 0 28.08 5.22 37.59 14.33a6 6 0 0 0 4.15 1.67H160a26 26 0 0 1 25.29 20H54.52C58 45.67 78.86 30 104 30Zm82 178a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V78h132Zm40-32a10 10 0 0 1-10 10h-18v-84h18a10 10 0 0 1 10 10Zm-124-72v80a6 6 0 0 1-12 0v-80a6 6 0 0 1 12 0Zm48 0v80a6 6 0 0 1-12 0v-80a6 6 0 0 1 12 0Z"
}));
var _default = exports.default = BeerStein;