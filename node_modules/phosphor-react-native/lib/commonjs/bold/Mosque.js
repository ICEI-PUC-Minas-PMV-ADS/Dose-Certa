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
const Mosque = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "mosque-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220 124a32 32 0 0 0-8.06 1c-1.29-41.54-29.35-62.32-50-77.58C150.18 38.73 140 31.21 140 24a12 12 0 0 0-24 0c0 7.21-10.18 14.73-22 23.45-20.63 15.26-48.69 36-50 77.58A32 32 0 0 0 4 156v52a12 12 0 0 0 12 12h224a12 12 0 0 0 12-12v-52a32 32 0 0 0-32-32ZM44 196H28v-40a8 8 0 0 1 16 0Zm64.31-129.26c7-5.14 14-10.36 19.69-16.27 5.68 5.91 12.74 11.13 19.69 16.27C164.8 79.4 182.4 92.44 186.9 116H69.1c4.5-23.56 22.1-36.6 39.21-49.26ZM188 196h-24v-28a12 12 0 0 0-24 0v28h-24v-28a12 12 0 0 0-24 0v28H68v-56h120Zm40 0h-16v-40a8 8 0 0 1 16 0Z"
}));
var _default = exports.default = Mosque;