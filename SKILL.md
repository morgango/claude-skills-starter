

---
name: high-level-tech-presentation

description: >
  Generates a high-level Elastic sales presentation as structured JSON.
  The deck explains what the capability is, why customers care,
  and how sellers position it in a deal.

---

# High Level Tech Presentation

This skill generates structured content for a sales-oriented technology presentation.

Slides are conversation prompts, not documentation.

Output: a validated JSON data object used to populate a presentation template.

---

# Workflow

Technology
↓
Persona + Situation
↓
Operational Scenario
↓
Customer Story
↓
Slide Generation
↓
Voice Refinement
↓
Validation
↓
Deck Automation

Reference files in `references/` define rules used in each stage.

---

# Reference Files

Load these before generating content:

- `references/slide-definitions.md`
- `references/writing-rules.md`
- `references/voice.md`
- `references/style-reference.md`
- `references/data-schema.md`
- `references/validation.md`
- `references/deck-automation.md`

Use `examples/` as pattern libraries, not copyable text.

---

# Step 1 — Identify Technology

If the technology is missing ask:

"Which technology should I build the presentation for?"

Required inputs:

• PERSONA
• SITUATION

Examples:

Personas

• security operations teams
• developers
• platform engineers
• observability teams

Situations

• analysts manually investigating alerts
• developers debugging production failures
• teams running repetitive operational tasks

If context is missing assume a general Elastic seller context.

---

# Step 1.5 — Define Operational Scenario

Create a 1–2 sentence operational scenario derived from PERSONA and SITUATION.

Describe:

• who is involved
• what problem occurs
• what manual work exists

Example:

"Security teams receive alerts and manually run investigation steps each time one fires."

All slides must reinforce the same scenario.

Avoid switching scenarios across slides.

---

# Step 1.6 — Generate Customer Story

Create a 3–5 sentence story about a specific person experiencing the scenario.

Include:

• the person's role
• the manual work today
• how the technology changes their day

Example:

"Alex is a security analyst responsible for investigating alerts. Each alert requires checking logs, enriching IP addresses, and searching threat intelligence sources. These steps repeat dozens of times daily. With Elastic Workflows the investigation runs automatically when an alert fires, letting Alex focus on real threats."

Store:

• STORY_NAME
• STORY_ROLE
• STORY

All slides should align with this narrative.

---

# Step 2 — Generate Slide Content

Follow intent from `references/slide-definitions.md`.

Slides must stay anchored to:

• the scenario
• the customer story

The deck should feel like one narrative, not independent statements.

All slides should implicitly answer:

• what problem the person in the story faces
• what work they do today
• how the technology changes their day

---

## Sentence-First Method

1. Imagine the presenter saying the slide title.
2. Write the spoken sentence.
3. Compress it into the bullet.

Example:

Title: "Feels different because"

Sentence:

"Elastic feels different because it ingests endpoint, cloud, identity, and network data together."

Bullet:

"Elastic ingests endpoint, cloud, identity, and network data together."

---

## Sentence Continuation Rule

Bullets must complete the slide title naturally.

Examples:

Feels Different Because

"Elastic ingests endpoint, cloud, network, and identity data together."

Why This Matters to Customers

"Analysts investigate across all security data without switching tools."

Why This Matters to You

"It opens expansion conversations in existing deployments."

How to Sell

"Teams say investigations take too long or require multiple tools."

How Not to Sell

"Do not lead with dashboards. Start with investigation pain."

Rewrite any bullet that does not read naturally after the title.

---

# Step 2.5 — Voice Refinement

Rewrite language that sounds like:

• documentation
• marketing copy
• engineering explanation

Prefer seller language:

"Teams struggling with…"

"Helps teams…"

Avoid:

"Organizations seeking to leverage…"

---

# Step 2.6 — Language Quality Check

Score slides 1–5 for:

• seller voice
• simplicity
• relevance
• conversational tone

If any score is below 4 rewrite the slide.

---

# Step 3 — Build Data Object

Construct the object defined in:

`references/data-schema.md`

Rules:

• all schema keys must exist
• no additional keys allowed
• values follow writing rules
• STORY fields must exist

---

# Step 4 — Validate Output

Run validation defined in:

`references/validation.md`

Confirm:

• schema complete
• no extra fields
• word limits respected
• metrics valid
• story consistent with persona and scenario

If validation fails rewrite before returning.

---

# Step 5 — Deck Automation

Preferred flow:

1. Generate validated JSON
2. Send JSON to deck renderer
3. Renderer builds presentation
4. Return presentation URL

Avoid pasting JSON into editors when API handoff exists.

---

# Output

Return:

• the completed JSON data object
• the generated presentation URL if automation runs
• the customer story repeated back

Repeat after generation:

• STORY_NAME
• STORY_ROLE
• STORY

The story keeps the deck anchored to a real human narrative.