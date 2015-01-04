var gulp = require('gulp');
var del = require('del');
var fs = require('fs');
var path = require('path');
var cordova = require('cordova-lib').cordova.raw; // promises API
var buildDir = path.join(__dirname, 'build');
var platforms = ['ios', 'android'];
var plugins = ['org.apache.cordova.file','com.ionic.keyboard','org.apache.cordova.statusbar'];

gulp.task('cordova:clean', del.bind(null, ['build','platforms','plugins']));

gulp.task('cordova:create', ['cordova:clean'], function() {
    fs.mkdirSync(buildDir);
    process.chdir(buildDir);

    fs.symlinkSync(path.join('..', 'config.xml'), 'config.xml');
    fs.symlinkSync(path.join('..', 'www'), 'www');

    return cordova.plugins('add', plugins);
});

platforms.forEach(function(platform){
  gulp.task('cordova:platform:' + platform, function() {
    process.chdir(buildDir);
    return cordova.platform('add', platform);
  });
});

gulp.task('cordova:build', function() {
    process.chdir(buildDir);
    return cordova.build();
});

platforms.forEach(function(platform){
  gulp.task('cordova:build:' + platform, function() {
    process.chdir(buildDir);
    return cordova.build(platform);
  });
});
