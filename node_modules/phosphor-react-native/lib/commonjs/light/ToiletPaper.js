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
const ToiletPaper = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "toilet-paper-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M74 120a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm164 0v88a14 14 0 0 1-14 14H112a14 14 0 0 1-14-14v-29.52C89.65 195.49 77.6 206 64 206c-25.79 0-46-37.78-46-86s20.21-86 46-86h128c25.79 0 46 37.78 46 86Zm-140 0c0-44.26-17.58-74-34-74s-34 29.74-34 74 17.58 74 34 74 34-29.73 34-74Zm128 88v-82h-18a6 6 0 0 1 0-12h17.88c-1.51-40.92-18.21-68-33.88-68H87.76c12.57 13.92 21.09 38.74 22.12 68H128a6 6 0 0 1 0 12h-18v82a2 2 0 0 0 2 2h112a2 2 0 0 0 2-2Zm-50-94h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12Z"
}));
var _default = exports.default = ToiletPaper;