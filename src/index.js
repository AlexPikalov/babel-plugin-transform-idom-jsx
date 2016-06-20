/* eslint max-len: 0 */
import vf from 'babel-helper-builder-idom-jsx';
export default function ({ types: t }) {
  let JSX_ANNOTATION_REGEX = /\*?\s*@jsx\s+([^\s]+)/;

  let visitor = vf({
    pre(state) {
      let tagName = state.tagName;
      let args    = state.args;
      if (t.react.isCompatTag(tagName)) {
        args.push(t.stringLiteral(tagName));
      } else {
        args.push(state.tagExpr);
      }
    },

    post(state, pass) {
      state.callee = pass.get("jsxIdentifier")();
    }
  });

  visitor.Program = function (path, state) {

    state.set(
      "jsxIdentifier",
      () => id.split(".").map((name) => t.identifier(name)).reduce(
        (object, property) => t.memberExpression(object, property)
      )
    );
  };

  return {
    inherits: require("babel-plugin-syntax-jsx"),
    visitor
  };
}
