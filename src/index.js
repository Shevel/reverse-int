module.exports = function reverse (n) {
    return  parseInt(n.toLocaleString().split('').reverse().join(''));
}
