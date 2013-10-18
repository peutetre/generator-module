#  <%= moduleName %> [![Build Status](https://secure.travis-ci.org/<%= githubUser %>/<%= _.slugify(moduleName) %>.png?branch=master)](https://travis-ci.org/<%= githubUser %>/<%= _.slugify(moduleName) %>)

[![SauceLabs Status](https://saucelabs.com/browser-matrix/<%= saucelabUser %>.svg)](https://saucelabs.com/u/<%= saucelabUser %>)

<%= moduleDescription %>

## Getting Started

### Install

```
$ npm install <%= _.slugify(moduleName) %>
```

### Usage

#### import module via browserify

```javascript
var aModule = require('<%= _.slugify(moduleName) %>');

// by default, the generator scarffold a function as default module implementation
aModule();
```

#### import the old school style

just import the `lib/index.js` script

### Example

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

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
