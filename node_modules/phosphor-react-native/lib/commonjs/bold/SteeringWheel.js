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
const SteeringWheel = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "steering-wheel-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M144 144a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm92-16A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108Zm-70.45 28h41.63c.79-2.21 1.49-4.47 2.09-6.76a116 116 0 0 0-162.54 0q.9 3.44 2.09 6.76h41.63a20.07 20.07 0 0 1 18.73 13l16.06 42.93c.92 0 1.83.07 2.76.07s1.82 0 2.72-.07l16.1-43A20.09 20.09 0 0 1 165.55 156ZM44.41 119.73a139.85 139.85 0 0 1 167.18 0 84 84 0 0 0-167.18 0Zm53.08 86.51L87.68 180H62.1a84.46 84.46 0 0 0 35.39 26.24ZM193.9 180h-25.58l-9.84 26.25A84.35 84.35 0 0 0 193.9 180Z"
}));
var _default = exports.default = SteeringWheel;