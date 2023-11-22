const gulp = require("gulp");

require("./gulp/dev.js");
require("./gulp/docs.js");

gulp.task(
    "default",
    gulp.series(
        "clean:dev",
        gulp.parallel(
            "html:dev",
            "sass:dev",
            "favicon:dev",
            gulp.series("spriteSheet:dev", "images:dev"),
            "fonts:dev",
            "files:dev",
            gulp.series("ts:dev", "js:dev"),
        ),
        gulp.parallel("server:dev", "watch:dev"),
    ),
);

gulp.task(
    "docs",
    gulp.series(
        "clean:docs",
        gulp.parallel(
            "html:docs",
            "sass:docs",
            "favicon:docs",
            gulp.series("spriteSheet:docs", "images:docs"),
            "fonts:docs",
            "files:docs",
            gulp.series("ts:docs", "js:docs"),
        ),
        gulp.parallel("server:docs"),
    ),
);
