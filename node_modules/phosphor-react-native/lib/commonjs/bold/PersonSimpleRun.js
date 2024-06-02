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
  className: "person-simple-run-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 92a36 36 0 1 0-36-36 36 36 0 0 0 36 36Zm0-48a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm76 93.4a12 12 0 0 1-7 10.91 66 66 0 0 1-21.47 3.78c-14 0-34.25-3.82-59.77-19a177 177 0 0 1-10.27 21C153.12 162.83 188 183.8 188 232a12 12 0 0 1-24 0c0-18.69-6.95-33.06-21.26-43.94-9.16-7-19.55-11-27.43-13.34-.81 1-1.64 2-2.5 2.95-20 22.87-44.82 34.76-72.25 34.76a97.33 97.33 0 0 1-9.75-.49 12 12 0 1 1 2.39-23.88c52.3 5.22 77.48-45.92 85.79-67.75-34.19-17.85-55.25-1.53-55.48-1.31a12 12 0 0 1-15-18.72C50.08 99 88 69.44 142.75 106.62c43.1 29.31 68.1 19.92 68.5 19.76a12 12 0 0 1 16.75 11Z"
}));
var _default = exports.default = PersonSimpleRun;