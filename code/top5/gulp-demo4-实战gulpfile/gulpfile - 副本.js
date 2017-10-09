var gulp = require('gulp')

var imagemin = require('gulp-imagemin');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('img',function () {
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'))
})

gulp.task('css',function () {
    gulp.src('src/css/*.css')
       .pipe(csso())
       .pipe(concat('merge.css'))
       .pipe(gulp.dest('dist/css/'))
})

gulp.task('js',function () {
    gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(concat('merge.js'))
        .pipe(gulp.dest('dist/js'))
})

gulp('default',['img','css','js'])