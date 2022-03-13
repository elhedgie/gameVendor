let gulp = require('gulp')
let cleanCss = require('gulp-clean-css')
let rename = require('gulp-rename')
const sass = require('gulp-sass')(require('sass'));
gulp.task('compile-scss', function() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('assets/css'))
})