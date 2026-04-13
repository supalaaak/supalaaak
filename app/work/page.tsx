'use client';

import React from 'react';
import Link from 'next/link';

interface WorkItemProps {
  number: string;
  title: string;
  category: string;
  href: string;
  description: string;
}

const WorkItem = ({ number, title, category, href, description }: WorkItemProps) => (
  <Link 
    href={href} 
    className="group block py-12 border-b border-black/10 hover:bg-gray-50 transition-colors px-4 -mx-4"
  >
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
      <div className="md:col-span-2">
        <span className="text-[10px] font-mono text-black/30 tracking-[0.3em]">
          {number} //
        </span>
      </div>

      <div className="md:col-span-6">
        <h3 className="text-3xl font-light text-black group-hover:translate-x-2 transition-transform duration-500 ease-out">
          {title}
        </h3>
        <p className="mt-4 text-gray-500 font-light leading-relaxed max-w-md">
          {description}
        </p>
      </div>

      <div className="md:col-span-4 flex flex-col md:items-end justify-between self-stretch space-y-4">
        <span className="text-[9px] font-mono uppercase tracking-widest text-black/40 border border-black/10 px-3 py-1 inline-block">
          {category}
        </span>
        <div className="text-[9px] font-mono uppercase tracking-widest text-black group-hover:underline underline-offset-4">
          View Dossier &rarr;
        </div>
      </div>
    </div>
  </Link>
);

export default function WorkLandingPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white antialiased">
      <div className="max-w-6xl mx-auto px-8 md:px-20">
        
        <nav className="py-12 flex justify-between items-center border-b border-black/10">
          <Link 
            href="/" 
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/50 hover:text-black transition-colors"
          >
            &larr; Back to HQ
          </Link>
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/20">
            Public Work Index
          </span>
        </nav>

        <header className="py-24">
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-black mb-6">
            OPERATIONS<span className="text-gray-300">.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-xl leading-relaxed">
            Records of systemic forensics, deep-level analysis, and public-facing operations.
          </p>
        </header>

        <section className="pb-40">
          <div className="border-t border-black/10">
            <WorkItem 
              number="01"
              title="Literacy Crisis"
              category="Systemic Analysis"
              href="/work/literacy-crisis"
              description="A forensic deep-dive into the architectural divergence between human literacy and AI learning models."
            />

            <WorkItem 
              number="02"
              title="The Invisible Gap"
              category="Field Intelligence"
              href="/work/the-invisible-gap"
              description="An analysis of 11,394 papers reveals why human and veterinary nutritionists have spent decades missing each other's answers."
            />
            
            <div className="py-12 opacity-20 cursor-not-allowed select-none border-b border-black/5">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-2 text-[10px] font-mono tracking-[0.3em]">03 //</div>
                <div className="md:col-span-10">
                  <h3 className="text-3xl font-light uppercase tracking-tighter text-gray-400">[ Encrypted Operation ]</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-16 border-t border-black/5 text-[9px] font-mono text-gray-400 flex flex-col md:flex-row justify-between gap-4 uppercase tracking-[0.4em]">
          <span>© {new Date().getFullYear()} SUPALAK CORE</span>
          <span className="animate-pulse text-black/20">SIGNAL_INDEX_ACTIVE</span>
        </footer>
      </div>
    </main>
  );
}