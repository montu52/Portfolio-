export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="tech">{project.tech}</p>
      <a href={project.link} target="_blank">Ver proyecto</a>
    </div>
  );
}
