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
  className: "selection-foreground-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M60 216a4 4 0 0 1-4 4h-8a12 12 0 0 1-12-12v-8a4 4 0 0 1 8 0v8a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4Zm52-4H96a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8Zm-72-48a4 4 0 0 0 4-4v-16a4 4 0 0 0-8 0v16a4 4 0 0 0 4 4Zm128 32a4 4 0 0 0-4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12v-8a4 4 0 0 0-4-4Zm0-88a4 4 0 0 0 4-4v-8a12 12 0 0 0-12-12h-8a4 4 0 0 0 0 8h8a4 4 0 0 1 4 4v8a4 4 0 0 0 4 4ZM56 84h-8a12 12 0 0 0-12 12v8a4 4 0 0 0 8 0v-8a4 4 0 0 1 4-4h8a4 4 0 0 0 0-8Zm152-48H96a12 12 0 0 0-12 12v40a4 4 0 0 0 4 4h24a4 4 0 0 0 0-8H92V48a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4v112a4 4 0 0 1-4 4h-36v-20a4 4 0 0 0-8 0v24a4 4 0 0 0 3.51 3.95 2.17 2.17 0 0 0 .49.05h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Z"
}));
var _default = exports.default = SelectionForeground;