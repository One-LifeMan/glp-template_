const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const server = require("gulp-server-livereload");
const clean = require("gulp-clean");
const fs = require("fs");
const sourceMaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const webpack = require("webpack-stream");
const babel = require("gulp-babel");
const svgSprite = require("gulp-svg-sprite");
const imagemin = require("gulp-imagemin");
const changed = require("gulp-changed");

const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");

const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

// const stylelint = require('gulp-stylelint');

const fileIncludeSettings = {
    prefix: "@@",
    basepath: "@file",
};

const plumberNotify = (title) => {
    return {
        errorHandler: notify.onError({
            title: title,
            massage: "Error <%= error.message %>",
            sound: false,
        }),
    };
};

gulp.task("html:dev", function () {
    return gulp
        .src(["./src/html/**/*.html", "!./src/html/modules/**/*"])
        .pipe(changed("./build/", { hasChanged: changed.compareContents }))
        .pipe(plumber(plumberNotify("HTML")))
        .pipe(fileInclude(fileIncludeSettings))
        .pipe(gulp.dest("./build/"));
});

gulp.task("sass:dev", function () {
    return gulp
        .src("./src/scss/*.scss")
        .pipe(changed("./build/css/"))
        .pipe(plumber(plumberNotify("SCSS")))
        .pipe(sourceMaps.init())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest("./build/css/"));
});

gulp.task("favicon:dev", function () {
    return gulp
        .src(["./src/img/favicon/**/*"])
        .pipe(changed("./build/"))
        .pipe(gulp.dest("./build/"));
});

gulp.task("spriteSheet:dev", function () {
    return gulp
        .src(["./src/img/icons/*.svg"])
        .pipe(
            svgSprite({
                mode: {
                    stack: {
                        sprite: "../spriteSheet.svg",
                    },
                },
            }),
        )
        .pipe(gulp.dest("./src/img/"));
});

gulp.task("images:dev", function () {
    return gulp
        .src(["./src/img/**/*", "!./src/img/icons/**", "!./src/img/favicon/**"])
        .pipe(changed("./build/img/"))
        .pipe(gulp.dest("./build/img/"));
});

gulp.task("fonts:dev", function () {
    return gulp
        .src(["./src/fonts/**/*.ttf"])
        .pipe(ttf2woff())
        .pipe(gulp.dest("./build/fonts/"))

        .pipe(gulp.src(["./src/fonts/**/*.ttf"]))
        .pipe(ttf2woff2())
        .pipe(gulp.dest("./build/fonts/"))

        .pipe(gulp.src("./src/fonts/**/*"))
        .pipe(changed("./build/fonts/"))
        .pipe(gulp.dest("./build/fonts/"));
});

gulp.task("files:dev", function () {
    gulp.src("./src/files/**/*")
        .pipe(changed("./build/files/"))
        .pipe(gulp.dest("./build/files/"));

    return gulp
        .src("./src/lang/**/*")
        .pipe(changed("./build/lang/"))
        .pipe(gulp.dest("./build/lang/"));
});

gulp.task("ts:dev", () => {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("src/js/"));
});

gulp.task("js:dev", function () {
    return (
        gulp
            .src("./src/js/*.js")
            .pipe(changed("./build/js/"))
            .pipe(plumber(plumberNotify("JS")))
            // .pipe(babel())
            .pipe(webpack(require("./../webpack.config")))
            .pipe(gulp.dest("./build/js"))
    );
});

const serverOptions = {
    // host: "192.168.0.4",
    livereload: true,
    open: true,
};

gulp.task("server:dev", function () {
    return gulp.src("./build/").pipe(server(serverOptions));
});

gulp.task("clean:dev", function (done) {
    if (fs.existsSync("./build/", { read: false })) {
        return gulp.src("./build/").pipe(clean());
    }
    done();
});

gulp.task("watch:dev", function () {
    gulp.watch("./src/scss/**/*.scss", gulp.parallel("sass:dev"));
    gulp.watch("./src/**/*.html", gulp.parallel("html:dev"));
    gulp.watch("./src/img/icons/*", gulp.parallel("spriteSheet:dev"));
    gulp.watch("./src/img/favicon/*", gulp.parallel("favicon:dev"));
    gulp.watch("./src/img/**/*", gulp.parallel("images:dev"));
    gulp.watch("./src/fonts/**/*", gulp.parallel("fonts:dev"));
    gulp.watch("./src/files/**/*", gulp.parallel("files:dev"));
    gulp.watch("./src/ts/**/*", gulp.parallel("ts:dev"));
    gulp.watch("./src/js/**/*", gulp.parallel("js:dev"));
});
