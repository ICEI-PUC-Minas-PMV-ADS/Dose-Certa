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
const Basketball = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "basketball-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28ZM60 66.07A91.22 91.22 0 0 1 83.9 124H36.09A91.7 91.7 0 0 1 60 66.07ZM132 124V36.09a91.63 91.63 0 0 1 58.32 24.3A99.24 99.24 0 0 0 164.09 124Zm-8 0H91.91a99.24 99.24 0 0 0-26.23-63.61A91.63 91.63 0 0 1 124 36.09Zm-40.1 8A91.22 91.22 0 0 1 60 189.93 91.7 91.7 0 0 1 36.09 132Zm8 0H124v87.91a91.63 91.63 0 0 1-58.32-24.3A99.24 99.24 0 0 0 91.91 132Zm40.1 0h32.09a99.24 99.24 0 0 0 26.23 63.61 91.63 91.63 0 0 1-58.32 24.3Zm40.1 0h47.81A91.7 91.7 0 0 1 196 189.93 91.22 91.22 0 0 1 172.1 132Zm0-8A91.22 91.22 0 0 1 196 66.07 91.7 91.7 0 0 1 219.91 124Z"
}));
var _default = exports.default = Basketball;