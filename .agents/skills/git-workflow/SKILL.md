---
name: git-workflow
description: Standards and procedures for Git operations, commit hygiene, pre-commit validation, and change management in the Adhiviraj Pal portfolio repository.
---

# Git Workflow Skill — Adhiviraj Pal Portfolio

This skill outlines safe version control practices, commit standards, and working tree discipline for developing and maintaining the portfolio repository.

---

## 1. Pre-Modification Protocol

Before introducing any file modifications, additions, or deletions:
1. **Inspect Working Tree:** Run `git status` to verify current branch and detect untracked or uncommitted changes.
2. **Review Diffs:** Run `git diff` on any existing modified files to avoid unintentional rollbacks.
3. **Preserve User Changes:** NEVER discard, revert, or overwrite existing user work or uncommitted files without explicit user instruction.

---

## 2. Commit Philosophy: Focused & Atomic

- Avoid giant, omnibus commits that blend multiple unrelated tasks.
- Keep commits cohesive: each commit should represent one logical unit of work (e.g., adding a specific section, fixing a responsive bug, or updating content).
- Use conventional commit message prefixes:
  - `feat:` New user-facing feature or component (e.g., `feat: implement selected projects section`)
  - `fix:` Bug fix or visual correction (e.g., `fix: mobile navigation drawer scroll lock`)
  - `style:` Formatting, typography, or CSS adjustment without functional change (e.g., `style: refine editorial spacing tokens`)
  - `refactor:` Code restructuring that does not change behavior (e.g., `refactor: extract project link badge primitive`)
  - `docs:` Documentation or design notes (e.g., `docs: update design discovery specs`)
  - `chore:` Configuration, tooling, or repository setup (e.g., `chore: add project skills`)
  - `perf:` Performance improvements (e.g., `perf: optimize font loading strategy`)

---

## 3. Pre-Commit Validation

Before staging and committing changes:
1. **Typecheck & Build:** Verify that there are zero TypeScript compiler errors (`npm run build` or `npx tsc --noEmit`).
2. **Lint:** Run `npm run lint` to catch ESLint warnings or errors.
3. **Stage Deliberately:** Stage only the specific files relevant to the commit (`git add <file1> <file2>`), rather than blind `git add .` which might pick up scratch files or unintended artifacts.

---

## 4. Repository Hygiene & Cleanliness

- **Ignore Artifacts:** Never commit `.next/`, `node_modules/`, scratch scripts, test logs, or environment secrets.
- **Branch Discipline:** Keep the master/main branch deployable.
- **Commit Message Clarity:** Write meaningful, imperative subject lines (e.g., `feat: add responsive project card with status badge` instead of `changes made` or `update`).
