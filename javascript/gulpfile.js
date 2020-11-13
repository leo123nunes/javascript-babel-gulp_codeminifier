const gulp = require('gulp')

const series = gulp.series
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

const transform = function(){
    return gulp.src('src/*.js')
            .pipe(babel({
                comments: false,
                presets:['env']
            }))
            .pipe(uglify())
            .pipe(concat('transformedJS.js'))
            .pipe(gulp.dest('transformed'))
}

exports.default = series(transform)




























