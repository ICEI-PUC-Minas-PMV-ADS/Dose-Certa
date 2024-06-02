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
const Gavel = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "gavel-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m149.66 45.66-64 64a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 0-11.32l64-64a8 8 0 0 1 11.32 0l16 16a8 8 0 0 1 0 11.32Zm88 76.68-16-16a8 8 0 0 0-11.32 0l-64 64a8 8 0 0 0 0 11.32l16 16a8 8 0 0 0 11.32 0l64-64a8 8 0 0 0 0-11.32Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m243.32 116.69-16-16a16 16 0 0 0-20.84-1.53l-49.64-49.64a16 16 0 0 0-1.52-20.84l-16-16a16 16 0 0 0-22.63 0l-64 64a16 16 0 0 0 0 22.63l16 16a16 16 0 0 0 20.83 1.52l7.17 7.17-65.38 65.38a25 25 0 0 0 35.32 35.32L132 159.32l7.17 7.16a16 16 0 0 0 1.52 20.84l16 16a16 16 0 0 0 22.63 0l64-64a16 16 0 0 0 0-22.63ZM80 104 64 88l64-64 16 16ZM55.32 213.38a9 9 0 0 1-12.69 0 9 9 0 0 1 0-12.68L108 135.32 120.69 148ZM101 105.66 145.66 61 195 110.34 150.35 155ZM168 192l-16-16 4-4 56-56 4-4 16 16Z"
}));
var _default = exports.default = Gavel;