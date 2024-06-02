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
const PushPinSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "push-pin-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M52.44 36a6 6 0 0 0-8.88 8l27.71 30.51C61.78 76 50.6 80 39.22 89.18A14 14 0 0 0 38.1 110l49.71 49.71-44.05 44a6 6 0 1 0 8.48 8.48l44.05-44.05L146 217.89a14 14 0 0 0 9.9 4.11h1a14 14 0 0 0 10.19-5.54 85.51 85.51 0 0 0 12.44-22.84l24 26.45a6 6 0 1 0 8.87-8.08Zm105.05 173.21a2 2 0 0 1-3 .2L46.58 101.51a2 2 0 0 1 .18-3c13.18-10.64 25.84-12.9 34.79-12.7l88.45 97.3c-2.17 10.63-7.89 19.96-12.51 26.1Zm76.42-106.62-44.65 44.78a6 6 0 1 1-8.5-8.47l44.65-44.79a2 2 0 0 0 0-2.84l-60.68-60.68a2 2 0 0 0-2.83 0l-41.22 41.35a6 6 0 0 1-8.5-8.47l41.23-41.36a14 14 0 0 1 19.81 0l60.69 60.69a14 14 0 0 1 0 19.79Z"
}));
var _default = exports.default = PushPinSlash;