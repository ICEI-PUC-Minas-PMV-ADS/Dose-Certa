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
const SlackLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "slack-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236 104a36 36 0 0 0-48-33.94V56a36 36 0 0 0-60-26.8A36 36 0 0 0 70.06 68H56a36 36 0 0 0-26.8 60A36 36 0 0 0 68 185.94V200a36 36 0 0 0 60 26.8 36 36 0 0 0 57.94-38.8H200a36 36 0 0 0 26.8-60 35.82 35.82 0 0 0 9.2-24Zm-36-12a12 12 0 0 1 0 24h-12v-12a12 12 0 0 1 12-12Zm-48-48a12 12 0 0 1 12 12v48a12 12 0 0 1-12 12h-12V56a12 12 0 0 1 12-12ZM92 56a12 12 0 0 1 24 0v12h-12a12 12 0 0 1-12-12ZM56 92h48a12 12 0 0 1 12 12v12H56a12 12 0 0 1 0-24Zm0 72a12 12 0 0 1 0-24h12v12a12 12 0 0 1-12 12Zm48 48a12 12 0 0 1-12-12v-48a12 12 0 0 1 12-12h12v60a12 12 0 0 1-12 12Zm60-12a12 12 0 0 1-24 0v-12h12a12 12 0 0 1 12 12Zm36-36h-48a12 12 0 0 1-12-12v-12h60a12 12 0 0 1 0 24Z"
}));
var _default = exports.default = SlackLogo;