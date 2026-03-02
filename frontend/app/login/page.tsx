'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Mock authentication
        setTimeout(() => {
            if (username && password) {
                toast.success('Login successful!');
                router.push('/dashboard');
            } else {
                toast.error('Please enter username and password');
                setLoading(false);
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-4">
            <div className="w-full max-w-md">
                <div className="bg-[var(--color-card)] rounded-2xl shadow-2xl p-8 animate-fade-in">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl flex items-center justify-center animate-glow">
                            <Lock size={40} className="text-white" />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-2">
                            EduVaultX
                        </h1>
                        <p className="text-[var(--color-text-muted)]">
                            Blockchain Integration System
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-[var(--color-text)] transition-all"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-[var(--color-text)] transition-all"
                                placeholder="Enter your password"
                            />
                        </div>

                        <Button type="submit" className="w-full" size="lg" loading={loading}>
                            Sign In
                        </Button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-xs text-[var(--color-text-muted)] mt-8">
                        Secured by Blockchain Technology
                    </p>
                </div>
            </div>
        </div>
    );
}
