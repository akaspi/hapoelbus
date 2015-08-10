var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var rt = require('gulp-react-templates');
var gutil = require("gulp-util");
var webpack = require("webpack");
var del = require('del');

var paths = {
    src: './client/src',
    dist: './client/dist'
};

//gulp.task('dev', function () {
//    gulp.watch('./**/*.scss', ['sass']);
//    watch('./**/*.rt', function () {
//        gulp.run('rt');
//    });
//});

gulp.task('clean', function (done) {
    del.sync([paths.dist + '/**/*']);
    done();
});

gulp.task('copy-index-html', function (done) {
    gulp.src(paths.src + '/index.html')
        .pipe(gulp.dest(paths.dist))
        .on('end', done)
});

gulp.task('rt', function (done) {
    gulp.src(paths.src + '/**/*.rt')
        .pipe(rt({modules: 'amd'}))
        .on('error', function (error) {
            console.log(error.message)
        })
        .pipe(gulp.dest(paths.src))
        .on('end', done);
});

gulp.task('webpack', function (done) {
    webpack({
        entry: {
            app: paths.src + "/main.js",
            vendor: ['react/addons', 'lodash', 'firebase', 'material-ui']
        },
        output: {
            path: paths.dist,
            filename: "bundle.js",
            pathinfo: true
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin("vendor", 'vendor.bundle.js', Infinity)
        ]
    }, function onWebpackComplete(err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        done();
    });
});

gulp.task('sass', function (done) {
    gulp.src(paths.src + '/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.dist))
        .on('end', done)
});

gulp.task('build', gulpsync.sync(['clean', 'copy-index-html', 'rt', 'webpack', 'sass']));

gulp.task('default', ['rt', 'sass']);
