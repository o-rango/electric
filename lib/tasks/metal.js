'use strict';

var _ = require('lodash');
var data = require('gulp-data');
var filter = require('gulp-filter');
var frontMatter = require('gulp-front-matter');
var fs = require('fs-extra');
var metal = require('gulp-metal');
var path = require('path');

module.exports = function(options) {
	var gulp = options.gulp;
	var runSequence = options.runSequence;
	var util = options.util;

	metal.registerTasks({
		buildDest: 'dist/js',
		buildSrc: 'temp/**/*.es.js',
		bundleFileName: 'bundle.js',
		gulp: gulp,
		soyDest: 'temp',
		soySrc: 'temp/**/*.soy',
		taskPrefix: 'metal:'
	});

	gulp.task('metal', function(cb) {
		runSequence('metal:prep', 'metal:build:js', cb);
	});

	gulp.task('metal:prep', function() {
		var componentTemplate = _.template(fs.readFileSync(path.join(__dirname, '../templates/component.tpl')));

		var pagesFilter = filter('src/+(layouts|pages)/**/*.soy', {
			restore: true
		});

		return gulp.src(['src/**/*.soy', 'src/**/*.es.js'])
			.pipe(frontMatter())
			.pipe(pagesFilter)
			.pipe(data(function(file) {
				var filePath = file.path;
				var name = util.getNamespaceFromContents(file);

				var componentContents = componentTemplate({
					name: name,
					soyName: path.basename(filePath)
				});

				filePath = path.relative(
					path.join(process.cwd(), 'src'),
					filePath
				);

				var componentPath = path.join('temp', path.dirname(filePath), name + '.es.js');

				fs.outputFileSync(componentPath, componentContents);

				return file;
			}))
			.pipe(pagesFilter.restore)
			.pipe(gulp.dest('temp'));
	});
};