/*jslint white:true, plusplus:true */
/*global
	buster,
	assert,
	Mustache,
	require
*/
(function(global){
	'use strict';
	
	var buster = global.buster || require('buster');	
	var Mustache = global.Mustache || require("../../mustache");

	buster.testCase('Empty list', {
	    'should not generate any output from empty collection': function(){
			var template = 
					'These are the jobs:\n' +
					'{{#jobs}}' +
					'{{.}}\n' +
					'{{/jobs}}'
				,
				view = {
					jobs: []
				},
				expectedResult = 'These are the jobs:\n',
				actualResult = Mustache.to_html( template, view );
		
	        assert.equals( actualResult, expectedResult );
	    }
	});	
}(this));