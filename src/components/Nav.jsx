import { useState } from 'react';
import { profile } from '../data.js';

const links = ['about', 'projects', 'skills', 'resume', 'contact'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a className="brand" href="#top">{profile.name}</a>
      <button className="menu" aria-expanded={open} aria-controls="links" onClick={() => setOpen(!open)}>Menu</button>
      <nav id="links" className={open ? 'links open' : 'links'}>
        {links.map((l) => (
          <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>{l[0].toUpperCase() + l.slice(1)}</a>
        ))}
      </nav>
    </header>
  );
}
