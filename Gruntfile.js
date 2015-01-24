module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'www'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect'); //grunt connect:targetname:keepalive

};
