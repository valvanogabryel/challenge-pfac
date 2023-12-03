"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = require("ioredis");
const redis = new ioredis_1.default(process.env.REDIS_URL, {
    password: process.env.REDIS_PASSWORD,
});
redis.on('error', (err) => {
    console.error('Erro de conexão com o Redis:', err);
});
exports.default = redis;
//# sourceMappingURL=redisConnection.js.map