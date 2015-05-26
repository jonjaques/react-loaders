var React = require('react');
var Loader = require('../dist/react-loaders').Loader

var Demo = React.createClass({
  
  displayName: 'BrowserifyDemo',

  render: function() {
    return React.createElement(
      "div", {},
      React.createElement(Loader)
    );
  }

});

React.render(React.createElement(Demo), document.body)
