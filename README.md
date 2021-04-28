# About
rjs-sticky-footer is a footer component for react web apps.


## Getting Started

Install with npm:
``` npm i rjs-sticky-footer```
Install with yarn
```yarn add rjs-sticky-footer```

## Include in your project
```javascript
import Footer from 'rjs-sticky-footer/Footer
```

```javascript
<Footer
  background={'blue'}
  opacity={0.5}
  footerBody={<FooterBody/>}
  isSticky={false}
/>
```

## Props
Props | Details
-------------------- | -------------------------
background | can be any color value
opacity | can be a value between 0.0 and 1.0
footerBody| can be a string or a react component
isSticky| can be set to true or false



[Examples](https://fsdev.studio)
