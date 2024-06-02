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
const OfficeChair = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "office-chair-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 128a4 4 0 0 1-4 4h-20.18A44.06 44.06 0 0 1 176 172h-44v32h28a28 28 0 0 1 28 28 4 4 0 0 1-8 0 20 20 0 0 0-20-20h-28v20a4 4 0 0 1-8 0v-20H96a20 20 0 0 0-20 20 4 4 0 0 1-8 0 28 28 0 0 1 28-28h28v-32H80a44.06 44.06 0 0 1-43.82-40H16a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4 36 36 0 0 0 36 36h96a36 36 0 0 0 36-36 4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm-173.06 7.86a12 12 0 0 1-2.82-9.56l13.72-96A12.06 12.06 0 0 1 93.72 20h68.56a12.06 12.06 0 0 1 11.88 10.3l13.72 96A12 12 0 0 1 176 140H80a12 12 0 0 1-9.06-4.14Zm6-5.24A3.93 3.93 0 0 0 80 132h96a3.93 3.93 0 0 0 3-1.38 4 4 0 0 0 .94-3.19l-13.72-96a4 4 0 0 0-4-3.43h-68.5a4 4 0 0 0-4 3.43l-13.72 96a4 4 0 0 0 1 3.19Z"
}));
var _default = exports.default = OfficeChair;