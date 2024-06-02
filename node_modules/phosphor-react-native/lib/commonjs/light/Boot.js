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
  className: "boot-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M192 114h-34V56a14 14 0 0 0-14-14H32a6 6 0 0 0-5.6 8.15c9 23.44 11.13 76.92-.17 116.19A6.21 6.21 0 0 0 26 168v32a14 14 0 0 0 14 14h26.11a14 14 0 0 0 6.26-1.48L85 206.21a2 2 0 0 1 .9-.21h16.22a2 2 0 0 1 .9.21l12.62 6.31a14 14 0 0 0 6.26 1.48h28.22a14 14 0 0 0 6.26-1.48l12.62-6.31a2 2 0 0 1 .9-.21h16.22a2 2 0 0 1 .9.21l12.62 6.31a14 14 0 0 0 6.26 1.48H232a14 14 0 0 0 14-14v-32a54.06 54.06 0 0 0-54-54ZM40.27 54H144a2 2 0 0 1 2 2v26h-34a6 6 0 0 0 0 12h34v20h-34a6 6 0 0 0 0 12h80a42.05 42.05 0 0 1 41.56 36H39.75c7.36-31.56 8.96-77.69.52-108ZM234 200a2 2 0 0 1-2 2h-26.11a2 2 0 0 1-.9-.21l-12.62-6.31a14 14 0 0 0-6.26-1.48h-16.22a14 14 0 0 0-6.26 1.48L151 201.79a2 2 0 0 1-.9.21h-28.21a2 2 0 0 1-.9-.21l-12.62-6.31a14 14 0 0 0-6.26-1.48H85.89a14 14 0 0 0-6.26 1.48L67 201.79a2 2 0 0 1-.9.21H40a2 2 0 0 1-2-2v-26h196Z"
}));
var _default = exports.default = Boot;