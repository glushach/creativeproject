const gulp = require('gulp'),
      pug = require('gulp-pug');

gulp.task('pug', function() {
  return gulp.src('app/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('app'));
});


gulp.task('watch', function() {
  gulp.watch('app/*pug', gulp.parallel('pug'));
});

gulp.task('default', gulp.parallel('watch'));