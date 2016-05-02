const yo = require("yo-yo")
const Children = require("./children")
require("./less/variables.less")
require("./less/mixins.less")
require("./less/buttons.less")

const Button = function(props) {
  props = props || {}

  var elClass = (props.bsClass && props.bsClass + " " || 'btn ')
      + (props.active && 'active' + " " || '')
      + (props.bsSize && 'btn-' + props.bsSize + " " || '')
      + (props.bsStyle && 'btn-' + props.bsStyle + " " || 'btn-default ')
  var onClick = props.onClick && props.onClick || ""
  var elType = props.type && props.type || "button"
  var disabled = props.disabled && " 1 " || 'false'
  var target = props.target && props.target || ''

  return props.href
    && yo`<a href="${props.href}" target="${target}" class="${elClass}" disabled="${disabled}">${Children(arguments)}</a>`
    || yo`<button type=${elType} onclick=${onClick} class="${elClass}" disabled="${disabled}">${Children(arguments)}</button>`
}

module.exports = Button
