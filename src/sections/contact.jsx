export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contacto</h2>
      <form className="contact-form">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea placeholder="Mensaje..." rows="5"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
