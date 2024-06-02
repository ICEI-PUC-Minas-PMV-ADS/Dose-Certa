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
const Graph = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "graph-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 152a35.77 35.77 0 0 0-16.46 4l-21.39-16.64a35.49 35.49 0 0 0 1.85-10.71l10.35-3.44A36 36 0 1 0 164 100c0 1.11.06 2.21.16 3.3l-7.78 2.59A36 36 0 0 0 128 92c-1 0-1.88 0-2.81.12l-4.45-10A36 36 0 1 0 96 92c1 0 1.88 0 2.81-.12l4.45 10a35.91 35.91 0 0 0-8.59 39.7l-21.28 18.91a36 36 0 1 0 15.94 17.93l21.28-18.91a35.91 35.91 0 0 0 36.8-1.21L167 173.56A36 36 0 1 0 200 152Zm0-64a12 12 0 1 1-12 12 12 12 0 0 1 12-12ZM84 56a12 12 0 1 1 12 12 12 12 0 0 1-12-12ZM56 204a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm60-76a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm84 72a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"
}));
var _default = exports.default = Graph;