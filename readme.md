# React Loaders

Lightweight wrapper around [Loaders.css](https://github.com/ConnorAtherton/loaders.css).

[Demo](http://jonjaques.github.com/react-loaders)

## Install

```
npm install --save react-loaders loaders.css
```


## Usage

Require the component.

```
var Loader = require('react-loaders').Loader;
// also available as `default`

function renderLoader() {
  return <Loader type="line-scale" active />
}

```

Import any of the animations you want to use.

```
$primary-color: $my-brand-color;
@import 'loaders.css/src/animations/line-scale.scss'

.loader-hidden {
  display: none;
}
.loader-active {
  display: block;
}
```

**If `@import`ing with Sass, make you use something like [autoprefixer](https://github.com/postcss/autoprefixer) to add backwards compatibility.**
