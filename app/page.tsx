'use client';

import React from 'react';
import Link from 'next/link';

const SectionLabel = ({ number, title }: { number: string; title: string }) => (
  <div className="md:col-span-4">
    <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
      {number} // {title}
    </h2>
  </div>
);

const Hero = () => (
  <section className="pt-32 pb-16 border-b border-black/10">
    <div className="flex flex-col items-start text-left">
      <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-black mb-8">
        SUPALAAAK<span className="text-gray-300">.</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light">
        Investigative Data Analyst. Operative in AI, Quantitative Finance, and systemic forensics.
      </p>
    </div>
  </section>
);

const Profile = () => (
  <section className="py-24 border-b border-black/10">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
      <SectionLabel number="01" title="Background" />
      <div className="md:col-span-8 text-left">
        <p className="text-xl md:text-2xl leading-relaxed text-black mb-16 font-light">
          Operating at the intersection of machine intelligence and deep-dive investigation. 
          Discretion is priority; results are the only metric.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 pt-10 border-t border-black/5">
          <div className="space-y-4">
            <h3 className="text-black text-xs font-mono uppercase tracking-widest font-bold">Core Experience</h3>
            <ul className="text-[11px] space-y-3 text-gray-500 font-mono">
              <li>[+] 10+Y PREDICTIVE MODELING</li>
              <li>[+] 05Y FIN-DATA ARCHITECTURE</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-black text-xs font-mono uppercase tracking-widest font-bold">Validated Credentials</h3>
            <ul className="text-[11px] space-y-3 text-gray-500 font-mono">
              <li>[+] CFA LEVEL II (CLEARED)</li>
              <li>[+] CERTIFIED FRM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Operations = () => (
  <section className="py-24 border-b border-black/10">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
      <SectionLabel number="02" title="Operations" />
      <div className="md:col-span-8">
        <div className="space-y-20">
          <div className="group">
            <h3 className="text-3xl text-black mb-4 group-hover:text-gray-400 transition-colors duration-500">
              Forensic Intelligence
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-lg font-light">
              Advanced data recovery and pattern analysis for sensitive investigations. High-stakes environment only.
            </p>
            <div className="inline-block text-[9px] font-mono border border-black/10 px-4 py-1 uppercase text-gray-400 tracking-widest">
              Classification: Restricted
            </div>
          </div>

          <div className="group">
            <h3 className="text-3xl text-black mb-4 group-hover:text-gray-400 transition-colors duration-500">
              Structural Analysis
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-lg font-light">
              Exposing systemic literacy gaps and data-driven trends within the Thai education sector.
            </p>
            <div className="inline-block text-[9px] font-mono border border-black/10 px-4 py-1 uppercase text-gray-400 tracking-widest">
              Status: Active Research
            </div>
          </div>
        </div>

        <div className="mt-24">
          {/* Changed 'flex inline-block' to 'inline-flex' */}
          <Link href="/work" className="group inline-flex items-center gap-4">
            <div className="w-12 h-[1px] bg-black/20 group-hover:w-20 group-hover:bg-black transition-all duration-500"></div>
            <span className="text-xs font-mono uppercase tracking-[0.4em] text-black group-hover:translate-x-2 transition-transform duration-500">
              Access Public Work Index &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-40">
    <div className="flex flex-col items-start">
      <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/30 mb-10">03 // Inquiries</h2>
      <p className="text-gray-600 mb-12 max-w-md text-lg font-light leading-relaxed">
        Full dossier available upon request for verified agencies and institutional partners.
      </p>
      <a 
        href="mailto:supalaaak@gmail.com" 
        className="group relative overflow-hidden border border-black/20 px-12 py-5 text-xs font-mono uppercase tracking-[0.3em] transition-all hover:border-black"
      >
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Initiate Contact</span>
        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </a>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white antialiased">
      <div className="max-w-6xl mx-auto px-8 md:px-20">
        <Hero />
        <Profile />
        <Operations />
        <Contact />
        
        <footer className="py-16 border-t border-black/5 text-[9px] font-mono text-gray-400 flex justify-between uppercase tracking-[0.4em]">
          <span>© {new Date().getFullYear()} SUPALAAAK CORE</span>
          <span className="animate-pulse text-black/20">EOD_SIGNAL_STABLE</span>
        </footer>
      </div>
    </main>
  );
}