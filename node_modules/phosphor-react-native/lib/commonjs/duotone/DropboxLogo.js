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
const DropboxLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dropbox-logo-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m128 84-52 36-52-36 52-36Zm104 0-52-36-52 36 52 36ZM24 156l52 36 52-36-52-36Zm104 0 52 36 52-36-52-36Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236.55 149.42 194.05 120l42.5-29.42a8 8 0 0 0 0-13.16l-52-36a8 8 0 0 0-9.1 0L128 74.27 80.55 41.42a8 8 0 0 0-9.1 0l-52 36a8 8 0 0 0 0 13.16L62 120l-42.5 29.42a8 8 0 0 0 0 13.16l52 36a8 8 0 0 0 9.1 0l47.4-32.85 47.45 32.85a8 8 0 0 0 9.1 0l52-36a8 8 0 0 0 0-13.16ZM180 57.73 218 84l-38 26.27L142.05 84ZM38.05 84 76 57.73 114 84l-38 26.27Zm38 98.27-38-26.27 38-26.27L114 156Zm14-62.27 38-26.27L166 120l-38 26.27Zm90 62.27-38-26.27L180 129.73 218 156Zm-21.53 24.64a8 8 0 0 1-2 11.13l-23.89 16.54a8 8 0 0 1-9.1 0L99.56 218a8 8 0 0 1 9.1-13.16L128 218.27l19.34-13.39a8 8 0 0 1 11.13 2.03Z"
}));
var _default = exports.default = DropboxLogo;