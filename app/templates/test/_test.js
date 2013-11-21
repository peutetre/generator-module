/*
 * test.js
 */

var <%= _.camelize(moduleName) %> = require('../lib/index.js'),
    expect = require('expect.js');

onload = function () {
    describe('Testing some stuff', function () {
        describe('First test', function () {
            it('<%= _.camelize(moduleName) %> must be an function', function () {
                expect(<%= _.camelize(moduleName) %>).to.be.an('function');
            });
            it('<%= _.camelize(moduleName) %> must return a the string `this is module <%= _.camelize(moduleName) %>`', function () {
                expect(<%= _.camelize(moduleName) %>()).to.be.equal("this is module <%= _.camelize(moduleName) %>");
            });
        });
    });

    setTimeout(function () {
        //mocha.checkLeaks();
        mocha.run();
    }, 1000);
};
