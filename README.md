ngHint Plugin
=============

ngHint adds run-time hinting to AngularJS projects. This plugin bubbles those hints up to the
command line so they can be used in automated testing.

You enable this plugin in your config file:
 ```js
exports.config = {
  plugins: [{
    path: 'node_modules/protractor/plugins/ngHint',

    asTests: {Boolean},
    excludeURLs: {(String|RegExp)[]}
  }]
};
```
`asTests` specifies if the plugin should generate passed/failed test results
based on the ngHint output or instead log the results to the console.
Defaults to true.

`excludeURLs` specifies a list of URLs for which ngHint results should be
ignored. Defaults to []
