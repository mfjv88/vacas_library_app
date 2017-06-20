'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
// const webpack = require('gulp-webpack');
const webpack = require('webpack-stream');
const watch = require('gulp-watch');
const cssnano = require('cssnano');

gulp.task('default',['css'], function () {
  return watch('./client/**', function(){
		gulp.src('./client/assets/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/assets/css'));

		// gulp.src('./client/index.js')
		// .pipe(webpack(require('./webpack.config')))
		// .pipe(gulp.dest('./client/'));
	});
});

gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 5 versions']}),
        cssnano()
    ];
    return gulp.src('./client/assets/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./client/assets/css/'));
});

// gulp.task('babel', function () {
// 	return gulp.src('./client/components/app.js')
// 	.pipe(babel({
// 		presets: ['react']
// 	}))
// 	.pipe(gulp.dest('./client/'));
// });

// gulp.task('webpack', function () {
// 	return gulp.src('./client/index.js')
// 	.pipe(webpack( require('./webpack.config')))
// 	.pipe(gulp.dest('./client/'));
// });
