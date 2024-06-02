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
const TextStrikethrough = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "text-strikethrough-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220 128a4 4 0 0 1-4 4h-54.84c15.45 7.24 26.84 17.8 26.84 36 0 24.26-26.92 44-60 44s-60-19.74-60-44a4 4 0 0 1 8 0c0 19.85 23.33 36 52 36s52-16.15 52-36c0-19.54-16.13-28.3-42.18-36H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4ZM76.33 100a3.85 3.85 0 0 0 1.25-.2 4 4 0 0 0 2.55-5 21.9 21.9 0 0 1-1-6.75c0-20.52 21-36 48.89-36 20.32 0 37 8.2 44.49 21.92a4 4 0 0 0 7-3.85C170.54 53.75 151.29 44 128 44c-32.43 0-56.89 18.92-56.89 44a29.76 29.76 0 0 0 1.42 9.25 4 4 0 0 0 3.8 2.75Z"
}));
var _default = exports.default = TextStrikethrough;