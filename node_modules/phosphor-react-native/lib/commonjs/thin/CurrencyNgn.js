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
const CurrencyNgn = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "currency-ngn-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 140h-20v-24h20a4 4 0 0 0 0-8h-20V46a4 4 0 0 0-8 0v62h-70.54L67.15 43.54A4 4 0 0 0 60 46v62H40a4 4 0 0 0 0 8h20v24H40a4 4 0 0 0 0 8h20v62a4 4 0 0 0 8 0v-62h70.54l50.31 64.46A4 4 0 0 0 192 214a3.9 3.9 0 0 0 1.3-.22A4 4 0 0 0 196 210v-62h20a4 4 0 0 0 0-8Zm-28-24v24h-45.56l-18.73-24ZM68 57.63 107.32 108H68ZM68 140v-24h45.56l18.73 24Zm120 58.37L148.68 148H188Z"
}));
var _default = exports.default = CurrencyNgn;