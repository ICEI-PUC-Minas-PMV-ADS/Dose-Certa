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
  className: "selection-foreground-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M62 216a6 6 0 0 1-6 6h-8a14 14 0 0 1-14-14v-8a6 6 0 0 1 12 0v8a2 2 0 0 0 2 2h8a6 6 0 0 1 6 6Zm50-6H96a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12Zm-72-44a6 6 0 0 0 6-6v-16a6 6 0 0 0-12 0v16a6 6 0 0 0 6 6Zm128 28a6 6 0 0 0-6 6v8a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14v-8a6 6 0 0 0-6-6Zm0-84a6 6 0 0 0 6-6v-8a14 14 0 0 0-14-14h-8a6 6 0 0 0 0 12h8a2 2 0 0 1 2 2v8a6 6 0 0 0 6 6ZM56 82h-8a14 14 0 0 0-14 14v8a6 6 0 0 0 12 0v-8a2 2 0 0 1 2-2h8a6 6 0 0 0 0-12Zm152-48H96a14 14 0 0 0-14 14v40a6 6 0 0 0 6 6h24a6 6 0 0 0 0-12H94V48a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2v112a2 2 0 0 1-2 2h-34v-18a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6h40a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14Z"
}));
var _default = exports.default = SelectionForeground;