var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
	gulp.src(['src/js/*/*.js'])
		.pipe(babel())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('js:frontend', function() {
	gulp.src(['src/js/*.js'])
		.pipe(browserify())
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', ['default'], function() {
	gulp.watch('src/js/**/*.js', ['js', 'js:frontend']);
});

gulp.task('default', ['js', 'js:frontend']);
