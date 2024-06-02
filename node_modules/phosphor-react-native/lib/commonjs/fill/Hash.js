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
const Hash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hash-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M116.25 112h31.5l-8 32h-31.5ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-16 56a8 8 0 0 0-8-8h-31.75l7.51-30.06a8 8 0 0 0-15.52-3.88L151.75 96h-31.5l7.51-30.06a8 8 0 0 0-15.52-3.88L103.75 96H64a8 8 0 0 0 0 16h35.75l-8 32H56a8 8 0 0 0 0 16h31.75l-7.51 30.06a8 8 0 0 0 5.82 9.7 8.13 8.13 0 0 0 2 .24 8 8 0 0 0 7.75-6.06l8.44-33.94h31.5l-7.51 30.06a8 8 0 0 0 5.82 9.7 8.13 8.13 0 0 0 1.94.24 8 8 0 0 0 7.75-6.06l8.5-33.94H192a8 8 0 0 0 0-16h-35.75l8-32H200a8 8 0 0 0 8-8Z"
}));
var _default = exports.default = Hash;