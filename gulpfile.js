"use strict";

const gulp = require("gulp");
const gutil = require("gulp-util");
const open = require("gulp-open");
const rimraf = require("rimraf");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const MockServer = require("./server");

gulp.task("copy-png", cb => {
    return gulp.src(["./public/**/*.png"])
    .pipe(gulp.dest("./output"))
});

gulp.task("clean", cb => {
    rimraf("./public/assets", cb);
});

gulp.task("dist-clean", cb => {
    rimraf("./output/", cb);
});

gulp.task("dist", [ "dist-clean", "copy-png" ], cb => {
    webpack(require("./webpack.config.pro.js"), (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }
        gutil.log("[webpack]", stats.toString());
    });
});

gulp.task("dev", [ "clean" ], cb => {
    const config = require("./webpack.config.dev.js");
    const complier = webpack(config);

    new WebpackDevServer(complier, {
        publicPath: config.output.publicPath,
        hot: true,
        proxy: config.devServer.proxy,
        historyApiFallback: true,
        stats: { colors: true },
        contentBase: "./public"
    }).listen(3000, "localhost", err => {
        if (err) {
            throw new gutil.PluginError("webpack-dev-server", err);
        }
        const uri = "http://127.0.0.1:3000/";
        gutil.log("[webpack-dev-server]", uri);
        gulp.src("").pipe(open({ uri }));
    });

    const mockServerPort = 8080;
    MockServer.listen(mockServerPort, () => {
        console.log(`Mock server is now running at port ${mockServerPort}...`);
    });
});
