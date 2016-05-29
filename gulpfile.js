var gulp = require('gulp'),
    minify = require('gulp-minifier'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass');


gulp.task('default', function(){
    gulp.watch('./scss/**', ['sass']);
});

/*********** Leer Sass **************/

gulp.task('sass', function () {
    var processors = [
        autoprefixer({ browsers: ['last 2 versions'] })
    ];

    return gulp.src('scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(plumber())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css'));
});

/*********** Comprimir archivos **************/

var minifyConf = {
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    minifyCSS: true,
    getKeptComment: function (content, filePath) {
        var m = content.match(/\/\*![\s\S]*?\*\//img);
        return m && m.join('\n') + '\n' || '';
    }
};

gulp.task('compress', ['compress:html','compress:css','compress:js']);

gulp.task('compress:html', function() {
    gulp.src('*.html')
        .pipe(minify(minifyConf))
        .pipe(gulp.dest('compressed'));
});

gulp.task('compress:js', function() {
    gulp.src('js/*.js')
        .pipe(minify(minifyConf))
        .pipe(gulp.dest('compressed/js'));
});

gulp.task('compress:css', function() {
    gulp.src('css/*.css')
        .pipe(minify(minifyConf))
        .pipe(gulp.dest('compressed/css'));
});