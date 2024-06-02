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
const TShirt = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "t-shirt-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m246.64 63-51.77-28.26A5.93 5.93 0 0 0 192 34h-32a6 6 0 0 0-6 6 26 26 0 0 1-52 0 6 6 0 0 0-6-6H64a5.93 5.93 0 0 0-2.88.74L9.36 63a13.77 13.77 0 0 0-5.78 18.55l19.28 36.81A14.38 14.38 0 0 0 35.67 126H58v82a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-82h22.34a14.38 14.38 0 0 0 12.81-7.64l19.28-36.81A13.77 13.77 0 0 0 246.64 63Zm-211 51a2.42 2.42 0 0 1-2.18-1.21L14.21 76a1.82 1.82 0 0 1 .9-2.47L58 50.11V114ZM186 208a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2V46h20.48a38 38 0 0 0 75 0H186Zm55.8-132-19.28 36.8a2.42 2.42 0 0 1-2.18 1.21H198v-63.9l42.9 23.4a1.83 1.83 0 0 1 .89 2.49Z"
}));
var _default = exports.default = TShirt;