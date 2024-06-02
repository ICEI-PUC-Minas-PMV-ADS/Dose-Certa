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
  className: "person-simple-run-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 86a30 30 0 1 0-30-30 30 30 0 0 0 30 30Zm0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm66.49 100.86c-.59.27-7.17 3.13-18.88 3.13-13.86 0-34.9-4-61.73-21a165.89 165.89 0 0 1-17.43 36.51c9.43 2.78 22 7.72 33.19 16.26C172.46 188.05 182 207.65 182 232a6 6 0 0 1-12 0c0-44-37.23-59.18-56.91-64.11q-1.2 1.55-2.46 3.09c-19.25 23.31-43.34 35.45-70.11 35.45a90.72 90.72 0 0 1-9.12-.43 6 6 0 0 1 1.2-12c26.63 2.66 49.77-7.66 68.77-30.69 13.16-15.94 21.94-35.51 26.08-49.15-40.51-24.52-66.59-4.78-67.72-3.89a6 6 0 0 1-7.48-9.38c.37-.3 9.39-7.43 24.76-10 13.86-2.31 35.92-1.3 62.36 16.67 47.14 32 73.88 20.47 74.14 20.35a6 6 0 1 1 5 10.92Z"
}));
var _default = exports.default = PersonSimpleRun;