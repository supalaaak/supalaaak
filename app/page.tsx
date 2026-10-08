import Link from 'next/link';

export default function Home() {
  return (
    <main className="reading-page">
      <nav className="reading-nav" aria-label="Navigation">
        <span>SUPALAAAK</span>
        <Link href="/work">Work →</Link>
      </nav>
      <div className="reading-body">
        <header className="reading-header">
          <h1>SUPALAAAK</h1>
          <p>
            Investigative AI/SI/Data Analyst. Operative in AI, Quantitative Finance,
            and systemic forensics.
          </p>
        </header>

        <div className="reading-article profile-content">
          <section aria-labelledby="background">
            <h2 id="background">Background</h2>
            <p>
              Operating at the intersection of machine intelligence and deep-dive investigation.
              Discretion is priority; results are the only metric.
            </p>
            <p>
              Currently developing and operating an independent knowledge platform for the post-AI era.
              Used internationally, it connects living and observed data with structured knowledge to support
              practical, context-aware decisions.
            </p>
          </section>

          <section aria-labelledby="experience">
            <h2 id="experience">Experience</h2>
            <ul>
              <li>10+ years in predictive modeling</li>
              <li>10+ years in financial data architecture</li>
            </ul>
          </section>

          <section aria-labelledby="credentials">
            <h2 id="credentials">Credentials</h2>
            <ul>
              <li>CFA Level II (cleared)</li>
              <li>Certified FRM</li>
            </ul>
          </section>

          <section aria-labelledby="focus">
            <h2 id="focus">Areas of focus</h2>
            <h3>Forensic Intelligence</h3>
            <p>
              Advanced data recovery and pattern analysis for sensitive investigations.
              High-stakes environment only.
            </p>
            <p>Classification: Restricted</p>

            <h3>Structural Analysis</h3>
            <p>
              Exposing systemic literacy gaps and data-driven trends within the Thai education sector.
            </p>
            <p>Status: Active Research</p>
            <p><Link href="/work">View selected work →</Link></p>
          </section>

          <section aria-labelledby="contact">
            <h2 id="contact">Contact</h2>
            <p>
              Full dossier available upon request for verified agencies and institutional partners.
            </p>
            <p><a href="mailto:supalaaak@gmail.com">supalaaak@gmail.com</a></p>
          </section>
        </div>

        <footer className="reading-footer">© {new Date().getFullYear()} SUPALAAAK</footer>
      </div>
    </main>
  );
}
