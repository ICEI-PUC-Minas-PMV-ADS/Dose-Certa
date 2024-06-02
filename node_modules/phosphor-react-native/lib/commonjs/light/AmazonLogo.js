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
const AmazonLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "amazon-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M246 168v32a6 6 0 0 1-12 0v-17.52l-5.66 5.66C225.6 191.15 188.86 230 128 230c-62 0-98.92-40.27-100.46-42a6 6 0 1 1 8.92-8c.34.37 35.09 38 91.54 38s91.2-37.64 91.55-38l.21-.22 5.76-5.76H208a6 6 0 0 1 0-12h32a6 6 0 0 1 6 5.98Zm-84-68.44V84a38 38 0 0 0-71.86-17.27 6 6 0 1 1-10.68-5.46A50 50 0 0 1 174 84v92a6 6 0 0 1-12 0v-11.56a50 50 0 1 1 0-64.88Zm0 32.44a38 38 0 1 0-38 38 38 38 0 0 0 38-38Z"
}));
var _default = exports.default = AmazonLogo;