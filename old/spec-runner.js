requirejs.config({
  baseUrl: 'js'
});
require([ 'config' ], function() {

  requirejs.config({
    paths: {
      'jasmine': 'lib/jasmine-2.0.0/jasmine',
      'jasmine-html': 'lib/jasmine-2.0.0/jasmine-html',
      'jasmine-boot': 'lib/jasmine-2.0.0/boot'
      'spec': 'PATHTOTEST'
    },
    shim: {
      'jasmine-boot': {
        deps: [ 'jasmine', 'jasmine-html' ],
        exports: 'jasmine'
      },
      'jasmine-html': {
        deps: [ 'jasmine' ]
      }
    }
  });

  require([ 'jquery', 'jasmine-boot' ], function($, jasmine) {
    var jasmineEnv = jasmine.getEnv();
  });
});
