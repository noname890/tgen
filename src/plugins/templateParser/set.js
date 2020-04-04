// plugin used to create variables inside a template.
const mem = require('../../lib/utils/mem.js');

exports.pluginInfo = {
	set: {
		version: 'v1.0.0',
		author: 'NoName',
		repo: '',
		extends: 'set',
		description: 'Adds a variable.'
	}
};

exports.templateKeys = {
	set: (objStructure) => {
		for (const key in objStructure) {
			mem.newVar(objStructure[key], key);
		}
	}
};