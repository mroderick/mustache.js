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

	buster.testCase('Partial - recursion', {
		'should do something': function(){
			var template = 
					'{{name}}\n' +
					'{{#kids}}' +
					'{{>partial}}' +
					'{{/kids}}'
				,
				partial =
					'{{name}}\n' +
					'{{#children}}' +
					'{{>partial}}' +
					'{{/children}}'
				,
				view = {
					name: '1',
					kids: [
						{
							name: '1.1',
							children: [
								{
									name: '1.1.1'
								}
							]
						}
					]
				},
				expectedResult =
					'1\n' +
					'1.1\n' +
					'1.1.1\n'
				,
				actualResult = Mustache.to_html( template, view, { partial : partial } );
		
			assert.equals( actualResult, expectedResult );
		}
	}); 
}(this));