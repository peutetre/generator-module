/*
 * test.js
 */

var <%= moduleName %> = require('../lib/index.js'),
    expect = require('expect.js');

onload = function () {
    describe('Testing some stuff', function () {
        describe('First test', function () {
            it('<%= moduleName %> must be an function', function () {
                expect(<%= moduleName %>).to.be.an('function');
            });
            it('<%= moduleName %> must return a the string `this is module <%= moduleName %>`', function () {
                expect(<%= moduleName %>()).to.be.equal("this is module <%= moduleName %>");
            });
        });
    });

    setTimeout(function () {
        //mocha.checkLeaks();
        mocha.run();
    }, 1000);
};
