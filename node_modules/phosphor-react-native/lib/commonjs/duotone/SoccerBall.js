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
const SoccerBall = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "soccer-ball-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m65.17 108.08-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.61 95.61 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16-11.94 40.3 33 25.34c.1-1.8.15-3.6.15-5.42a95.61 95.61 0 0 0-21.21-60.22Zm-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160 168 115.5 128 88l-40 27.5 15.28 44.5Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm76.52 147.42H170.9l-9.26-12.76 12.63-36.78 15-4.89 26.24 20.13a87.38 87.38 0 0 1-10.99 34.3Zm-164-34.3L66.71 117l15 4.89 12.63 36.78-9.24 12.75H51.48a87.38 87.38 0 0 1-11.01-34.3Zm10-50.64 5.51 18.6-15.32 11.69a87.33 87.33 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92 5.51-18.6a87.33 87.33 0 0 1 9.72 30.29Zm-6.2-35.38-9.51 32.08-15.07 4.89L136 83.79V68.21l29.09-20a88.58 88.58 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.24 88.24 0 0 1 36.14 0Zm-55.16 6.34 29.09 20v15.58l-33.28 22.88-15.07-4.89-9.51-32.08a88.58 88.58 0 0 1 28.77-21.49ZM63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27ZM110 214.13l-11.88-33.42 9.23-12.71h41.3l9.23 12.71-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44 7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"
}));
var _default = exports.default = SoccerBall;