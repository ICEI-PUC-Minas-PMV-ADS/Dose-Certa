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
const Octagon = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "octagon-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m224.49 83.06-51.55-51.55a12 12 0 0 0-8.49-3.51h-72.9a12 12 0 0 0-8.49 3.51L31.51 83.06A12 12 0 0 0 28 91.55v72.9a12 12 0 0 0 3.51 8.49l51.55 51.55a12 12 0 0 0 8.49 3.51h72.9a12 12 0 0 0 8.49-3.51l51.55-51.55a12 12 0 0 0 3.51-8.49v-72.9a12 12 0 0 0-3.51-8.49ZM220 164.45a4 4 0 0 1-1.17 2.83l-51.55 51.55a4 4 0 0 1-2.83 1.17h-72.9a4 4 0 0 1-2.83-1.17l-51.55-51.55a4 4 0 0 1-1.17-2.83v-72.9a4 4 0 0 1 1.17-2.83l51.55-51.55A4 4 0 0 1 91.55 36h72.9a4 4 0 0 1 2.83 1.17l51.55 51.55a4 4 0 0 1 1.17 2.83Z"
}));
var _default = exports.default = Octagon;