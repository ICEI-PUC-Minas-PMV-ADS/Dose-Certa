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
const Pants = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pants-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m219.91 214.51-22-176A12 12 0 0 0 186 28H70a12 12 0 0 0-11.91 10.51l-22 176A12 12 0 0 0 48 228h40.69a12 12 0 0 0 11.64-9.06L128 112l27.67 106.94a12 12 0 0 0 11.64 9.06H208a12 12 0 0 0 11.91-13.49ZM197.52 99.9A36 36 0 0 1 164.23 68h29.3ZM70 36h116a4 4 0 0 1 4 3.5l2.53 20.5H63.47L66 39.5a4 4 0 0 1 4-3.5Zm-7.53 32h29.3a36 36 0 0 1-33.29 31.9Zm30.1 149a4 4 0 0 1-3.88 3H48a4 4 0 0 1-4-4.5L57.47 108a44.05 44.05 0 0 0 42.34-40H124v27.49ZM211 218.65a4 4 0 0 1-3 1.35h-40.69a4 4 0 0 1-3.89-3.06L132 95.49V68h24.19a44.05 44.05 0 0 0 42.34 40L212 215.5a4 4 0 0 1-1 3.15Z"
}));
var _default = exports.default = Pants;