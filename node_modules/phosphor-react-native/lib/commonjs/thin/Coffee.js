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
const Coffee = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "coffee-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M84 56V24a4 4 0 0 1 8 0v32a4 4 0 0 1-8 0Zm36 4a4 4 0 0 0 4-4V24a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4Zm32 0a4 4 0 0 0 4-4V24a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4Zm92 60v8a36 36 0 0 1-36 36h-.41a92.53 92.53 0 0 1-35.76 48H208a4 4 0 0 1 0 8H32a4 4 0 0 1 0-8h36.17A92.34 92.34 0 0 1 28 136V88a4 4 0 0 1 4-4h176a36 36 0 0 1 36 36Zm-40 16V92H36v44a84.28 84.28 0 0 0 48.21 76h71.58A84.28 84.28 0 0 0 204 136Zm32-16a28 28 0 0 0-24-27.71V136a91.75 91.75 0 0 1-2.2 19.94A28 28 0 0 0 236 128Z"
}));
var _default = exports.default = Coffee;