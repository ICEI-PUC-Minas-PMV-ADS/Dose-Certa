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
const ForkKnife = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fork-knife-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M76 88V40a4 4 0 0 1 8 0v48a4 4 0 0 1-8 0Zm136-48v184a4 4 0 0 1-8 0v-52h-52a4 4 0 0 1-4-4 264.27 264.27 0 0 1 7.11-55.94c9.47-39.22 27.21-65.41 51.31-75.74A4 4 0 0 1 212 40Zm-8 6.46c-41.75 23.87-47.19 99.29-47.9 117.54H204Zm-88-7.12a4 4 0 0 0-7.9 1.32l8 47.66a36 36 0 0 1-72 0l8-47.66a4 4 0 0 0-7.9-1.32l-8 48a4.89 4.89 0 0 0-.2.66 44.06 44.06 0 0 0 40 43.81V224a4 4 0 0 0 8 0v-92.19A44.06 44.06 0 0 0 124 88a4.89 4.89 0 0 0 0-.66Z"
}));
var _default = exports.default = ForkKnife;