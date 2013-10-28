/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;
var exec = require('child_process').exec

function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

describe('module generator', function () {
  before(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('module:app', [
        '../../app'
      ]);
      helpers.mockPrompt(this.app, {
        'githubUser': 'peutetre',
        'moduleName': 'test',
        'moduleDescription': 'This is a test',
        'dependencies': 'q, zanimo, qajax',
        'saucelabUser':'empty'
      });
      done();
    }.bind(this));
  });

  it('npm run build-test should return 0', function (done) {
    this.timeout(5000);

    this.app.run({}, function (e) {
      var child = exec('../../node_modules/browserify/bin/cmd.js ./test/test.js -o ./test/main.js --debug',
        function (error, stdout, stderr) {
          ok(error === null, 'exec error: ' + error);
          done();
      });
    });
  });

  it('npm run build-example should return 0', function (done) {
    this.timeout(5000);

    var child = exec('../../node_modules/browserify/bin/cmd.js ./example/example.js -o ./example/main.js --debug',
      function (error, stdout, stderr) {
        ok(error === null, 'exec error: ' + error);
        done();
    });
  });

});
