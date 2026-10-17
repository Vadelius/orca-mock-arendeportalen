# Ärendeportalen (MOCK)

**This is a mock product.** A small Vite case-handling site for a pretend municipality, used to dogfood
[Orca](https://github.com/Vadelius/orca) end to end: brief import, interviews, PR → decision, the timeline and the
report widget. Nothing here is a real service, and the people and cases are invented.

- `brief/arendeportalen-brief.docx`: the brief Orca imports (`npm run brief` rebuilds it from `brief/brief.md`).
- `docs/decisions.md`: the decision log Orca reads beside each PR.
- `production` is the branch that is live; releases are tagged `vX.Y.Z`.
- The site: https://vadelius.github.io/orca-mock-arendeportalen/ (the report widget loads only on a local http copy,
  because Orca itself runs locally and an https page can't load an http script).

```sh
npm install
npm run dev
```
