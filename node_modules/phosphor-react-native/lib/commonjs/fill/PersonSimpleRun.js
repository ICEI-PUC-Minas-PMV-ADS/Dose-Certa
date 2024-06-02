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
const PersonSimpleRun = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-run-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M120 56a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm103.28 74.08a8 8 0 0 0-10.6-4c-.25.12-26.71 10.72-72.18-20.19-52.29-35.54-88-7.77-89.51-6.57a8 8 0 1 0 10 12.48c.26-.21 25.12-19.5 64.07 3.27-4.25 13.35-12.76 31.82-25.25 47-18.56 22.48-41.11 32.56-67 30A8 8 0 0 0 31.2 208a92.29 92.29 0 0 0 9.34.47c27.38 0 52-12.38 71.63-36.18.57-.69 1.14-1.4 1.69-2.1C133.31 175.29 168 190.3 168 232a8 8 0 0 0 16 0c0-24.65-10.08-45.35-29.15-59.86a104.29 104.29 0 0 0-31.31-15.81A169.31 169.31 0 0 0 139 124c26.14 16.09 46.84 20 60.69 20 12.18 0 19.06-3 19.67-3.28a8 8 0 0 0 3.92-10.64Z"
}));
var _default = exports.default = PersonSimpleRun;