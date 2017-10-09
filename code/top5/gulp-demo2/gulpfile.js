var gulp = require('gulp')

var cleancss = require('gulp-clean-css'),  //css压缩
    uglify = require('gulp-uglify'),   //js压缩
    concat = require('gulp-concat'),   //合并文件

    rename = require('gulp-rename'),   //重命名
    clean = require('gulp-clean'),     //清空文件夹

    minhtml = require('gulp-htmlmin'),  //html压缩
    jshint = require('gulp-jshint'),    //js代码规范性检查
    imagemin = require('gulp-imagemin');  //图片压缩

gulp.task('html',function () {
    return gulp.src('*.html')
               .pipe(minhtml({collapseWhitespace:true}))
               .pipe(gulp.dest('.'))
})

gulp.task('css',function () {
    gulp.src('src/css/*.css')
        .pipe(concat('merge.css'))
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(cleancss())
        .pipe(gulp.dest('dist/css/'))
})

gulp.task('js',function () {
    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))

        .pipe(concat('merge.js'))
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
})

gulp.task('img',function () {
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'));
})

gulp.task('clear',function () {
    gulp.src('dist/*',{read:false})
        .pipe(clean());
})

gulp.task('build',['html','css','js','img'])


