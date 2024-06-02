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
const DevToLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dev-to-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 58H24a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h208a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14Zm2 126a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2Zm-108-82v20h10a6 6 0 0 1 0 12h-10v20h18a6 6 0 0 1 0 12h-24a6 6 0 0 1-6-6V96a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12Zm87.78-4.38-18 64a6 6 0 0 1-11.56 0l-18-64a6 6 0 0 1 11.56-3.24L190 137.84l12.22-43.46a6 6 0 1 1 11.56 3.24ZM64 90h-8a6 6 0 0 0-6 6v64a6 6 0 0 0 6 6h8a30 30 0 0 0 30-30v-16a30 30 0 0 0-30-30Zm18 46a18 18 0 0 1-18 18h-2v-52h2a18 18 0 0 1 18 18Z"
}));
var _default = exports.default = DevToLogo;