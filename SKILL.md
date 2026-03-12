---
# Data Schema

## Example Output Object

```js
{
  PERSONA: '[Target persona for the presentation].',
  SITUATION: '[Operational situation the deck focuses on].',
  // Scenario Anchor
  // One or two sentence operational scenario derived from the persona and situation.
  SCENARIO: '[One or two sentence operational scenario derived from the persona and situation].',
  // Story Anchor
  // A short narrative about a specific person experiencing the scenario
  // Used to keep slide language concrete and coherent
  STORY_NAME: '[Name of the person in the story].',
  STORY_ROLE: '[Role derived from the persona].',
  STORY: '[Three to five sentence story about this person experiencing the scenario and how the technology changes their day].',
  // Other schema fields...
}
```

## Schema Rules

• PERSONA and SITUATION must be provided before generating the SCENARIO
• STORY_NAME, STORY_ROLE, and STORY must be generated from PERSONA + SITUATION + SCENARIO
• All schema keys must be present
• No additional keys may be added
• Values must follow writing rules

# Validation Checklist

1. Every schema key is present, including persona, situation, scenario, story, and mental model fields
2. No extra keys exist
3. All text follows voice and writing rules
4. Slide content matches example patterns
5. No technical or product jargon dominates
6. Scenario and story are consistent and concrete

# Output Expectation

The returned data object must include all fields from the schema.

PERSONA and SITUATION should also be preserved so the scenario context remains clear.

STORY_NAME, STORY_ROLE, and STORY should also be preserved so the presentation remains anchored to a specific human narrative.

---
---
# Validation

## Mental Model Validation

...

---

# Story Validation

Story fields provide a concrete human narrative that anchors the presentation.

Required fields:

STORY_NAME
STORY_ROLE
STORY

Rules:

STORY_NAME

A simple first name or realistic person name.

Example:

"Alex"

STORY_ROLE

A job role derived from the target persona.

Example:

"Security analyst"

STORY

A short 3–5 sentence narrative describing:

• what the person is responsible for
• what manual work they perform today
• how the technology changes their day

The story should sound concrete and human, not like marketing copy.

Good example:

"Alex is a security analyst responsible for investigating alerts. Every time an alert fires, Alex manually checks logs, enriches IP addresses, and searches threat intelligence sources. These steps are repeated dozens of times each day. With Elastic Workflows, these investigation steps run automatically when an alert fires, allowing Alex to focus on real threats instead of repetitive tasks."

Bad example:

"Elastic empowers organizations with an improved security posture through advanced automation."

---

# Final Validation Checklist

1. All schema keys exist.
2. No additional keys were added.
3. Every value is ≤ 12 words, except STORY which may be 3–5 sentences.
4. No em dashes appear.
5. No label prefixes are used.
6. Lens sentences follow exact formats.
7. Metrics follow NUM / LABEL / DESC structure.
8. LISTEN, SAY, and ASK values are quoted.
9. Mental model fields exist and the image prompt describes a simple visual scene.
10. Story fields exist and the story is concrete, human, and consistent with persona and scenario.

---
---
# SKILL.md

# Step 1.6 — Generate a Customer Story

Before generating slides, create a short narrative about a **specific person**
experiencing the operational scenario.

The story helps anchor the presentation in a concrete situation rather
than abstract product statements.

The story should include:

• the person's role (derived from PERSONA)
• the situation they encounter
• the manual work they perform today
• how the technology changes their day

Keep the story short (3–5 sentences).

Example:

"Alex is a security analyst responsible for investigating alerts.
Every time an alert fires, Alex manually checks logs, enriches IP
addresses, and searches threat intelligence sources.
These steps are repeated dozens of times each day.
With Elastic Workflows, these investigation steps run automatically
when an alert fires, allowing Alex to focus on real threats instead
of repetitive tasks."

This story should guide slide generation.

The story must also be stored in the structured data object using:

• STORY_NAME
• STORY_ROLE
• STORY

Slides should reflect the same narrative context.

# Generation Checklist

Before constructing the final data object, verify:

• Slide intent matches `references/slide-definitions.md`
• Language follows `references/voice.md`
• Text follows `references/writing-rules.md`
• Language matches the pattern of the relevant slide-type examples in `examples/`
• No technical implementation detail dominates the explanation
• Each slide answers "Why does this matter in a deal?"

• PERSONA and SITUATION are clear enough to support a concrete scenario
• The customer story is consistent with the scenario and persona
• STORY_NAME, STORY_ROLE, and STORY are concrete and consistent with the scenario

If any content fails these checks, rewrite before continuing.

# Step 3 — Build the Data Object

Construct the structured data object defined in

`references/data-schema.md`

Rules:

• Every schema key must exist
• No extra keys may be added
• Values must follow the writing rules
• Include STORY_NAME, STORY_ROLE, and STORY in the final object

# Step 4 — Validate the Output

Run validation checks defined in

`references/validation.md`

Confirm:

• all schema fields exist
• no additional fields were introduced
• word limits are respected
• required quote formats are correct
• metrics follow schema rules
• story fields exist and remain consistent with persona and scenario

If validation fails, correct the content before returning it.

# Output

Return:

• the completed structured data object following `references/data-schema.md`
• the URL of the generated presentation if automation runs
• the customer story, repeated back in plain language after generation completes

After the presentation is generated, explicitly repeat back:

• STORY_NAME
• STORY_ROLE
• the STORY narrative

The data object becomes the source input for deck generation.

---
---
# references/deck-automation.md

## Step 3 — Build the Data Object

- Mental model fields must be included when the template includes the analogy slide
- Story fields must be included so the presentation remains anchored to one person and one operational narrative

## Success Output

- the template mode used
- the customer story repeated back to the user

---
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
  technology overview, sales enablement deck, or high-level explanation
  of a technology.

---

# High Level Tech Presentation

This skill generates the structured content required to build a
high-level sales-oriented presentation about a technology.

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
Persona + Situation
      ↓
Operational Scenario
      ↓
Customer Story
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
- `references/deck-automation.md`

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

### deck-automation.md

Defines how the validated JSON object should be handed off to the
renderer or downstream automation process.

The preferred handoff format is JSON, not pasted source code.

---

# Step 1 — Identify the Technology

If the user has not specified a technology, ask:

"Which technology should I build the presentation for?"

After the technology is known, gather any missing context needed to anchor the deck.

Required inputs:

• PERSONA
• SITUATION

Optional inputs:

• competitive landscape
• primary use case

If PERSONA is missing, ask who the presentation is for.

Examples:

• security operations teams
• platform engineering teams
• developers
• observability teams
• IT leaders

If SITUATION is missing, ask what operational situation the deck should focus on.

Examples:

• analysts manually investigating alerts
• developers debugging production failures
• teams running repetitive operational tasks
• teams struggling with slow or irrelevant search

If both PERSONA and SITUATION are missing, ask for both before generating slides.

If optional context is missing, proceed using the provided technology, persona,
and situation without blocking generation.

If no additional context is provided beyond the technology, assume a
**general technology sales context for Elastic sellers** and derive the most
likely persona and situation.

---

# Step 1.5 — Define the Operational Scenario

Before generating slides, define the **operational situation** that
anchors the presentation.

This scenario represents a real situation a customer team faces.

The scenario must be derived from the provided `PERSONA` and `SITUATION` fields.

Examples:

• Security analysts investigating alerts manually.
• Operations teams responding to recurring incidents.
• Developers struggling to diagnose production failures.
• Teams running manual scripts to move data between systems.

The scenario should describe:

• who is involved
• what problem occurs
• what manual work is happening today

Write the scenario in **one or two sentences**.

Example:

"Security teams receive alerts and manually run investigation steps every time one fires."

All slide content should reinforce this same operational story.

Slides should describe:

• the situation
• the problem
• the manual work
• how the technology removes the work
• the resulting outcome

Avoid switching scenarios across slides.

The presentation should feel like a **single coherent narrative** rather
than a collection of independent statements.

---

# Step 1.6 — Generate a Customer Story

Before generating slides, create a short narrative about a **specific person**
experiencing the operational scenario.

The story helps anchor the presentation in a concrete situation rather
than abstract product statements.

The story should include:

• the person's role (derived from PERSONA)
• the situation they encounter
• the manual work they perform today
• how the technology changes their day

Keep the story short (3–5 sentences).

Example:

"Alex is a security analyst responsible for investigating alerts.
Every time an alert fires, Alex manually checks logs, enriches IP
addresses, and searches threat intelligence sources.
These steps are repeated dozens of times each day.
With Elastic Workflows, these investigation steps run automatically
when an alert fires, allowing Alex to focus on real threats instead
of repetitive tasks."

This story should guide slide generation.

The story must also be stored in the structured data object using:

• STORY_NAME
• STORY_ROLE
• STORY

Slides should reflect the same narrative context.

---

# Step 2 — Generate Slide Content

Generate slide content according to the intent defined in
`references/slide-definitions.md`.

All slide content must remain anchored to the operational scenario
and the customer story created in Steps 1.5 and 1.6.

Each slide should reinforce the same story:

• what the team is dealing with
• what manual work exists today
• how the technology changes the situation

Avoid introducing new unrelated problems on later slides.

The deck should read like a **progression of the same situation**, not
independent marketing statements.

For each slide, load the matching example library from `examples/` when available.

Use examples for the current slide type as the primary style reference for
structure, compression, and seller language.

Do not copy example text directly. Generate original content that matches
its tone and pattern.

Content must:

• follow the voice rules in `references/voice.md`
• emulate the phrasing patterns in `references/style-reference.md`
• follow all constraints in `references/writing-rules.md`
• remain seller-oriented

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

# Step 2.6 — Language Quality Self-Score

Before continuing, evaluate the generated slide content for language quality.

Score each slide from 1–5 on the following criteria:

• Seller voice clarity
• Simplicity of language
• Relevance to a real customer problem
• Natural conversational tone
• Focused on the people and organizations using the technology

If any slide scores **below 4** on any dimension, rewrite the slide
before continuing.

Prefer language that sounds like something a seller would naturally say
in a meeting with a customer.

Examples of strong phrasing:

"Teams saying incidents take too long to resolve."

"Developers struggling to find the root cause of failures."

"Security teams overwhelmed by alerts."

Avoid phrasing that sounds like documentation or marketing copy.

The goal is language that feels **clear, practical, and human**.

Only continue once all slides meet the quality bar.

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
• seller-oriented
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
• PERSONA and SITUATION are clear enough to support a concrete scenario
• The customer story is consistent with the scenario and persona
• STORY_NAME, STORY_ROLE, and STORY are concrete and consistent with the scenario

If any content fails these checks, rewrite before continuing.

---

# Step 3 — Build the Data Object

Construct the structured data object defined in

`references/data-schema.md`

Rules:

• Every schema key must exist
• No extra keys may be added
• Values must follow the writing rules
• Include STORY_NAME, STORY_ROLE, and STORY in the final object

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
• story fields exist and remain consistent with persona and scenario

If validation fails, correct the content before returning it.

---

# Step 5 — Deck Automation (Preferred JSON Handoff)

The validated structured data object is the **primary output artifact** of this skill.

If a downstream renderer, API, or automation process exists, the object should be **passed directly as JSON**.

Preferred flow:

1. Generate validated structured data object
2. Serialize the object to JSON
3. Send JSON payload to the deck renderer or automation endpoint
4. Renderer creates the presentation
5. Return the presentation URL

Do **not** paste the structured data object into a code editor when a direct JSON handoff is available.

Code-editor injection should only be used as a **fallback** when no direct automation endpoint exists.

---

# Output

Return:

• the completed structured data object following `references/data-schema.md`
• the URL of the generated presentation if automation runs
• the customer story, repeated back in plain language after generation completes

After the presentation is generated, explicitly repeat back:

• STORY_NAME
• STORY_ROLE
• the STORY narrative

The data object becomes the source input for deck generation.
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
  technology overview, sales enablement deck, or high-level explanation
  of a technology.

---

# High Level Tech Presentation

This skill generates the structured content required to build a
high-level sales-oriented presentation about a technology.

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
Persona + Situation
      ↓
Operational Scenario
      ↓
Customer Story
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
- `references/deck-automation.md`

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

### deck-automation.md

Defines how the validated JSON object should be handed off to the
renderer or downstream automation process.

The preferred handoff format is JSON, not pasted source code.

---

# Step 1 — Identify the Technology

If the user has not specified a technology, ask:

"Which technology should I build the presentation for?"

After the technology is known, gather any missing context needed to anchor the deck.

Required inputs:

• PERSONA
• SITUATION

Optional inputs:

• competitive landscape
• primary use case

If PERSONA is missing, ask who the presentation is for.

Examples:

• security operations teams
• platform engineering teams
• developers
• observability teams
• IT leaders

If SITUATION is missing, ask what operational situation the deck should focus on.

Examples:

• analysts manually investigating alerts
• developers debugging production failures
• teams running repetitive operational tasks
• teams struggling with slow or irrelevant search

If both PERSONA and SITUATION are missing, ask for both before generating slides.

If optional context is missing, proceed using the provided technology, persona,
and situation without blocking generation.

If no additional context is provided beyond the technology, assume a
**general technology sales context for Elastic sellers** and derive the most
likely persona and situation.

---

# Step 1.5 — Define the Operational Scenario

Before generating slides, define the **operational situation** that
anchors the presentation.

This scenario represents a real situation a customer team faces.

The scenario must be derived from the provided `PERSONA` and `SITUATION` fields.

Examples:

• Security analysts investigating alerts manually.
• Operations teams responding to recurring incidents.
• Developers struggling to diagnose production failures.
• Teams running manual scripts to move data between systems.

The scenario should describe:

• who is involved
• what problem occurs
• what manual work is happening today

Write the scenario in **one or two sentences**.

Example:

"Security teams receive alerts and manually run investigation steps every time one fires."

All slide content should reinforce this same operational story.

Slides should describe:

• the situation
• the problem
• the manual work
• how the technology removes the work
• the resulting outcome

Avoid switching scenarios across slides.

The presentation should feel like a **single coherent narrative** rather
than a collection of independent statements.

---

# Step 1.6 — Generate a Customer Story

Before generating slides, create a short narrative about a **specific person**
experiencing the operational scenario.

The story helps anchor the presentation in a concrete situation rather
than abstract product statements.

The story should include:

• the person's role (derived from PERSONA)
• the situation they encounter
• the manual work they perform today
• how the technology changes their day

Keep the story short (3–5 sentences).

Example:

"Alex is a security analyst responsible for investigating alerts.
Every time an alert fires, Alex manually checks logs, enriches IP
addresses, and searches threat intelligence sources.
These steps are repeated dozens of times each day.
With Elastic Workflows, these investigation steps run automatically
when an alert fires, allowing Alex to focus on real threats instead
of repetitive tasks."

This story should guide slide generation.

The story must also be stored in the structured data object using:

• STORY_NAME
• STORY_ROLE
• STORY

Slides should reflect the same narrative context.

---

# Step 2 — Generate Slide Content

Generate slide content according to the intent defined in
`references/slide-definitions.md`.

All slide content must remain anchored to the operational scenario
and the customer story created in Steps 1.5 and 1.6.

Each slide should reinforce the same story:

• what the team is dealing with
• what manual work exists today
• how the technology changes the situation

Avoid introducing new unrelated problems on later slides.

The deck should read like a **progression of the same situation**, not
independent marketing statements.

For each slide, load the matching example library from `examples/` when available.

Use examples for the current slide type as the primary style reference for
structure, compression, and seller language.

Do not copy example text directly. Generate original content that matches
its tone and pattern.

Content must:

• follow the voice rules in `references/voice.md`
• emulate the phrasing patterns in `references/style-reference.md`
• follow all constraints in `references/writing-rules.md`
• remain seller-oriented

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

# Step 2.6 — Language Quality Self-Score

Before continuing, evaluate the generated slide content for language quality.

Score each slide from 1–5 on the following criteria:

• Seller voice clarity
• Simplicity of language
• Relevance to a real customer problem
• Natural conversational tone

If any slide scores **below 4** on any dimension, rewrite the slide
before continuing.

Prefer language that sounds like something a seller would naturally say
in a meeting with a customer.

Examples of strong phrasing:

"Teams saying incidents take too long to resolve."

"Developers struggling to find the root cause of failures."

"Security teams overwhelmed by alerts."

Avoid phrasing that sounds like documentation or marketing copy.

The goal is language that feels **clear, practical, and human**.

Only continue once all slides meet the quality bar.

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
• seller-oriented
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
• PERSONA and SITUATION are clear enough to support a concrete scenario
• The customer story is consistent with the scenario and persona
• STORY_NAME, STORY_ROLE, and STORY are concrete and consistent with the scenario

If any content fails these checks, rewrite before continuing.

---

# Step 3 — Build the Data Object

Construct the structured data object defined in

`references/data-schema.md`

Rules:

• Every schema key must exist
• No extra keys may be added
• Values must follow the writing rules
• Include STORY_NAME, STORY_ROLE, and STORY in the final object

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
• story fields exist and remain consistent with persona and scenario

If validation fails, correct the content before returning it.

---

# Step 5 — Deck Automation (Preferred JSON Handoff)

The validated structured data object is the **primary output artifact** of this skill.

If a downstream renderer, API, or automation process exists, the object should be **passed directly as JSON**.

Preferred flow:

1. Generate validated structured data object
2. Serialize the object to JSON
3. Send JSON payload to the deck renderer or automation endpoint
4. Renderer creates the presentation
5. Return the presentation URL

Do **not** paste the structured data object into a code editor when a direct JSON handoff is available.

Code-editor injection should only be used as a **fallback** when no direct automation endpoint exists.

---

# Output

Return:

• the completed structured data object following `references/data-schema.md`
• the URL of the generated presentation if automation runs
• the customer story, repeated back in plain language after generation completes

After the presentation is generated, explicitly repeat back:

• STORY_NAME
• STORY_ROLE
• the STORY narrative

The data object becomes the source input for deck generation.
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
  technology overview, sales enablement deck, or high-level explanation
  of a technology.

---

# High Level Tech Presentation

This skill generates the structured content required to build a
high-level sales-oriented presentation about a technology.

The output is a structured data object that can be used to populate
presentation templates or other automation systems.

The presentation is designed primarily for **Elastic Account Executives**
and other Elastic sellers who need a quick, clear understanding of a
capability and how to position it with customers.

Slides are **conversation prompts**, not documentation.

---

# Workflow

The skill follows a pipeline similar to a content compiler.

Technology Topic
      ↓
Persona + Situation
      ↓
Operational Scenario
      ↓
Customer Story
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
- `references/deck-automation.md`

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

### deck-automation.md

Defines how the validated JSON object should be handed off to the
renderer or downstream automation process.

The preferred handoff format is JSON, not pasted source code.

---

# Step 1 — Identify the Technology

If the user has not specified a technology, ask:

"Which technology should I build the presentation for?"

After the technology is known, gather any missing context needed to anchor the deck.

Required inputs:

• PERSONA
• SITUATION

Optional inputs:

• competitive landscape
• primary use case

If PERSONA is missing, ask who the presentation is for.

Examples:

• security operations teams
• platform engineering teams
• developers
• observability teams
• IT leaders

If SITUATION is missing, ask what operational situation the deck should focus on.

Examples:

• analysts manually investigating alerts
• developers debugging production failures
• teams running repetitive operational tasks
• teams struggling with slow or irrelevant search

If both PERSONA and SITUATION are missing, ask for both before generating slides.

If optional context is missing, proceed using the provided technology, persona,
and situation without blocking generation.

If no additional context is provided beyond the technology, assume a
**general technology sales context for Elastic sellers** and derive the most
likely persona and situation.

---

# Step 1.5 — Define the Operational Scenario

Before generating slides, define the **operational situation** that
anchors the presentation.

This scenario represents a real situation a customer team faces.

The scenario must be derived from the provided `PERSONA` and `SITUATION` fields.

The scenario should describe:

• who is involved
• what problem occurs
• what manual work is happening today

Write the scenario in **one or two sentences**.

Example:

"Security teams receive alerts and manually run investigation steps every time one fires."

All slide content should reinforce this same operational story.

Slides should describe:

• the situation
• the problem
• the manual work
• how the technology removes the work
• the resulting outcome

Avoid switching scenarios across slides.

The presentation should feel like a **single coherent narrative** rather
than a collection of independent statements.

---

# Step 1.6 — Generate a Customer Story

Before generating slides, create a short narrative about a **specific person**
experiencing the operational scenario.

The story helps anchor the presentation in a concrete situation rather
than abstract product statements.

The story should include:

• the person's role (derived from PERSONA)
• the situation they encounter
• the manual work they perform today
• how the technology changes their day

Keep the story short (3–5 sentences).

Example:

"Alex is a security analyst responsible for investigating alerts.
Every time an alert fires, Alex manually checks logs, enriches IP
addresses, and searches threat intelligence sources.
These steps are repeated dozens of times each day.
With Elastic Workflows, these investigation steps run automatically
when an alert fires, allowing Alex to focus on real threats instead
of repetitive tasks."

This story should guide slide generation.

The story must also be stored in the structured data object using:

• STORY_NAME
• STORY_ROLE
• STORY

Slides should reflect the same narrative context.

---

# Step 2 — Generate Slide Content

Generate slide content according to the intent defined in
`references/slide-definitions.md`.

All slide content must remain anchored to the operational scenario
and the customer story created in Steps 1.5 and 1.6.

Each slide should reinforce the same story:

• what the team is dealing with
• what manual work exists today
• how the technology changes the situation

Avoid introducing new unrelated problems on later slides.

The deck should read like a **progression of the same situation**, not
independent marketing statements.

For each slide, load the matching example library from `examples/` when available.

Use examples for the current slide type as the primary style reference for
structure, compression, and seller language.

Do not copy example text directly. Generate original content that matches
its tone and pattern.

Content must:

• follow the voice rules in `references/voice.md`
• emulate the phrasing patterns in `references/style-reference.md`
• follow all constraints in `references/writing-rules.md`
• remain seller-oriented

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

# Step 2.6 — Language Quality Self-Score

Before continuing, evaluate the generated slide content for language quality.

Score each slide from 1–5 on the following criteria:

• Seller voice clarity
• Simplicity of language
• Relevance to a real customer problem
• Natural conversational tone
• Focus on the people and organizations using the technology

If any slide scores **below 4** on any dimension, rewrite the slide
before continuing.

Prefer language that sounds like something a seller would naturally say
in a meeting with a customer.

Examples of strong phrasing:

"Teams saying incidents take too long to resolve."

"Developers struggling to find the root cause of failures."

"Security teams overwhelmed by alerts."

Avoid phrasing that sounds like documentation or marketing copy.

The goal is language that feels **clear, practical, and human**.

Only continue once all slides meet the quality bar.

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
• seller-oriented
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
• PERSONA and SITUATION are clear enough to support a concrete scenario
• The customer story is consistent with the scenario and persona
• STORY_NAME, STORY_ROLE, and STORY are concrete and consistent with the scenario

If any content fails these checks, rewrite before continuing.

---

# Step 3 — Build the Data Object

Construct the structured data object defined in

`references/data-schema.md`

Rules:

• Every schema key must exist
• No extra keys may be added
• Values must follow the writing rules
• Include STORY_NAME, STORY_ROLE, and STORY in the final object

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
• story fields exist and remain consistent with persona and scenario

If validation fails, correct the content before returning it.

---

# Step 5 — Deck Automation (Preferred JSON Handoff)

The validated structured data object is the **primary output artifact** of this skill.

If a downstream renderer, API, or automation process exists, the object should be **passed directly as JSON**.

Preferred flow:

1. Generate validated structured data object
2. Serialize the object to JSON
3. Send JSON payload to the deck renderer or automation endpoint
4. Renderer creates the presentation
5. Return the presentation URL

Do **not** paste the structured data object into a code editor when a direct JSON handoff is available.

Code-editor injection should only be used as a **fallback** when no direct automation endpoint exists.

---

# Output

Return:

• the completed structured data object following `references/data-schema.md`
• the URL of the generated presentation if automation runs
• the customer story, repeated back in plain language after generation completes

After the presentation is generated, explicitly repeat back:

• STORY_NAME
• STORY_ROLE
• the STORY narrative

The data object becomes the source input for deck generation.