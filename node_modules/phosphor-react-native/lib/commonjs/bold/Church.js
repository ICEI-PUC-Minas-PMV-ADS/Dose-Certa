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
const Church = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "church-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M230.17 141.71 196 121.21V104a12 12 0 0 0-6-10.42L140 65V52h12a12 12 0 0 0 0-24h-12V16a12 12 0 0 0-24 0v12h-12a12 12 0 0 0 0 24h12v13L66.05 93.58A12 12 0 0 0 60 104v17.21l-34.17 20.5A12 12 0 0 0 20 152v64a12 12 0 0 0 12 12h76a12 12 0 0 0 12-12v-44a8 8 0 0 1 16 0v44a12 12 0 0 0 12 12h76a12 12 0 0 0 12-12v-64a12 12 0 0 0-5.83-10.29ZM44 158.79l16-9.6V204H44ZM128 140a32 32 0 0 0-32 32v32H84v-93l44-25.14L172 111v93h-12v-32a32 32 0 0 0-32-32Zm84 64h-16v-54.81l16 9.6Z"
}));
var _default = exports.default = Church;