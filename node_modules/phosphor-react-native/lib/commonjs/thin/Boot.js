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
const Boot = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "boot-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M192 116h-36V56a12 12 0 0 0-12-12H32a4 4 0 0 0-3.73 5.43c9.29 24.23 11.46 77.22-.11 117.46A3.82 3.82 0 0 0 28 168v32a12 12 0 0 0 12 12h26.11a12.08 12.08 0 0 0 5.37-1.27l12.62-6.31a4.09 4.09 0 0 1 1.79-.42h16.22a4.09 4.09 0 0 1 1.79.42l12.62 6.31a12.08 12.08 0 0 0 5.37 1.27h28.22a12.08 12.08 0 0 0 5.37-1.27l12.62-6.31a4.09 4.09 0 0 1 1.79-.42h16.22a4.09 4.09 0 0 1 1.79.42l12.62 6.31a12.08 12.08 0 0 0 5.37 1.27H232a12 12 0 0 0 12-12v-32a52.06 52.06 0 0 0-52-52ZM37.6 52H144a4 4 0 0 1 4 4v28h-36a4 4 0 0 0 0 8h36v24h-36a4 4 0 0 0 0 8h80a44.06 44.06 0 0 1 43.81 40H37.2c8.04-32.19 9.8-81.35.4-112ZM236 200a4 4 0 0 1-4 4h-26.11a4.09 4.09 0 0 1-1.79-.42l-12.62-6.31a12.08 12.08 0 0 0-5.37-1.27h-16.22a12.08 12.08 0 0 0-5.37 1.27l-12.62 6.31a4.09 4.09 0 0 1-1.79.42h-28.22a4.09 4.09 0 0 1-1.79-.42l-12.62-6.31a12.08 12.08 0 0 0-5.37-1.27H85.89a12.08 12.08 0 0 0-5.37 1.27l-12.62 6.31a4.09 4.09 0 0 1-1.79.42H40a4 4 0 0 1-4-4v-28h200Z"
}));
var _default = exports.default = Boot;