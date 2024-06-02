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
const PawPrint = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "paw-print-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M212 82a26 26 0 1 0 26 26 26 26 0 0 0-26-26Zm0 40a14 14 0 1 1 14-14 14 14 0 0 1-14 14ZM70 108a26 26 0 1 0-26 26 26 26 0 0 0 26-26Zm-26 14a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm48-36a26 26 0 1 0-26-26 26 26 0 0 0 26 26Zm0-40a14 14 0 1 1-14 14 14 14 0 0 1 14-14Zm72 40a26 26 0 1 0-26-26 26 26 0 0 0 26 26Zm0-40a14 14 0 1 1-14 14 14 14 0 0 1 14-14Zm22.15 104.61a37.32 37.32 0 0 1-17.82-22.33 42 42 0 0 0-80.66 0 37.26 37.26 0 0 1-17.77 22.3A38 38 0 0 0 88 222a37.58 37.58 0 0 0 14.76-3 66.14 66.14 0 0 1 50.41 0 37.66 37.66 0 0 0 14.83 3 38 38 0 0 0 18.15-71.39ZM168 210a25.93 25.93 0 0 1-10.21-2.08 78.15 78.15 0 0 0-59.65 0 26 26 0 0 1-22.46-46.82 49.28 49.28 0 0 0 23.51-29.48 30 30 0 0 1 57.62 0 49.27 49.27 0 0 0 23.57 29.5A26 26 0 0 1 168 210Z"
}));
var _default = exports.default = PawPrint;