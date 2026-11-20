import { useState } from 'react';
import { profile } from '../data.js';

// Replace YOUR_FORM_ID with a free Formspree (or Netlify Forms) endpoint.
const ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function submit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
      setStatus(res.ok ? 'sent' : 'error');
      if (res.ok) form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section narrow">
      <h2>Contact</h2>
      <p>Prefer email? <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
      <form onSubmit={submit}>
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
        <label>Message<textarea name="message" rows="5" required /></label>
        <button className="btn primary" disabled={status === 'sending'}>Send message</button>
        <p role="status">
          {status === 'sent' && 'Message sent. I will reply soon.'}
          {status === 'error' && 'Could not send. Check your connection or email me directly.'}
        </p>
      </form>
      <p className="social"><a href={profile.github}>GitHub</a> <a href={profile.linkedin}>LinkedIn</a></p>
    </section>
  );
}
