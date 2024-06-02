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
const Gift = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "gift-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 76h-49.19a50.54 50.54 0 0 0 12.63-8A25.53 25.53 0 0 0 188 49.44 28.62 28.62 0 0 0 158.56 20 25.53 25.53 0 0 0 140 28.56c-5.91 6.67-9.63 15.36-12 23.69-2.35-8.33-6.07-17-12-23.69A25.53 25.53 0 0 0 97.44 20 28.62 28.62 0 0 0 68 49.44 25.53 25.53 0 0 0 76.56 68a50.54 50.54 0 0 0 12.63 8H40a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h4v68a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-68h4a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12Zm-70-42.14A17.59 17.59 0 0 1 158.8 28h.61A20.62 20.62 0 0 1 180 49.2a17.6 17.6 0 0 1-5.86 12.8c-12.09 10.7-33.07 13.21-42 13.79.62-8.86 3.12-29.79 13.86-41.93ZM76 49.2A20.62 20.62 0 0 1 96.59 28h.61a17.59 17.59 0 0 1 12.8 5.86c10.71 12.09 13.21 33.07 13.79 42-8.89-.58-29.87-3.09-42-13.79A17.6 17.6 0 0 1 76 49.2ZM36 120V88a4 4 0 0 1 4-4h84v40H40a4 4 0 0 1-4-4Zm16 80v-68h72v72H56a4 4 0 0 1-4-4Zm152 0a4 4 0 0 1-4 4h-68v-72h72Zm16-80a4 4 0 0 1-4 4h-84V84h84a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = Gift;