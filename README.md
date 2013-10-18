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
|-- README.md
|-- package.json
|-- lib
|   `-- index.js
|-- test
|   `-- test.js
|-- example
|   |-- package.json
|   |-- example.js
|   `-- index.html
|
`-- travis.yml
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

### Test module

Test module with mocha on a browser

```
npm run test
```

Test module on saucelabs with mocha

```
npm run test-sauce
```

`npm run test` is an alias for test-saucelabs

## Test generator

```
npm test
```

## ChangeLog

#### v0.0.1 2013-10-18

* minimal release

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
