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
const Ear = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "ear-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M212 104a4 4 0 0 1-8 0 76 76 0 0 0-152 0c0 28.4 9.55 37.61 18.79 46.52C79.25 158.67 88 167.11 88 188a40 40 0 0 0 40 40c11.37 0 20.83-4.76 28.92-14.55a4 4 0 0 1 6.16 5.1C153.52 230.13 141.71 236 128 236a48.05 48.05 0 0 1-48-48c0-17.49-6.84-24.09-14.76-31.72C55.28 146.68 44 135.79 44 104a84 84 0 0 1 168 0Zm-36.14 60.54a4 4 0 0 0-5.46 1.46 12 12 0 0 1-22.4-6c0-10.67 5.44-17.92 11.2-25.6 6.29-8.4 12.8-17.07 12.8-30.4a44 44 0 0 0-88 0 4 4 0 0 0 8 0 36 36 0 0 1 72 0c0 10.67-5.44 17.92-11.2 25.6-6.29 8.4-12.8 17.07-12.8 30.4a20 20 0 0 0 37.32 10 4 4 0 0 0-1.46-5.46Z"
}));
var _default = exports.default = Ear;