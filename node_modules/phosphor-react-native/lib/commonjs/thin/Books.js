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
const Books = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "books-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M104 36H56a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12ZM52 76h56v104H52Zm4-32h48a4 4 0 0 1 4 4v20H52V48a4 4 0 0 1 4-4Zm48 168H56a4 4 0 0 1-4-4v-20h56v20a4 4 0 0 1-4 4Zm123.74-16.62L194.55 37.57a12 12 0 0 0-14.25-9.3l-46.81 10.05a12.1 12.1 0 0 0-9.23 14.3l33.19 157.81a12 12 0 0 0 14.25 9.3l46.81-10.06a12.08 12.08 0 0 0 9.23-14.29Zm-83.21-85.27 54.63-11.73 15 71.07-54.63 11.74Zm-6.64-31.56 54.64-11.74 5 23.74-54.64 11.73Zm-2.71-32.4L182 36.09a4 4 0 0 1 .84-.09 3.94 3.94 0 0 1 2.14.64 4 4 0 0 1 1.76 2.58L190.88 59l-54.64 11.72L132.09 51a4.07 4.07 0 0 1 3.09-4.85Zm81.65 155.7L170 211.91a4 4 0 0 1-3-.55 4 4 0 0 1-1.76-2.58L161.12 189l54.64-11.73 4.15 19.73a4.07 4.07 0 0 1-3.08 4.85Z"
}));
var _default = exports.default = Books;