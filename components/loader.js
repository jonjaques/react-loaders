var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

export var Types = {
  "ball-pulse"                  : 3,
  "ball-grid-pulse"             : 9,
  "ball-clip-rotate"            : 1,
  "ball-clip-rotate-pulse"      : 2,
  "square-spin"                 : 1,
  "ball-clip-rotate-multiple"   : 2,
  "ball-pulse-rise"             : 5,
  "ball-rotate"                 : 1,
  "cube-transition"             : 2,
  "ball-zig-zag"                : 2,
  "ball-zig-zag-deflect"        : 2,
  "ball-triangle-path"          : 3,
  "ball-scale"                  : 1,
  "line-scale"                  : 5,
  "line-scale-party"            : 4,
  "ball-scale-multiple"         : 3,
  "ball-pulse-sync"             : 3,
  "ball-beat"                   : 3,
  "line-scale-pulse-out"        : 5,
  "line-scale-pulse-out-rapid"  : 5,
  "ball-scale-ripple"           : 1,
  "ball-scale-ripple-multiple"  : 3,
  "ball-spin-fade-loader"       : 8,
  "line-spin-fade-loader"       : 8,
  "triangle-skew-spin"          : 1,
  "pacman"                      : 5,
  "ball-grid-beat"              : 9,
  "semi-circle-spin"            : 1
}

function range(x) {
  let i = -1, arr = [];
  while(++i < x) { arr.push(i) }
  return arr;
}

export const Loader = React.createClass({

  mixins: [ PureRenderMixin ],

  propTypes: {
    type: React.PropTypes.string,
    active: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      type: 'ball-pulse',
      active: true
    };
  },

  statics: {
    removeType(key) {
      delete Types[key];
    },

    addType(key, nDivs) {
      Types[key] = nDivs;
    }
  },

  renderDiv(n) {
    return <div key={n} />
  },

  render() {
    var nDivs = range(Types[this.props.type || this.defaultProps.type]);
    return <div className={`loader ${this.props.active ? 'loader-active' : 'loader-hidden'}`}>
      <div className={`loader-inner ${this.props.type}`}>
        { nDivs.map(this.renderDiv) }
      </div>
    </div>
  }

});
