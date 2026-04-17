import exhibitsData from '../data/exhibits.json';

export interface Exhibit {
  id: string;
  website: string;
  websiteUrl: string;
  submittedFrom: string;
  screenshot: string;
  tags: string[];
  submitter: string;
  dateAdded: string;
  upvotes: number;
  iframeUrl: string | null;
}

const exhibits: Exhibit[] = exhibitsData;

export function fuzzySearch(query: string): Exhibit[] {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) return [];

  return exhibits.filter(exhibit => {
    const nameMatch = exhibit.website.toLowerCase().includes(normalizedQuery);
    const urlMatch = exhibit.submittedFrom.toLowerCase().includes(normalizedQuery);
    const websiteUrlMatch = exhibit.websiteUrl.toLowerCase().includes(normalizedQuery);
    const tagsMatch = exhibit.tags.some(tag => tag.toLowerCase().includes(normalizedQuery));

    return nameMatch || urlMatch || websiteUrlMatch || tagsMatch;
  });
}

export function getSearchSuggestions(query: string): string[] {
  if (query.length < 2) return [];

  const normalizedQuery = query.toLowerCase();
  const suggestions: string[] = [];

  exhibits.forEach(exhibit => {
    if (exhibit.website.toLowerCase().includes(normalizedQuery)) {
      suggestions.push(exhibit.website);
    }
    exhibit.tags.forEach(tag => {
      if (tag.toLowerCase().includes(normalizedQuery)) {
        suggestions.push(tag);
      }
    });
  });

  return [...new Set(suggestions)].slice(0, 8);
}