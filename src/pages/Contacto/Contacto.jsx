import { useState } from "react";
import { sendContactMessage } from "../../Service/firebaseContact";
import "./Contacto.css";

const Contacto = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "", });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await sendContactMessage(form);
      setSuccess(true);
      setForm({ nombre: "", email: "", mensaje: "" });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h2>Contacto</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input name="nombre" value={form.nombre} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Mensaje</label>
        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} required />

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>

        {success && <p className="success">Mensaje enviado correctamente ✨</p>}
        {error && <p className="error">No se pudo enviar el mensaje</p>}
      </form>

      <div className="contact-location">
        <iframe className="map"
          src="https://www.google.com/maps?q=Tandil%20Buenos%20Aires&output=embed"
          loading="lazy"
        />

        <div className="location-info">
          <h4>Showroom</h4>
          <p className="info-ubic">Av. Siempre Viva 123</p>
          <p className="info-ubic">Tandil, Buenos Aires</p>
          <p className="info-ubic">Lunes a Viernes</p>
          <p className="info-ubic">10:00 a 18:00 hs</p>
        </div>
      </div>

      <div className="contact-social">
        <p>📧 contacto@joyeria.com</p>
        <p>📸 Instagram: @joyeriaAmfa</p>
        <p>📱 WhatsApp: +54 11 1234-5678</p>
      </div>
    </div>
  );
};

export default Contacto;
