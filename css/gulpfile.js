const gulp = require('gulp')
const series = gulp.series
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const sass = require('gulp-sass')

var transform = function(){
    return gulp.src('./src/sass/index.scss')
        .pipe(sass())
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

var transformHtml = function(){
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('build'))
}

exports.default = series(transform, transformHtml)