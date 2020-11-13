const gulp = require('gulp')
const series = gulp.series

const ts = require('gulp-typescript')

const tsProject = ts.createProject('./tsconfig.json')

var transformJs = function () {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('transformed'))
}

exports.default = series(transformJs)