import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { signUpSchema } from '../validator-schemas';
const app = new Hono()
    .post('/login', (c) => {
        return c.json({
            message: 'Login successful!',
        });
    })
    .post('/signup', zValidator('json', signUpSchema), (c) => {
        return c.json(c.req.valid('json'), 201);
    });

export default app;
