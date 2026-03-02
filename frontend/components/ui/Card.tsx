import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
}

export function Card({ children, className, hover = false, glow = false }: CardProps) {
    return (
        <div
            className={cn(
                'bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-6',
                'shadow-[var(--shadow-card)]',
                hover && 'card-hover cursor-pointer',
                glow && 'animate-glow',
                className
            )}
        >
            {children}
        </div>
    );
}

interface MetricCardProps {
    title: string;
    value: string | number;
    icon?: React.ReactNode;
    trend?: {
        value: number;
        isPositive: boolean;
    };
}

export function MetricCard({ title, value, icon, trend }: MetricCardProps) {
    return (
        <Card hover className="animate-fade-in">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-[var(--color-text-muted)] text-sm font-medium mb-2">{title}</p>
                    <h3 className="text-3xl font-bold text-[var(--color-text)]">{value}</h3>
                    {trend && (
                        <p className={cn(
                            'text-sm mt-2',
                            trend.isPositive ? 'text-green-500' : 'text-red-500'
                        )}>
                            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
                        </p>
                    )}
                </div>
                {icon && (
                    <div className="text-[var(--color-accent)] opacity-80">
                        {icon}
                    </div>
                )}
            </div>
        </Card>
    );
}
