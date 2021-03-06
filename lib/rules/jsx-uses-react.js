/**
 * @fileoverview Prevent React to be marked as unused
 * @author Glen Mailer
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

var JSX_ANNOTATION_REGEX = /^\*\s*@jsx\s+([^\s]+)/;

module.exports = function(context) {

  var id = 'React';

  // --------------------------------------------------------------------------
  // Public
  // --------------------------------------------------------------------------

  return {

    JSXOpeningElement: function() {
      context.markVariableAsUsed(id);
    },

    BlockComment: function(node) {
      var matches = JSX_ANNOTATION_REGEX.exec(node.value);
      if (!matches) {
        return;
      }
      id = matches[1].split('.')[0];
    }

  };

};
