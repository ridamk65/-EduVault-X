# Secure Exam Papers - Frontend

> Modern Next.js 14 admin dashboard for managing secure exam papers with blockchain integration

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 Overview

A SaaS-grade admin dashboard for the **Secure Exam Papers Using Blockchain Integration** system. Features a modern UI with smooth animations, comprehensive exam paper management, blockchain verification, and real-time monitoring.

## ✨ Features

- 🔐 **Secure Authentication** - Login system with mock authentication
- 📊 **Dashboard Analytics** - Real-time metrics and charts
- 👥 **User Management** - CRUD operations for authorized staff
- 📤 **File Upload** - Drag-and-drop with automatic SHA-256 hashing
- 🔗 **Blockchain Integration** - Paper hash storage and verification
- 📋 **Access Logs** - Filterable blockchain event viewer
- 📱 **QR Code Generation** - User identification codes
- 🌓 **Dark/Light Mode** - Full theme support
- 📈 **Data Visualization** - Charts using Recharts
- 📥 **Export Functionality** - CSV download for logs
- 🎨 **Premium Design** - Modern UI with Framer Motion animations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Navigate to frontend directory
cd "c:\Users\Pavithra\Desktop\Secure Exampapers\frontend"

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home (redirects to dashboard)
│   ├── login/             # Login page
│   ├── dashboard/         # Dashboard with metrics
│   ├── users/             # User management
│   ├── upload/            # File upload & hashing
│   ├── logs/              # Blockchain logs viewer
│   └── api/               # API routes
│       ├── upload/        # Store paper hash
│       ├── logs/          # Fetch access logs
│       └── verify/        # Verify hash integrity
├── components/
│   ├── layout/            # Navbar, Sidebar
│   ├── ui/                # Reusable UI components
│   └── animations/        # Framer Motion wrappers
├── lib/
│   ├── blockchain.ts      # Blockchain utilities
│   ├── utils.ts           # Helper functions
│   └── constants.ts       # Mock data & constants
└── styles/
    └── globals.css        # Design system
```

## 🎨 Design System

### Color Palette

- **Primary:** Deep Blue (#1E3A8A)
- **Accent:** Electric Cyan (#06B6D4)
- **Neutral:** Slate Gray shades
- **Status:** Green (success), Red (error), Yellow (warning)

### Typography

- **Headings:** Inter (700 weight)
- **Body:** Manrope (400-700 weight)

### Animations

- Page transitions (fade + slide)
- Card hover effects (scale + shadow)
- Button glow animations
- Status pulse indicators

## 🧩 Key Components

### Pages

| Page | Route | Description |
|------|-------|-------------|
| Login | `/login` | Authentication with mock credentials |
| Dashboard | `/dashboard` | Metrics, charts, system status |
| Users | `/users` | CRUD operations, QR generation |
| Upload | `/upload` | File upload, hash generation |
| Logs | `/logs` | Blockchain event viewer, filters |

### UI Components

- **Card** - Base card with hover effects
- **Button** - Multiple variants (primary, outline, danger)
- **Table** - Responsive table with sorting
- **FileUpload** - Drag-and-drop with validation

## 🔗 API Routes

### POST `/api/upload`

Store paper hash to blockchain.

**Request:**
```json
{
  "paperHash": "Qm1234abc...",
  "filename": "exam.pdf",
  "size": 1024000,
  "timestamp": "2026-02-13T10:35:45Z"
}
```

**Response:**
```json
{
  "success": true,
  "txHash": "0xabc123...",
  "message": "Paper hash stored successfully"
}
```

### GET `/api/logs`

Fetch blockchain access logs.

**Response:**
```json
{
  "success": true,
  "logs": [...],
  "count": 5
}
```

### POST `/api/verify`

Verify paper hash integrity.

**Request:**
```json
{
  "paperHash": "Qm1234abc..."
}
```

**Response:**
```json
{
  "valid": true,
  "timestamp": "2026-02-13T10:35:45Z",
  "message": "Hash verified successfully"
}
```

## 🛠️ Technology Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Charts | Recharts |
| Icons | Lucide React |
| Notifications | React Hot Toast |
| QR Codes | qrcode.react |
| Blockchain | ethers.js |

## 📦 Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_BLOCKCHAIN_RPC=http://localhost:8545
```

## 🔧 Configuration

### Blockchain Integration

Currently using mock implementations. To connect to real blockchain:

1. Update `lib/blockchain.ts` with your smart contract addresses
2. Configure RPC endpoint in environment variables
3. Replace mock functions with actual contract calls

### Authentication

Replace mock authentication in `app/login/page.tsx` with your backend API.

## 📱 Responsive Design

- **Desktop:** Full sidebar, multi-column layouts
- **Tablet:** Collapsible sidebar, 2-column grids
- **Mobile:** Top navigation, single-column stacks

## 🎯 Features Checklist

- [x] Next.js 14 with TypeScript
- [x] Tailwind CSS design system
- [x] Dark/light mode toggle
- [x] Responsive layout
- [x] Login page
- [x] Dashboard with metrics
- [x] User management (CRUD)
- [x] File upload with hashing
- [x] Blockchain logs viewer
- [x] API routes (mock)
- [x] Framer Motion animations
- [x] Toast notifications
- [x] QR code generation
- [x] CSV export
- [ ] Real blockchain integration
- [ ] Real authentication
- [ ] PDF report generation

## 🤝 Contributing

This is a college project. For improvements:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 👥 Authors

- **Pavithra** - Initial work

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS
- Framer Motion for smooth animations
- Recharts for data visualization

---

**Built with ❤️ using Next.js 14**
