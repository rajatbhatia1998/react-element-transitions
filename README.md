# react-element-transitions

A custom component that can be used to add pre-defined transitions or animations with any React Element using CSS Keyframes. This package also gives you the access to overwrite the animations properties for customized transitions with huge list of animations .


### Usage
You can import each animation directly from the main package

```Javascript
import { Transit } from 'react-element-transitions'
```


### Using Animations
```Javascript
<Transit name="BOUNCE" interationCount={10} duration={'0.5'} timing={'linear'} >
  <button>Animated Button</button>
</Transit>
```


## `Transit` - props 

| Attribute  | Type | Default | Description | Example |
| ------------- |:-------------:|:-------------:|:-------------:| :-------------:|
| name      | string | NA  | Name of the animation type | Check Animation list
| duration  | string | "1"  | Duration of the single animation frame   | "1" to "1000"
| timing    | string | "ease-in-out"| Timing function of animation |linear ,ease ,ease-in, ease-out, ease-in-out
| interationCount  | number | 1  | Number of times animation will repeat   | 1 to 1000

## Animations List
Below are the list for available animations 

`
FADE
`

`
BOUNCE
`

`
SLIDE-RIGHT
`

`
SLIDE-BOTTOM
`

`
SLIDE-LEFT
`

`
SLIDE-TOP
`

`
ROTATE-LEFT
`

`
ROTATE-RIGHT
`