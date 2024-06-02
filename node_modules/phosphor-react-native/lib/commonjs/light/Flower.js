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
const Flower = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flower-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M209.35 131.09a42.24 42.24 0 0 0-6.82-3.09 42.24 42.24 0 0 0 6.82-3.09 38 38 0 1 0-38-65.82 43.33 43.33 0 0 0-6.08 4.36A42.94 42.94 0 0 0 166 56a38 38 0 0 0-76 0 42.94 42.94 0 0 0 .73 7.45 43.33 43.33 0 0 0-6.08-4.36 38 38 0 0 0-38 65.82 42.24 42.24 0 0 0 6.82 3.09 42.24 42.24 0 0 0-6.82 3.09 38 38 0 0 0 9.16 69.62 38.53 38.53 0 0 0 9.9 1.31 37.82 37.82 0 0 0 18.94-5.11 43.33 43.33 0 0 0 6.08-4.36A42.94 42.94 0 0 0 90 200a38 38 0 0 0 76 0 42.94 42.94 0 0 0-.73-7.45 43.33 43.33 0 0 0 6.08 4.36 37.82 37.82 0 0 0 18.94 5.09 38.53 38.53 0 0 0 9.9-1.31 38 38 0 0 0 9.16-69.62Zm-32-61.61a26 26 0 1 1 26 45c-4.77 2.75-14.92 6.15-36.4 7.47l-1.44-.08A38 38 0 0 0 152 98.58l.66-1.31c11.9-17.94 19.92-25.03 24.69-27.79ZM128 154a26 26 0 1 1 26-26 26 26 0 0 1-26 26Zm0-124a26 26 0 0 1 26 26c0 5.51-2.13 16-11.73 35.27-.26.4-.53.8-.79 1.21a37.88 37.88 0 0 0-27 0l-.79-1.22C104.13 72 102 61.51 102 56a26 26 0 0 1 26-26Zm-75.35 84.52a26 26 0 0 1 26-45c4.77 2.76 12.79 9.85 24.67 27.79l.66 1.31a38 38 0 0 0-13.49 23.33l-1.44.08c-21.48-1.36-31.63-4.76-36.4-7.51Zm26 72a26 26 0 0 1-26-45c4.77-2.75 14.92-6.15 36.4-7.47l1.44.08A38 38 0 0 0 104 157.42l-.66 1.31c-11.9 17.94-19.92 25.03-24.69 27.79ZM128 226a26 26 0 0 1-26-26c0-5.51 2.13-16 11.73-35.27.26-.4.53-.8.79-1.21a37.88 37.88 0 0 0 27 0l.79 1.22C151.87 184 154 194.49 154 200a26 26 0 0 1-26 26Zm84.87-49a26 26 0 0 1-35.52 9.52c-4.77-2.76-12.79-9.85-24.67-27.79l-.66-1.31a38 38 0 0 0 13.49-23.33L167 134c21.48 1.32 31.63 4.72 36.4 7.47a26 26 0 0 1 9.47 35.53Z"
}));
var _default = exports.default = Flower;