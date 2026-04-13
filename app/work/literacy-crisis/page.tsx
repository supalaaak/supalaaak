'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ── Reference definitions ──────────────────────────────────────────────────
const REFS = {
  pisa_wef: {
    label: "OECD PISA Results – World Economic Forum",
    url: "https://www.weforum.org/stories/2023/12/oecd-pisa-results-maths-reading-skills-education/",
  },
  pisa_niets: {
    label: "PISA Results – NIETS Thailand",
    url: "https://backoffice.niets.or.th/th/content/view/1091",
  },
  ken_goodman: {
    label: "Ken Goodman – Wikipedia",
    url: "https://en.wikipedia.org/wiki/Ken_Goodman",
  },
  doman_flashcard: {
    label: "Doman Flash Card Method – Oreate AI",
    url: "https://www.oreateai.com/blog/controversy-of-the-doman-flash-card-education-method-risks-in-early-childhood-development-from-a-scientific-perspective/6b0012567c05fcbeb403f926fc734c01",
  },
  right_brain: {
    label: "Right-Brain Development Theory – Oreate AI",
    url: "https://www.oreateai.com/blog/the-scientific-origins-and-contemporary-controversies-of-right-brain-development-theory/18cd6e34f414bdc5c213b76c0bb55215",
  },
  reading_in_brain: {
    label: "Reading in the Brain – Dr. Stanislas Dehaene (Amazon)",
    url: "https://www.amazon.com/Reading-Brain-New-Science-Read/dp/0143118056",
  },
  scarborough: {
    label: "Scarborough's Reading Rope – Lexia Learning",
    url: "https://www.lexialearning.com/blog/what-is-scarboroughs-reading-rope",
  },
  naep_ignite: {
    label: "NAEP Reading Test Results – Ignite Reading",
    url: "https://ignite-reading.com/insights/naep-reading-test-results/",
  },
  naep_official: {
    label: "Nation's Report Card 2024 – Grade 4 – NAEP",
    url: "https://www.nationsreportcard.gov/reports/reading/2024/g4_8/?grade=4",
  },
  sold_a_story: {
    label: "Sold a Story – APM Reports",
    url: "https://features.apmreports.org/sold-a-story/",
  },
  your_baby: {
    label: "'Your Baby Can Read' – CBS News",
    url: "https://www.cbsnews.com/news/my-baby-cant-read-company-penalized-for-reading-claims/",
  },
  hard_words: {
    label: "What's Wrong With How Schools Teach Reading – APM Reports",
    url: "https://www.apmreports.org/episode/2019/08/22/whats-wrong-how-schools-teach-reading",
  },
};

// ── Small helper: inline reference link ───────────────────────────────────
function Ref({ id, children }: { id: keyof typeof REFS; children?: React.ReactNode }) {
  const ref = REFS[id];
  return (
    <a
      href={ref.url}
      target="_blank"
      rel="noopener noreferrer"
      title={ref.label}
      className="inline-flex items-baseline gap-[2px] text-black/50 hover:text-black border-b border-dashed border-black/30 hover:border-black transition-colors text-[11px] font-mono leading-none mx-[2px] align-baseline"
    >
      {children ?? `[src]`}
    </a>
  );
}

// ── Footnotes component (bottom of page) ──────────────────────────────────
function Footnotes({ lang }: { lang: 'th' | 'en' }) {
  const label = lang === 'th' ? 'แหล่งอ้างอิง' : 'References';
  const entries = Object.entries(REFS);
  return (
    <section className="mt-20 pt-8 border-t border-black/10">
      <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-black/40 mb-6">{label}</h2>
      <ol className="space-y-2">
        {entries.map(([, ref], i) => (
          <li key={i} className="flex gap-3 text-[11px] font-mono text-black/40 leading-relaxed">
            <span className="shrink-0">{i + 1}.</span>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors break-all"
            >
              {ref.label} — <span className="underline underline-offset-2">{ref.url}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ── English content ────────────────────────────────────────────────────────
function EnglishContent() {
  return (
    <article className="space-y-20">

      {/* ── Intro ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            00 // Introduction
          </h2>
        </div>
        <div className="md:col-span-8 text-lg font-light leading-relaxed text-gray-700 space-y-4">
          <p>
            The question most people ask today is, <strong className="font-semibold text-black">"Will AI replace humans?"</strong> But
            there is another equally important question: <strong className="font-semibold text-black">"Can human foundational reading
            and language comprehension skills match the learning architecture (Foundation) of AI?"</strong> If
            the foundational language comprehension of humans continues to lag behind AI, the inevitable
            question follows: When these children enter the workforce, how can they possibly outperform AI?
          </p>
        </div>
      </section>

      {/* ── 01 The Missing Foundation ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            01 // The Missing Foundation
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-lg font-light leading-relaxed text-gray-700">
            The global decline in reading skills is clearly reflected in the continuous downward trend of the
            Programme for International Student Assessment (PISA) scores.<Ref id="pisa_wef">[PISA / WEF]</Ref>{' '}
            Many articles point to external factors—smartphones, COVID-19—but overlook the root cause:{' '}
            <strong className="font-semibold text-black">"An inaccurate and flawed language curriculum."</strong>
          </p>
          <p className="text-lg font-light leading-relaxed text-gray-700">
            True reading requires an <em>Internal Decoding Model</em> that learners construct within their
            own brains—not merely guessing from context or environmental cues. If modern children cannot build
            an effective Internal Decoding Model from elementary school, how can their advanced skills ever
            rival AI, which possesses a highly advanced and robust Decoding Model?
          </p>
          <div className="bg-gray-50 border-l-2 border-black p-8 italic text-sm text-gray-600">
            "When investigative journalist Emily Hanford asked Goodman if a child reading the word 'horse'
            but saying 'pony' was wrong, Goodman replied it wasn't—because the meaning was close enough.{' '}
            <strong>That is the exact definition of a "Hallucination"</strong> that AI engineers worldwide
            are desperately trying to fix today. Yet, Goodman taught educators that children doing this
            was perfectly normal for over 50 years."
            <Ref id="ken_goodman"> [Ken Goodman / Wikipedia]</Ref>
            <Ref id="hard_words"> [APM Reports: Hard Words]</Ref>
          </div>
        </div>
      </section>

      {/* ── 02 The Reading Wars ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            02 // The Reading Wars
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-lg font-light leading-relaxed text-gray-700">
            The US language curriculum has swung back and forth over the decades—a perfect microcosm of
            the global literacy struggle:
          </p>
          <ol className="space-y-4 text-base text-gray-600 font-light leading-relaxed">
            {[
              {
                era: "Traditional Phonics (Pre-1920s)",
                desc: "America taught children to read through phonics and alphabet memorization. Children had to decode sounds before reading words.",
                ref: null,
              },
              {
                era: "\"Look-Say\" Era — Dick and Jane (1930s–1960s)",
                desc: "Educators deemed phonics \"boring\" and introduced Whole-word theory. Children memorized visual shapes without spelling; they couldn't read unfamiliar words outside their textbooks.",
                ref: null,
              },
              {
                era: "Whole Language Approach (1970s–1980s)",
                desc: "Led by Ken Goodman, reading was framed as a \"psycholinguistic guessing game.\" Children looked at pictures and context to guess a word's meaning rather than decoding it.",
                refId: "ken_goodman" as keyof typeof REFS,
                refLabel: "[Ken Goodman / Wikipedia]",
              },
              {
                era: "Balanced Literacy (1990s–Early 2010s)",
                desc: "A mix of light phonics and Whole Language. At its core it still relied on the \"Three-Cueing System\"—guessing based on pictures, context, and the first letter.",
                ref: null,
              },
              {
                era: "Parents Awakening (2010s–2018)",
                desc: "Parents of children with Dyslexia began protesting, demanding schools teach based on the Science of Reading. Emily Hanford's documentary \"Hard Words\" cracked Balanced Literacy wide open.",
                refId: "hard_words" as keyof typeof REFS,
                refLabel: "[APM Reports: Hard Words]",
              },
              {
                era: "Viral Podcasts & End of Balanced Literacy (2022–Present)",
                desc: "The investigative podcast \"Sold a Story\" exposed that publishers had been selling flawed, unscientific theories to schools for decades. Over 45 US states banned the \"guessing\" method and mandated the Science of Reading.",
                refId: "sold_a_story" as keyof typeof REFS,
                refLabel: "[APM Reports: Sold a Story]",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 font-mono text-[10px] text-black/30 pt-1">{String(i + 1).padStart(2, '0')}.</span>
                <div>
                  <p className="font-semibold text-black text-sm mb-1">{item.era}</p>
                  <p>{item.desc}{' '}
                    {'refId' in item && item.refId && (
                      <Ref id={item.refId}>{item.refLabel}</Ref>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 02b Baby Reading ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            02b // The Flashcard Trap
          </h2>
        </div>
        <div className="md:col-span-8 space-y-5 text-lg font-light leading-relaxed text-gray-700">
          <p>
            Beyond schools, a billion-dollar "early learning" industry has long targeted anxious parents
            globally with rapid baby flashcards and reading videos (e.g., the infamous{' '}
            <em>"Your Baby Can Read"</em> controversy
            <Ref id="your_baby"> [CBS News]</Ref>). These products promise to build{' '}
            <strong className="font-semibold text-black">Photographic Memory</strong> by training toddlers
            to "snapshot" words as images—a direct commercial legacy of Whole Language.
            <Ref id="doman_flashcard"> [Doman Method – Oreate AI]</Ref>
            <Ref id="right_brain"> [Right-Brain Theory – Oreate AI]</Ref>
          </p>
          <p>
            While parents may be thrilled to see their two-year-old visually recognise a flashcard, major
            problems arise when this premature method becomes the foundation of reading.{' '}
            <strong className="font-semibold text-black">
              Emphasising word-shape memorisation blocks the creation of neural pathways essential for
              phonetic Decoding
            </strong>—effectively wiring the brain incorrectly before formal schooling even begins.
          </p>
        </div>
      </section>

      {/* ── 03 Neuroscience ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            03 // Neuroscience Evidence
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-gray-700 font-light leading-relaxed">
          <p className="text-lg">
            Evidence from fMRI scans, notably by Dr. Stanislas Dehaene (author of{' '}
            <em>Reading in the Brain</em>
            <Ref id="reading_in_brain"> [Amazon]</Ref>), proves that{' '}
            <strong className="font-semibold text-black">
              "the human brain is not wired for reading."
            </strong>{' '}
            Speaking and listening are instincts children absorb naturally; reading requires "hacking" the
            brain's architecture to create entirely new neural pathways (Neuroplasticity).
          </p>
          <div className="space-y-4 text-base">
            <div className="border-l-2 border-black/20 pl-5">
              <p className="font-semibold text-black text-sm mb-1">The Decoding Mechanism</p>
              <p>When children learn systematic phonics, the brain builds a bridge between the Visual
              Cortex and the Language Network, creating a specialised hub known as the{' '}
              <strong className="text-black font-semibold">"Visual Word Form Area (VWFA)."</strong> This
              allows automatic, split-second decoding of text into sound.</p>
            </div>
            <div className="border-l-2 border-black/20 pl-5">
              <p className="font-semibold text-black text-sm mb-1">The Broken Logic of Word Guessing</p>
              <p>Brain scans of children taught with Balanced Literacy show abnormal activation in the
              right hemisphere—the area primarily used for facial and image recognition. This "visual
              memory" fills up quickly; when these children encounter new, un-memorised words, their
              decoding system fails entirely because the neural "bridge" was never built.</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-black text-sm mb-3">
              The Nation's Report Card — NAEP 2024
              <Ref id="naep_official"> [NAEP Official]</Ref>
              <Ref id="naep_ignite"> [Ignite Reading]</Ref>
            </p>
            <p className="text-base">
              Latest 2024 statistics reveal that <strong className="text-black font-semibold">69% of
              American 4th graders are not proficient in reading</strong>. Even more staggering, 40% of
              students scored "Below Basic"—the highest level of failure in over 20 years. This data
              exposes a massive equity gap: children from wealthy families often survive flawed school
              curricula because their parents can afford private phonics tutoring, while low-income
              students show significantly higher rates of scoring below basic proficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ── 04 Science of Reading ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            04 // The Renaissance
          </h2>
        </div>
        <div className="md:col-span-8 space-y-5 text-lg font-light leading-relaxed text-gray-700">
          <p>
            The Science of Reading is not a new theory but a culmination of global research across
            neuroscience, psychology, and linguistics. Scientists developed{' '}
            <strong className="font-semibold text-black">Scarborough's Reading Rope</strong>
            <Ref id="scarborough"> [Lexia Learning]</Ref> to illustrate that true reading comprehension
            requires weaving together two main strands:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-base pl-2">
            <li><strong className="text-black">Word Recognition</strong> (relying on systematic Phonics)</li>
            <li><strong className="text-black">Language Comprehension</strong></li>
          </ol>
        </div>
      </section>

      {/* ── 05 Architecture Divergence ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            05 // Architecture Divergence
          </h2>
        </div>
        <div className="md:col-span-8 space-y-10">

          <div>
            <h3 className="text-black font-semibold mb-3 uppercase text-xs font-mono tracking-widest">
              [ Decoding vs. Guessing ]
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              True reading requires an <em>Internal Decoding Model</em>. Premature Whole Language forcing
              causes <strong className="text-black font-semibold">"Early Overfitting"</strong>—turning the
              brain into a fragile Image Classification Model instead of a robust Language Model.
              Researchers and engineers behind world-class AI models dedicate massive resources to building
              the strongest possible Pre-training Models (including Decoding Models) before teaching the
              AI complex skills. The parallel to childhood literacy is striking.
            </p>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-3 uppercase text-xs font-mono tracking-widest">
              [ Consequences of a Flawed Brain Model ]
            </h3>
            <ul className="space-y-4 text-base text-gray-600 font-light leading-relaxed">
              {[
                {
                  term: "Text Misclassification (Hallucination)",
                  desc: "When encountering visually similar words (e.g., house / horse or though / through), the brain model guesses incorrectly because it lacks precision.",
                },
                {
                  term: "Out of Vocabulary (OOV)",
                  desc: "Encountering entirely new words causes a system failure because there is no Sub-word Tokenizer for decoding.",
                },
                {
                  term: "The Illusion of Fluency (Masking Overfitting)",
                  desc: "Children with high memorisation capacity appear to read fluently early on. However, it is pure memorisation (Overfitting). This illusion shatters when they face complex academic texts.",
                },
                {
                  term: 'Cognitive Overload (The Brain\'s "CUDA Out of Memory")',
                  desc: 'Processing words as visual shapes consumes massive human working memory. As sentences lengthen, the child has no "mental RAM" left to comprehend the story\'s actual meaning—cognitive overload hits, and the brain effectively "crashes."',
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-black font-mono text-[10px] pt-1">▸</span>
                  <div>
                    <span className="font-semibold text-black">{item.term}: </span>
                    {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-3 uppercase text-xs font-mono tracking-widest">
              [ Machine Unlearning ]
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              AI engineers know a fundamental truth: when a model overfits, they choose to{' '}
              <strong className="text-black font-semibold">"Train from Scratch"</strong> rather than fix
              it—because Machine Unlearning is exceptionally difficult. Humans, however, lack a "Format"
              button. Biologically, the brain possesses sufficient{' '}
              <strong className="text-black font-semibold">Neuroplasticity</strong> to forge new neural
              pathways at any time. The real issue is deeply ingrained behaviour locked in by a distorted
              application of <strong className="text-black font-semibold">RLHF (Reinforcement Learning
              from Human Feedback)</strong>: parents and teachers acting as flawed "Human Raters" who
              reward guessing, teaching the child's brain that "Guessing = Success."
            </p>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-3 uppercase text-xs font-mono tracking-widest">
              [ The AI NLP Evolution — Parallel Timeline ]
            </h3>
            <div className="space-y-2 text-sm text-gray-600 font-light">
              {[
                { year: "2013", label: "Word2Vec", desc: "Converted words into high-dimensional vectors (king − man + woman ≈ queen)." },
                { year: "2014–16", label: "Seq2Seq + LSTM", desc: "Introduced the Encoder-Decoder architecture for machine translation." },
                { year: "2017", label: "Transformers", desc: "\"Attention Is All You Need\" — abandoned Recurrent networks; processed all tokens simultaneously." },
                { year: "2018", label: "BERT", desc: "Encoder Model that revolutionised Transfer Learning via Masked Language Modeling." },
                { year: "2018–20", label: "GPT Series", desc: "Decoder Model using Autoregressive (Next-word Prediction) processing; GPT-3 achieved Zero-shot / Few-shot learning." },
                { year: "2022", label: "ChatGPT", desc: "The dawn of Generative AI, driven heavily by RLHF to align with human intent." },
                { year: "2023+", label: "Native Multimodal", desc: "Models (Gemini, GPT-4o) process text, image, and audio in a single network from ground-up using Staged / Curriculum Learning to prevent weight corruption." },
              ].map((item) => (
                <div key={item.year} className="flex gap-4 border-b border-black/5 pb-2">
                  <span className="shrink-0 font-mono text-[10px] text-black/30 w-14 pt-[2px]">{item.year}</span>
                  <div>
                    <span className="font-semibold text-black">{item.label} — </span>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Conclusion ── */}
      <section className="border border-black/10 p-12 bg-black text-white">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] mb-8 opacity-50">Conclusion</h2>
        <p className="text-2xl font-light leading-relaxed italic text-gray-300 mb-6">
          In an era where future competitors aren't just other humans, but AI equipped with highly
          efficient Decoder Models, establishing the correct "Learning Architecture" for children from
          day one is more a matter of life and death than ever before.
        </p>
        <p className="text-sm font-light text-gray-400 leading-relaxed">
          Ken Goodman—the man who claimed the human brain learns language naturally—completely{' '}
          <em>"overfitted"</em> to his own theory from the 1970s until his passing at age 92, never
          updating his internal weights a single time.
          <span className="not-italic"> </span>
          <a href={REFS.ken_goodman.url} target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-2 text-gray-400 hover:text-white transition-colors text-xs font-mono">
            [Ken Goodman / Wikipedia]
          </a>
          {' '}We cannot simply "Format" a child's brain and train them from scratch like we do with AI.
        </p>
      </section>

    </article>
  );
}

// ── Thai content ───────────────────────────────────────────────────────────
function ThaiContent() {
  return (
    <article className="space-y-20">

      {/* ── Intro ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            00 // บทนำ
          </h2>
        </div>
        <div className="md:col-span-8 text-lg font-light leading-relaxed text-gray-700 space-y-4">
          <p>
            คำถามที่คนส่วนใหญ่มักสงสัยในยุคนี้คือ{' '}
            <strong className="font-semibold text-black">"AI จะเข้ามาแทนที่มนุษย์ได้หรือไม่?"</strong>{' '}
            แต่แท้จริงแล้ว มีอีกหนึ่งคำถามที่สำคัญไม่แพ้กัน นั่นคือ{' '}
            <strong className="font-semibold text-black">
              "ทักษะการอ่านและความเข้าใจภาษาขั้นพื้นฐานของมนุษย์ในปัจจุบัน สามารถเทียบเคียงกับโครงสร้างการเรียนรู้ (Foundation) ของ AI ได้หรือไม่?"
            </strong>{' '}
            หากระดับความเข้าใจภาษาขั้นพื้นฐานของมนุษย์ยังตามหลัง AI คำถามที่ตามมาคือ
            เมื่อเด็กเหล่านี้เติบโตเข้าสู่วัยทำงาน พวกเขาจะมีประสิทธิภาพการทำงานที่เหนือกว่า AI ได้อย่างไร?
          </p>
        </div>
      </section>

      {/* ── 01 วิกฤตการอ่าน ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            01 // วิกฤตการอ่านและรากฐานที่หายไป
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-lg font-light leading-relaxed text-gray-700">
            ปัญหาเรื่องทักษะการอ่านเห็นผลลัพธ์ได้อย่างชัดเจนจากคะแนนประเมินนักเรียนนานาชาติ (PISA) ทั่วโลก
            ที่มีแนวโน้มตกต่ำลงอย่างต่อเนื่อง
            <Ref id="pisa_wef"> [PISA / WEF]</Ref>
            <Ref id="pisa_niets"> [NIETS ไทย]</Ref>{' '}
            หลายบทความมักพุ่งเป้าไปที่ปัจจัยภายนอก เช่น การใช้สมาร์ตโฟน หรือผลกระทบจากโควิด-19
            ทว่ากลับละเลยปัญหาแก่นแท้ นั่นคือ{' '}
            <strong className="font-semibold text-black">"หลักสูตรการเรียนภาษาที่ขาดความแม่นยำ"</strong>
          </p>
          <p className="text-lg font-light leading-relaxed text-gray-700">
            การอ่านที่แท้จริงต้องอาศัยแบบจำลองการถอดรหัสภาษาที่ผู้เรียนสร้างขึ้นมาเองในสมอง{' '}
            <em>(Internal Decoding Model)</em> ไม่ใช่แค่การเดาเนื้อหาจากบริบทหรือสภาพแวดล้อม
            หากเด็กยุคใหม่ไม่สามารถสร้าง Internal Decoding Model ที่มีประสิทธิภาพได้ตั้งแต่ระดับประถมศึกษา
            ทักษะอื่นๆ ที่ต้องเรียนรู้ต่อยอดหลังจากนั้น จะไปเทียบเท่ากับ AI ที่มีระบบ Decoding Model
            ระดับสูงและแข็งแกร่งได้อย่างไร?
          </p>
          <div className="bg-gray-50 border-l-2 border-black p-8 italic text-sm text-gray-600">
            "เมื่อ Emily Hanford ถามว่า เด็กอ่าน 'horse' แล้วบอกว่า 'pony' ถือว่าผิดไหม Goodman ตอบว่า
            ไม่ผิด เพราะความหมายใกล้เคียงกัน —{' '}
            <strong>นั่นคือนิยามของ Hallucination ที่วิศวกร AI ทั่วโลกกำลังพยายามแก้อยู่ทุกวันนี้</strong>
            แต่ Goodman กลับสอนให้เด็กทำแบบนั้นเป็นเรื่องปกติมานานกว่า 50 ปี"
            <Ref id="ken_goodman"> [Ken Goodman / Wikipedia]</Ref>
            <Ref id="hard_words"> [APM Reports: Hard Words]</Ref>
          </div>
        </div>
      </section>

      {/* ── 02 ประวัติศาสตร์การสอนภาษาไทย ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            02 // ประวัติศาสตร์ภาษาไทย
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-base font-light leading-relaxed text-gray-700">
          <p className="text-lg">การเรียนภาษาไทยผ่านมา 3 ช่วงใหญ่ๆ:</p>
          <div className="space-y-5">
            {[
              {
                era: "ยุคที่ 1: การแจกลูกสะกดคำ (Thai Traditional Phonics) — ก่อน พ.ศ. 2544",
                desc: "สอนให้ผู้เรียนรู้จักเสียงของพยัญชนะ สระ ตัวสะกด และวรรณยุกต์ แล้วนำมาประสมกันเพื่อให้เกิดเป็นคำ เช่น กอ-อา = กา",
              },
              {
                era: "ยุคที่ 2: การอ่านเป็นคำ (Whole Language Approach) — พ.ศ. 2544–2551",
                desc: "สอนการอ่านเป็นคำพร้อมรูปภาพหรือ Flash card ส่งผลให้เด็กไทยหลายคนมีปัญหาการอ่านออกเขียนได้ จนกระทั่ง สมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ ทรงมีพระราชดำริให้กระทรวงศึกษาธิการฟื้นฟูการสอนแบบแจกลูกสะกดคำ ในเดือนมกราคม 2558",
              },
              {
                era: "ยุคที่ 3: แบบผสมผสาน (Balanced Literacy) — ปัจจุบัน",
                desc: "สอนเป็นส่วนผสมระหว่างลูกสะกดคำ (Phonics เป็นเสาหลัก) และ Whole Language (ตัวเสริม สำหรับคำยากหรือคำที่พบบ่อย)",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-black/15 pl-5">
                <p className="font-semibold text-black text-sm mb-1">{item.era}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <p className="font-semibold text-black text-sm mb-2">ปัญหาสถาบัน "พัฒนาสมอง" ที่สอนลัดขั้นตอน</p>
            <p>
              ผู้ปกครองหลายท่านส่งบุตรหลานเรียนสถาบันกวดวิชาเด็กเล็กที่นำแนวคิดของ Glenn Doman หรือ
              Makoto Shichida มาใช้เปิด Flash card ให้ไว เพื่อพัฒนา{' '}
              <strong className="font-semibold text-black">Photographic Memory</strong>
              <Ref id="doman_flashcard"> [Doman Method – Oreate AI]</Ref>
              <Ref id="right_brain"> [Right-Brain Theory – Oreate AI]</Ref>{' '}
              ผลลัพธ์ระยะสั้นอาจดูน่าประทับใจ แต่การเน้นจำรูปคำ{' '}
              <strong className="font-semibold text-black">
                สกัดกั้นการสร้างเส้นใยประสาทที่ใช้สำหรับถอดรหัสเสียง (Decoding)
              </strong>{' '}
              ซึ่งเป็นรากฐานสำคัญในสมองของเด็ก
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 Reading Wars USA ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            03 // สหรัฐอเมริกา
          </h2>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-light leading-relaxed text-gray-700">
          <p className="text-lg">หลักสูตรการเรียนภาษาในอเมริกาได้ปรับเปลี่ยนกลับไปกลับมาตลอดยุคสมัย:</p>
          <ol className="space-y-3 list-decimal list-inside pl-2">
            <li><strong className="text-black">Phonics ดั้งเดิม (ก่อนปี 1920s)</strong> — อเมริกาสอนเด็กให้อ่านด้วย Phonics และการท่องจำตัวอักษร</li>
            <li><strong className="text-black">Look-Say / Dick and Jane (1930s–1960s)</strong> — ให้เด็กดูคำศัพท์ทั้งคำแล้วจำโดยไม่ต้องสะกด</li>
            <li><strong className="text-black">Whole Language Approach (1970s–1980s)</strong> — นำโดย Ken Goodman ให้เด็กดูรูปภาพแล้วเดาความหมาย<Ref id="ken_goodman"> [Wikipedia]</Ref></li>
            <li><strong className="text-black">Balanced Literacy (1990s–ต้น 2010s)</strong> — ผสม Phonics เล็กน้อยกับ Whole Language แก่นแท้ยังใช้ Three-Cueing System</li>
            <li><strong className="text-black">พ่อแม่เริ่มตื่นรู้ (2010s–2018)</strong> — สารคดีเสียง "Hard Words" ของ Emily Hanford เริ่มตีแผ่ปัญหา<Ref id="hard_words"> [APM Reports]</Ref></li>
            <li><strong className="text-black">พอดแคสต์ Viral & อวสาน Balanced Literacy (2022–ปัจจุบัน)</strong> — "Sold a Story" แฉระบบเก่า นำไปสู่การแก้กฎหมายในกว่า 45 รัฐ<Ref id="sold_a_story"> [APM Reports]</Ref></li>
          </ol>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-xs border border-black/10 text-left">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-3 py-2 font-mono font-medium">ยุคสมัย</th>
                  <th className="px-3 py-2 font-mono font-medium">สหรัฐอเมริกา</th>
                  <th className="px-3 py-2 font-mono font-medium">ประเทศไทย</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    era: "จุดเริ่มต้น",
                    us: "1980s–1990s: Whole Language ครองเมือง โรงเรียนทิ้ง Phonics หันมาให้เด็กเดาคำจากภาพ",
                    th: "พ.ศ. 2544: ไทยเริ่มปรับหลักสูตร รับทฤษฎีที่อเมริกาเพิ่งทิ้งมาบังคับใช้",
                  },
                  {
                    era: "ยุคตื่นรู้ / วิกฤต",
                    us: "ปี 2000: รัฐบาลตั้ง National Reading Panel ฟันธงว่า Phonics จำเป็นที่สุด",
                    th: "พ.ศ. 2544–2557: ยุคมืดในไทย เด็กประถมบางส่วนอ่านไม่ออก สะกดคำไม่เป็น",
                  },
                  {
                    era: "การกลับมาของ Phonics",
                    us: "2000s–ปัจจุบัน: Science of Reading สั่งแบนการเดาคำอย่างเด็ดขาด",
                    th: "พ.ศ. 2558: ศธ. น้อมนำพระราชดำริฯ กลับมาเน้นการสอนแบบแจกลูกสะกดคำ",
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-2 font-semibold border-r border-black/10 text-black">{row.era}</td>
                    <td className="px-3 py-2 border-r border-black/10">{row.us}</td>
                    <td className="px-3 py-2">{row.th}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-400 italic mt-2">
              * ความย้อนแย้งแห่งยุคสมัย: ในขณะที่รัฐบาลสหรัฐฯ เบรกทฤษฎี Whole Language ตั้งแต่ปี 2000
              แต่ในปี พ.ศ. 2544 ไทยกลับเพิ่งนำเอาทฤษฎีนี้มาบังคับใช้เป็นหลักสูตรระดับชาติ
            </p>
          </div>
        </div>
      </section>

      {/* ── 04 วิทยาศาสตร์สมอง ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            04 // วิทยาศาสตร์สมอง
          </h2>
        </div>
        <div className="md:col-span-8 space-y-5 text-base font-light leading-relaxed text-gray-700">
          <p className="text-lg">
            Dr. Stanislas Dehaene (ผู้เขียนหนังสือ <em>Reading in the Brain</em>
            <Ref id="reading_in_brain"> [Amazon]</Ref>) พิสูจน์ว่า{' '}
            <strong className="text-black font-semibold">"สมองมนุษย์ไม่ได้เกิดมาเพื่ออ่านหนังสือ"</strong>{' '}
            การอ่านต้องเกิดจากการ "แฮ็ก" โครงสร้างสมองเพื่อสร้างเส้นทางประสาทเส้นใหม่ (Neuroplasticity)
          </p>
          <div className="space-y-3">
            <div className="border-l-2 border-black/20 pl-4">
              <p className="font-semibold text-black text-sm">กลไกการถอดรหัส (Decoding)</p>
              <p>เมื่อเด็กเรียน Phonics อย่างเป็นระบบ สมองจะสร้างสะพานเชื่อมเกิดพื้นที่ทำงานใหม่เรียกว่า{' '}
              <strong className="text-black font-semibold">"Visual Word Form Area (VWFA)"</strong>{' '}
              ทำให้เห็นตัวอักษรแล้วถอดรหัสเป็นเสียงได้อัตโนมัติ</p>
            </div>
            <div className="border-l-2 border-black/20 pl-4">
              <p className="font-semibold text-black text-sm">ตรรกะที่พังทลายของการเดาคำ</p>
              <p>เมื่อสแกนสมองเด็กที่เรียนด้วย Balanced Literacy พบว่าสมองไปกระตุ้นการทำงานที่ซีกขวา
              (ส่วนของการจำรูปภาพ) ทำให้ "เมมโมรี่เต็มเร็ว" เมื่อเจอคำใหม่ สมองจะไม่สามารถถอดรหัสได้</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-black text-sm mb-2">
              สมุดพกของชาติ (NAEP 2024)
              <Ref id="naep_official"> [NAEP Official]</Ref>
              <Ref id="naep_ignite"> [Ignite Reading]</Ref>
            </p>
            <p>
              สถิติล่าสุดปี 2024 ชี้ชัดว่า{' '}
              <strong className="text-black font-semibold">เด็กอเมริกันชั้น ป.4 กว่า 69%
              อ่านหนังสือไม่ถึงเกณฑ์มาตรฐาน (Not Proficient)</strong>{' '}
              และที่น่าตกใจยิ่งกว่าคือเด็ก 40% อ่านได้ต่ำกว่าแม้แต่ระดับ Basic
              ซึ่งเป็นตัวเลขสูงที่สุดในรอบกว่า 20 ปี
            </p>
          </div>
        </div>
      </section>

      {/* ── 05 AI Architecture ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            05 // สถาปัตยกรรม AI vs มนุษย์
          </h2>
        </div>
        <div className="md:col-span-8 space-y-8">

          <div>
            <h3 className="text-black font-semibold mb-3 uppercase text-xs font-mono tracking-widest">
              [ Decoding vs. การเดา ]
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              มนุษย์ต้องการ Internal Decoding Model (Phonics) เพื่อแปลงตัวอักษรเป็นเสียง
              แต่ระบบการศึกษาปัจจุบันกลับสอนให้เด็กจำ "Image" ซึ่งเป็นการสร้าง{' '}
              <strong className="text-black font-semibold">Overfitting</strong> ในสมอง
              นักวิจัยและวิศวกร AI ต่างทุ่มทรัพยากรมหาศาลเพื่อสร้าง Pre-training Model
              (รวมถึง Decoding Model) ให้แข็งแกร่งที่สุดก่อน — ขนานกันกับสิ่งที่เด็กควรได้รับ
            </p>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-3 uppercase text-xs font-mono tracking-widest">
              [ วิวัฒนาการ AI NLP ]
            </h3>
            <div className="space-y-2 text-sm text-gray-600 font-light">
              {[
                { year: "2013", label: "Word2Vec", desc: "แปลงคำให้เป็น vector ในพื้นที่มิติสูง (king − man + woman ≈ queen)" },
                { year: "2014–16", label: "Seq2Seq + LSTM", desc: "สถาปัตยกรรม Encoder-Decoder สำหรับงานแปลภาษา" },
                { year: "2017", label: "Transformers", desc: "เลิกใช้ Recurrent network ประมวลผล input ทุก token พร้อมกัน" },
                { year: "2018", label: "BERT", desc: "Encoder Model ปฏิวัติ Transfer Learning (Masked Language Model)" },
                { year: "2018–20", label: "GPT Series", desc: "Decoder Model ทำงานแบบ Autoregressive; GPT-3 ทำ In-context Learning ได้" },
                { year: "2022", label: "ChatGPT", desc: "ยุคเริ่มต้นของ Generative AI กุญแจสำคัญคือ RLHF" },
                { year: "2023+", label: "Native Multimodal", desc: "รับ Input ผสมผสาน (ข้อความ, ภาพ, เสียง) ในโครงข่ายเดียวกัน ผ่าน Curriculum Learning" },
              ].map((item) => (
                <div key={item.year} className="flex gap-4 border-b border-black/5 pb-2">
                  <span className="shrink-0 font-mono text-[10px] text-black/30 w-14 pt-[2px]">{item.year}</span>
                  <div>
                    <span className="font-semibold text-black">{item.label} — </span>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-3 uppercase text-xs font-mono tracking-widest">
              [ Machine Unlearning ]
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              วิศวกร AI ต่างรู้ดีว่า เมื่อโมเดล Overfit แล้ว พวกเขาจะเลือก{' '}
              <strong className="text-black font-semibold">"Train from Scratch"</strong>{' '}
              แทนที่จะพยายามแก้ไข เพราะกระบวนการ Machine Unlearning นั้นทำได้ยากอย่างยิ่ง
              ในมนุษย์ สมองมี Neuroplasticity มากพอที่จะสร้างเส้นทางประสาทใหม่ได้เสมอ
              แต่ปัญหาแท้จริงคือพฤติกรรมที่ถูกล็อกไว้ด้วย RLHF บิดเบี้ยว:
              พ่อแม่และครูที่ "Endorse" การเดาคำ สอนให้สมองเด็กเรียนรู้ว่า
              "การเดา = ความสำเร็จที่ได้รางวัล"{' '}
              <strong className="text-black font-semibold">
                และที่สำคัญที่สุด… เราไม่สามารถ Format สมองเด็กแล้วลงระบบใหม่ได้เหมือน AI
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── Science of Reading ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 sticky top-12">
            06 // Science of Reading
          </h2>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-light leading-relaxed text-gray-700">
          <p className="text-lg">
            Science of Reading ไม่ใช่ทฤษฎีใหม่ แต่เป็นการสรุปผลการวิจัยระดับโลก
            ด้านประสาทวิทยาศาสตร์ จิตวิทยา และภาษาศาสตร์ นักวิทยาศาสตร์ได้สร้างโมเดล{' '}
            <strong className="text-black font-semibold">Scarborough's Reading Rope</strong>
            <Ref id="scarborough"> [Lexia Learning]</Ref>{' '}
            เพื่ออธิบายว่าการอ่านที่แท้จริงต้องถักทอ 2 เส้นหลักเข้าด้วยกัน:
          </p>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li><strong className="text-black">การถอดรหัสคำ (Word Recognition)</strong> — อาศัย Phonics</li>
            <li><strong className="text-black">ความเข้าใจภาษา (Language Comprehension)</strong></li>
          </ol>
        </div>
      </section>

      {/* ── Conclusion ── */}
      <section className="border border-black/10 p-12 bg-black text-white">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] mb-8 opacity-50">บทสรุป</h2>
        <p className="text-2xl font-light leading-relaxed italic text-gray-300 mb-6">
          ในยุคที่คู่แข่งการทำงานไม่ใช่เพียงคนธรรมดา แต่รวมถึง AI ที่ถูกเทรนและมี Decoder Model
          ที่ทรงประสิทธิภาพ การวางรากฐาน "สถาปัตยกรรมการเรียนรู้" ที่ถูกต้องให้กับเด็กตั้งแต่เริ่มต้น
          จึงเป็นเรื่องชี้เป็นชี้ตายมากกว่าที่เคย
        </p>
        <p className="text-sm font-light text-gray-400 leading-relaxed">
          Ken Goodman — ชายผู้บอกว่าสมองมนุษย์เรียนรู้ภาษาได้เองตามธรรมชาติ — แต่กลับ Overfit
          กับทฤษฎีตัวเองตั้งแต่ปี 1970s จนสิ้นใจตอนอายุ 92 ปี โดยไม่เคย update Weight แม้แต่ครั้งเดียว
          <span> </span>
          <a href={REFS.ken_goodman.url} target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-2 text-gray-400 hover:text-white transition-colors text-xs font-mono">
            [Wikipedia]
          </a>
        </p>
      </section>

    </article>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function LiteracyCrisisPage() {
  const [lang, setLang] = useState<'th' | 'en'>('en');

  const meta = {
    th: {
      tag: "Field Intelligence // Education Sector",
      title: "วิกฤติการศึกษา: Human vs. AI Learning",
      desc: "บทวิเคราะห์ความล้มเหลวของโครงสร้างการเรียนรู้ภาษาพื้นฐาน เมื่อมนุษย์กำลังถูกท้าทายด้วยสถาปัตยกรรมของ AI",
    },
    en: {
      tag: "Field Intelligence // Education Sector",
      title: "Literacy Crisis: Human vs. AI Learning",
      desc: "An analysis of foundational language acquisition failure in the age of advanced AI learning architectures.",
    },
  };

  const active = meta[lang];

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white antialiased">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-8 py-12 flex justify-between items-center border-b border-black/10">
        <Link
          href="/work"
          className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/50 hover:text-black transition-colors"
        >
          &larr; Return to Work Index
        </Link>

        {/* Language Switcher */}
        <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest">
          <button
            onClick={() => setLang('th')}
            className={`transition-colors ${lang === 'th' ? 'text-black font-bold' : 'text-black/20 hover:text-black/50'}`}
          >
            [ THAI ]
          </button>
          <button
            onClick={() => setLang('en')}
            className={`transition-colors ${lang === 'en' ? 'text-black font-bold' : 'text-black/20 hover:text-black/50'}`}
          >
            [ ENGLISH ]
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-8 py-24">
        {/* Header */}
        <header className="mb-24">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 mb-6 block">
            {active.tag}
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-black mb-8 leading-tight">
            {active.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
            {active.desc}
          </p>
        </header>

        {/* Main content, toggled by language */}
        {lang === 'en' ? <EnglishContent /> : <ThaiContent />}

        {/* Footnotes */}
        <Footnotes lang={lang} />

        {/* Footer */}
        <footer className="mt-16 pt-12 border-t border-black/5 flex justify-between items-center text-[9px] font-mono text-gray-400 uppercase tracking-[0.4em]">
          <span>Case ID: 2026-LIT-CRISIS</span>
          <span className="animate-pulse text-black/20">EOD_SIGNAL_STABLE</span>
        </footer>
      </div>
    </main>
  );
}