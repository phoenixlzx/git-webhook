
var config = require('./config.js')
var gith = require('gith').create(config.bind_port);
var exec = require('child_process').exec;

gith({
    repo: config.repo_name
}).on('all', function(payload) {
    // console.log(payload)
    exec('cd ' + config.repo_location + ' && git pull ' + config.repo_remote, function(err, stdout, stderr) {
	if (err) throw err;
	if (config.additional_cmd) {
	    exec(additional_cmd, function(err, stdout, stderr) {
		if (err) throw err;
		console.log('Command complete.');
	    });
	}
	console.log('done.')
    });
});