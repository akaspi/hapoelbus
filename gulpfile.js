var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var rt = require('gulp-react-templates');
var gutil = require('gulp-util');
var webpack = require('webpack');
var serve = require('gulp-serve');

var paths = {
  src: './client/src',
  dist: './client/public'
};

gulp.task('serve', serve({
  root: paths.dist,
  port: 3000
}));

gulp.task('watch', function() {
  watch('./**/*.rt', function() {
    gulp.run('webpack');
  });
  watch('./**/*.scss', function() {
    gulp.run('sass');
  });
});

gulp.task('rt', function(done) {
  gulp.src(paths.src + '/**/*.rt')
      .pipe(rt({modules: 'amd'}))
      .on('error', function(error) {
        console.log(error.message)
      })
      .pipe(gulp.dest(paths.src))
      .on('end', done);
});

gulp.task('webpack', ['rt'], function(done) {
  webpack({
    entry: {
      app: paths.src + '/main.js',
      vendor: ['react/addons', 'lodash', 'firebase', 'material-ui']
    },
    output: {
      path: paths.dist,
      filename: 'bundle.js',
      pathinfo: true
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity)
    ]
  }, function onWebpackComplete(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    done();
  });
});

gulp.task('sass', function(done) {
  gulp.src(paths.src + '/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(paths.dist))
      .on('end', done)
});

gulp.task('build', ['webpack', 'sass']);

gulp.task('default', gulpsync.sync(['build']));
