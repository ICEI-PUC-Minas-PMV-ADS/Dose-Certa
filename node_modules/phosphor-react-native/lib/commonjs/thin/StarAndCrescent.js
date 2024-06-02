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
const StarAndCrescent = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "star-and-crescent-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M153.82 53.16a4 4 0 0 0 0-7.13A91.09 91.09 0 0 0 112 36a92 92 0 0 0 0 184 91.09 91.09 0 0 0 41.82-10 4 4 0 0 0 0-7.13 84 84 0 0 1 0-149.68ZM100 128a91.63 91.63 0 0 0 43.21 78 83.23 83.23 0 0 1-31.21 6 84 84 0 0 1 0-168 83.23 83.23 0 0 1 31.21 6A91.63 91.63 0 0 0 100 128Zm149.58-3.67-28.71-12.4-2.49-32.24a4 4 0 0 0-7.08-2.24l-20.19 24.46L161 94.45a4 4 0 0 0-4.41 5.91L172.82 128l-16.27 27.64a4 4 0 0 0 4.41 5.91l30.15-7.46 20.19 24.46a4 4 0 0 0 3.09 1.45 3.81 3.81 0 0 0 1.2-.19 4 4 0 0 0 2.79-3.5l2.49-32.24 28.71-12.4a4 4 0 0 0 0-7.34Zm-34.1 13.35a4 4 0 0 0-2.4 3.36l-1.92 24.77-15.49-18.76a4 4 0 0 0-3.08-1.45 4 4 0 0 0-1 .12l-23.36 5.78 12.68-21.5a4 4 0 0 0 0-4.06l-12.64-21.44 23.36 5.78a4 4 0 0 0 4-1.33l15.49-18.76 1.96 24.81a4 4 0 0 0 2.4 3.36L237.9 128Z"
}));
var _default = exports.default = StarAndCrescent;