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
const Cake = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cake-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236 112a28 28 0 0 0-28-28h-68v-2.06A36.07 36.07 0 0 0 164 48c0-31.06-29.38-46.11-30.63-46.73a12 12 0 0 0-10.74 0C121.38 1.89 92 16.94 92 48a36.07 36.07 0 0 0 24 33.94V84H48a28 28 0 0 0-28 28v23.33a44.7 44.7 0 0 0 8 25.49V200a28 28 0 0 0 28 28h144a28 28 0 0 0 28-28v-39.18a44.7 44.7 0 0 0 8-25.49ZM124 29.93a42.49 42.49 0 0 1 4-3.57 41.26 41.26 0 0 1 4 3.57c5.33 5.52 8 11.6 8 18.07a12 12 0 0 1-24 0c0-6.47 2.71-12.55 8-18.07ZM44 112a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4v23.33c0 11.1-8.72 20.37-19.43 20.66A20 20 0 0 1 172 136a12 12 0 0 0-24 0 20 20 0 0 1-40 0 12 12 0 0 0-24 0 20 20 0 0 1-20.57 20C52.72 155.7 44 146.43 44 135.33Zm156 92H56a4 4 0 0 1-4-4v-21.71A42.65 42.65 0 0 0 62.77 180a43.68 43.68 0 0 0 31.91-12.44c.46-.44.9-.9 1.33-1.35a44 44 0 0 0 64 0c.43.45.87.91 1.33 1.35A43.66 43.66 0 0 0 192 180h1.25a42.65 42.65 0 0 0 10.75-1.71V200a4 4 0 0 1-4 4Z"
}));
var _default = exports.default = Cake;