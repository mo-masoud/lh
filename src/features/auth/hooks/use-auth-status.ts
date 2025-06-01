'use client';

import { useEffect, useState } from 'react';

interface User {
    id: string;
    email: string;
    name: string;
    createdAt: string;
}

export const useAuthStatus = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetch('/api/auth/me', {
                    credentials: 'include'
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Failed to check auth status:', error);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    return {
        user,
        isLoading,
        isAuthenticated: !!user
    };
};
