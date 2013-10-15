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
    // FIXME
    // add the module code here...

    return /* FIXME here, the module impl. */;
});
