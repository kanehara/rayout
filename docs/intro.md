`rayout` is a simple React layout component library focusing only on layout.
Inspired by [primitive components of Reakit](https://reakit.io/components/box).

### Problem
In native HTML you can render a `div` for block elements and a `span` for inline
elements.  What about `flex`, `grid`, `inline-block`? I've found myself constantly writing CSS to apply these `display` and corresponding 
properties (e.g. `flex-direction` for `flex`) to simply layout my UI.
This library aims to bring a nice, native feel to these new layout paradigms so
you don't get bogged down by writing layout CSS.