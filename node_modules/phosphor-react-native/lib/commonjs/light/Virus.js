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
const Virus = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "virus-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M134 108a26 26 0 1 0-26 26 26 26 0 0 0 26-26Zm-26 14a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm82 6a14 14 0 1 1-14-14 14 14 0 0 1 14 14Zm-48 48a14 14 0 1 1-14-14 14 14 0 0 1 14 14Zm98-54h-18.2a93.57 93.57 0 0 0-23.26-56.06l13.7-13.7a6 6 0 0 0-8.48-8.48l-13.7 13.7A93.57 93.57 0 0 0 134 34.2V16a6 6 0 0 0-12 0v18.2a93.57 93.57 0 0 0-56.06 23.26l-13.7-13.7a6 6 0 0 0-8.48 8.48l13.7 13.7A93.57 93.57 0 0 0 34.2 122H16a6 6 0 0 0 0 12h18.2a93.57 93.57 0 0 0 23.26 56.06l-13.7 13.7a6 6 0 1 0 8.48 8.48l13.7-13.7A93.57 93.57 0 0 0 122 221.8V240a6 6 0 0 0 12 0v-18.2a93.57 93.57 0 0 0 56.06-23.26l13.7 13.7a6 6 0 0 0 8.48-8.48l-13.7-13.7A93.57 93.57 0 0 0 221.8 134H240a6 6 0 0 0 0-12Zm-112 88a82 82 0 1 1 82-82 82.1 82.1 0 0 1-82 82Z"
}));
var _default = exports.default = Virus;