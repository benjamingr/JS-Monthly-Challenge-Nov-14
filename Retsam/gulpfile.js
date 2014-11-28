var gulp = require('gulp');

var typescript = require('gulp-typescript');

gulp.task('compile', function () {
    return gulp.src('src/ts/*.ts')
        .pipe(typescript()).js
        .pipe(gulp.dest('src/js'));
});

gulp.task('watch', function () {
    gulp.watch('src/ts/*.ts', ['compile']);
});

gulp.task('default', ['watch']);