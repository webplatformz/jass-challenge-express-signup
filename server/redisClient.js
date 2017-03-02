const config = require('config');
const redis = require('redis');

if (config.get('redisUrl')) {
    module.exports = redis.createClient({ url: config.get('redisUrl') });
} else {
    module.exports = redis.createClient({ host: config.get('redisHost'), port: config.get('redisPort') });
}

