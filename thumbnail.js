const yo = require("yo-yo")
const Children = require("./children")
require("./less/variables.less")
require("./less/mixins.less")
require("./less/thumbnails.less")

const Thumbnail = function(props) {
  props = props || {}

  var src = (props.src && props.src + " " || ' '),
      alt = (props.alt && props.alt + " " || ' '),
      className = (props.bsClass && props.bsClass + " " || 'thumbnail '),
      href = (props.href && props.href + " " || ' ');

  return props.href && yo `
    <a src="${src}" class="${className}" role="button">
      <img src="${src}" alt="${alt}" />
    </a>
    ` || yo `
    <div src="${src}" class="${className}" alt="${alt}">
      <img src="${src}" alt="${alt}" />
      <div class="caption">
        ${Children(arguments)}
      </div>
    </div>
    `
}

module.exports = Thumbnail
