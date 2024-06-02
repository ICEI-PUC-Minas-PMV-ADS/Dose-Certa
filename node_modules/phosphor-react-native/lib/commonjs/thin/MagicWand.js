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
const MagicWand = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "magic-wand-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 152a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4ZM56 68h20v20a4 4 0 0 0 8 0V68h20a4 4 0 0 0 0-8H84V40a4 4 0 0 0-8 0v20H56a4 4 0 0 0 0 8Zm128 128h-12v-12a4 4 0 0 0-8 0v12h-12a4 4 0 0 0 0 8h12v12a4 4 0 0 0 8 0v-12h12a4 4 0 0 0 0-8Zm32.48-118.83L77.17 216.49a12 12 0 0 1-17 0L39.51 195.8a12 12 0 0 1 0-17L178.83 39.51a12 12 0 0 1 17 0l20.65 20.69a12 12 0 0 1 0 16.97ZM170.34 112 144 85.66l-98.83 98.83a4 4 0 0 0 0 5.65l20.68 20.69a4 4 0 0 0 5.66 0Zm40.49-46.14-20.69-20.69a4 4 0 0 0-5.66 0L149.65 80 176 106.34l34.83-34.83a4 4 0 0 0 0-5.65Z"
}));
var _default = exports.default = MagicWand;