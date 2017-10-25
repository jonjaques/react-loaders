declare module 'react-loaders' {
  import * as React from "react"

  export type LoaderType =
    "ball-pulse" |
    "ball-grid-pulse" |
    "ball-clip-rotate" |
    "ball-clip-rotate-pulse" |
    "square-spin" |
    "ball-clip-rotate-multiple" |
    "ball-pulse-rise" |
    "ball-rotate" |
    "cube-transition" |
    "ball-zig-zag" |
    "ball-zig-zag-deflect" |
    "ball-triangle-path" |
    "ball-scale" |
    "line-scale" |
    "line-scale-party" |
    "ball-scale-multiple" |
    "ball-pulse-sync" |
    "ball-beat" |
    "line-scale-pulse-out" |
    "line-scale-pulse-out-rapid" |
    "ball-scale-ripple" |
    "ball-scale-ripple-multiple" |
    "ball-spin-fade-loader" |
    "line-spin-fade-loader" |
    "triangle-skew-spin" |
    "pacman" |
    "ball-grid-beat" |
    "semi-circle-spin";

  export default class Loader extends React.Component<{
    type: LoaderType,
    active: boolean,
    innerClassName?: string
  }, {}> {
  }

}
