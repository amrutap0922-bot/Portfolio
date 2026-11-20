import { skills } from '../data.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="grid">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3>{group}</h3>
            <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
