#!/usr/bin/env node

var Executor = require('./test_util').Executor;

var passingTests = [
  'node node_modules/protractor/lib/cli.js spec/successConfig.js',
];

var executor = new Executor();

passingTests.forEach(function(passing_test) {
  executor.addCommandlineTest(passing_test)
      .assertExitCodeOnly();
});

/*************************
 *Below are failure tests*
 *************************/

executor.addCommandlineTest(
    'node node_modules/protractor/lib/cli.js spec/failureConfig.js')
    .expectExitCode(1)
    .expectErrors([{
      message: 'warning -- ngHint plugin cannot be run as ngHint code was ' +
          'never included into the page'
    }, {
      message: 'warning -- ngHint is included on the page, but is not active ' +
          'because there is no `ng-hint` attribute present'
    }, {
      message: 'warning -- Module "xApp" was created but never loaded.'
    }]);

executor.execute();
