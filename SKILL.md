---
name: high-level-tech-presentation

description: >
  A Claude skill that generates a high-level technology presentation
  for Elastic sellers using a structured slide framework.

  The presentation helps sellers quickly understand:
  • what the capability is
  • why customers care
  • how to position it in a deal

  Use this skill whenever the user asks to create a
  solution guide, technology overview, sales enablement deck,
  or high-level explanation of a technology.

---

# High Level Tech Presentation

This skill generates the structured content required to build a
high-level sales-oriented presentation about a technology.

The output is a structured data object that can be used to populate
presentation templates or other automation systems.

The presentation is designed primarily for **Elastic Account Executives
and sellers** who need a quick, clear understanding of a capability
and how to position it with customers.

---

# Workflow

The skill follows a simple pipeline similar to a content compiler.

Technology Topic
      ↓
Slide Intent
      ↓
Writing Rules
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
- `references/data-schema.md`
- `references/validation.md`

These documents define:

slide-definitions.md
Purpose and intent of each slide.

writing-rules.md
Formatting constraints and tone rules.

data-schema.md
The exact structure of the required output object.

validation.md
Checks that must pass before returning the final result.

These references should be treated as **authoritative constraints**.

---

# Step 1 — Identify the Technology

If the user did not specify a technology, ask:

"Which technology should I build the presentation for?"

Optional follow-ups:

• target audience
• competitive landscape
• specific use case

If no additional context is provided, assume a
**general technology sales context for Elastic sellers**.

---

# Step 2 — Generate Slide Content

Generate slide content according to the
intent defined in `slide-definitions.md`.

Content must:

• follow the global tone defined in the slide definitions
• follow all constraints in `writing-rules.md`
• remain seller-oriented

Slides should answer:

"Why does this matter in a deal?"

Avoid:

• engineering architecture descriptions
• feature checklists
• internal product terminology

---

# Generation Checklist

Before constructing the final data object, verify the following:

• Slide intent matches the definitions in `references/slide-definitions.md`
• Tone follows the seller-oriented guidance in the slide definitions
• All text follows the formatting constraints in `references/writing-rules.md`
• No technical implementation details dominate the explanation
• Each slide answers the question: "Why does this matter in a deal?"

If any content does not meet these requirements, rewrite the slide content before continuing.

---

# Step 3 — Build the Data Object

Construct the structured data object defined in:

`references/data-schema.md`

Every schema key must exist.

No extra keys should be added.

Values must follow the writing rules and slide intent.

---

# Step 4 — Validate the Output

Before returning the result, run validation checks defined in

`references/validation.md`

Confirm:

• all schema fields exist
• no additional fields were introduced
• word limits are respected
• required quote formats are correct
• metrics follow the schema rules

If any validation fails, correct the content before returning it.

---

# Step 5 — Deck Automation (Optional)

If deck automation is enabled, pass the validated data object
to the renderer described in:

`references/deck-automation.md`

This step populates the presentation template.

If automation is not available, simply return the
structured data object.

---

# Output

Return the completed structured data object that follows
`references/data-schema.md`.

This object is the source input for presentation generation.