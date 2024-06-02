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
  className: "books-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M104 34H56a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14ZM54 78h52v100H54Zm2-32h48a2 2 0 0 1 2 2v18H54V48a2 2 0 0 1 2-2Zm48 164H56a2 2 0 0 1-2-2v-18h52v18a2 2 0 0 1-2 2Zm125.7-15L196.51 37.16a14 14 0 0 0-16.63-10.85l-46.81 10.06A14.09 14.09 0 0 0 122.3 53l33.19 157.81a14 14 0 0 0 6.1 8.9 13.85 13.85 0 0 0 7.57 2.26 13.55 13.55 0 0 0 3-.32l46.81-10.05A14.09 14.09 0 0 0 229.7 195Zm-82.81-83.32 50.73-10.9 14.12 67.16L161 178.81Zm-6.63-31.56L191 69.19 195.15 89l-50.73 10.9Zm-4.66-32 46.8-10.05a2.18 2.18 0 0 1 .42 0 1.89 1.89 0 0 1 1.05.32 2 2 0 0 1 .89 1.31l3.75 17.82-50.72 10.82-3.74-17.78a2.07 2.07 0 0 1 1.55-2.46Zm80.81 151.8L169.6 210a1.92 1.92 0 0 1-1.47-.27 2 2 0 0 1-.89-1.31l-3.75-17.82 50.72-10.9 3.79 17.73a2.07 2.07 0 0 1-1.59 2.47Z"
}));
var _default = exports.default = Books;