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
const AngularLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "angular-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m226.31 66.46-96-40a6.06 6.06 0 0 0-4.62 0l-96 40a6 6 0 0 0-3.64 6.33l16 120a6 6 0 0 0 3.27 4.58l80 40a6 6 0 0 0 5.36 0l80-40a6 6 0 0 0 3.27-4.58l16-120a6 6 0 0 0-3.64-6.33Zm-23.84 121.6L128 225.29l-74.47-37.23-15-112.29L128 38.5l89.44 37.27Zm-79.72-103-40 72a6 6 0 0 0 10.5 5.82L104.86 142h46.28l11.61 20.91A6 6 0 0 0 168 166a5.88 5.88 0 0 0 2.9-.76 6 6 0 0 0 2.34-8.15l-40-72a6 6 0 0 0-10.5 0ZM144.47 130h-32.94L128 100.35Z"
}));
var _default = exports.default = AngularLogo;