module.exports = function reverse(n) {
    if (n < 0) {
        n = -n;
    }
    n += "";
    return parseInt(n.split("").reverse().join(""));
};
