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
const BaseballCap = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "baseball-cap-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20A108.12 108.12 0 0 0 20 128v56a27.86 27.86 0 0 0 15.26 24.93 28 28 0 0 0 29.28-2.34C76.2 198.11 96.68 188 128 188s51.8 10.1 63.46 18.58A28 28 0 0 0 236 184v-56A108.12 108.12 0 0 0 128 20Zm84 108v1.87a170 170 0 0 0-33.29-14.3 170.81 170.81 0 0 0-23.45-67A84.14 84.14 0 0 1 212 128Zm-58.46-18.12a174.42 174.42 0 0 0-51.08 0A150 150 0 0 1 128 50.94a150.07 150.07 0 0 1 25.54 58.94Zm-52.8-61.31a170.81 170.81 0 0 0-23.45 67A170 170 0 0 0 44 129.87V128a84.14 84.14 0 0 1 56.74-79.43Zm109.11 139a4 4 0 0 1-4.28-.36C191 176.61 165.77 164 128 164s-63 12.61-77.57 23.18a4 4 0 0 1-4.28.36A3.76 3.76 0 0 1 44 184v-25.86a148 148 0 0 1 168 0V184a3.76 3.76 0 0 1-2.15 3.54Z"
}));
var _default = exports.default = BaseballCap;