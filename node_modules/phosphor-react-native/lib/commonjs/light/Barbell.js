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
const Barbell = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "barbell-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 122h-10V88a14 14 0 0 0-14-14h-18V64a14 14 0 0 0-14-14h-24a14 14 0 0 0-14 14v58h-52V64a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v10H32a14 14 0 0 0-14 14v34H8a6 6 0 0 0 0 12h10v34a14 14 0 0 0 14 14h18v10a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-58h52v58a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-10h18a14 14 0 0 0 14-14v-34h10a6 6 0 0 0 0-12ZM32 170a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h18v84Zm58 22a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2Zm104 0a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2Zm32-24a2 2 0 0 1-2 2h-18V86h18a2 2 0 0 1 2 2Z"
}));
var _default = exports.default = Barbell;