var gulp = require('gulp');

var bases = {
 app: 'app/',
 dist: 'dist/',
};

var paths = {
 scripts: ['scripts/**/*.js', '!scripts/libs/**/*.js'],
 libs: ['scripts/libs/jquery/dist/jquery.js', 'scripts/libs/underscore/underscore.js', 'scripts/backbone/backbone.js'],
 styles: ['styles/**/*.css'],
 html: ['index.html', '404.html'],
 images: ['images/**/*.png'],
 extras: ['crossdomain.xml', 'humans.txt', 'manifest.appcache', 'robots.txt', 'favicon.ico'],
};


gulp.task('sass', function () {
  var sass = require('gulp-sass');
  gulp.src('./public/app.scss')
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
