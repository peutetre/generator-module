#  <%= moduleName %>

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
cd example; npm install; npm run build
```

Open example/index.html in your favorite browser

### Test module

Test module with mocha on a browser

```
npm run test
```

Test module on saucelabs with mocha

```
npm run test-sauce
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
