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
const Bicycle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bicycle-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 116a43.66 43.66 0 0 0-18.62 4.15L159 68h33a12 12 0 0 1 12 12 4 4 0 0 0 8 0 20 20 0 0 0-20-20h-40a4 4 0 0 0-3.46 6l15.16 26H97L79.46 62A4 4 0 0 0 76 60H48a4 4 0 0 0 0 8h25.7l16.19 27.76-19.32 26.49A44.21 44.21 0 1 0 77 127l17.29-23.7 34.25 58.7a4 4 0 0 0 3.46 2 4.11 4.11 0 0 0 2-.54 4 4 0 0 0 1.44-5.48l-33.83-58h66.74l14.11 24.19A44 44 0 1 0 208 116ZM84 160a36 36 0 1 1-18.16-31.25l-21.07 28.89a4 4 0 0 0 6.46 4.72l21.07-28.9A35.92 35.92 0 0 1 84 160Zm124 36a36 36 0 0 1-21.47-64.88l18 30.9a4 4 0 0 0 3.46 2 4.11 4.11 0 0 0 2-.54 4 4 0 0 0 1.44-5.48l-18-30.89A36 36 0 1 1 208 196Z"
}));
var _default = exports.default = Bicycle;