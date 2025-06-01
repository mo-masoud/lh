import auth from '@/features/auth/server/routes';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono().basePath('/api');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route('/auth', auth);

export const GET = handle(app);
export const POST = handle(app);

// Force Node.js runtime for Prisma compatibility
export const runtime = 'nodejs';

export type AppType = typeof routes;
