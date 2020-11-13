const gulp = require('gulp')
const { series, parallel } = require('gulp')
const {appHTML, appCSS, appJS, appIMG} = require('./gulpTasks/app.js')
const {depsCSS, depsFonts} = require('./gulpTasks/deps.js')
const {monitorFiles, server} = require('./gulpTasks/server.js')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    server,
    monitorFiles
)