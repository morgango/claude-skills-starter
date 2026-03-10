# Claude Skills Starter

A repo for authoring, testing, and sharing Claude Skills.

## Quick Start

1. Copy `_template/` to a new folder with your skill name (kebab-case)
2. Fill in `SKILL.md` — replace the bracketed placeholders
3. Symlink or copy into `~/.claude/skills/` to test with Claude Code
4. Iterate until triggering and output quality are solid

## Repo Structure

```
claude-skills-starter/
├── _template/              ← Copy this to start a new skill
│   ├── SKILL.md
│   ├── scripts/
│   ├── references/
│   └── assets/
├── examples/
│   └── hello-world/        ← A minimal working example
│       └── SKILL.md
└── README.md
```

## Installing a Skill for Claude Code

```bash
# Option 1: Symlink (changes reflect immediately)
ln -s /path/to/your-skill ~/.claude/skills/your-skill

# Option 2: Copy
cp -r /path/to/your-skill ~/.claude/skills/your-skill
```

## Naming Rules

- Folder names use **kebab-case**: `quarterly-report-builder`
- No spaces, underscores, or capitals
- Folder name must match the `name` field in SKILL.md frontmatter
- No `README.md` inside individual skill folders

## Sharing

Push to GitHub. Others install with:

```bash
git clone <repo-url>
ln -s <repo>/your-skill ~/.claude/skills/your-skill
```
