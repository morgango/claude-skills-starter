---
name: high-level-tech-presentation

description: >
  A Claude skill that generates a high-level technology presentation
  for Elastic sellers using a structured slide framework.

  The presentation helps sellers quickly understand:
  • what the capability is
  • why customers care
  • how to position it in a deal

  Use this skill whenever the user asks to create a solution guide,
  technology overview, sales enablement deck, or high‑level explanation
  of a technology.

---

# High Level Tech Presentation

This skill generates the structured content required to build a
high‑level sales‑oriented presentation about a technology.

The output is a structured data object that can be used to populate
presentation templates or other automation systems.

The presentation is designed primarily for **Elastic Account Executives
and sellers** who need a quick, clear understanding of a capability
and how to position it with customers.

Slides are **conversation prompts**, not documentation.

---

# Workflow

The skill follows a pipeline similar to a content compiler.

Technology Topic
      ↓
Slide Intent
      ↓
Voice and Writing Rules
      ↓
Slide Type Examples
      ↓
Structured Data Object
      ↓
Validation
      ↓
Deck Automation

Each stage is governed by reference documents located in the
`references/` directory.

---

# Reference Loading

Before generating slide content, review the following reference files:

- `references/slide-definitions.md`
- `references/writing-rules.md`
- `references/voice.md`
- `references/style-reference.md`
- `references/data-schema.md`
- `references/validation.md`

These documents define the rules used to generate and validate the
presentation content.

### examples/

Provides slide-type example libraries that teach the generator how
strong seller language looks in practice.

Use the example set that matches the current slide type whenever it exists.

Examples may include:

• elevator pitch examples
• positioning examples
• customer value examples
• AE value examples
• mental model examples
• how to sell examples
• how not to sell examples
• by the numbers examples
• talk track examples

These examples should be used as **pattern references**, not copied text.

### slide-definitions.md

Defines the **purpose and intent of every slide**.

Each slide answers a specific seller question such as:

• What is this?
• Why should customers care?
• When should I bring this up?
• How do I sell it?

### writing-rules.md

Defines formatting constraints including:

• sentence length
• punctuation rules
• slide compression
• metric formatting

### voice.md

Defines the consistent **Elastic seller voice** used across all slides.

The voice should sound like an experienced seller explaining a
technology to another seller before a customer meeting.

Language should be:

• simple
• direct
• conversational

Avoid:

• marketing language
• product documentation tone
• technical architecture explanations

### style-reference.md

Provides concrete language patterns taken from high-quality Elastic
sales enablement decks such as APEX presentations.

These examples teach the generator what strong seller language
looks like in practice.

The content should imitate the **style and phrasing patterns**
from these examples while still generating original sentences.

This file reinforces the conversational tone defined in `voice.md`
and helps prevent generic marketing or documentation language.

### data-schema.md

Defines the exact structure of the output data object.

All schema keys must be present and no additional keys may be added.

### validation.md

Defines the validation checks that must pass before returning output.

---

# Step 1 — Identify the Technology

If the user has not specified a technology, ask:

"Which technology should I build the presentation for?"

Optional follow‑up questions may include:

• target persona
• competitive landscape
• primary use case

If no additional context is provided, assume a
**general technology sales context for Elastic sellers**.

---

# Step 2 — Generate Slide Content

Generate slide content according to the intent defined in
`references/slide-definitions.md`.

For each slide, load the matching example library from `examples/` when available.

Use examples for the current slide type as the primary style reference for
structure, compression, and seller language.

Do not copy example text directly. Generate original content that matches
its tone and pattern.

Content must:

• follow the voice rules in `references/voice.md`
• emulate the phrasing patterns in `references/style-reference.md`
• follow all constraints in `references/writing-rules.md`
• remain seller‑oriented

Every slide should implicitly answer:

"Why does this matter in a deal?"

Avoid:

• engineering architecture descriptions
• feature checklists
• internal product terminology

---

# Step 2.5 — Voice Refinement Pass

Before continuing, review the generated slide content and rewrite
any language that sounds:

• overly technical
• like product documentation
• like marketing copy
• unnatural when spoken by a seller

Rewrite sentences so they sound like something a seller could say
in a customer meeting.

Prefer language patterns such as:

"Teams struggling with…"
"Helps teams…"
"Most customers use this when…"
"A common problem is…"

Avoid language patterns such as:

"Organizations seeking to leverage…"
"Provides a robust platform…"
"Enables transformative capabilities…"

After rewriting, ensure content still follows:

• `references/voice.md`
• `references/writing-rules.md`
• `references/slide-definitions.md`

---

# Slide Writing Examples

Use the following examples to guide tone and compression.

These examples illustrate strong seller language compared to
weak marketing or documentation language.

### Elevator Pitch

Good:
"Is a platform for running AI inference directly inside Elastic."

"Lets teams add AI to search and observability workflows."

Bad:
"Provides a robust AI infrastructure solution enabling advanced capabilities."

### Customer Value

Good:
"Lets teams detect incidents faster and restore services quickly."

"Reduces investigation time by linking logs, metrics, and traces."

Bad:
"Enables enhanced operational visibility across distributed environments."

### Positioning

Good:
"Works best for teams struggling to diagnose production incidents."

Bad:
"Ideal for organizations seeking comprehensive observability capabilities."

### How to Sell

Good:
"Pursue when teams say incidents take too long to resolve."

Bad:
"Position the solution as a modern observability platform."

### How Not to Sell

Good:
"Do not lead with dashboards. Start with incident response pain."

Bad:
"Avoid focusing on technical capabilities too early in the conversation."

The goal is language that is:

• conversational
• short
• seller‑oriented
• focused on real customer problems

---

# Generation Checklist

Before constructing the final data object, verify:

• Slide intent matches `references/slide-definitions.md`
• Language follows `references/voice.md`
• Text follows `references/writing-rules.md`
• Language matches the pattern of the relevant slide-type examples in `examples/`
• No technical implementation detail dominates the explanation
• Each slide answers "Why does this matter in a deal?"

If any content fails these checks, rewrite before continuing.

---

# Step 3 — Build the Data Object

Construct the structured data object defined in

`references/data-schema.md`

Rules:

• Every schema key must exist
• No extra keys may be added
• Values must follow the writing rules

---

# Step 4 — Validate the Output

Run validation checks defined in

`references/validation.md`

Confirm:

• all schema fields exist
• no additional fields were introduced
• word limits are respected
• required quote formats are correct
• metrics follow schema rules

If validation fails, correct the content before returning it.

---

# Step 5 — Deck Automation (Optional)

If deck automation is enabled, pass the validated data object to the
renderer defined in:

`references/deck-automation.md`

This step populates the presentation template.

If automation is unavailable, return the structured data object instead.

---

# Output

Return:

• the completed structured data object following `references/data-schema.md`
• the URL of the generated presentation if automation runs

The data object becomes the source input for deck generation.