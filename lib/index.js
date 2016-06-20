"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var t = _ref.types;

  var JSX_ANNOTATION_REGEX = /\*?\s*@jsx\s+([^\s]+)/;

  var visitor = (0, _babelHelperBuilderIdomJsx2.default)({
    pre: function pre(state) {
      var tagName = state.tagName;
      var args = state.args;
      if (t.react.isCompatTag(tagName)) {
        args.push(t.stringLiteral(tagName));
      } else {
        args.push(state.tagExpr);
      }
    },
    post: function post(state, pass) {
      state.callee = pass.get("jsxIdentifier")();
    }
  });

  visitor.Program = function (path, state) {

    state.set("jsxIdentifier", function () {
      return id.split(".").map(function (name) {
        return t.identifier(name);
      }).reduce(function (object, property) {
        return t.memberExpression(object, property);
      });
    });
  };

  return {
    inherits: require("babel-plugin-syntax-jsx"),
    visitor: visitor
  };
};

var _babelHelperBuilderIdomJsx = require("babel-helper-builder-idom-jsx");

var _babelHelperBuilderIdomJsx2 = _interopRequireDefault(_babelHelperBuilderIdomJsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }