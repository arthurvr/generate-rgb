# generate-rgb [![Build Status](https://travis-ci.org/arthurvr/generate-rgb.svg?branch=master)](https://travis-ci.org/arthurvr/generate-rgb)

> Generate an RGB color string


## Install

```
$ npm install --save generate-rgb
```


## Usage

```js
var generateRgb = require('generate-rgb');

generateRgb(0, 255, 255);
//=> 'rgb(0, 255, 255)'

generateRgb({
	red: 0,
	green: 255,
	blue: 255
});
//=> 'rgb(0, 255, 255)'
```


## API

### generateRgb(red, green, blue)

#### red

*required*

type: `number`

A number between 0 and 255 which represents the amount of red.

#### green

*required*

type: `number`

A number between 0 and 255 which represents the amount of green.

#### blue

*required*

type: `number`

A number between 0 and 255 which represents the amount of blue.

## Related

* [parse-rgb](https://github.com/arthurvr/parse-rgb)

## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
