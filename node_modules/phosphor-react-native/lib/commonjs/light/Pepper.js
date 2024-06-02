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
const Pepper = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pepper-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M165.57 42.26A38.07 38.07 0 0 0 128 10a6 6 0 0 0 0 12 26 26 0 0 1 25.38 20.35A62.08 62.08 0 0 0 98 104c0 47.75-26.23 79.68-78 94.93a14 14 0 0 0 1.56 27.24A262.5 262.5 0 0 0 66.81 230c40.36 0 85.23-9 116.19-35 25.88-21.71 39-52.33 39-91a62.06 62.06 0 0 0-56.43-61.74ZM160 54a50.09 50.09 0 0 1 47.82 35.38L192 97.28l-29.32-14.66a6 6 0 0 0-5.36 0L128 97.28l-15.81-7.91A50.07 50.07 0 0 1 160 54Zm15.28 131.82C150.15 206.89 95.36 227 23.67 214.33a1.88 1.88 0 0 1-1.67-1.89 1.81 1.81 0 0 1 1.43-2C80.06 193.73 110 156.92 110 104c0-.76 0-1.51.06-2.26l15.26 7.63a6 6 0 0 0 5.36 0L160 94.69l29.32 14.66a6 6 0 0 0 5.36 0l15.26-7.63c0 .75.06 1.5.06 2.26 0 35.02-11.68 62.51-34.72 81.83Z"
}));
var _default = exports.default = Pepper;