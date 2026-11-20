import { profile } from '../data.js';

export default function About() {
  return (
    <section id="about" className="section narrow">
      <h2>About me</h2>
      {profile.about.map((p) => <p key={p}>{p}</p>)}
    </section>
  );
}
