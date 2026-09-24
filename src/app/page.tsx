'use client'

import dynamic from 'next/dynamic'
import {
  Layers,
  Cpu,
  RefreshCw,
  Server,
  Database,
  Terminal,
  Bot,
  ShieldCheck,
  Download,
  Mail,
  ExternalLink,
  Sparkles,
  Workflow,
  Boxes,
  Code2,
} from 'lucide-react'

const ThreeDScene = dynamic(() => import('@/components/ThreeDScene'), {
  ssr: false,
})

export default function Home() {
  const metrics = [
    {
      value: '30+',
      label: 'Enterprise Web Projects',
      subtext: 'Integration, Migrations v9 → v13/v14 & Long-Term Support',
      icon: <Layers className="w-5 h-5 text-[#FF8700]" />,
    },
    {
      value: '6+ Years',
      label: 'International Experience',
      subtext: 'Full-cycle TYPO3 architecture, extensions & backend engineering',
      icon: <Cpu className="w-5 h-5 text-[#00A3FF]" />,
    },
    {
      value: 'v9 → v14',
      label: 'Major Upgrade Workflows',
      subtext: 'PSR-14 events, Dependency Injection & modern PHP 8.x',
      icon: <RefreshCw className="w-5 h-5 text-[#FF8700]" />,
    },
  ]

  const services = [
    {
      title: 'Enterprise TYPO3 Migrations',
      badge: 'Zero-Downtime Upgrades',
      desc: 'Complete end-to-end upgrade workflows from legacy v9.5 LTS installations directly to modern TYPO3 v13/v14 with comprehensive PHP 8 refactoring and schema migrations.',
      icon: <RefreshCw className="w-7 h-7 text-[#FF8700]" />,
      highlights: ['v9.5 to v13/v14 direct pathways', 'PSR-14 Event listeners', 'PHP 8.2 / 8.3 modernization'],
    },
    {
      title: 'Custom Extension Architecture',
      badge: 'Extbase & Fluid',
      desc: 'Tailor-made Extbase and Fluid development with clean domain-driven models, high-performance database indexing, and secure RESTful API integrations.',
      icon: <Code2 className="w-7 h-7 text-[#00A3FF]" />,
      highlights: ['Domain-Driven Design (DDD)', 'Custom TCA configuration', 'REST & GraphQL endpoints'],
    },
    {
      title: 'Full-Cycle Web Support & Maintenance',
      badge: 'Scalability & DevOps',
      desc: 'Integration and long-term maintenance of 30+ complex multi-site setups, performance tuning, automated security auditing, and rock-solid CI/CD deployments.',
      icon: <ShieldCheck className="w-7 h-7 text-[#FF8700]" />,
      highlights: ['30+ enterprise platforms', 'DDEV / Docker virtualization', 'GitLab CI/CD automated test & build'],
    },
  ]

  const techCategories = [
    {
      title: 'TYPO3 Core & CMS',
      icon: <Boxes className="w-5 h-5 text-[#FF8700]" />,
      color: '#FF8700',
      tags: ['TYPO3 v9 — v14', 'Extbase Framework', 'Fluid Engine', 'TypoScript', 'Major Upgrades (v9→v14)', 'Powermail', 'Formhandler', 'TCA'],
    },
    {
      title: 'PHP & Backend',
      icon: <Server className="w-5 h-5 text-[#00A3FF]" />,
      color: '#00A3FF',
      tags: ['PHP 8.2 / 8.3', 'MySQL / MariaDB', 'REST APIs', 'Composer 2.x', 'OOP / PSR Standards', 'Doctrine DBAL'],
    },
    {
      title: 'DevOps & Infrastructure',
      icon: <Terminal className="w-5 h-5 text-[#00A3FF]" />,
      color: '#00A3FF',
      tags: ['Docker', 'DDEV', 'Git / GitLab CI/CD', 'GitFlow', 'Linux (Debian/Mint)', 'SSH / Server Admin', 'Nginx / Apache'],
    },
    {
      title: 'AI & Modern Workflows',
      icon: <Bot className="w-5 h-5 text-[#FF8700]" />,
      color: '#FF8700',
      tags: ['MCP (Model Context Protocol)', 'Claude Code / AI Agents', 'Automated Pipelines', 'Three.js / WebGL', 'Tailwind CSS', 'TypeScript'],
    },
  ]

  return (
    <div
      style={{
        backgroundColor: '#020C1B',
        color: '#FFFFFF',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        minHeight: '100vh',
        width: '100%',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
      }}
    >
      <ThreeDScene />

      {/* Floating Glass Navigation */}
      <header
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          width: '92%',
          maxWidth: '1100px',
          background: 'rgba(2, 12, 27, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          padding: '12px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#FF8700', boxShadow: '0 0 10px #FF8700' }} />
          <span style={{ fontWeight: 800, fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Ihor Bondarenko
          </span>
        </div>

        <nav style={{ display: 'flex', gap: '22px', fontSize: '13px', fontWeight: 500, color: '#94A3B8' }}>
          <a href="#services" style={{ color: '#CBD5E1', textDecoration: 'none', transition: 'color 0.2s' }}>Services</a>
          <a href="#stack" style={{ color: '#CBD5E1', textDecoration: 'none', transition: 'color 0.2s' }}>Tech Stack</a>
          <a href="#contact" style={{ color: '#CBD5E1', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</a>
        </nav>

        <a
          href="mailto:bondarenko.igor.contact@gmail.com"
          style={{
            background: 'linear-gradient(135deg, #FF8700 0%, #FF9B26 100%)',
            color: '#000000',
            fontWeight: 700,
            fontSize: '12px',
            padding: '9px 20px',
            borderRadius: '9999px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 15px rgba(255, 135, 0, 0.3)',
          }}
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Contact Me</span>
        </a>
      </header>

      {/* Main Container */}
      <main
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '140px 24px 100px 24px',
        }}
      >
        {/* HERO SECTION */}
        <section style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(255, 135, 0, 0.1)', border: '1px solid rgba(255, 135, 0, 0.3)', width: 'fit-content' }}>
            <Sparkles className="w-4 h-4 text-[#FF8700]" />
            <span style={{ color: '#FF8700', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Senior TYPO3 Developer & Web Architect
            </span>
          </div>

          <div>
            <h1
              style={{
                fontSize: 'clamp(44px, 7vw, 76px)',
                fontWeight: 900,
                lineHeight: 1.08,
                margin: '0 0 20px 0',
                letterSpacing: '-1.5px',
              }}
            >
              Ihor Bondarenko
            </h1>
            <p
              style={{
                fontSize: 'clamp(18px, 2.5vw, 22px)',
                color: '#94A3B8',
                maxWidth: '780px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Specializing in high-performance <span style={{ color: '#FFFFFF', fontWeight: 600 }}>TYPO3 CMS</span> solutions, custom <span style={{ color: '#FF8700', fontWeight: 600 }}>Extbase & Fluid</span> extensions, enterprise version upgrades (<span style={{ color: '#00A3FF', fontWeight: 600 }}>v9 → v13/v14</span>), and cutting-edge <span style={{ color: '#FFFFFF', fontWeight: 600 }}>AI/MCP workflows</span>.
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="mailto:bondarenko.igor.contact@gmail.com"
              style={{
                background: 'linear-gradient(135deg, #FF8700 0%, #FF9B26 100%)',
                color: '#000000',
                padding: '14px 30px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 6px 25px rgba(255, 135, 0, 0.35)',
              }}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>

            <a
              href="https://linkedin.com/in/isbondarenko"
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <ExternalLink className="w-4 h-4 text-[#00A3FF]" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href="mailto:bondarenko.igor.contact@gmail.com?subject=Request%20CV%20-%20Ihor%20Bondarenko"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                color: '#CBD5E1',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '14px 24px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Download className="w-4 h-4 text-[#94A3B8]" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Key Metrics Banner */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '18px',
              marginTop: '20px',
            }}
          >
            {metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.55)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '32px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
                    {m.value}
                  </span>
                  <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.04)' }}>
                    {m.icon}
                  </div>
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#F1F5F9' }}>{m.label}</div>
                <div style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.5 }}>{m.subtext}</div>
              </div>
            ))}
          </div>

        </section>

        {/* SECTION: KEY SERVICES & IMPACT */}
        <section id="services" style={{ marginTop: '110px' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#FF8700', fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
              <Workflow className="w-4 h-4" />
              <span>Core Specialization</span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>
              Key Services & Engineering Impact
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '24px',
            }}
          >
            {services.map((srv, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.5)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.35)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ padding: '12px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      {srv.icon}
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', padding: '4px 10px', borderRadius: '9999px', background: 'rgba(255, 135, 0, 0.1)', color: '#FF8700', border: '1px solid rgba(255, 135, 0, 0.25)' }}>
                      {srv.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '21px', fontWeight: 700, margin: '0 0 12px 0', color: '#FFFFFF' }}>
                    {srv.title}
                  </h3>

                  <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                    {srv.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {srv.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#CBD5E1' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#FF8700' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: TECH STACK WITH ICONS */}
        <section id="stack" style={{ marginTop: '120px' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#00A3FF', fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
              <Cpu className="w-4 h-4" />
              <span>Technology Matrix</span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>
              Architected for Performance & Scalability
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}
          >
            {techCategories.map((cat, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.5)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)' }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, margin: 0, color: '#FFFFFF' }}>
                    {cat.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        display: 'inline-block',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#E2E8F0',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: CALL TO ACTION & CONTACT */}
        <section
          id="contact"
          style={{
            marginTop: '120px',
            background: 'radial-gradient(ellipse at center, rgba(255, 135, 0, 0.1) 0%, rgba(15, 23, 42, 0.6) 100%)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 135, 0, 0.25)',
            borderRadius: '28px',
            padding: '60px 32px',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(255, 135, 0, 0.15)', border: '1px solid rgba(255, 135, 0, 0.3)', marginBottom: '20px' }}>
            <Sparkles className="w-4 h-4 text-[#FF8700]" />
            <span style={{ color: '#FF8700', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Available for Contracts & Remote Roles
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, margin: '0 0 16px 0', letterSpacing: '-1px' }}>
            Let&apos;s Engineer Your Next TYPO3 Milestone.
          </h2>

          <p style={{ color: '#94A3B8', maxWidth: '600px', margin: '0 auto 36px auto', fontSize: '16px', lineHeight: 1.6 }}>
            Looking for a Senior TYPO3 Developer for major version upgrades, complex Extbase extension architecture, or modern DevOps workflows?
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="mailto:bondarenko.igor.contact@gmail.com"
              style={{
                background: 'linear-gradient(135deg, #FF8700 0%, #FF9B26 100%)',
                color: '#000000',
                padding: '16px 36px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 6px 30px rgba(255, 135, 0, 0.4)',
              }}
            >
              <Mail className="w-5 h-5" />
              <span>bondarenko.igor.contact@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/isbondarenko"
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '16px 28px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <ExternalLink className="w-5 h-5 text-[#00A3FF]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer style={{ marginTop: '80px', textAlign: 'center', color: '#64748B', fontSize: '13px' }}>
          © {new Date().getFullYear()} Ihor Bondarenko. Built with Next.js, Three.js & Tailwind CSS.
        </footer>
      </main>
    </div>
  )
}
