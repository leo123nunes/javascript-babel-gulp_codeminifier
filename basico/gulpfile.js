var gulp = require('gulp')

var series = gulp.series
var parallel = gulp.parallel

const before1 = function(cp){
    console.log("before 1")
    return cp()
}

const before2 = function(cp){
    console.log("before2")
    return cp()
}

const addPhrase = function(fun){
    console.log(fun)
    return fun()
}

function copy(cp){
    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt']).pipe(addPhrase)
    // return cp()
}

const after1 = function(cp){
    console.log("after 1")
    return cp()
}

module.exports.default = series(
    copy)