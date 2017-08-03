// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'libs',
    paths: {
        "src": "../src/",
        "knockout": "knockout.3.4.2",
        "jquery": "jquery-3.2.1.min"
    },
    map: {
      '*': { 'jquery': 'jquery-private' },
      'jquery-private': { 'jquery': 'jquery' }
    },
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['src/main']);
