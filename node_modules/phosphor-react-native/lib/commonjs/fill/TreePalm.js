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
const TreePalm = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tree-palm-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M239.84 60.33a8 8 0 0 1-4.65 5.75L179 90.55a71.42 71.42 0 0 1 43.36 33.21 70.64 70.64 0 0 1 7.2 54.32 8 8 0 0 1-12.56 4.28l-81-61.68V224a8 8 0 0 1-16 0V120.68l-81 61.68a8 8 0 0 1-12.57-4.28 70.64 70.64 0 0 1 7.2-54.32A71.42 71.42 0 0 1 77 90.55L20.81 66.08a8 8 0 0 1-2.6-12.85 66.86 66.86 0 0 1 97.74 0 72.21 72.21 0 0 1 12 17 72.21 72.21 0 0 1 12.05-17 66.86 66.86 0 0 1 97.74 0 8 8 0 0 1 2.1 7.1Z"
}));
var _default = exports.default = TreePalm;