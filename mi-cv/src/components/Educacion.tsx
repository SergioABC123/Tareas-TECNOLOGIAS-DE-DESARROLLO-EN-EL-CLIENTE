import { educacion } from '../data/cvData';

function Educacion() {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Educación</h2>

        {educacion.map((item) => (
          <div key={item.id} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem' }}>{item.grado}</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>{item.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Educacion;