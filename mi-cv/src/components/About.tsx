import { acercaDeMi } from '../data/cvData';

function About() {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Acerca de mí</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>{acercaDeMi}</p>
      </div>
    </section>
  );
}

export default About;