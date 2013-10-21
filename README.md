# generator-module [![Build Status](https://secure.travis-ci.org/peutetre/generator-module.png?branch=master)](https://travis-ci.org/peutetre/generator-module)

A [Yeoman](http://yeoman.io) generator for __[Browserify](http://browserify.org)__/__old school import style__ modules

## Getting Started

### Install

Install Yeoman and the generator-module

```
$ npm install -g yo generator-module
```

### Usage

Launch the generator:

```
$ yo module
```

## Generator result

Assuming a module named `my-module`

### Folders and files tree

```
my-module
|-- Gruntfile.js
|-- LICENSE
|-- README.md
|-- browsers.json
|-- example
|   |-- example.js
|   `-- index.html
|-- lib
|   `-- index.js
|-- package.json
`-- test
    |-- index.html
    `-- test.js
```

### Usage

Fetch all module dependencies with npm

```
npm install
```

#### import module via browserify

```javascript
var aModule = require('my-module');

// by default, the generator scarffold a function as default module implementation
aModule();
```

#### import the old school style

just import the `lib/index.js` script

### Module example

Install and build the example

```
npm run build-example
```

Open example/index.html in your favorite browser

### Test module

Build tests with

```
npm run build-test
```

Then open `test/index.html` to run the tests.

Test module on saucelabs with mocha

```
npm test
```

## Test generator

```
npm test
```

## ChangeLog

#### v0.0.1 2013-10-21

* minimal release

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
