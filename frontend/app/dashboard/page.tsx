'use client';

import { Users, Shield, Clock } from 'lucide-react';
import { MetricCard } from '@/components/ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_USERS, MOCK_LOGS } from '@/lib/constants';
import { formatDate } from '@/lib/utils';

const chartData = [
    { date: '2026-02-09', accesses: 12 },
    { date: '2026-02-10', accesses: 18 },
    { date: '2026-02-11', accesses: 15 },
    { date: '2026-02-12', accesses: 22 },
    { date: '2026-02-13', accesses: 28 },
];

export default function DashboardPage() {
    const totalUsers = MOCK_USERS.length;

    const verifiedLogs = MOCK_LOGS.filter(log => log.status === 'Granted').length;
    const lastAccess = MOCK_LOGS[0];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="animate-fade-in">
                <h1 className="text-4xl font-bold text-[var(--color-text)] mb-2">Dashboard</h1>
                <p className="text-[var(--color-text-muted)]">
                    Overview of your EduVaultX exam management system
                </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MetricCard
                    title="Total Authorized Users"
                    value={totalUsers}
                    icon={<Users size={32} />}
                    trend={{ value: 12, isPositive: true }}
                />

                <MetricCard
                    title="Verified Access Logs"
                    value={verifiedLogs}
                    icon={<Shield size={32} />}
                    trend={{ value: 8, isPositive: true }}
                />
                <MetricCard
                    title="Last Access"
                    value={formatDate(lastAccess.timestamp).split(',')[1].trim()}
                    icon={<Clock size={32} />}
                />
            </div>

            {/* Chart Section */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-card)] animate-fade-in">
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Access Logs Over Time</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                        <XAxis
                            dataKey="date"
                            stroke="var(--color-text-muted)"
                            tick={{ fill: 'var(--color-text-muted)' }}
                        />
                        <YAxis
                            stroke="var(--color-text-muted)"
                            tick={{ fill: 'var(--color-text-muted)' }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'var(--color-card)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '8px',
                                color: 'var(--color-text)',
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="accesses"
                            stroke="var(--color-accent)"
                            strokeWidth={3}
                            dot={{ fill: 'var(--color-accent)', r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* System Status */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-card)] animate-fade-in">
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">System Status</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-dot"></div>
                        <div>
                            <p className="text-sm text-[var(--color-text-muted)]">Blockchain Network</p>
                            <p className="font-semibold text-[var(--color-text)]">Connected</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-dot"></div>
                        <div>
                            <p className="text-sm text-[var(--color-text-muted)]">ESP32 Hardware</p>
                            <p className="font-semibold text-[var(--color-text)]">Online</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-dot"></div>
                        <div>
                            <p className="text-sm text-[var(--color-text-muted)]">Last Blockchain Sync</p>
                            <p className="font-semibold text-[var(--color-text)]">{new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
