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
const MopedFront = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "moped-front-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 42h-42.48a38 38 0 0 0-75 0H48a6 6 0 0 0 0 12h42.48a38 38 0 0 0 14.71 24.37A62.09 62.09 0 0 0 66 136v64a14 14 0 0 0 14 14h18v2a30 30 0 0 0 60 0v-2h18a14 14 0 0 0 14-14v-64a62.09 62.09 0 0 0-39.19-57.63A38 38 0 0 0 165.52 54H208a6 6 0 0 0 0-12Zm-62 174a18 18 0 0 1-36 0v-48a18 18 0 0 1 36 0Zm32-80v64a2 2 0 0 1-2 2h-18v-34a30 30 0 0 0-60 0v34H80a2 2 0 0 1-2-2v-64a50 50 0 0 1 100 0Zm-50-62a26 26 0 1 1 26-26 26 26 0 0 1-26 26Z"
}));
var _default = exports.default = MopedFront;