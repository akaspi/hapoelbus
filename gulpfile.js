var gulp = require('gulp');

gulp.task('sass', function () {
  var sass = require('gulp-sass');
  gulp.src('./public/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./**/*.scss', ['sass']);
});

// var react = require('gulp-react');
// gulp.task('transformJSX', function (x) {
//     return gulp.src('**/*.jsx', { cwd: './public/src' })
//         .pipe(react())
//         .pipe(gulp.dest('./public/src'));
// });
// gulp.task('watchJSX', function() {
//   gulp.watch('./public/src/**/*.jsx', ['transformJSX']);
// });

gulp.task('default', ['sass']);
