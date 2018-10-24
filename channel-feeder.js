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

    fetch(channelUrl, {
        method: 'POST',
        body: message,
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => console.log('posted %s to %s %s', message, channelUrl, res.status))
    .catch(err => console.log(err));

    var out = `posting ${message} to ${channelUrl}/s`;
    console.log(out);
    return out;

}