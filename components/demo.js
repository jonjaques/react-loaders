import React, { Component } from 'react'
import ReactDOM, { render as Render } from 'react-dom'
import { renderToString }   from 'react-dom/server'
import { Grid, Col, Row }   from 'react-bootstrap'
import Loader, { Types }    from './loader'

const SizeLabels = {
  'sm': 'Small',
  'md': 'Medium',
  'lg': 'Large'
}

export class LoaderDemo extends Component {

  state = {
    selectedType: 'pacman',
    selectedSize: 'md',
    seeAll: false,
    active: true
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).className = "container loaded";
  }

  selectType(e) {
    this.setState({ selectedType: e.target.value });
  }

  selectSize(e) {
    this.setState({ selectedSize: e.target.value });
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

  renderSizeOptions(size) {
    return <option key={size} value={size}>{SizeLabels[size]}</option>
  }

  renderSizeSelector() {
    return <div className="form-group">
      <label>
        Size
      </label>
      <select
        className="form-control"
        value={this.state.selectedSize}
        onChange={this.selectSize}>
        {Object.keys(SizeLabels).map(this.renderSizeOptions)}
      </select>
    </div>
  }

  renderLoader(type) {
    return <div className="loader-container">
      <Loader key={type} type={type} active={this.state.active} size={this.state.selectedSize} />
      <p>{type}</p>
    </div>
  }

  renderFakeLoader() {
    let text = `let loader = <Loader type="${this.state.selectedType}"`
    if (!this.state.active) {
      text += ` active="${this.state.active}"`
    }
    if (this.state.selectedSize !== 'md') {
      text += ` size="${this.state.selectedSize}"`
    }
    text += ' />'
    return text;
  }

  renderFakeSass() {
    return `$primary-color: $my-brand-color;
@import 'loaders.css/src/animations/${this.state.selectedType}.scss'

.loader-hidden {
  display: none;
}
.loader-active {
  display: block;
}`
  }

  render() {
    var hidden = { display: this.state.seeAll ? 'none' : '' };
    return <Grid>
      <Row>
        <Col sm={9}>
          <h1>React Loaders</h1>
          <h2><em>Powered by <a href="https://github.com/ConnorAtherton/loaders.css">Loaders.css</a></em></h2>
          <h2 style={{marginBottom: '1em'}}>Delightful and performance-focused pure css loading animations.</h2>
        </Col>
        <Col sm={3}>
          <a className="btn btn-default btn-github btn-lg pull-right" href="https://github.com/jonjaques/react-loaders">
          View on Github
          </a>
        </Col>
      </Row>
      <Row>
        <Col sm={7}>
          <pre className="hidden-xs" data-type="shell">{"npm i --save react-loaders"}</pre>
          <pre className="hidden-xs" data-type="js">
            {"import Loader from 'react-loaders'"}
            <br style={hidden} />
            <br style={hidden} />
            {!this.state.seeAll && this.renderFakeLoader()}
          </pre>
          <pre className="hidden-xs" data-type="scss">
          {this.renderFakeSass()}
          </pre>
        </Col>
        <Col sm={4} smOffset={1}>
          <form>
            <div className="checkbox">
              <label>
              <input type="checkbox"
                defaultChecked="true"
                onChange={::this.toggleActive}
              />Active
              </label>
            </div>

            <div className="checkbox">
              <label>
                <input type="checkbox"
                  onChange={::this.toggleSeeAll} />See All
              </label>
            </div>

            <div style={hidden} className="form-group">
              <label>
                Type
              </label>
              <select
                className="form-control"
                value={this.state.selectedType}
                onChange={::this.selectType}>
                {Object.keys(Types).map(::this.renderTypeOptions)}
              </select>
            </div>
          </form>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className={this.state.seeAll ? "loaders" : "loaders single"}>
            { this.state.seeAll
              ? Object.keys(Types).map(::this.renderLoader)
              : this.renderLoader(this.state.selectedType) }
          </div>
        </Col>
      </Row>
    </Grid>
  }

}

export function run() {
  Render(<LoaderDemo />, document.querySelector('#container'));
}

export function render() {
  return renderToString(<LoaderDemo />);
}
