var Twitter = require('twitter');

var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
    consumerKey: 'your consumer Key',
    consumerSecret: 'your consumer secret',
    callback: 'http://yoururl.tld/something'
});

client.stream('statuses/filter', {track: 'wtf'}, function(stream) {

    stream.on('data', function(tweet) {
        console.log(tweet.text);
    });

});
