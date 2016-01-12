
var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var banner = require('gulp-banner');
var autoprefixer = require('gulp-autoprefixer');

var pkg = require('./package.json');

var comment = '/*!\n' +
    ' * <%= pkg.name %> <%= pkg.version %>\n' +
    ' * <%= pkg.description %>\n' +
    ' * <%= pkg.homepage %>\n' +
    ' *\n' +
    ' * Copyright 2016, <%= pkg.author %>\n' +
    ' * Released under the <%= pkg.license %> license.\n' +
    ' */\n';

gulp.task('build', function () {
    gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({}))
        .pipe(banner(comment, { pkg: pkg }))
        .pipe(gulp.dest('build'))
        .pipe(csso())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['build']);