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
  className: "watch-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 128a79.85 79.85 0 0 0-27.95-60.68L173 28.43A20 20 0 0 0 153.32 12h-50.64A20 20 0 0 0 83 28.43l-7 38.89a79.84 79.84 0 0 0 0 121.36l7 38.89A20 20 0 0 0 102.68 244h50.64A20 20 0 0 0 173 227.57l7.05-38.89A79.85 79.85 0 0 0 208 128ZM106 36h44l2.9 16a79.76 79.76 0 0 0-49.76 0Zm44 184h-44l-2.9-16a79.76 79.76 0 0 0 49.76 0Zm-22-36a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56Zm40-56a12 12 0 0 1-12 12h-28a12 12 0 0 1-12-12v-28a12 12 0 0 1 24 0v16h16a12 12 0 0 1 12 12Z"
}));
var _default = exports.default = Watch;