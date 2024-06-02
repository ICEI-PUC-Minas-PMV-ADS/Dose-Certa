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
const Subtract = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "subtract-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172.91 83.08a78 78 0 1 0-89.83 89.83 78 78 0 1 0 89.83-89.83ZM226 160a65.31 65.31 0 0 1-.62 8.9l-53.76-53.77A77.84 77.84 0 0 0 174 96v-.51A65.8 65.8 0 0 1 226 160Zm-79.29-4.81 55.5 55.5A66 66 0 0 1 182.52 222l-54.8-54.81a77.86 77.86 0 0 0 18.99-12Zm8.48-8.48a77.86 77.86 0 0 0 12-19L222 182.52a66 66 0 0 1-11.35 19.69ZM30 96a66 66 0 1 1 66 66 66.08 66.08 0 0 1-66-66Zm65.49 78H96a77.84 77.84 0 0 0 19.13-2.38l53.77 53.76A65.87 65.87 0 0 1 95.49 174Z"
}));
var _default = exports.default = Subtract;