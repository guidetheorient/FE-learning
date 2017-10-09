var gulp = require('gulp')

var cssnano = require('gulp-cssnano')
var concat = require('gulp-concat')
var rev = require('gulp-rev')
var clean = require('gulp-clean');//文件夹清空

gulp.task('mergecss',function () {
    gulp.src('dist/css/*').pipe(clean())
    return gulp.src('src/css/*.css')
        .pipe(concat('merge.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'))
})

gulp.task('revision',['mergecss'], function(){
    return gulp.src('dist/css/*.css')
        .pipe(rev())
        .pipe(gulp.dest('dist/css/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist/'))
})

gulp.task('default',['revision'])
//为什么生成不了rev-manifest文件??