var React = require('react');
var assign = require('lodash/object/assign');

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
  "ball-grid-beat"              : 9
}

function range(x) {
  let i = -1, arr = [];
  while(++i < x) { arr.push(i) }
  return arr;
}

function Mixin(...mixins) {
  var Class = function(...args) {
    mixins.forEach((mixin) =>
      mixin.constructor && mixin.constructor.call(this, ...args)
    );
  };

  assign(Class.prototype, ...mixins);

  return Class;
};

export class Loader extends Mixin(React.Component, React.PureRenderMixin) {

  constructor() {
    this.propTypes = {
      type: React.PropTypes.string,
      active: React.PropTypes.bool
    }

    this.defaultProps = {
      type: 'ball-pulse',
      active: true
    }
  }

  static removeType(key) {
    delete Types[key];
  }

  static addType(key, nDivs) {
    Types[key] = nDivs;
  }

  renderDiv(n) {
    return <div key={n} />
  }

  render() {
    var hidden = { display: !this.props.active ? 'none' : 'block' }
    var nDivs = range(Types[this.props.type || this.defaultProps.type]);
    return <div style={hidden} className={`loader ${this.props.active ? 'loader-active' : ''}`}>
      <div className={`loader-inner ${this.props.type}`}>
        { nDivs.map(this.renderDiv) }
      </div>
    </div>
  }
}