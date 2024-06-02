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
const TextAa = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "text-aa-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M83.62 54.3a4 4 0 0 0-7.24 0l-64 136a4 4 0 0 0 7.24 3.4L37.36 156h85.28l17.74 37.7a4 4 0 1 0 7.24-3.4ZM41.13 148 80 65.39 118.87 148ZM200 100c-11.67 0-20.69 3.08-26.82 9.16a4 4 0 1 0 5.64 5.68c4.57-4.54 11.7-6.84 21.18-6.84 15.44 0 28 10.77 28 24v11.92A37.78 37.78 0 0 0 200 132c-19.85 0-36 14.35-36 32s16.15 32 36 32a37.78 37.78 0 0 0 28-11.92V192a4 4 0 0 0 8 0v-60c0-17.64-16.15-32-36-32Zm0 88c-15.44 0-28-10.77-28-24s12.56-24 28-24 28 10.77 28 24-12.56 24-28 24Z"
}));
var _default = exports.default = TextAa;