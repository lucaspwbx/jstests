module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      test: {
        port: 8000
      }
    },
    jasmine: {
      src: 'src/**/*.js',
      options: {
        specs: 'spec/**/*.js',
        helpers: ['lib/jasmine-2.0.0/jquery.js', 'lib/jasmine-2.0.0/sinon.js'],
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
