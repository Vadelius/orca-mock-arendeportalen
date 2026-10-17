# Decisions (MOCK)

The team's decision log for the mock Ärendeportalen. Orca reads this file when it writes up a merged PR.

## 2026-10-01 · Hash routing, no server rendering

The portal is a static site with hash routes, so it can be hosted anywhere (GitHub Pages for the mock). No server rendering.

## 2026-10-06 · Case numbers are MOCK-YYYY-NNNN

Case numbers are the year plus a four-digit sequence, prefixed MOCK in this mock product.

## 2026-10-10 · Drafts live in the browser for now

Until sign-in exists, a draft is kept in the resident's own browser (localStorage), not on the server.
