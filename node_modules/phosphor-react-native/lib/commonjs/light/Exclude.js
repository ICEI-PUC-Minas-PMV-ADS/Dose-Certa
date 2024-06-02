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
const Exclude = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "exclude-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172.91 83.09a78 78 0 1 0-89.82 89.82 78 78 0 1 0 89.82-89.82ZM226 160a65.31 65.31 0 0 1-.62 8.9l-53.76-53.77A77.84 77.84 0 0 0 174 96v-.49A66.1 66.1 0 0 1 226 160ZM45.31 53.79l55.5 55.5a77.86 77.86 0 0 0-12 19L34 73.48a66 66 0 0 1 11.31-19.69ZM73.48 34l54.8 54.81a77.86 77.86 0 0 0-19 12l-55.5-55.5A66 66 0 0 1 73.48 34ZM94 160a66.08 66.08 0 0 1 66-66h1.95c0 .65.05 1.3.05 2a66.08 66.08 0 0 1-66 66c-.65 0-1.3 0-2-.05V160Zm52.71-4.81 55.5 55.5A66 66 0 0 1 182.52 222l-54.8-54.81a77.86 77.86 0 0 0 18.99-12Zm8.48-8.48a77.86 77.86 0 0 0 12-19L222 182.52a66 66 0 0 1-11.35 19.69Zm5.3-64.7H160a77.84 77.84 0 0 0-19.13 2.38L87.1 30.62A65.31 65.31 0 0 1 96 30a66.1 66.1 0 0 1 64.49 52ZM30 96a65.31 65.31 0 0 1 .62-8.9l53.76 53.77A77.84 77.84 0 0 0 82 160v.49A66.1 66.1 0 0 1 30 96Zm65.51 78H96a77.84 77.84 0 0 0 19.13-2.38l53.77 53.76a65.31 65.31 0 0 1-8.9.62 66.1 66.1 0 0 1-64.49-52Z"
}));
var _default = exports.default = Exclude;