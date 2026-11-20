import { useState } from 'react';

// Native lazy loading + async decoding; width/height reserve space (no layout shift).
export default function LazyImage({ src, alt, width = 640, height = 400 }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async"
      onLoad={() => setLoaded(true)} className={loaded ? 'img loaded' : 'img'} />
  );
}
