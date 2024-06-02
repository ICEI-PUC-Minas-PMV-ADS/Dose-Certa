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
const HandEye = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-eye-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M138 168a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm76-52v36a86 86 0 0 1-172 0V76a26 26 0 0 1 40-21.89V44a26 26 0 0 1 51.41-5.51A26 26 0 0 1 174 60v34.11A26 26 0 0 1 214 116Zm-12 0a14 14 0 0 0-28 0v4a6 6 0 0 1-12 0V60a14 14 0 0 0-28 0v44a6 6 0 0 1-12 0V44a14 14 0 0 0-28 0v68a6 6 0 0 1-12 0V76a14 14 0 0 0-28 0v76a74 74 0 0 0 148 0Zm-20.63 49.32a6 6 0 0 1 0 5.36C180.65 172.12 163.3 206 128 206s-52.65-33.88-53.37-35.32a6 6 0 0 1 0-5.36C75.35 163.88 92.7 130 128 130s52.65 33.88 53.37 35.32ZM169.08 168c-4.46-7.12-18.41-26-41.08-26s-36.65 18.85-41.08 26c4.46 7.13 18.41 26 41.08 26s36.65-18.85 41.08-26Z"
}));
var _default = exports.default = HandEye;