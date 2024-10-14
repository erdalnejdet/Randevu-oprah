const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');

const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const minifyCSS = require('gulp-csso');
const minifyJS = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const runSequence = require('run-sequence');
const clone = require('gulp-clone');
const sass = require('gulp-sass');


function css() {
    return src('src/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(concat('app.min.css'))
        .pipe(autoprefixer({
            cascade: false,
            "overrideBrowserslist": [
                "defaults",
                "last 3 version",
                "> 1%",
                "IE 10"
            ]
        }))
        .pipe(minifyCSS())
        .pipe(dest('dist/css'))
        .pipe(browsersync.stream());
}

function js() {
    return src('src/js/**/*js')
        .pipe(minifyJS())
        .pipe(concat('app.min.js'))
        .pipe(dest('dist/js'))
        .pipe(browsersync.stream());
}

function html() {
    return src('src/**/*.html')
        .pipe(dest('dist'))
        .pipe(browsersync.stream());
}

function img() {
    return src('src/img/*')
        .pipe(dest('dist/img'))
}

function font() {
    return src('src/fonts/*')
        .pipe(dest('dist/fonts'))
}


function watchFiles() {
    watch('src/**/*.html', html);
    watch('src/css/**/*.scss', css);
    watch('src/js/**/*.js', js);
    watch('src/img**/*', img);
    watch('src/fonts**/*', font);
}

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './dist'
        },
        port: 3000
    });
}

const watched = parallel(watchFiles, browserSync);

exports.default = parallel(series(html, font, js, css, img), watched);