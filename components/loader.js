import { default as React, PureRenderMixin } from 'react/addons'

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
    size: React.PropTypes.string,
    active: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      type: 'ball-pulse',
      size: 'md',
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

  getLoaderClasses() {
    var classes = 'loader '+ this.props.className;    
    if (this.props.size !== 'md') {
      classes += ' loader-' + this.props.size
    }
    if (this.props.active) {
      classes += ' loader-active'
    } else {
      classes += ' loader-hidden'
    }
        
    return classes;
  },

  renderDiv(n) {
    return <div key={n} />
  },

  render() {
    var nDivs = range(Types[this.props.type]);
    return <div className={this.getLoaderClasses()}>
      <div className={`loader-inner ${this.props.type}`}>
        { nDivs.map(this.renderDiv) }
      </div>
    </div>
  }

});
