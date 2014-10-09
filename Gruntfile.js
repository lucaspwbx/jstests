module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.initConfig({
    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
                      options: {
                      specs: 'spec/*Spec.js',
                      helpers: 'spec/*Helper.js'
               }
               }
               }
               });
};
