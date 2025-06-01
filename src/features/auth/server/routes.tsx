import { db } from '@/lib/db';
import { createToken } from '@/lib/jwt';
import { zValidator } from '@hono/zod-validator';
import bcrypt from 'bcryptjs';
import { Hono } from 'hono';
import { setCookie } from 'hono/cookie';
import { signUpSchema } from '../validator-schemas';

const app = new Hono()
    .post('/login', (c) => {
        return c.json({
            message: 'Login successful!',
        });
    })
    .post('/signup', zValidator('json', signUpSchema), async (c) => {
        try {
            const { email, password, fullName } = c.req.valid('json');

            // Check if user already exists
            const existingUser = await db.user.findUnique({
                where: { email },
            });

            if (existingUser) {
                return c.json({ error: 'User already exists with this email' }, 409);
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 12);

            // Create user
            const user = await db.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name: fullName,
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    createdAt: true,
                },
            });

            // Create JWT token
            const token = createToken({
                userId: user.id,
                email: user.email,
            });

            // Set cookie
            setCookie(c, 'auth-token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 7, // 7 days
                path: '/',
            });

            return c.json(
                {
                    message: 'User created successfully',
                    user,
                },
                201,
            );
        } catch (error) {
            console.error('Signup error:', error);
            return c.json({ error: 'Internal server error' }, 500);
        }
    });

export default app;
