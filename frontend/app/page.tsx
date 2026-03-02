'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import DarkVeil from '@/components/backgrounds/DarkVeil';
import {
  ShieldCheck, Lock, Cpu, QrCode, FileText,
  ChevronRight, ArrowRight, CheckCircle,
  Zap, Globe, Users, BarChart3
} from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Blockchain Verification',
    desc: 'Every exam paper is hashed and stored on the blockchain. Any tampering is detected instantly with cryptographic proof.',
    color: '#06B6D4',
  },
  {
    icon: Cpu,
    title: 'ESP32 Hardware Lock',
    desc: 'Physical access is controlled by ESP32 microcontrollers with biometric and QR authentication at exam venues.',
    color: '#8B5CF6',
  },
  {
    icon: QrCode,
    title: 'QR-Based Authentication',
    desc: 'Authorised personnel receive unique QR codes linked to their identity and access privileges — no passwords needed.',
    color: '#10B981',
  },
  {
    icon: FileText,
    title: 'Tamper-Proof Records',
    desc: 'Access logs are immutably recorded on-chain. Every view, download, and upload is tracked with a permanent audit trail.',
    color: '#F59E0B',
  },
  {
    icon: Users,
    title: 'Role-Based Access',
    desc: 'Granular permission levels ensure only authorised faculty, invigilators, and admins can access sensitive material.',
    color: '#EF4444',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    desc: 'Live dashboard monitoring access patterns, system health, and security alerts — all in one place.',
    color: '#06B6D4',
  },
];

const steps = [
  { step: '01', title: 'Upload Exam Paper', desc: 'Admin securely uploads the exam paper. The system generates a unique SHA-256 hash.' },
  { step: '02', title: 'Blockchain Anchoring', desc: 'The hash is stored on the blockchain as an immutable record, timestamped and signed.' },
  { step: '03', title: 'Authorise Personnel', desc: 'The admin assigns QR access codes to authorised staff with role-specific permissions.' },
  { step: '04', title: 'Secure Access', desc: 'On exam day, faculty scan their QR at the ESP32 device. The system verifies against the blockchain.' },
];

const stats = [
  { value: '100%', label: 'Tamper Proof', icon: ShieldCheck },
  { value: '< 2s', label: 'Verification Speed', icon: Zap },
  { value: '256-bit', label: 'Encryption', icon: Lock },
  { value: 'Global', label: 'Blockchain Network', icon: Globe },
];

export default function LandingPage() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: '#060010', minHeight: '100vh', fontFamily: 'Inter, Manrope, sans-serif', color: '#F1F5F9', overflowX: 'hidden', position: 'relative' }}>

      {/* ─── DARK VEIL BACKGROUND ─── */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <DarkVeil
          hueShift={200}
          noiseIntensity={0.05}
          scanlineIntensity={0.05}
          speed={0.3}
          scanlineFrequency={0.01}
          warpAmount={0.5}
          resolutionScale={1}
        />
      </div>

      {/* All page content sits above the background */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* ─── NAVBAR ─── */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 2rem', height: '68px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(10,15,30,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(6,182,212,0.15)' : 'none',
          transition: 'all 0.3s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '38px', height: '38px',
              background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)',
              borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 16px rgba(6,182,212,0.4)'
            }}>
              <Lock size={18} color="white" />
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#F1F5F9', letterSpacing: '-0.02em' }}>
              Edu<span style={{ color: '#06B6D4' }}>Vault</span>X
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              id="nav-admin-btn"
              onClick={() => router.push('/admin/login')}
              style={{
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)',
                border: 'none', borderRadius: '0.5rem',
                color: 'white', fontWeight: 700, fontSize: '0.85rem',
                cursor: 'pointer', transition: 'opacity 0.2s',
                boxShadow: '0 0 16px rgba(6,182,212,0.3)'
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Get Started
            </button>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '7rem 2rem 4rem' }}>
          {/* Background orbs */}
          <div style={{ position: 'absolute', top: '15%', left: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(30,58,138,0.25) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)' }} />
          {/* Grid */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.35rem 1rem',
              background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)',
              borderRadius: '999px', marginBottom: '2rem',
              fontSize: '0.8rem', color: '#06B6D4', fontWeight: 600
            }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#06B6D4', animation: 'pulse-dot 2s ease-in-out infinite' }} />
              Blockchain-Secured Examination System
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 900, lineHeight: 1.07,
              letterSpacing: '-0.03em', marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #F1F5F9 30%, #06B6D4 70%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              The Future of Secure<br />Exam Paper Management
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Protect your examination integrity with military-grade blockchain verification, QR authentication, and real-time access monitoring — all in one platform.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                id="hero-get-started-btn"
                onClick={() => router.push('/admin/login')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 2.25rem',
                  background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)',
                  border: 'none', borderRadius: '0.75rem',
                  color: 'white', fontWeight: 700, fontSize: '1rem',
                  cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 30px rgba(6,182,212,0.35)'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(6,182,212,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 30px rgba(6,182,212,0.35)'; }}
              >
                Get Started <ArrowRight size={18} />
              </button>
              <button
                id="hero-learn-more-btn"
                onClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 2rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '0.75rem',
                  color: '#CBD5E1', fontWeight: 600, fontSize: '1rem',
                  cursor: 'pointer', transition: 'border-color 0.2s, background 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#06B6D4'; e.currentTarget.style.background = 'rgba(6,182,212,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              >
                Learn More <ChevronRight size={18} />
              </button>
            </div>

            {/* Trust row */}
            <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              {['SHA-256 Hashing', 'Ethereum Compatible', 'GDPR Compliant'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748B', fontSize: '0.8rem' }}>
                  <CheckCircle size={13} color="#10B981" /> {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section style={{ padding: '5rem 2rem', background: 'rgba(30,41,59,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <s.icon size={28} color="#06B6D4" style={{ margin: '0 auto 0.75rem' }} />
                <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#F1F5F9', letterSpacing: '-0.03em' }}>{s.value}</div>
                <div style={{ color: '#64748B', fontSize: '0.85rem', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FEATURES ─── */}
        <section id="features-section" style={{ padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <p style={{ color: '#06B6D4', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Why EduVaultX</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#F1F5F9', margin: '0 auto', maxWidth: '640px', lineHeight: 1.15 }}>
                Every Layer Secured.<br />Every Action Tracked.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {features.map((f, i) => (
                <div key={i} style={{
                  background: 'rgba(30,41,59,0.6)', backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(51,65,85,0.6)',
                  borderRadius: '1.25rem', padding: '2rem',
                  transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                  cursor: 'default'
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = f.color + '55';
                    el.style.transform = 'translateY(-4px)';
                    el.style.boxShadow = `0 12px 40px ${f.color}22`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(51,65,85,0.6)';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '0.875rem',
                    background: f.color + '18', border: `1px solid ${f.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <f.icon size={24} color={f.color} />
                  </div>
                  <h3 style={{ color: '#F1F5F9', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.625rem' }}>{f.title}</h3>
                  <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section id="how-it-works-section" style={{ padding: '7rem 2rem', background: 'rgba(15,23,42,0.7)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <p style={{ color: '#06B6D4', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>How It Works</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#F1F5F9', maxWidth: '560px', margin: '0 auto', lineHeight: 1.15 }}>
                Four Simple Steps to Total Security
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {steps.map((s, i) => (
                <div key={i}
                  onClick={() => setActiveStep(i)}
                  style={{
                    background: activeStep === i
                      ? 'linear-gradient(135deg, rgba(30,58,138,0.4), rgba(6,182,212,0.15))'
                      : 'rgba(30,41,59,0.4)',
                    border: `1px solid ${activeStep === i ? 'rgba(6,182,212,0.4)' : 'rgba(51,65,85,0.4)'}`,
                    borderRadius: '1.25rem', padding: '2rem',
                    cursor: 'pointer', transition: 'all 0.4s ease',
                    boxShadow: activeStep === i ? '0 0 30px rgba(6,182,212,0.15)' : 'none'
                  }}
                >
                  <div style={{
                    fontSize: '2.5rem', fontWeight: 900,
                    color: activeStep === i ? '#06B6D4' : 'rgba(100,116,139,0.4)',
                    lineHeight: 1, marginBottom: '1rem',
                    transition: 'color 0.4s'
                  }}>{s.step}</div>
                  <h3 style={{ color: '#F1F5F9', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ color: '#64748B', fontSize: '0.83rem', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA BANNER ─── */}
        <section style={{ padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(30,58,138,0.5), rgba(6,182,212,0.2))',
              border: '1px solid rgba(6,182,212,0.3)',
              borderRadius: '2rem', padding: '4rem 3rem',
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent)', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(30,58,138,0.3), transparent)', borderRadius: '50%' }} />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <ShieldCheck size={52} color="#06B6D4" style={{ margin: '0 auto 1.5rem', display: 'block' }} />
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#F1F5F9', marginBottom: '1rem', lineHeight: 1.15 }}>
                  Ready to Secure Your Exams?
                </h2>
                <p style={{ color: '#94A3B8', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.65 }}>
                  Get started in minutes. Access the dashboard to manage users, upload exam papers, and monitor the blockchain in real-time.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    id="cta-login-btn"
                    onClick={() => router.push('/admin/login')}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.875rem 2.25rem',
                      background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)',
                      border: 'none', borderRadius: '0.75rem',
                      color: 'white', fontWeight: 700, fontSize: '1rem',
                      cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s',
                      boxShadow: '0 4px 30px rgba(6,182,212,0.35)'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    Login to Dashboard <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '2.5rem 2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem',
          background: 'rgba(10,15,30,0.8)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div style={{
              width: '28px', height: '28px',
              background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)',
              borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Lock size={13} color="white" />
            </div>
            <span style={{ color: '#64748B', fontSize: '0.82rem' }}>
              © 2026 <span style={{ color: '#94A3B8', fontWeight: 600 }}>EduVaultX</span>. Blockchain-powered exam security.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Admin Login', 'Features', 'How It Works'].map((link, i) => (
              <button
                key={i}
                onClick={() => {
                  if (link === 'Admin Login') router.push('/admin/login');
                  else if (link === 'Features') document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
                  else document.getElementById('how-it-works-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#06B6D4')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748B')}
              >
                {link}
              </button>
            ))}
          </div>
        </footer>

        <style>{`
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.2); }
                }
                input { box-sizing: border-box; }
                * { margin: 0; padding: 0; }
                html { scroll-behavior: smooth; }
            `}</style>
      </div>
    </div>
  );
}

