const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('react', () =>
	gulp.src('client/components/app.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('client'))
);
