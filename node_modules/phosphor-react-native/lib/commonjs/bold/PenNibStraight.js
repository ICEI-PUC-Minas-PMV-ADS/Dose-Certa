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
const PenNibStraight = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pen-nib-straight-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M225.92 122.11c-.1-.19-.19-.37-.3-.56L196 68.85V32a20 20 0 0 0-20-20H80a20 20 0 0 0-20 20v36.87l-29.62 52.68a5.12 5.12 0 0 0-.3.57 19.89 19.89 0 0 0 1.83 20.71c.09.13.18.25.28.37l86.44 108.29a12 12 0 0 0 18.75 0l86.43-108.29c.1-.12.19-.24.28-.37a19.91 19.91 0 0 0 1.83-20.72ZM172 36v24H84V36Zm-44 108a10 10 0 1 1 10-10 10 10 0 0 1-10 10Zm12 65.74v-43.93a34 34 0 1 0-24 0v43.92l-63.17-79.14L79 84h98l26.19 46.59Z"
}));
var _default = exports.default = PenNibStraight;