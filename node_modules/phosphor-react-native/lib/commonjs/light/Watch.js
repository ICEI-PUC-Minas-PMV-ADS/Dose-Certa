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
const Watch = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "watch-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M206 128a77.92 77.92 0 0 0-32.53-63.31L167.1 29.5A14 14 0 0 0 153.32 18h-50.64A14 14 0 0 0 88.9 29.5l-6.37 35.19a77.87 77.87 0 0 0 0 126.62l6.37 35.19a14 14 0 0 0 13.78 11.5h50.64a14 14 0 0 0 13.78-11.5l6.37-35.19A77.92 77.92 0 0 0 206 128ZM100.71 31.64a2 2 0 0 1 2-1.64h50.64a2 2 0 0 1 2 1.64l4.56 25.19a77.68 77.68 0 0 0-63.7 0Zm54.58 192.72a2 2 0 0 1-2 1.64h-50.61a2 2 0 0 1-2-1.64l-4.56-25.19a77.68 77.68 0 0 0 63.7 0ZM128 194a66 66 0 1 1 66-66 66.08 66.08 0 0 1-66 66Zm46-66a6 6 0 0 1-6 6h-40a6 6 0 0 1-6-6V88a6 6 0 0 1 12 0v34h34a6 6 0 0 1 6 6Z"
}));
var _default = exports.default = Watch;