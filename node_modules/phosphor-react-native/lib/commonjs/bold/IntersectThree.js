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
const IntersectThree = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "intersect-three-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 93.66V92a72 72 0 0 0-144 0v1.66a72 72 0 1 0 72 124.65 72 72 0 1 0 72-124.65Zm-41.28 35.22A71.73 71.73 0 0 0 148 110.77a47.69 47.69 0 0 1 25-1.92 48.21 48.21 0 0 1-14.32 20.03ZM128 187.7a47.81 47.81 0 0 1-11.47-24.62 72 72 0 0 0 22.94 0A47.81 47.81 0 0 1 128 187.7Zm-44.94-78.85a47.69 47.69 0 0 1 25 1.92 71.73 71.73 0 0 0-10.72 18.11 48.21 48.21 0 0 1-14.28-20.03ZM128 140a47.88 47.88 0 0 1-8.94-.85A48 48 0 0 1 128 124.3a48 48 0 0 1 8.94 14.85 47.88 47.88 0 0 1-8.94.85Zm0-96a48.07 48.07 0 0 1 47.47 40.92A71.77 71.77 0 0 0 128 93.69a71.77 71.77 0 0 0-47.47-8.77A48.07 48.07 0 0 1 128 44ZM44 156a47.89 47.89 0 0 1 17.32-36.88A72.45 72.45 0 0 0 92 154.34V156a71.64 71.64 0 0 0 16 45.23A48 48 0 0 1 44 156Zm120 48a47.67 47.67 0 0 1-16-2.77A71.64 71.64 0 0 0 164 156v-1.66a72.45 72.45 0 0 0 30.72-35.22A48 48 0 0 1 164 204Z"
}));
var _default = exports.default = IntersectThree;