var gulp = require('gulp');
var del = require('del');
var cordova = require('cordova-lib').cordova.raw; // promises API
var platforms = ['ios', 'android'];
var plugins = ['org.apache.cordova.file','com.ionic.keyboard','org.apache.cordova.statusbar'];

gulp.task('cordova:clean', del.bind(null, ['platforms','plugins']));

gulp.task('cordova:create', ['cordova:clean'], function() {
    return cordova.plugins('add', plugins)
    .then(function(){
      return cordova.platform('add', platforms);
    });
});

gulp.task('cordova:build', function() {
    return cordova.build();
});

platforms.forEach(function(platform){
  gulp.task('cordova:platform:' + platform, function() {
    return cordova.platform('add', platform);
  });

  gulp.task('cordova:build:' + platform, function() {
    return cordova.build(platform);
  });

  gulp.task('cordova:emulate:' + platform, function() {
    return cordova.emulate(platform);
  });
});
