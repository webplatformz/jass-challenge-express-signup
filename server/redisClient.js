const config = require('config');
const redis = require('redis');

const client = redis.createClient({ url: config.get('redisUrl') });

client.on('error', err => console.error(err));

module.exports = client;
