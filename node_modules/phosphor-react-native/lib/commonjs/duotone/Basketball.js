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
const Basketball = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "basketball-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m60 195.88.12.12ZM60 60a96.43 96.43 0 0 0 0 135.88 96.09 96.09 0 0 0 28-67.94A96.09 96.09 0 0 0 60 60Zm136 0a96.43 96.43 0 0 0 0 135.88A96.43 96.43 0 0 0 196 60Zm0 135.88.12.12-.12-.12Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM40.37 136h39.26A87.2 87.2 0 0 1 60 183.83 87.54 87.54 0 0 1 40.37 136ZM136 120V40.37a87.59 87.59 0 0 1 48.68 20.37A103.06 103.06 0 0 0 160.3 120Zm-16 0H95.7a103.06 103.06 0 0 0-24.38-59.26A87.59 87.59 0 0 1 120 40.37Zm-40.37 0H40.37A87.54 87.54 0 0 1 60 72.17 87.2 87.2 0 0 1 79.63 120Zm16.07 16H120v79.63a87.59 87.59 0 0 1-48.68-20.37A103.09 103.09 0 0 0 95.7 136Zm40.3 0h24.3a103.09 103.09 0 0 0 24.38 59.26A87.59 87.59 0 0 1 136 215.63Zm40.37 0h39.26A87.54 87.54 0 0 1 196 183.83 87.2 87.2 0 0 1 176.37 136Zm0-16A87.2 87.2 0 0 1 196 72.17 87.54 87.54 0 0 1 215.63 120Z"
}));
var _default = exports.default = Basketball;