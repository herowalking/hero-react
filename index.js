import { createElement, Component, render } from './hero-react.js';

class MyComponent extends Component {
  render() {
    return <di>
      <h1>my componet</h1>
      {this.children}
    </di>
  }
}

render(<MyComponent id='a' class='c'>
  <div>abc</div>
  <div></div>
  <div></div>
</MyComponent>, document.body);