import { experience } from '../data.js';

export default function Resume() {
  return (
    <section id="resume" className="section narrow">
      <h2>Resume</h2>
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.what}><span>{e.when}</span><strong>{e.what}</strong><em>{e.note}</em></li>
        ))}
      </ol>
      <a className="btn primary" href="resume.pdf" download>Download resume (PDF)</a>
    </section>
  );
}
