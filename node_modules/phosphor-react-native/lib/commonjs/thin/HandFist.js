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
const HandFist = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-fist-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 84h-20V64a28 28 0 0 0-52-14.41A28 28 0 0 0 76 64v4.43A28 28 0 0 0 28 88v40a100 100 0 0 0 200 0v-16a28 28 0 0 0-28-28Zm-48-40a20 20 0 0 1 20 20v20h-36a11.8 11.8 0 0 0-4 .7V64a20 20 0 0 1 20-20ZM84 64a20 20 0 0 1 40 0v40a20 20 0 0 1-40 0ZM36 88a20 20 0 0 1 40 0v16a20 20 0 0 1-40 0Zm184 40a92 92 0 0 1-184 0v-4.42a28 28 0 0 0 44-5.17 28 28 0 0 0 45.73 3.23 28.11 28.11 0 0 0 18.59 17.29A44 44 0 0 0 124 176a4 4 0 0 0 8 0 36 36 0 0 1 36-36 4 4 0 0 0 0-8h-16a20 20 0 0 1-20-20V96a4 4 0 0 1 4-4h64a20 20 0 0 1 20 20Z"
}));
var _default = exports.default = HandFist;