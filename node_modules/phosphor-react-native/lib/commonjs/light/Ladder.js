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
const Ladder = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "ladder-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M213.64 214 162.38 73l9.82-27H184a6 6 0 0 0 0-12H88a6 6 0 0 0 0 12h7.43L34.36 214a6 6 0 0 0 3.64 7.64 6.15 6.15 0 0 0 2 .36 6 6 0 0 0 5.64-3.95L55.84 190h51.23l-8.71 24a6 6 0 0 0 3.59 7.69 6.15 6.15 0 0 0 2 .36 6 6 0 0 0 5.64-3.95l18.98-52.1h54.86l18.93 52.05A6 6 0 0 0 208 222a6.15 6.15 0 0 0 2.05-.36 6 6 0 0 0 3.59-7.64Zm-84.75-84H77.66l13.09-36H142Zm30.54-84-13.09 36H95.11l13.09-36ZM60.2 178l13.09-36h51.23l-13.09 36Zm72.73-24L156 90.56 179.07 154Z"
}));
var _default = exports.default = Ladder;