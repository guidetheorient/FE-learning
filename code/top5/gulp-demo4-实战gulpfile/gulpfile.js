var gulp = require('gulp')

var rev = require('gulp-rev');   //添加版本号
var revReplace = require('gulp-rev-replace');  //版本号替换
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');  //css优化压缩
var clean = require('gulp-clean');//文件夹清空
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var less = require('gulp-less');  //less转css 预编译
var autoprefixer = require('gulp-autoprefixer'); //后编译，加前缀
var connect = require('gulp-connect');

gulp.task('dist:img',function () {
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'))
})

gulp.task('dist:css',function () {
    gulp.src('dist/css/*').pipe(clean());
    return gulp.src('src/**/.less')
               .pipe(less())
               .pipe(csso())
               .pipe(concat('merge.css'))
               .pipe(autoprefixer({
                    browsers:['last 2 versions'],
                    cascade:false
               }))
               .pipe(gulp.dest('dist/css/'))
})

gulp.task('src:css',function () {
    gulp.src('src/css/*').pipe(clean());
    return gulp.src('src/less/*.less')
               .pipe(less())
               .pipe(autoprefixer({
                    browsers:['last 2 versions'],
                    cascade:false
               }))
               .pipe(gulp.dest('src/css/'))
})


gulp.task('dist:js',function () {
    gulp.src('dist/js/*').pipe(clean());
    return gulp.src('src/**/*.js')
               .pipe(uglify())
               .pipe(concat('merge.js'))
               .pipe(gulp.dest('dist/js'))
})

//生成版本号
//rev+版本号 输出
//生成rev-mainfest.json,里面记录了
/*
html中要在引用的css外面包裹一层注释，表示运行完gulp build:css后将href替换成注释里面的
<!-- build:css css/merge.css -->
<link rel="stylesheet" href="css/index.css">
<!-- endbuild>
*/

gulp.task('revision',['dist:css','dist:js'],function () {
    return gulp.src(['dist**/*.css','dist/**/*.js'])
               .pipe(rev())
               .pipe(gulp.dest('dist'))
               .pipe(rev.manifest())
               .pipe(gulp.dest('dist'))
})

gulp.task('index',['revision'],function () {
    var manifest = gulp.src('./dist/rev-manifest.json');
    return gulp.src('src/index.html')
               .pipe(revReplace({
                    manifest: manifest
               }))
               .pipe(useref())
               .pipe(gulp.dest('ditst'))
})

gulp.task('watch',function () {
    gulp.watch('src/**/*.less',['src:css'])
})

gulp.task('connect',function(){
    connect.server({
        root:'src',
        livereload:true
    });
});

gulp.task('reload',function(){
    gulp.src('src/*.html')
        .pipe(connect.reload())
})

gulp.task('change',function(){
    gulp.task(['src/**/*'],['src:css','reload']);
})

gulp.task('server',['connect','change']);