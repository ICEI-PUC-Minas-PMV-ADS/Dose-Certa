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
  className: "pants-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m221.89 214.26-22-176A14 14 0 0 0 186 26H70a14 14 0 0 0-13.89 12.26l-22 176A14 14 0 0 0 48 230h40.69a14 14 0 0 0 13.57-10.56L128 120l25.73 99.44A14 14 0 0 0 167.31 230H208a14 14 0 0 0 13.89-15.74Zm-26.67-116.6A34.07 34.07 0 0 1 166.54 70h25.23ZM70 38h116a2 2 0 0 1 2 1.75L190.27 58H65.73L68 39.75A2 2 0 0 1 70 38Zm-5.77 32h25.23a34.07 34.07 0 0 1-28.68 27.66Zm26.4 146.49a2 2 0 0 1-1.94 1.51H48a2 2 0 0 1-2-2.25l13.25-105.88A46.07 46.07 0 0 0 101.6 70H122v25.24Zm118.87.83a2 2 0 0 1-1.5.68h-40.69a2 2 0 0 1-1.95-1.56L134 95.24V70h20.4a46.07 46.07 0 0 0 42.35 39.87L210 215.75a2 2 0 0 1-.5 1.57Z"
}));
var _default = exports.default = Pants;