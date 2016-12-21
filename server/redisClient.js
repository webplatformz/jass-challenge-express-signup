import config from 'config';
import redis from 'redis';

export default redis.createClient({host: config.get('redisHost'), port: config.get('redisPort')});
