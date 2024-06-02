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
const Aperture = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "aperture-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M195.88 60.12a96 96 0 1 0 0 135.76 96 96 0 0 0 0-135.76Zm-55.34 103-36.68-6.69-12.54-35.13 24.14-28.41 36.68 6.69 12.54 35.12Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M201.54 54.46A104 104 0 0 0 54.46 201.54 104 104 0 0 0 201.54 54.46Zm-11.31 11.32a88.18 88.18 0 0 1 11 13.48L167.55 119l-27.92-78.22a87.34 87.34 0 0 1 50.6 25ZM155.59 133l-18.16 21.37-27.59-5-9.43-26.37 18.16-21.37 27.59 5ZM65.77 65.78a87.34 87.34 0 0 1 56.66-25.59l17.51 49L58.3 74.32a88 88 0 0 1 7.47-8.54Zm-19.12 95.76a88.41 88.41 0 0 1 2.53-72.62l51.21 9.35Zm19.12 28.68a88.18 88.18 0 0 1-11-13.48L88.45 137l27.92 78.18a87.34 87.34 0 0 1-50.6-24.96Zm124.46 0a87.34 87.34 0 0 1-56.66 25.59l-17.51-49 81.64 14.91a88 88 0 0 1-7.47 8.5Zm-34.62-32.49 53.74-63.27a88.41 88.41 0 0 1-2.53 72.62Z"
}));
var _default = exports.default = Aperture;