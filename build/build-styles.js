/**
 * @Author: Created By McChen
 * @Date: 2018/4/26
 * @Mail: mcchen.club@gmail.com
 * @Version: V1.0.0
 */

var gulp = require('gulp');
// minify css
const cleanCSS = require('gulp-clean-css');
// rename
const rename = require('gulp-rename');
// Autoprefixer
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
// autoprefixer
gulp.task("autoprefixer", function () {
	gulp.src("../src/styles/index.css")
		.pipe(postcss([
			autoprefixer({
				browsers: ["last 20 versions", "Android >= 4.0", "iOS >= 7.0", "not ie <= 8"]
			})
		]))
		.pipe(cleanCSS())
		.pipe(rename('art-vue.css'))
		.pipe(gulp.dest("../src/dist/styles"))
});

gulp.task('default', ['autoprefixer']);
