import { projects } from '../data.js';
import LazyImage from './LazyImage.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="project">
            <LazyImage src={p.image} alt={`Preview of ${p.title}`} />
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <p className="stack">{p.stack.join(', ')}</p>
            <p className="links2">
              {p.live && <a href={p.live}>Open live site</a>}
              {p.repo && <a href={p.repo}>View code</a>}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
