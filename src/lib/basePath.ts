const configuredBasePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').trim();

/** The URL prefix selected when the static site was built. */
export const BASE_PATH = configuredBasePath === '/' ? '' : configuredBasePath.replace(/\/+$/, '');

/** Prefix a root-relative public asset without changing external or relative URLs. */
export function withBasePath(path: string): string {
  if (
    !BASE_PATH ||
    !path.startsWith('/') ||
    path === BASE_PATH ||
    path.startsWith(`${BASE_PATH}/`) ||
    path.startsWith('//')
  ) {
    return path;
  }

  return `${BASE_PATH}${path}`;
}
