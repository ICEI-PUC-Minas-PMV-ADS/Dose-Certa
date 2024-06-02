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
const PiggyBank = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "piggy-bank-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M188 116a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-36-48h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8Zm92 44v32a20 20 0 0 1-20 20h-5.18l-17.16 48a12 12 0 0 1-11.3 8h-12.72a12 12 0 0 1-11.3-8l-2.87-8h-62.94l-2.87 8a12 12 0 0 1-11.3 8H73.64a12 12 0 0 1-11.3-8l-12.82-35.9a83.73 83.73 0 0 1-21.4-51.76A20 20 0 0 0 12 144a4 4 0 0 1-8 0 28 28 0 0 1 24.09-27.72A84.1 84.1 0 0 1 112 36h104a4 4 0 0 1 0 8h-36.2a84 84 0 0 1 41.31 42.63c.76 1.76 1.47 3.55 2.11 5.37h.78a20 20 0 0 1 20 20Zm-8 0a12 12 0 0 0-12-12h-3.66a4 4 0 0 1-3.82-2.8 74.45 74.45 0 0 0-2.75-7.39A76 76 0 0 0 144 44h-32a76 76 0 0 0-56 127.34 4 4 0 0 1 .82 1.36l13.09 36.65a4 4 0 0 0 3.73 2.65h12.72a4 4 0 0 0 3.77-2.65l3.87-10.7a4 4 0 0 1 3.71-2.65h68.58a4 4 0 0 1 3.76 2.65l3.82 10.7a4 4 0 0 0 3.77 2.65h12.72a4 4 0 0 0 3.77-2.65l18.1-50.7A4 4 0 0 1 216 156h8a12 12 0 0 0 12-12Z"
}));
var _default = exports.default = PiggyBank;