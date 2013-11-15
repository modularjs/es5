/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      release: {
          options: {
              file: 'bower.json', //default: package.json
              npm: false, //default: true
              github: {
                  repo: 'modularjs/es5' //put your user/repo here
              }
          }
      }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-release');

  // Default task.
  grunt.registerTask('default', []);

};
