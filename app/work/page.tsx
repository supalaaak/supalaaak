import Link from 'next/link';

const projects = [
  {
    title: 'Literacy Crisis',
    category: 'Education and AI',
    href: '/work/literacy-crisis',
    description: 'An investigation into foundational reading skills, language education, and how human learning compares with AI.',
  },
  {
    title: 'The Invisible Gap',
    category: 'Nutrition research',
    href: '/work/the-invisible-gap',
    description: 'An analysis of 11,394 papers exploring the disconnect between human and veterinary nutrition research.',
  },
];

export default function WorkLandingPage() {
  return (
    <main className="reading-page">
      <nav className="reading-nav" aria-label="Navigation">
        <Link href="/">← Back to profile</Link>
      </nav>
      <div className="reading-body">
        <header className="reading-header">
          <h1>Work</h1>
          <p>Selected research and analysis.</p>
        </header>
        <section aria-label="Selected work">
          {projects.map((project) => (
            <article key={project.href} className="work-entry">
              <h2><Link href={project.href}>{project.title}</Link></h2>
              <p className="work-category">{project.category}</p>
              <p>{project.description}</p>
              <Link href={project.href}>Read article →</Link>
            </article>
          ))}
        </section>
        <footer className="reading-footer">© {new Date().getFullYear()} SUPALAAAK</footer>
      </div>
    </main>
  );
}
