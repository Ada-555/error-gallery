export function parseFilterParams(url: URL): { tag: string | null; year: string | null } {
  return {
    tag: url.searchParams.get('tag'),
    year: url.searchParams.get('year'),
  };
}

export function buildFilterUrl(tag: string | null, year: string | null): string {
  const params = new URLSearchParams();
  if (tag) params.set('tag', tag);
  if (year) params.set('year', year);
  const queryString = params.toString();
  return queryString ? `/?${queryString}` : '/';
}