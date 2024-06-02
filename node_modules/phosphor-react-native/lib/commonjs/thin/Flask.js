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
const Flask = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flask-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M218.27 201.83 156 98V36h12a4 4 0 0 0 0-8H88a4 4 0 0 0 0 8h12v62L37.73 201.83A12 12 0 0 0 48 220h160a12 12 0 0 0 10.29-18.17ZM107.43 101.2a4.07 4.07 0 0 0 .57-2.06V36h40v63.14a4.07 4.07 0 0 0 .57 2.06l41 68.33c-12.76 3.94-32.54 4.68-59.75-9.1-18-9.14-35-13.24-50.54-12.29ZM211.46 210a3.94 3.94 0 0 1-3.48 2H48a4 4 0 0 1-3.43-6.06l29.53-49.21c15.54-2.43 33.05 1.21 52.07 10.84C144.54 176.86 160 180 172.42 180a65 65 0 0 0 21.36-3.46l17.63 29.38a3.92 3.92 0 0 1 .05 4.08Z"
}));
var _default = exports.default = Flask;