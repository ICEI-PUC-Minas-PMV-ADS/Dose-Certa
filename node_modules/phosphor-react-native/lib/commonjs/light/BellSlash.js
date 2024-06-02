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
const BellSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bell-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M52.44 36a6 6 0 0 0-8.88 8l17.75 19.56A77.45 77.45 0 0 0 50 104c0 35.74-8.42 63.2-14.08 72.94A14 14 0 0 0 48 198h42.5a38 38 0 0 0 75 0h18l20 22a6 6 0 0 0 8.88-8.08ZM128 218a26 26 0 0 1-25.29-20h50.58A26 26 0 0 1 128 218Zm-80-32a1.9 1.9 0 0 1-1.7-1 2 2 0 0 1 0-2c7.56-13 15.7-43.31 15.7-79a65.63 65.63 0 0 1 7.78-31.12L172.62 186Zm165.29-8.62a5.88 5.88 0 0 1-2.2.42 6 6 0 0 1-5.58-3.81c-7.2-18.31-11.49-44.48-11.49-70a66 66 0 0 0-98.57-57.42 6 6 0 1 1-5.93-10.43A78 78 0 0 1 206 104c0 35.7 8.16 59.24 10.66 65.61a6 6 0 0 1-3.39 7.77Z"
}));
var _default = exports.default = BellSlash;