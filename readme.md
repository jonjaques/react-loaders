# React Loaders

Lightweight wrapper around [Loaders.css](https://github.com/ConnorAtherton/loaders.css).

[Demo](http://jonjaques.github.com/react-loaders)

## Install

```
npm install --save react-loaders loaders.css
```


## Usage

Require the component.

```js
var Loader = require('react-loaders').Loader;
// also available as `default`

function renderLoader() {
  return <Loader type="line-scale" active />
}

```

### Props

```js
static propTypes = {
  type: PropTypes.string,
  active: PropTypes.bool,
  color: PropTypes.string,
  innerClassName: PropTypes.string, // applied to the same div as .loader-inner.${type}
   																	// useful for advanced styling
  // className & style are implied
};
```

#### Sizing
**Note**: in ~2.x we had a size prop declared, but it never did anything so for 3.0 it has been removed. Why you ask? Well due to the way these are built by loaders.css, they are hardcoded to use specific pixel widths so sizing these natively would require rewriting that whole project.

*Pro tip*: you can resize these by simply passing `style={{transform: 'scale(0.5)'}}`. 

### CSS
Import any of the animations you want to use.

```scss
$primary-color: $my-brand-color;
// How you import this will depend heavily on your build setup
// If using webpack though, `~` refers to node_modules
// @import '~loaders.css/src/animations/line-scale.scss'
@import 'loaders.css/src/animations/line-scale.scss'

.loader-hidden {
  display: none;
}
.loader-active {
  display: block;
}
```

**If `@import`ing with Sass, make you use something like [autoprefixer](https://github.com/postcss/autoprefixer) to add backwards compatibility.**
