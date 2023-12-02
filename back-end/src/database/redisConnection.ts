import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL, {
  password: process.env.REDIS_PASSWORD,
});

redis.on('error', (err) => {
  console.error('Erro de conexão com o Redis:', err);
});

export default redis;
