/**
 * index.js - <%= _.slugify(moduleName) %> module
 */

(function (definition) {
    if (typeof exports === "object") {
        module.exports = definition();
    } else {
        <%= moduleName %> = definition();
    }
})(function () {
    return function () {
        return "this is module <%= moduleName %>";
    };
});
