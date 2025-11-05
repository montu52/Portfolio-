import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">Sobre mí</h2>
      <div className="about">
        <img src={profile} alt="Agustín Monteros" />
        <p>
          Soy un desarrollador apasionado por crear experiencias digitales
          modernas, elegantes y eficientes. Me especializo en React, animaciones
          y diseño orientado a la experiencia del usuario.  
          <br /><br />
          Mi enfoque se basa en unir estética y funcionalidad, logrando
          interfaces limpias, dinámicas y con impacto visual.
        </p>
      </div>
    </section>
  );
}
