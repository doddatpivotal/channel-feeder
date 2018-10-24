module.exports = config => {

    const fetch = require('node-fetch');

    var channelUrl = process.env['target-url'] || 'http://echo.default.svc.cluster.local';
    var message = null;

    // input config = { channelUrl:xxx, message:n }
    if (config.hasOwnProperty) {
        if (config.hasOwnProperty('channelUrl')) {
            channelUrl = config.channelUrl
        }
        if (config.hasOwnProperty('message')) {
            message = config.message
        }
    }

    var jsonString = JSON.stringify(message)

    fetch(channelUrl, {
        method: 'POST',
        body: jsonString,
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => console.log('posted %s to %s %s', jsonString, channelUrl, res.status))
    .catch(err => console.log(err));

    var out = `posting ${jsonString} to ${channelUrl}/s`;
    console.log(out);
    return out;

}