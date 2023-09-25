const gulp                  = require('gulp');

//HTML
const fileInclude           = require('gulp-file-include');
const htmlclean             = require('gulp-htmlclean');
const webpHTML              = require('gulp-webp-html');

//SASS
const sass                  = require('gulp-sass')(require('sass'));
const sassGlob              = require('gulp-sass-glob');
const autoprefixer          = require('gulp-autoprefixer');
const csso                  = require('gulp-csso');
const webpCss               = require('gulp-webp-css-fixed');
const postcss               = require('gulp-postcss');
const cssDeclarationSorter  = require('css-declaration-sorter');

const server                = require('gulp-server-livereload');
const clean                 = require('gulp-clean');
const fs                    = require('fs');
const sourceMaps            = require('gulp-sourcemaps');
const groupMedia            = require('gulp-group-css-media-queries');
const plumber               = require('gulp-plumber');
const notify                = require('gulp-notify');
const webpack               = require('webpack-stream');
const babel                 = require('gulp-babel');

//IMG
const imagemin              = require('gulp-imagemin');
const webp                  = require('gulp-webp');
const svgSprite             = require('gulp-svg-sprite');

//FONTS
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

const changed               = require('gulp-changed');

const fileIncludeSettings = {
    prefix: '@@',
    basepath: '@file'
};

const plumberNotify = (title) => {
    return {
        errorHandler: notify.onError({
            title: title,
            message: 'Error <%= error.message %>',
            sound: false
        }),
    };
}

gulp.task('html:docs', function () {
    return gulp
        .src(['./src/html/**/*.html', '!./src/html/modules/**/*'])
        .pipe(changed('./docs/'))
        .pipe(plumber(plumberNotify('HTML')))
        .pipe(fileInclude(fileIncludeSettings))
        .pipe(webpHTML())
        .pipe(htmlclean()) 
        .pipe(gulp.dest('./docs/'));
});

gulp.task('sass:docs', function () {
    return gulp
        .src('./src/scss/*.scss')
        .pipe(changed('./docs/css/'))
        .pipe(plumber(plumberNotify('SCSS')))
        // .pipe(sourceMaps.init())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(groupMedia())
        .pipe(webpCss())
        .pipe(postcss([
            cssDeclarationSorter({ order: 'concentric-css' })
        ]))
        .pipe(csso())
        // .pipe(sourceMaps.write())
        .pipe(gulp.dest('./docs/css/'));
});

gulp.task('images:docs', function () {
    return gulp
        .src(['./src/img/**/*', '!./src/img/icon/sprite/*.svg', '!./src/img/icon/*.svg'])
        .pipe(changed('./docs/img/'))
        .pipe(webp())
        .pipe(gulp.dest('./docs/img/'))

        .pipe(gulp.src(['./src/img/**/*', '!./src/img/icon/sprite/*.svg', '!./src/img/icon/*.svg']))
        .pipe(changed('./docs/img/'))
        .pipe(imagemin({ verbose: true}))
        .pipe(gulp.dest('./docs/img/'))

        .pipe(gulp.src('./src/img/icon/sprite/*.svg'))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg" 
                }
            },
        }))
        .pipe(gulp.dest('./docs/img/icon/'));
});

gulp.task('fonts:docs', function () {
    return gulp
        .src(['./src/fonts/**/*.ttf'])
        .pipe(ttf2woff())
        .pipe(gulp.dest('./docs/fonts/'))

        .pipe(gulp.src(['./src/fonts/**/*.ttf']))
        .pipe(ttf2woff2())
        .pipe(gulp.dest('./docs/fonts/'))

        .pipe(gulp.src('./src/fonts/**/*'))
        .pipe(changed('./docs/fonts/'))
        .pipe(gulp.dest('./docs/fonts/'));
});

gulp.task('files:docs', function () {
    return gulp
        .src('./src/files/**/*')
        .pipe(changed('./docs/files/'))
        .pipe(gulp.dest('./docs/files/'));
});

gulp.task('js:docs', function () {
    return gulp
        .src('./src/js/*.js')
        .pipe(changed('./docs/js/'))
        .pipe(plumber(plumberNotify('JS')))
        .pipe(babel())
        .pipe(webpack(require('../webpack.prod')))
        .pipe(gulp.dest('./docs/js'))
})

const serverOptions = {
    livereload: true,
    open: true
};

gulp.task('server:docs', function () {
    return gulp
        .src('./docs/')
        .pipe(server(serverOptions));
});

gulp.task('clean:docs', function (done) {
    if (fs.existsSync('./docs/', {read: false})) {
        return gulp
                .src('./docs/')
                .pipe(clean());
    }
    done();
});


