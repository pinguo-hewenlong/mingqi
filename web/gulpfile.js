/**
 * Created by Aranya on 2017/2/13.
 */
"use strict";
const gulp=require("gulp");
const connect=require("gulp-connect");
const bs=require("browser-sync");
//const concat=require("gulp-concat");//合并
const uglify=require("gulp-uglify");//压缩js
//const cleancss=require("gulp-clean-css");//压缩css
//const minifycss=require("gulp-minify-css");
const imgmin=require("gulp-imagemin");//压缩图片
//const fileinclude=require("gulp-file-include");
const autoprefix=require("gulp-autoprefixer");//自动给css加上不同浏览器的前缀
//const cheerio=require("gulp-cheerio");//切换连接
//const less=require("gulp-less");//css预编译
gulp.task("hello", function () {
    console.log("hello,gulp")
});
//拷贝
gulp.task("copy-index", function () {
    return gulp.src("public/index.html").pipe(gulp.dest("dist"))
});
gulp.task("copy-img", function () {
    //return gulp.src("public/img/*.{jpg,png}").pipe(gulp.dest("dist/public/img"))
    return gulp.src("public/images/**").pipe(gulp.dest("dist/img"))
});
gulp.task("copy-js", function () {
    return gulp.src(["public/js/*.js","!public/js/test.js"]).pipe(gulp.dest("dist/js"))
});
gulp.task("copy-css", function () {
    return gulp.src(["public/css/*.css"]).pipe(gulp.dest("dist/css"))
});
gulp.task("copy-fonts", function () {
    return gulp.src(["public/fonts/**"]).pipe(gulp.dest("dist/fonts"))
});
gulp.task("bulid",['copy-index','copy-img','copy-js','copy-movie','copy-css','copy-fonts']);
//合并压缩js
gulp.task("concatJs", function () {
    //return gulp.src(["./public/js/*.js","!./public/js/bootstrap.js","!./public/js/jquery-3.1.1.js"]).pipe(concat("vendor.js")).pipe(gulp.dest("./dist/js"))
    return gulp.src(["./public/js/*.js","!./public/js/bootstrap.js","!./public/js/jquery-3.1.1.js"]).pipe(concat("vendor.js")).pipe(uglify({
        mangle:true,//类型Boolean 默认true 是否修改变量名
        compress:true,//类型Boolean 默认true 是否完全压缩
        preserveComments:'all'//保留所有注释
    })).pipe(gulp.dest("./dist/js"))
});
//压缩css
gulp.task("cleanCss", function () {
    return gulp.src(["./public/css/*.css","!./public/css/bootstrap.css"]).pipe(concat("main.css")).pipe(cleancss()).pipe(gulp.dest("./dist/css"))
});
gulp.task("minifyCss", function () {
    return gulp.src(["./public/css/*.css","!./public/css/bootstrap.css"]).pipe(concat("main.css")).pipe(minifycss({
        advanced:true,//true合并选择器 默认true
        keepBreaks:true,//true保留换行 默认true
        keepSpecialComments:"*"//保留特殊前缀
    })).pipe(gulp.dest("./dist/css"))
});
//压缩图片
gulp.task("imgmin", function () {
    return gulp.src("./public/img/**/*.*").pipe(gulp.dest("./dist/img")).pipe(imgmin())
});
//引入include 头尾 共同部分
gulp.task("fileinclude", function () {
    return gulp.src("./public/pages/sportExperience.html").pipe(fileinclude({
        prefix:"@@",
        basepath:"@file"
    })).pipe(gulp.dest("./dist/pages"))
});
//做贱人 只针对css
gulp.task("autoprefixer", function () {
    return gulp.src(["./public/css/index.css","!./public/css/bootstrap.css"]).pipe(autoprefix({
        browsers:["ie 8","ie 9","opera 12.1","Firefox >= 10"]
    })).pipe(gulp.dest("./dist/public/css"))
});
//切换link标签部分
gulp.task("changeLink", function () {
    return gulp.src("./public/index.html").pipe(cheerio(function ($) {
        $("link").remove();
        $("head").append("<link rel='stylesheet' href='css/bootstrap.css'/><link rel='stylesheet' href='css/content.css'/>")
    })).pipe(gulp.dest("./dist"))
});
//less预编译css
gulp.task("less", function () {
    return gulp.src("./public/less/index.less").pipe(less()).pipe(gulp.dest("./dist/css"))
});
//connect自动刷新
gulp.task('html', function () {
    gulp.src('public/index.html').pipe(connect.reload());
});
gulp.task('css', function () {
    gulp.src('public/css/*.css').pipe(connect.reload());
});
gulp.task('js', function () {
    gulp.src('public/js/*.js').pipe(connect.reload());
});
gulp.task('watch', function () {
    gulp.watch(['public/pages/*.html'], ['html']);
    gulp.watch(['public/login.html'], ['html']);
    gulp.watch(['public/css/*.css'], ['css']);
    gulp.watch(['public/js/*.js'], ['js']);
});
gulp.task("connect", function () {
    connect.server({
        livereload:true
    })
});
gulp.task("default",['connect','watch']);
//browser-sync自动刷新
gulp.task("browser-sync", function () {
    let files=["./public/**/*.html","./public/**/*.css","./public/**/*.js","./public/images/*","./public/pages/login.html"];
    bs.init(files,{server:{baseDir:"./public"}})
});