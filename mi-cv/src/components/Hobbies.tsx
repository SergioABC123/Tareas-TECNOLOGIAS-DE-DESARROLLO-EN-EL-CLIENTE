import { hobbies } from '../data/cvData';

function Hobbies() {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Hobbies</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {hobbies.map((hobby) => (
            <span
              key={hobby.id}
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '0.4rem 0.9rem',
                fontSize: '0.9rem',
              }}
            >
              {hobby.nombre}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;