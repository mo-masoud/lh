import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/jwt';
import { db } from '@/lib/db';

export async function getAuthUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;

    if (!token) {
      return null;
    }

    const payload = verifyToken(token);
    
    const user = await db.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      }
    });

    return user;
  } catch (error) {
    console.error('Auth error:', error);
    return null;
  }
}

export async function requireAuth() {
  const user = await getAuthUser();
  
  if (!user) {
    redirect('/');
  }
  
  return user;
}
