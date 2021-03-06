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

	buster.testCase('Null string', {
	    'should output null and string as empty string': function(){
			var template = [
					'Hello {{name}}',
					'glytch {{glytch}}',
					'binary {{binary}}',
					'value {{value}}',
					'undef {{undef}}',
					'numeric {{numeric}}'
				].join('\n'),
				view = {
					name: "Elise",
					glytch: true,
					binary: false,
					value: null,
					undef: undefined,
					numeric: function() {
						return NaN;
					}
				},
				expectedResult = [
					'Hello Elise',
					'glytch true',
					'binary false',
					'value ',
					'undef ',
					'numeric NaN'
				].join('\n'),
				actualResult = Mustache.to_html( template, view );
		
	        assert.equals( actualResult, expectedResult );
	    }
	});	
}(this));