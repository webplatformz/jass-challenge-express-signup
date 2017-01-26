const config = require('config');
const redis = require('redis');

module.exports = redis.createClient({host: config.get('redisHost'), port: config.get('redisPort')});
