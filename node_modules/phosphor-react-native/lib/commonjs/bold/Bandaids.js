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
const Bandaids = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bandaids-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m190.23 128 24.88-24.89a44 44 0 1 0-62.22-62.22L128 65.77l-24.89-24.88a44 44 0 1 0-62.22 62.22L65.77 128l-24.88 24.89a44 44 0 1 0 62.22 62.22L128 190.23l24.89 24.88a44 44 0 1 0 62.22-62.22Zm-20.37-70.14a20 20 0 1 1 28.28 28.28L173.25 111 145 82.75ZM156.28 128 128 156.28 99.72 128 128 99.72ZM57.86 86.14a20 20 0 1 1 28.28-28.28L111 82.75 82.75 111Zm28.28 112a20 20 0 1 1-28.28-28.28L82.75 145 111 173.25Zm112 0a20 20 0 0 1-28.28 0L145 173.25 173.25 145l24.89 24.89a20 20 0 0 1 0 28.28Z"
}));
var _default = exports.default = Bandaids;