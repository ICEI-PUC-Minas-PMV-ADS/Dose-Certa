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
const Barbell = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "barbell__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 120h-8V88a16 16 0 0 0-16-16h-16v-8a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v56h-48V64a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v8H32a16 16 0 0 0-16 16v32H8a8 8 0 0 0 0 16h8v32a16 16 0 0 0 16 16h16v8a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-56h48v56a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-8h16a16 16 0 0 0 16-16v-32h8a8 8 0 0 0 0-16ZM32 168V88h16v80Zm56 24H64V64h24v128Zm104 0h-24V64h24v128Zm32-24h-16V88h16Z"
}));
var _default = exports.default = Barbell;