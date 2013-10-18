# generator-module [![Build Status](https://secure.travis-ci.org/peutetre/generator-module.png?branch=master)](https://travis-ci.org/peutetre/generator-module)

A [Yeoman](http://yeoman.io) generator for [Browserify](http://browserify.org)/`old school import style` modules

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

#### Folders and files tree

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

Fetch all dependencies with the command

```
npm install
```

Build the module for developpement (add SourceMap support)

```
npm run build
```

Build the module for production

```
npm run prod
```

Test for module under phantomjs

```
npm run test-phantom
```

Test module with saucelabs

```
npm run test-sauce
```

`npm run test` is an alias for test-saucelabs

## ChangeLog

#### `0.0.1` 2013-10-15

* generate package.json + lib/index.js files

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
