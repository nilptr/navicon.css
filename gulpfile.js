
var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('build', function () {
    gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({}))
        .pipe(gulp.dest('build'))
        .pipe(csso())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['build']);