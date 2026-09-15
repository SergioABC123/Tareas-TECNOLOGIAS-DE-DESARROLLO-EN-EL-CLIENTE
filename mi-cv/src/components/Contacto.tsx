import { useState } from 'react';
import type { DatosContacto } from '../types';

function Contacto() {
  const [datos, setDatos] = useState<DatosContacto>({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDatos((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos del formulario de contacto:', datos);
    setEnviado(true);
  };

  return (
    <section className="section" id="contacto">
      <div className="container">
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Contacto</h2>

        {enviado ? (
          <p style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
            ¡Gracias, {datos.nombre}! Tu mensaje fue recibido.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}
          >
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={datos.nombre}
              onChange={handleChange}
              required
              style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={datos.email}
              onChange={handleChange}
              required
              style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              value={datos.mensaje}
              onChange={handleChange}
              required
              rows={4}
              style={{ padding: '0.6rem', border: '1px solid var(--color-border)', fontFamily: 'inherit' }}
            />
            <button type="submit" className="btn">Enviar</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contacto;