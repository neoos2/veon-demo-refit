// Prefix public assets with the configured base path (GitHub Pages serves the demo from a subfolder).
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
