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
const DribbbleLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dribbble-logo-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M93.27 36.86a4 4 0 0 1 .82-7.19 103.94 103.94 0 0 1 88.66 9.95 4 4 0 0 1 1 5.87 153.32 153.32 0 0 1-41.89 37 169.43 169.43 0 0 0-48.59-45.63ZM127.58 90a153 153 0 0 0-56-46.91 3.94 3.94 0 0 0-4 .33 104.41 104.41 0 0 0-38.34 52 4 4 0 0 0 3 5.16A152.34 152.34 0 0 0 64 104a151 151 0 0 0 63.58-14Zm103.8 26.69a103.81 103.81 0 0 0-29.19-61.49 4 4 0 0 0-6 .34 169.15 169.15 0 0 1-45.69 40.4 167.73 167.73 0 0 1 13.55 29.9A167.64 167.64 0 0 1 208 120a169.35 169.35 0 0 1 19 1.07 4 4 0 0 0 4.38-4.35Zm-62.91 24.5a167.7 167.7 0 0 1 4.45 38.47 168 168 0 0 1-4.11 36.85 4 4 0 0 0 5.69 4.49 104.25 104.25 0 0 0 56.57-79.25 4 4 0 0 0-3.49-4.49 152.44 152.44 0 0 0-59.11 4Zm-19.64-10.45a151.76 151.76 0 0 0-12.39-27.21A167 167 0 0 1 64 120a168.4 168.4 0 0 1-34.88-3.65 4 4 0 0 0-4.81 3.56q-.31 4-.32 8.09a103.72 103.72 0 0 0 33 75.91 4 4 0 0 0 6.15-.92 169 169 0 0 1 85.69-72.22Zm-73.14 82.51a4 4 0 0 0 1.52 5.48 103.88 103.88 0 0 0 68.85 11.69 3.93 3.93 0 0 0 3.06-2.65 152.6 152.6 0 0 0 7.8-48.08 151.3 151.3 0 0 0-3.74-33.46 152.94 152.94 0 0 0-77.49 67.02Z"
}));
var _default = exports.default = DribbbleLogo;