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
const SelectionForeground = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "selection-foreground-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M68 216a12 12 0 0 1-12 12h-8a20 20 0 0 1-20-20v-8a12 12 0 0 1 24 0v4h4a12 12 0 0 1 12 12Zm44-12H96a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24Zm-72-32a12 12 0 0 0 12-12v-16a12 12 0 0 0-24 0v16a12 12 0 0 0 12 12Zm128 16a12 12 0 0 0-12 12v4h-4a12 12 0 0 0 0 24h8a20 20 0 0 0 20-20v-8a12 12 0 0 0-12-12Zm0-72a12 12 0 0 0 12-12v-8a20 20 0 0 0-20-20h-8a12 12 0 0 0 0 24h4v4a12 12 0 0 0 12 12ZM56 76h-8a20 20 0 0 0-20 20v8a12 12 0 0 0 24 0v-4h4a12 12 0 0 0 0-24Zm152-48H100a20 20 0 0 0-20 20v40a5.47 5.47 0 0 0 0 .6A12 12 0 0 0 92 100h20a12 12 0 0 0 0-24h-8V52h100v100h-24v-8a12 12 0 0 0-24 0v20a12 12 0 0 0 12 12h40a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Z"
}));
var _default = exports.default = SelectionForeground;