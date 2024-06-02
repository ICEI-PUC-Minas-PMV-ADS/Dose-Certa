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
const Equalizer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "equalizer-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M78 96a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6Zm-6 26H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12Zm0 32H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12Zm0 32H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12Zm80-64h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12Zm0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12Zm0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12Zm80-96h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12Zm-48-20h48a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12Zm48 52h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12Zm0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12Zm0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12Z"
}));
var _default = exports.default = Equalizer;