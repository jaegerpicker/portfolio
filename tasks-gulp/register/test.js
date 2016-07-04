module.exports = function(gulp, plugins) {
  gulp.task('pre-test', function() {
    return gulp.src(['lib/**/*.js'])
      .pipe(plugins.istanbul())
      .pipe(plugins.istanbul.hookRequire());
  });

  gulp.task('test', ['pre-test'], function(cb) {
    return gulp.src(['./test/**/*.js'])
      .pipe(plugins.mocha({
        reporter: 'mocha-junit-reporter',
        reporterOptions: {
          mochaFile: process.env.CIRCLE_TEST_REPORTS + '/junit/results.xml'
        }
      }))
      .pipe(plugins.istanbul.writeReports())
      .pipe(plugins.notify({message: 'Coverage report written, testing complete'}))
      .once('end', function(){
        process.exit();
      });
  });
};
