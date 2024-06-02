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
const BeerBottle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "beer-bottle-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m244.24 43.76-32-32a6 6 0 0 0-8.48 8.48l3.11 3.11-57.38 43-38.67 7.74a5.92 5.92 0 0 0-3.06 1.64l-83.32 83.34a22 22 0 0 0 0 31.11l41.38 41.38a22 22 0 0 0 31.11 0l83.31-83.32a5.92 5.92 0 0 0 1.64-3.06l7.74-38.67 43-57.38 3.11 3.11a6 6 0 0 0 8.48-8.48ZM88.44 223.07a10 10 0 0 1-14.14 0L32.93 181.7a10 10 0 0 1 0-14.14l7.07-7.07L95.51 216ZM104 207.51 48.49 152 96 104.49 151.51 160Zm75.2-107.11a5.88 5.88 0 0 0-1.08 2.42L170.47 141 160 151.51 104.49 96 115 85.53l38.22-7.65a5.88 5.88 0 0 0 2.42-1.08l59.84-44.88 8.64 8.64Z"
}));
var _default = exports.default = BeerBottle;