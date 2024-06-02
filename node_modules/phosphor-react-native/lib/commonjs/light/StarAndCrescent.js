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
  className: "star-and-crescent-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M154.73 201.06a82 82 0 0 1 0-146.12 6 6 0 0 0 0-10.69A93 93 0 0 0 112 34a94 94 0 0 0 0 188 93 93 0 0 0 42.73-10.25 6 6 0 0 0 0-10.69ZM112 210a82 82 0 1 1 26.81-159.53 94 94 0 0 0 0 155.06A81.4 81.4 0 0 1 112 210Zm138.38-87.51-27.61-11.91-2.4-31a6 6 0 0 0-10.61-3.36l-19.39 23.45-28.93-7.16a6 6 0 0 0-6.61 8.87L170.5 128l-15.67 26.62a6 6 0 0 0 6.61 8.87l28.93-7.16 19.39 23.49a6 6 0 0 0 10.61-3.36l2.4-31 27.61-11.91a6 6 0 0 0 0-11Zm-35.69 13.35a6 6 0 0 0-3.61 5l-1.53 19.83-12.33-14.94a6 6 0 0 0-4.63-2.18 5.92 5.92 0 0 0-1.44.18l-18.74 4.63L182.64 131a6 6 0 0 0 0-6.08l-10.23-17.37 18.74 4.63a6 6 0 0 0 6.07-2l12.33-14.94 1.53 19.83a6 6 0 0 0 3.61 5l18.17 7.93Z"
}));
var _default = exports.default = StarAndCrescent;