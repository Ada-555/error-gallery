# 404 Museum — Project Brief

## Concept

A curated archive of the internet's most beautifully designed 404 error pages. Not a broken link tracker — a gallery. Like a museum, it frames these pages as art pieces, celebrating the craft and creativity that goes into making "nothing found" feel like something worth seeing.

**Tagline:** "The internet's best 404 pages, preserved and celebrated."

## Aesthetic Direction

Dark, gallery-like, slightly eerie. Think: art gallery after hours, digital museum, brutalist with warmth. Deep blacks with cream/off-white text and gold accents. The 404 pages themselves are the art — everything else recedes to let them shine.

Typography: Something with character. Not Inter. Maybe "Fraunces" (variable serif with optical sizing) for headings, "JetBrains Mono" for code/technical elements.

## Core Features

### 1. Gallery View (Home)
- Masonry or grid layout of 404 page screenshots/cards
- Each card shows: website name, screenshot thumbnail, submitter name, date added, tags
- Hover: subtle lift, shows a "View" button
- Filter by: tag (e-commerce, blog, startup, government, art, games, etc.), year, country

### 2. Detail View
- Full screenshot of the 404 page (or embedded iframe if live)
- Metadata: URL submitted from, original URL, date archived, submitter, tags
- "View Original" link if still live
- Upvote/like count (public)
- Comments section (disqus or similar)
- Related 404s (same tag/era)

### 3. Submit a 404
- Paste the URL that 404'd
- Paste the URL of the page that showed the 404 (the site itself)
- Upload a screenshot (or we auto-capture via screenshot API)
- Add tags and your name/nickname
- Moderate queue — admin approves before publish

### 4. Search
- Search by website name, URL, tags
- Autocomplete
- Results show as gallery cards

### 5. Random Exhibit ("I'm feeling curious" button)
- Picks a random 404 from the archive and shows it full-screen
- "Next →" to keep browsing randomly

### 6. About / The Museum
- Explains the concept
- Credits the submitters
- "How to contribute" (submit your own)

## Layout Structure

```
/ (home)          — gallery grid with filters
/exhibit/:id      — individual 404 page detail
/submit           — submission form
/search?q=        — search results
/about            — about the museum
```

## Technical Approach

Single-page app feel but can be multi-page. Suggested stack:
- **HTML/CSS/JS** — vanilla, no framework needed for this scope. Keeps it portable.
- Or: **Astro** — if we want component-based and fast. Good for image-heavy gallery.
- **Screenshot capture** — use a free screenshot API (e.g., `https://api.microlink.io` or similar) to auto-capture when URL provided
- **Image storage** — store screenshots on GitHub repo or use a free CDN
- **Data** — JSON file in the repo acts as the "database" of archived 404s
- **Deployment** — GitHub Pages, deploys from main branch

## The Data Model

Each 404 entry:
```json
{
  "id": "uuid",
  "website": "Stripe",
  "websiteUrl": "https://stripe.com",
  "submittedFrom": "https://stripe.com/404-page-that-never-was",
  "screenshot": "/screenshots/stripe-404.jpg",
  "tags": ["saas", "minimal", "illustration"],
  "submitter": "kay_c555",
  "dateAdded": "2026-04-17",
  "upvotes": 42,
  "iframeUrl": null
}
```

## Design Specifics

- Background: `#0a0a0a` (near black)
- Text: `#f5f0e8` (warm off-white/cream)
- Accent: `#c9a84c` (gold)
- Secondary accent: `#8b5cf6` (purple, used sparingly)
- Cards: `#141414` background, `#1a1a1a` on hover
- Typography: Fraunces (headings), JetBrains Mono (UI elements/labels)

## Seed Content (12 curated examples)

Pre-populate with known beautiful 404s:
1. Stripe — minimal, illustrations, search bar
2. GitHub — satellite robot in space
3. Airbnb — lost in translation style illustration
4. Slack — cute ghost/dog
5. Mailchimp — dancing monkey
6. Notion — lost in space
7. Figma — broken figma logo
8. Linear — glitch effect
9. Kickstarter — paper plane
10. Discord — hmm soundwave
11. LEGO — lego figures lost
12. Pixar — toy story style "we lost Woody"

(These are real examples — we'll source real screenshots)

## Quality Bar

- Every screenshot must be full-height, no cutoffs
- Tags must be consistent (no "ecommerce" and "e-commerce" as separate tags)
- The site itself must have NO 404s
- Smooth transitions between views
- Works on mobile

---

Deliverables: A fully functional, deployed GitHub Pages site with at least 12 curated examples, submission form, search, and filtering.