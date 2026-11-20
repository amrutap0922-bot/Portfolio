import { profile } from '../data.js';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="role">{profile.role}</p>
      <h1>{profile.headline}</h1>
      <div className="actions">
        <a className="btn primary" href="#projects">See my projects</a>
        <a className="btn" href="#contact">Get in touch</a>
      </div>
    </section>
  );
}
