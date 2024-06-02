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
const Leaf = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "leaf-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M219.45 40.31a4 4 0 0 0-3.76-3.76C141.06 32.16 81.46 54.39 56.24 96 39 124.56 39.9 158.37 58.8 191.54l-21.63 21.63a4 4 0 0 0 5.66 5.66l21.63-21.64c17.39 9.91 35 14.89 51.83 14.89A83.43 83.43 0 0 0 160 199.76c41.61-25.22 63.84-84.83 59.45-159.45Zm-63.63 152.61c-25.37 15.37-55.56 14.75-85.48-1.61l92.5-92.49a4 4 0 0 0-5.66-5.66l-92.49 92.5c-16.36-29.92-17-60.11-1.61-85.48C86.34 61.77 141.72 41 211.66 44.34c3.34 69.94-17.43 125.32-55.84 148.58Z"
}));
var _default = exports.default = Leaf;