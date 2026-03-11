

# Deck Automation Reference

This document defines how the `high-level-tech-presentation` skill should handle Google Slides deck creation.

The skill has two responsibilities:

1. Generate valid presentation content.
2. Attempt deck creation only when the execution environment supports it.

The skill must never pretend that automation succeeded when it did not.

Only attempt automation if the environment has working access to:
- the required browser or automation tool
- the Google account and permissions
- the Apps Script project
- script execution results

If any of these are unavailable, do not attempt partial automation.
Return the validated data object and manual execution instructions instead.

## Purpose

Use this reference when the skill needs to turn a completed presentation data object into a Google Slides deck.

This file does **not** define slide writing rules or slide content requirements. Those belong in:

- `references/slide-definitions.md`
- `references/writing-rules.md`
- `references/data-schema.md`

This file only defines how deck automation should work, what IDs to use, what success looks like, and what to do when automation is unavailable.

## Required Assets

### Template Presentation

- Google Slides template ID: `1Cjy-08KnOYhD3yRm00Qv-1NKSnSxD8CGZOB-0yC0jYA`

### Template Apps Script

- Google Apps Script project ID: `1uU0EWReSUOKOJOkFUNMCrQNGPncW5Jg51CM8ioauNg1Q_0dqhXQeZgFi`

### Existing Technology Template

- Google Slides template URL: `https://docs.google.com/presentation/d/1iUj1H2UOzu4us0svly6Pdq7uxoUDwmNR2HiYmTBdmKc/edit`

### Under Development Template

- Use the under-development template only when the user explicitly asks for a roadmap, preview, future-looking, or in-development presentation.
- If no under-development template is defined yet, do not invent one.
- Fall back to content generation only and state that automation requires the missing template reference.

## Automation Contract

The automation flow has four phases:

1. Validate inputs.
2. Build the final `data` object.
3. Attempt script-driven deck creation.
4. Return either a deck URL or a manual fallback package.

## Preconditions

Before attempting automation, confirm all of the following:

- The technology or capability is known.
- The content has been generated for all required fields.
- The content conforms to `references/data-schema.md`.
- The writing follows `references/writing-rules.md`.
- The environment can actually access the required browser, Google account, and Apps Script execution path.

If any of these are false, do not claim the deck was created.

## When to Attempt Automation

Attempt automation only if the environment can actually do all of the following:

- Open the Apps Script project.
- Insert or replace the populated `data` object.
- Run the deck creation function.
- Read the execution output or resulting deck link.

If any of those steps are unavailable, skip automation and return the completed content package instead.

## Non-Speculation Rule

Do not claim to have opened pages, clicked buttons, dismissed dialogs, injected code, or run scripts unless those actions were actually completed in the current environment.

Do not describe hypothetical UI steps as completed actions.

## Execution Flow

### Step 1: Select the correct template mode

Choose the template mode based on the user request:

- Use the existing-technology template for current products, technologies, integrations, and general solution guides.
- Use the under-development template for roadmap, preview, future-state, or in-development content.

If there is ambiguity and no under-development asset is defined, default to the existing-technology template and say so.

### Step 2: Generate and validate content

Generate all required slide values before touching Apps Script.

The skill should validate that:

- Required keys are present.
- Lens fields use the exact required sentence structures.
- Metrics are short, defensible, and properly split into number, label, and description.
- Quotes appear where required.
- No value uses an em dash.
- No value includes label prefixes like `Works best when:` or `Next step:`.

### Step 3: Build the final data object

Construct the final JavaScript object exactly as defined in `references/data-schema.md`.

The automation layer should only use already-validated content.

It should not rewrite or improvise during injection.

### Step 4: Open the template Apps Script

Target Apps Script project:

- `1uU0EWReSUOKOJOkFUNMCrQNGPncW5Jg51CM8ioauNg1Q_0dqhXQeZgFi`

Expected purpose of the script:

- Accept the populated `data` object.
- Run `createDeckFromData()`.
- Create a new Google Slides deck in Google Drive.
- Name the deck `[TECH_NAME] - High Level Solution Guide` using `data.TECH_NAME`.
- Output the resulting deck URL or ID.

## Injection Rules

When inserting content into Apps Script:

- Replace only the `data` object or the expected input block.
- Do not rewrite unrelated script logic.
- Do not modify helper functions unless explicitly instructed.
- Preserve JavaScript syntax exactly.
- Escape quotes only when required by JavaScript syntax.

If the skill cannot confidently identify where the `data` object belongs, stop and return the completed `data` object instead of guessing.

## Run Rules

After injection:

- Run `createDeckFromData()`.
- Wait for the execution result.
- Capture the generated Google Slides URL or another reliable identifier.

Only state success if a real result is returned.

## Success Criteria

Automation is successful only if all of the following are true:

- The script runs without an execution error.
- A new deck is created.
- A valid Google Slides or Google Drive URL is returned, logged, or otherwise confirmed.

If any of those are missing, do not claim success.

## Required User-Facing Success Output

When automation succeeds, return:

- A brief confirmation that the deck is ready.
- The Google Slides or Google Drive URL.
- A short note describing which template mode was used, if relevant.

Example:

`Your deck is ready: [Google Slides URL]. Built using the existing-technology template.`

## Failure Handling

If automation fails, the skill must be explicit.

Allowed failure reasons include:

- Browser or script automation is unavailable.
- Google authentication is unavailable.
- The Apps Script project could not be opened.
- Injection location could not be identified safely.
- `createDeckFromData()` failed.
- No deck URL was returned.

When automation fails, return all of the following:

- A short statement that deck automation did not complete.
- The final validated `data` object.
- The relevant template and Apps Script IDs.
- A short manual run instruction.

Example fallback language:

`Deck automation did not complete, but the content is ready. Paste the validated data object into the template Apps Script and run createDeckFromData().`

## Manual Fallback Package

When returning a manual fallback package, include:

1. The populated `data` object.
2. Template Presentation ID: `1Cjy-08KnOYhD3yRm00Qv-1NKSnSxD8CGZOB-0yC0jYA`
3. Template Apps Script ID: `1uU0EWReSUOKOJOkFUNMCrQNGPncW5Jg51CM8ioauNg1Q_0dqhXQeZgFi`
4. The instruction: `Run createDeckFromData()`

## What the Skill Must Not Do

The skill must not:

- Claim the deck was created without a confirmed result.
- Invent a deck URL.
- Assume UI elements like dialogs or buttons will always exist.
- Rewrite the script logic unless the user asks for script changes.
- Skip validation and inject draft content.

## Recommended Separation of Responsibilities

To keep the skill reliable:

- `SKILL.md` should define when to invoke the skill and the top-level workflow.
- `references/slide-definitions.md` should define what each slide is trying to do.
- `references/writing-rules.md` should define the formatting rules.
- `references/data-schema.md` should define the exact object shape.
- `references/deck-automation.md` should define how execution works and how to fail safely.

## Suggested Language for SKILL.md

Use language like this in the main skill file:

`If automation is available, create the deck and return the deck URL. If automation is unavailable or fails, return the validated data object and manual execution instructions. Never imply that a deck was created unless a real URL or equivalent confirmation is available.`

## Future Enhancements

This file can later be extended to include:

- A second template ID for under-development content.
- A standard insertion marker for the `data` object.
- A standard output format for execution logs.
- Post-generation text replacement rules.
- Shared folder or Drive destination rules.

Until those are explicitly defined, do not assume them.
# Deck Automation Reference

This reference defines how the **high-level-tech-presentation** skill creates a Google Slides deck from validated presentation content.

This file only describes **automation behavior**. It does not define slide content, writing style, or schema structure.

Those rules live in:

- `references/slide-definitions.md`
- `references/writing-rules.md`
- `references/data-schema.md`
- `references/validation.md`

The automation process should only run **after content has been generated and validated**.

---

# Core Rule

Automation must only be attempted when the execution environment actually supports it.

Required capabilities:

- Browser or automation tool access
- Google account authentication
- Access to the Apps Script project
- Ability to execute scripts
- Ability to read the execution result

If any requirement is unavailable, **do not attempt automation**.

Instead, return the validated data object and manual execution instructions.

---

# Non‑Speculation Rule

Never claim that browser actions, UI interactions, or script executions occurred unless they actually happened in the current environment.

Do NOT claim to have:

- opened pages
- clicked buttons
- dismissed dialogs
- injected code
- executed scripts

unless those actions were truly completed and confirmed.

Never invent a deck URL or execution result.

---

# Required Assets

## Template Presentation

Google Slides Template ID

`1Cjy-08KnOYhD3yRm00Qv-1NKSnSxD8CGZOB-0yC0jYA`


## Template Apps Script

Google Apps Script Project ID

`1uU0EWReSUOKOJOkFUNMCrQNGPncW5Jg51CM8ioauNg1Q_0dqhXQeZgFi`


## Existing Technology Template

https://docs.google.com/presentation/d/1iUj1H2UOzu4us0svly6Pdq7uxoUDwmNR2HiYmTBdmKc/edit


## Under‑Development Template

Use this template only when the user explicitly requests:

- roadmap presentations
- preview or future-state technology
- in-development features

If no under‑development template exists, do not invent one.

Fallback to content generation only.

---

# Automation Workflow

Automation follows five steps.

---

## Step 1 — Confirm Preconditions

Automation can run only if:

- The technology topic is known
- All slide content has been generated
- The content conforms to `data-schema.md`
- Writing rules from `writing-rules.md` are satisfied
- Validation checks from `validation.md` pass

If any of these fail, regenerate the content before continuing.

---

## Step 2 — Select Template Mode

Choose the template based on the user request.

Use the **existing technology template** for:

- technologies
- integrations
- platforms
- solution guides

Use the **under-development template** for:

- roadmap presentations
- preview capabilities
- future-looking technology

If unclear, default to the existing technology template.

---

## Step 3 — Build the Data Object

Construct the JavaScript object exactly as defined in:

`references/data-schema.md`

Rules:

- Every required field must exist
- No additional fields may be added
- Values must follow writing rules

The automation system must use **validated content only**.

---

## Step 4 — Run Apps Script

Target Apps Script project:

`1uU0EWReSUOKOJOkFUNMCrQNGPncW5Jg51CM8ioauNg1Q_0dqhXQeZgFi`

Expected script behavior:

1. Accept the `data` object
2. Execute `createDeckFromData()`
3. Generate a new Google Slides deck
4. Name the deck using the `TECH_NAME` value
5. Output the resulting deck URL or ID


### Deck Naming Convention

The generated presentation must be named using the `TECH_NAME` value from the data object.

The naming format is:

`[TECH_NAME] - High Level Solution Guide`

Example: `TECH_NAME: 'Elastic Workflows'` → `Elastic Workflows - High Level Solution Guide`

The `createSolutionDeck` function in the Apps Script handles this via:

```javascript
var deckName = (data.TECH_NAME || 'Unknown') + ' - High Level Solution Guide';
var copy = template.makeCopy(deckName);
```

If `TECH_NAME` is missing or empty, the deck will default to `Unknown - High Level Solution Guide`.

The skill must always ensure `TECH_NAME` is populated in the data object before running automation.


### Injection Rules

When inserting content into Apps Script:

- Replace only the `data` object
- Do not modify helper functions
- Do not rewrite unrelated script logic
- Preserve valid JavaScript syntax

If the injection location cannot be safely identified, stop automation and return the data object instead.

---

## Step 5 — Capture Result

After running the script:

- Wait for execution to complete
- Capture the returned Google Slides URL or ID

Automation is successful only if:

- the script executed without error
- a deck was created
- a valid URL or ID is returned

---

# Success Output

When automation succeeds, return:

- a short confirmation message
- the Google Slides URL
- the template mode used

Example:

Deck ready: [Google Slides URL]
Template: existing-technology

---

# Automation Failure

Automation fails if:

- script execution fails
- authentication is unavailable
- browser automation is unavailable
- Apps Script cannot be opened
- injection cannot be performed
- no deck URL is returned

When automation fails, return:

1. A short message that automation did not complete
2. The validated `data` object
3. Template Presentation ID
4. Template Apps Script ID
5. Manual execution instruction

Example:

Deck automation did not complete.

The content is ready. Paste the data object into the template Apps Script and run `createDeckFromData()`.

---

# Manual Fallback Package

Include the following:

1. Final `data` object
2. Template Presentation ID
3. Template Apps Script ID
4. Instruction: `Run createDeckFromData()`

---

# Prohibited Behavior

The skill must never:

- claim the deck was created without confirmation
- invent a deck URL
- fabricate automation steps
- modify the Apps Script logic
- skip validation checks

If automation cannot run, always fall back to returning the validated content object.