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
const Hand = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M188 50a25.8 25.8 0 0 0-14 4.11V44a26 26 0 0 0-51.41-5.51A26 26 0 0 0 82 60v71l-7.53-12.1a26 26 0 0 0-45.11 25.87C60.76 211 78.51 238 128 238a86.1 86.1 0 0 0 86-86V76a26 26 0 0 0-26-26Zm14 102a74.09 74.09 0 0 1-74 74c-21 0-34.51-5.05-46.75-17.45C67.81 195 55.54 172 40.1 139.43l-.23-.43a14 14 0 0 1 24.25-14l.1.17 18.68 30A6 6 0 0 0 94 152V60a14 14 0 0 1 28 0v60a6 6 0 0 0 12 0V44a14 14 0 0 1 28 0v76a6 6 0 0 0 12 0V76a14 14 0 0 1 28 0Z"
}));
var _default = exports.default = Hand;