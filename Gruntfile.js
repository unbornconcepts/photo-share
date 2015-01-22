module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      uses_defaults: {}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect'); //grunt connect:targetname:keepalive

};