var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var rt = require('gulp-react-templates');

gulp.task('sass', function () {
  gulp.src('./public/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./**/*.scss', ['sass']);
});

gulp.task('rt', function() {
    gulp.src('./public/src/**/*.rt')
        .pipe(rt({modules: 'amd'}))
        .on('error', function(error) { console.log(error.message) })
        .pipe(gulp.dest('./public/src'));
});

gulp.task('dev', function() {
  gulp.watch('./**/*.scss', ['sass']);
  watch('./**/*.rt', function() { gulp.run('rt'); });
});

gulp.task('default', ['rt', 'sass']);
