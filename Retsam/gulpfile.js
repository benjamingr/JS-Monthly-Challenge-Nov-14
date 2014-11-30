var gulp = require('gulp');

var typescript = require('gulp-typescript');
var tap = require('gulp-tap');

var cheerio = require('gulp-cheerio');

gulp.task('compile', function () {
    return gulp.src('src/ts/*.ts')
        .pipe(typescript()).js
        .pipe(gulp.dest('src/js'));
});

gulp.task('templates', function () {

    return gulp.src('index.html')
        .pipe(cheerio(function ($, done) {

            var templateText = "\n";

            gulp.src('templates/*.html')
                .pipe(tap(function(file) {
                    templateText = templateText.concat(""+file.contents.toString()+"\n");
                }))
                .on('end', function () {
                    templateText = templateText.split("\n").map(function (line) {
                        return "        "+line;
                    }).join("\n") + "\n    ";

                    $("#templates").html(templateText);
                    done();
                });
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', ['compile', 'templates'], function () {
    gulp.watch('src/ts/*.ts', ['compile']);
    gulp.watch('templates/*.html', ['templates']);
});

gulp.task('default', ['watch']);