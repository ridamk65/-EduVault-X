import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    loading?: boolean;
}

export function Button({
    variant = 'primary',
    size = 'md',
    children,
    loading = false,
    className,
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles = 'font-medium rounded-[var(--radius-md)] transition-all duration-200 flex items-center justify-center gap-2';

    const variants = {
        primary: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white hover:shadow-[var(--shadow-glow)] hover:scale-105',
        secondary: 'bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-accent)]',
        outline: 'bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white',
        danger: 'bg-red-500 text-white hover:bg-red-600 hover:shadow-lg',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <button
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                (disabled || loading) && 'opacity-50 cursor-not-allowed',
                className
            )}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}
            {children}
        </button>
    );
}
