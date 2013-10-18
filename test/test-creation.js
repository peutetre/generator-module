/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('module generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('module:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      'package.json',
      'lib/index.js',
      'README.md'
    ];

    helpers.mockPrompt(this.app, {
      'githubUser': 'peutetre',
      'moduleName': 'test',
      'moduleDescription': 'This is a test',
      'dependencies': 'q, zanimo, qajax'
    });

    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
