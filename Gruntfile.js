module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    jasmine: {
      src: 'src/**/*.js',
      options: {
        specs: 'spec/**/*.js',
        template: require('grunt-template-jasmine-requirejs'),
        templateOptions: {
          requireConfig: {
            baseUrl: ''
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
};
