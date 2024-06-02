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
const Rug = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "rug-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 20a4 4 0 0 0-4 4v20h-40V24a4 4 0 0 0-8 0v20h-40V24a4 4 0 0 0-8 0v20H60V24a4 4 0 0 0-8 0v208a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0V24a4 4 0 0 0-4-4ZM60 52h136v152H60Zm68 120a4 4 0 0 0 3.43-1.94l24-40a4 4 0 0 0 0-4.12l-24-40a4 4 0 0 0-6.86 0l-24 40a4 4 0 0 0 0 4.12l24 40A4 4 0 0 0 128 172Zm0-76.23L147.33 128 128 160.23 108.67 128Z"
}));
var _default = exports.default = Rug;