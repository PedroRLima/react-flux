"user strict";

var gulp = require("gulp");
var connect = require("gulp-connect"); //Runs dev server
var open = require("gulp-open"); //open URL in browser

var config = {
	port: 8080,
	devBaseUrl: "http://localhost",
	paths:{
		html: "./src/*.html",
		dist: "./dist"
	}
}
//Start local dev server
gulp.task("connect", function(){
	connect.server({
		root: ["dist"],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task("open", ["connect"], function(){
	gulp.src("dist/index.html")
		.pipe(open({url: config.devBaseUrl + ":" + config.port + "/"}));
});

gulp.task("html", function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task("watch", function(){
	gulp.watch(config.paths.html, ["html"]);
});

gulp.task("default", ["html", "open", "watch"]);