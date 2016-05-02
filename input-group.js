const yo = require("yo-yo")
const Children = require("./children")
require("./less/variables.less")
require("./less/mixins.less")
require("./less/grid.less")

const InputGroup = function(props) {
  props = props || {}

  return yo`
    <span class="${(props.bsClass && props.bsClass + " " || 'input-group ')}">
      ${Children(arguments)}
    </span>
    `
}

InputGroup.Addon = function(props, _yield) {
  props = props || {}

  return yo`
    <span class="${(props.bsClass && props.bsClass + " " || 'input-group-addon ')}">
      ${Children(arguments)}
    </span>
    `
}

InputGroup.Button = function(props, _yield) {
  props = props || {}

  return yo`
    <span class="${(props.bsClass && props.bsClass + " " || 'input-group-btn ')}">
      ${Children(arguments)}
    </span>
    `
}

module.exports = InputGroup
