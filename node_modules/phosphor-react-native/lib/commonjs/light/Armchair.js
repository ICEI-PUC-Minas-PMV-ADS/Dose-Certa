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
const Armchair = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "armchair-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M214 90.48V72a38 38 0 0 0-38-38H80a38 38 0 0 0-38 38v18.48a38 38 0 0 0 0 75.05V200a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-34.47a38 38 0 0 0 0-75ZM80 46h96a26 26 0 0 1 26 26v18.48A38.05 38.05 0 0 0 170 128v2H86v-2a38.05 38.05 0 0 0-32-37.52V72a26 26 0 0 1 26-26Zm128.35 108H208a6 6 0 0 0-6 6v40a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-40a6 6 0 0 0-6-6h-.35A26 26 0 1 1 74 128v40a6 6 0 0 0 12 0v-26h84v26a6 6 0 0 0 12 0v-40a26 26 0 1 1 26.35 26Z"
}));
var _default = exports.default = Armchair;