import { tecnologias } from '../data/cvData';

function Tecnologias() {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Tecnologías</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {tecnologias.map((tecnologia) => (
            <span
              key={tecnologia.id}
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '0.4rem 0.9rem',
                fontSize: '0.9rem',
              }}
            >
              {tecnologia.nombre}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tecnologias;