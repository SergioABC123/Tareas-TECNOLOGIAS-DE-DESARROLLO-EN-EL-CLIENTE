import { nombreCompleto, rolProfesional } from '../data/cvData';

function Hero() {
  return (
    <header className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container">
        <h1 style={{ fontSize: '2.5rem' }}>{nombreCompleto}</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
          {rolProfesional}
        </p>
        <a href="#contacto" className="btn" style={{ marginTop: '2rem' }}>
          Contáctame
        </a>
      </div>
    </header>
  );
}

export default Hero;
