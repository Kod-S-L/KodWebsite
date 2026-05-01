# Team Workflow Notes

This document describes how the KOD team collaborates on this project.

---

## Branching Strategy

We follow a simple **feature-branch** workflow:

```
main          ← production branch (always deployable)
  └── feature/<short-description>   ← one branch per feature/fix
  └── fix/<short-description>
  └── docs/<short-description>
```

### Rules

- **Never commit directly to `main`.**
- Keep branches short-lived (ideally merged within a day or two).
- Delete branches after merging.

---

## Pull Request Process

1. Create a branch from `main`.
2. Make your changes in small, focused commits.
3. Open a Pull Request against `main`.
4. Request a review from at least **one other team member**.
5. Address review comments, then merge when approved.
6. Delete the branch after merging.

---

## Commit Messages

Use concise, descriptive commit messages:

```
feat: add Projects page
fix: correct mobile nav toggle
docs: update deployment notes
style: improve footer spacing
refactor: extract Card component
```

Prefixes: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`, `test`.

---

## Code Review Guidelines

- Be constructive and kind — we're all learning.
- Focus on correctness, readability, and maintainability.
- Leave at least one positive comment per review.
- Approve only when you are genuinely happy with the change.

---

## Task Assignment

Tasks are tracked via **GitHub Issues**:

- Use labels: `feature`, `bug`, `documentation`, `enhancement`.
- Assign yourself before starting work.
- Link your PR to the related issue with `Closes #<issue-number>`.

---

## Release Process

1. Verify `main` builds successfully (`npm run build`).
2. Tag the release: `git tag v0.x.0 && git push --tags`.
3. Vercel automatically deploys on push to `main`.
4. Announce in the team chat with a short summary of what changed.

---

## Folder Ownership (loose)

| Area | Primary Owner |
|------|---------------|
| UI/Design | Developer 2 |
| Backend / DevOps | Developer 3 |
| Rust/WASM | Developer 1 |
| Architecture decisions | All three — discuss in PR |
