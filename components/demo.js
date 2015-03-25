var React = require('react');
var loader = require('./loader');
var Loader = loader.Loader;
var loaderTypes = loader.Types;

export class LoaderDemo extends React.Component {

  constructor() {
    this.state = {
      selectedType: 'ball-beat',
      seeAll: false,
      active: true
    };
  }

  componentDidMount() {
    React.findDOMNode(this).className = "loaded";
  }

  selectType(e) {
    this.setState({ selectedType: e.target.value });
  }

  toggleSeeAll(e) {
    this.setState({ seeAll: !this.state.seeAll })
  }

  toggleActive(e) {
    this.setState({ active: !this.state.active })
  }

  renderTypeOptions(type) {
    return <option key={type} value={type}>{type}</option>
  }

  renderLoader(type) {
    return <Loader key={type} type={type} active={this.state.active} />
  }

  render() {
    var hidden = { display: this.state.seeAll ? 'none' : '' };
    var italic = { fontStyle: 'italic' };
    var clearfix = { overflow: 'auto', marginBottom: 70 };
    var loaderStyle = { paddingTop: 50, width: this.state.seeAll ? '75%' : '40%' };
    return <main>
      <header>
        <section style={clearfix}>
          <div className="left">
            <h1>React Loaders</h1>
            <h2 style={italic}>Powered by Loaders.css</h2>
            <h2>{"Delightful and performance-focused pure css loading animations."}</h2>
          </div>
          <div className="right">
            <a className="btn right" href="https://github.com/jonjaques/react-loaders">
            View on Github
            </a>
          </div>
        </section>
        <section style={clearfix}>
          <div className="left">
            <p>
              <label>See All
              <input type="checkbox"
                onChange={this.toggleSeeAll.bind(this)} />
              </label>
            </p>
            <p style={hidden}>
              <select 
                value={this.state.selectedType} 
                onChange={this.selectType.bind(this)}>
                {Object.keys(loaderTypes).map(this.renderTypeOptions)}
              </select>
            </p>
            <p style={hidden}>
              <label>Active
              <input type="checkbox"
                defaultChecked="true"
                onChange={this.toggleActive.bind(this)} 
              />
              </label>
            </p>
          </div>
          <div className="right" style={loaderStyle}>
            <div className="loaders">
              { this.state.seeAll 
                ? Object.keys(loaderTypes).map(this.renderLoader.bind(this))
                : this.renderLoader(this.state.selectedType) }
            </div>
          </div>
        </section>
      </header>
    </main>
  }

}

export function run() {
  React.render(<LoaderDemo />, document.body);
}

export function render() {
  return React.renderToString(<LoaderDemo />);
}