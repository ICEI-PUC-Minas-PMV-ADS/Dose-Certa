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
const RainbowCloud = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "rainbow-cloud-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 114a46.18 46.18 0 0 0-43.35 30.59 30 30 0 0 0-4.65-.37c-16.54 0-30 13.86-30 30.89S135.46 206 152 206h48a46 46 0 0 0 0-92Zm0 80h-48c-9.93 0-18-8.47-18-18.89s8.07-18.89 18-18.89a17.12 17.12 0 0 1 6.53 1.28 6 6 0 0 0 8.16-4.35A34 34 0 1 1 200 194ZM22 160v16a6 6 0 0 1-12 0v-16a102 102 0 0 1 173.11-73.13 6 6 0 1 1-8.37 8.61A90 90 0 0 0 22 160Zm90-58a58.07 58.07 0 0 0-58 58v16a6 6 0 0 1-12 0v-16a70 70 0 0 1 111.42-56.43 6 6 0 1 1-7.11 9.66A57.5 57.5 0 0 0 112 102Zm6 32.7a26.59 26.59 0 0 0-6-.7 26 26 0 0 0-26 26v16a6 6 0 0 1-12 0v-16a38 38 0 0 1 46.81-37 6 6 0 1 1-2.81 11.7Z"
}));
var _default = exports.default = RainbowCloud;