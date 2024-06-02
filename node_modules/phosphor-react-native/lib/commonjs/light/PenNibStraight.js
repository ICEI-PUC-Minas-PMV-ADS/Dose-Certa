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
const PenNibStraight = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pen-nib-straight-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220.54 124.77a1.91 1.91 0 0 0-.15-.28L190 70.42V32a14 14 0 0 0-14-14H80a14 14 0 0 0-14 14v38.44l-30.4 54.05a1.91 1.91 0 0 0-.15.28 14 14 0 0 0 1.27 14.5.76.76 0 0 1 .08.11l86.44 112.28a6 6 0 0 0 9.51 0l86.43-112.28a.76.76 0 0 1 .08-.11 14 14 0 0 0 1.28-14.5ZM80 30h96a2 2 0 0 1 2 2v34H78V32a2 2 0 0 1 2-2Zm48 116a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm81.63-13.88L134 230.38v-73.09a26 26 0 1 0-12 0v73.07l-75.63-98.24a2 2 0 0 1-.2-1.93L75.52 78h105l29.34 52.19a2 2 0 0 1-.23 1.93Z"
}));
var _default = exports.default = PenNibStraight;