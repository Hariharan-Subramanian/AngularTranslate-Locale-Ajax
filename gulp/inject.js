'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

module.exports = function(options) {
  gulp.task('inject', ['scripts', 'styles'], function () {
    var injectStyles = gulp.src([
      options.tmp + '/serve/app/**/*.css',
      '!' + options.tmp + '/serve/app/vendor.css'
    ], { read: false });

    // var injectScripts = gulp.src([
    //   options.src + '/app/**/*.js',
    //   options.src + '/vendor/*.js', //MODFIIED
    //   '!' + options.src + '/app/**/*.spec.js',
    //   '!' + options.src + '/app/**/*.mock.js'
    // ])
    var injectScripts = gulp.src([
      // options.src + '/vendor/*.js', //MODFIIED
      options.src + '/vendor/bootstrap.min.js', //MODFIIED
      // options.src + '/vendor/jquery.slimscroll.min.js', //MODFIIED
      // options.src + '/vendor/metronic.js', //MODFIIED
      // options.src + '/vendor/layout.js', //MODFIIED


      options.src + '/app/index.js',
      options.src + '/app/translate.routeconfig.js',

      options.src + '/app/common/common.dataservices.js',
     

      options.src + '/app/home/main.services.js',
      options.src + '/app/home/home.directives.js',
      options.src + '/app/home/home.controller.js',

     
      // '!' + options.src + '/app/**/*.spec.js',
      // '!' + options.src + '/app/**/*.mock.js'
    ]);

    // .pipe($.angularFilesort()).on('error', options.errorHandler('AngularFilesort')); //MODIFIED

    var injectOptions = {
      ignorePath: [options.src, options.tmp + '/serve'],
      addRootSlash: false
    };

    return gulp.src(options.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(wiredep(options.wiredep))
      .pipe(gulp.dest(options.tmp + '/serve'));

  });
};
