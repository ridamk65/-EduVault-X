'use client';

import { useState } from 'react';
import { UserPlus, Trash2, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Table, TableRow, TableCell } from '@/components/ui/Table';
import { Card } from '@/components/ui/Card';
import { MOCK_USERS } from '@/lib/constants';
import toast from 'react-hot-toast';
import { QRCodeCanvas } from 'qrcode.react';

export default function UsersPage() {
    const [users, setUsers] = useState(MOCK_USERS);
    const [showQR, setShowQR] = useState<string | null>(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', role: '', department: '' });

    const handleAddUser = () => {
        if (!newUser.name || !newUser.role || !newUser.department) {
            toast.error('Please fill all fields');
            return;
        }

        const user = {
            id: `FAC${String(users.length + 1).padStart(3, '0')}`,
            ...newUser,
        };

        setUsers([...users, user]);
        setNewUser({ name: '', role: '', department: '' });
        setShowAddForm(false);
        toast.success('User added successfully!');
    };

    const handleDeleteUser = (id: string) => {
        setUsers(users.filter(u => u.id !== id));
        toast.success('User deleted successfully!');
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center animate-fade-in">
                <div>
                    <h1 className="text-4xl font-bold text-[var(--color-text)] mb-2">User Management</h1>
                    <p className="text-[var(--color-text-muted)]">
                        Manage authorized staff and generate QR codes
                    </p>
                </div>
                <Button onClick={() => setShowAddForm(!showAddForm)} className="gap-2">
                    <UserPlus size={20} />
                    Add User
                </Button>
            </div>

            {/* Add User Form */}
            {showAddForm && (
                <Card className="animate-fade-in">
                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">Add New User</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={newUser.name}
                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                            className="px-4 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-[var(--color-text)]"
                        />
                        <input
                            type="text"
                            placeholder="Role"
                            value={newUser.role}
                            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                            className="px-4 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-[var(--color-text)]"
                        />
                        <input
                            type="text"
                            placeholder="Department"
                            value={newUser.department}
                            onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
                            className="px-4 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-[var(--color-text)]"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={handleAddUser}>Save User</Button>
                        <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
                    </div>
                </Card>
            )}

            {/* Users Table */}
            <div className="animate-fade-in">
                <Table headers={['ID', 'Name', 'Role', 'Department', 'Actions']}>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>
                                <span className="font-mono text-[var(--color-accent)]">{user.id}</span>
                            </TableCell>
                            <TableCell>
                                <span className="font-medium">{user.name}</span>
                            </TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{user.department}</TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => setShowQR(user.id)}
                                    >
                                        <QrCode size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="danger"
                                        onClick={() => handleDeleteUser(user.id)}
                                    >
                                        <Trash2 size={16} />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>
            </div>

            {/* QR Code Modal */}
            {showQR && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in" onClick={() => setShowQR(null)}>
                    <div onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                        <Card className="max-w-sm">
                            <h3 className="text-xl font-bold text-[var(--color-text)] mb-4 text-center">
                                QR Code for {showQR}
                            </h3>
                            <div className="flex justify-center mb-4">
                                <QRCodeCanvas value={showQR} size={200} />
                            </div>
                            <Button onClick={() => setShowQR(null)} className="w-full">Close</Button>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    );
}
