let gulp = require("gulp");
// var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");

// gulp.task("default", function () {
//     return tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest("dist"));
// });


// var cache = require('gulp-cached');

// gulp.task('lint', function(){
//   return gulp.src('files/*.js')
//     .pipe(cache('linting'))
// });

// gulp.task('watch', function(){
//   gulp.watch('files/*.js', ['lint']);
// });

// gulp.task('default', ['watch','lint']);

gulp.task('default', () => { console.log("No task defined!"); });