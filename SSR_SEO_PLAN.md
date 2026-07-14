# SSR and SEO plan for Wirero

## Summary

The project is already using Next.js App Router, so the best path is to move the content-heavy routes to server-rendered data fetching instead of loading content in client components after mount. This will improve crawlability, page speed, and SEO.

## What I found

- The app already uses Next.js 15 with the App Router.
- Blog and newsroom article pages are currently loading content client-side with useEffect and useSearchParams.
- The content is already structured in helper modules, so the migration can be done incrementally.

## Priority routes to convert first

1. Blog list page
2. Blog detail page
3. Newsroom list page
4. Newsroom article page

These are the pages where SEO matters most because they contain indexable content.

## Implementation plan

### Phase 1: Move content loading to server components

- Replace the client-side blog list component with a server-rendered page that fetches the posts on the server.
- Replace the client-side blog detail component with a server-rendered page that reads the slug from the route segment and fetches the article on the server.
- Do the same for newsroom pages.

Recommended target files:

- [app/blog/page.tsx](app/blog/page.tsx)
- [app/blog/post/page.tsx](app/blog/post/page.tsx)
- [app/newsroom/page.tsx](app/newsroom/page.tsx)
- [app/newsroom/article/page.tsx](app/newsroom/article/page.tsx)
- [components/blog.tsx](components/blog.tsx)
- [components/newsroom.tsx](components/newsroom.tsx)
- [app/blog/post/blog-post-detail.tsx](app/blog/post/blog-post-detail.tsx)
- [app/newsroom/article/article-detail.tsx](app/newsroom/article/article-detail.tsx)

### Phase 2: Introduce server-side data helpers

Create server-friendly fetch functions that:

- read from the API or fall back to mock data
- support caching
- return the same normalized shape already used by the app

Suggested approach:

- Keep the existing API helper files as the source of truth.
- Add server-safe wrappers that use fetch with caching and revalidation.
- Avoid fetching from the client for the main content routes.

### Phase 3: Add proper metadata for every route

Use Next.js metadata APIs for title, description, canonical URL, Open Graph, and Twitter tags.

Add metadata to:

- root layout
- blog list page
- blog detail page
- newsroom list page
- newsroom article page

Recommended metadata fields:

- title
- description
- alternates.canonical
- openGraph
- twitter
- robots

### Phase 4: Improve structured data

Add JSON-LD for:

- organization / website schema
- article schema for blog and newsroom posts
- breadcrumb schema for detail pages

This helps search engines understand the content better.

### Phase 5: Make the pages more SEO-friendly

- Ensure headings are semantic and hierarchical.
- Add unique page titles and meta descriptions.
- Use descriptive image alt text.
- Replace img tags with the Next.js Image component where possible.
- Ensure important content appears in HTML, not only after JavaScript runs.
- Add sitemap.xml and robots.txt.

### Phase 6: Choose rendering strategy

Use a mix of strategies:

- Static generation for pages with stable content and low update frequency.
- Incremental static regeneration for content that changes occasionally.
- Server rendering for pages that need fresh data on every request.

For this project:

- Blog/newsroom list pages can be statically generated or ISR.
- Blog/newsroom detail pages can be ISR or server-rendered if the content is fetched live.

## Suggested rollout order

1. Convert blog list and blog detail pages.
2. Add metadata and canonical tags.
3. Convert newsroom list and article pages.
4. Add JSON-LD and sitemap/robots.
5. Optimize images and improve page performance.

## Expected result

After this work:

- pages will render usable HTML on the server
- search engines will see the content immediately
- metadata will be richer and more consistent
- the site will perform better for both users and crawlers

## Recommended next step

Start by converting the blog routes first, because they already have a clear content structure and fallback data. Once that is working, apply the same pattern to newsroom.
