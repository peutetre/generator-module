/**
 * index.js - <%= _.slugify(moduleName) %> module
 */

(function (definition) {
    if (typeof exports === "object") {
        module.exports = definition();
    } else {
        <%= _.camelize(moduleName) %> = definition();
    }
})(function () {
    return function () {
        return "this is module <%= moduleName %>";
    };
});
