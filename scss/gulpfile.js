var gulp = require('gulp');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var compass = require('gulp-compass');
var browserSync = require('browser-sync').create();

gulp.task('compass', function() {
  gulp.src('sass/*.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'css',
      sass: 'sass'
    }))
    .pipe(gulp.dest('css/'));
});

gulp.task('browserSync',function(){
  browserSync.init({
    server:{
      baseDir:'./'
    }
  })
})

gulp.task('jshint', function () {
    return gulp.src('js/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('imagemin', () =>
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
);

gulp.task('styles',function(){
gulp.src(['css/style.css'])
.pipe(browserSync.reload({
  stream:true
}))
})
// gulp.task('default',['compass','imagemin','jshint',]),function(){
// gulp.watch("saas/**/*.scss",['compass']);
// gulp.watch("js/**/*.js",['jshint']);
// }

gulp.task('default', ['compass', 'browserSync'], function() {
   gulp.watch("sass/*.scss", ['compass']);
  gulp.watch("css/*.css", ['styles']);
   gulp.watch("", ['browserSync']);
});

