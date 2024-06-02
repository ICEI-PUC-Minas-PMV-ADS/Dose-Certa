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
const ArrowsIn = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "arrows-in-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M146 104V64a6 6 0 0 1 12 0v25.51l45.76-45.75a6 6 0 0 1 8.48 8.48L166.48 98H192a6 6 0 0 1 0 12h-40a6 6 0 0 1-6-6Zm-42 42H64a6 6 0 0 0 0 12h25.52l-45.76 45.76a6 6 0 1 0 8.48 8.48L98 166.48V192a6 6 0 0 0 12 0v-40a6 6 0 0 0-6-6Zm62.48 12H192a6 6 0 0 0 0-12h-40a6 6 0 0 0-6 6v40a6 6 0 0 0 12 0v-25.52l45.76 45.76a6 6 0 0 0 8.48-8.48ZM104 58a6 6 0 0 0-6 6v25.51L52.24 43.76a6 6 0 0 0-8.48 8.48L89.52 98H64a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6Z"
}));
var _default = exports.default = ArrowsIn;