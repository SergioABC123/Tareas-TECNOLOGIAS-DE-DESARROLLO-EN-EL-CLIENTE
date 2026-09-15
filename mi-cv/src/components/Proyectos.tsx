import { proyectos } from '../data/cvData';

function Proyectos() {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Proyectos</h2>

        {proyectos.map((proyecto) => (
          <div key={proyecto.id} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem' }}>{proyecto.nombre}</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>{proyecto.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;