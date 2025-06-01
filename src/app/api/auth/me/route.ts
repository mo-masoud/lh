import { NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/auth';

// Force Node.js runtime for Prisma compatibility
export const runtime = 'nodejs';

export async function GET() {
    try {
        const user = await getAuthUser();
        
        if (!user) {
            return NextResponse.json({ user: null }, { status: 401 });
        }

        return NextResponse.json({ user });
    } catch (error) {
        console.error('Error checking auth status:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
