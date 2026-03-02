import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps {
    headers: string[];
    children: React.ReactNode;
    className?: string;
}

export function Table({ headers, children, className }: TableProps) {
    return (
        <div className={cn('overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border)]', className)}>
            <table className="w-full">
                <thead className="bg-[var(--color-primary)] bg-opacity-10">
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="px-6 py-4 text-left text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                    {children}
                </tbody>
            </table>
        </div>
    );
}

interface TableRowProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export function TableRow({ children, onClick, className }: TableRowProps) {
    return (
        <tr
            onClick={onClick}
            className={cn(
                'bg-[var(--color-card)] hover:bg-[var(--color-primary)] hover:bg-opacity-5 transition-colors',
                onClick && 'cursor-pointer',
                className
            )}
        >
            {children}
        </tr>
    );
}

interface TableCellProps {
    children: React.ReactNode;
    className?: string;
}

export function TableCell({ children, className }: TableCellProps) {
    return (
        <td className={cn('px-6 py-4 text-sm text-[var(--color-text)]', className)}>
            {children}
        </td>
    );
}
