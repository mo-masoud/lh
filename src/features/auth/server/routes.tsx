import { Hono } from 'hono';

export default new Hono().post('/login', (c) => {
    return c.json({
        message: 'Hello from Auth!',
    });
});
