

# Validation Rules

This document defines the validation checks that must be applied to generated slide content before automation runs.

The goal of validation is to ensure the generated data object:

- Matches the schema defined in `references/data-schema.md`
- Follows the writing constraints defined in `references/writing-rules.md`
- Will not break the Google Slides template

If any rule fails, the field must be regenerated before proceeding to deck automation.

---

# Word Limits

Every field must contain **12 words or fewer**.

Preferred length:

6–10 words.

If a field exceeds 12 words, it must be rewritten.

---

# Disallowed Characters

The following character must never appear:

—

(em dash)

If present, replace with:

- comma
- colon
- semicolon
- or restructure the sentence

---

# Label Prefix Validation

Generated text must **not repeat slide labels**.

The following phrases must NOT appear at the beginning of any field:

Works best when
Pause when
Pursue when
Next step
Not a good fit when

Example:

❌ "Works best when teams operate microservices at scale."

✅ "Large microservice environments with frequent deployments."

---

# Lens Sentence Formats

Certain fields must follow **exact sentence structures**.

POSITIONING_LENS

Evaluate with X, Y, and Z.

CUSTOMER_LENS

Evaluate with X, Y, and Z.

SELL_LENS

Qualify in on X, Y, and Z.

NOT_SELL_LENS

Qualify out on X, Y, and Z.

AE_LENS

Think about X, Y, and Z.

These sentences must match the structure exactly.

---

# Metrics Validation

Each metric must include three fields:

METRIC_NUM
METRIC_LABEL
METRIC_DESC

Rules:

METRIC_NUM

Short value only.

Examples:

3x
40%
1

Units must NOT appear in METRIC_NUM.

Units belong in the label.

METRIC_LABEL

Short description of the metric.

Examples:

Faster
Less Cost
Unified Platform

METRIC_DESC

One sentence explaining why the metric matters.

Example:

"Faster incident detection reduces downtime and improves service reliability."

---

# Quote Validation

The following fields must contain quoted text:

LISTEN_1
LISTEN_2
LISTEN_3
SAY_1
SAY_2
ASK_1

Examples:

"Our deployment process keeps breaking across environments."

"Elastic helps teams simplify operations by consolidating observability and search."

"How are you managing deployments across environments today?"

---

# Schema Completeness

All keys defined in:

`references/data-schema.md`

must appear in the final `data` object.
This includes the mental model fields: MENTAL_MODEL_TITLE, MENTAL_MODEL_DESCRIPTION, and MENTAL_MODEL_IMAGE_PROMPT.

Rules:

- No required fields may be missing
- No extra fields may be added

If a field is missing, regenerate it before proceeding.

---

# Mental Model Validation

Mental model fields provide an everyday analogy and visual concept.

Required fields:

MENTAL_MODEL_TITLE
MENTAL_MODEL_DESCRIPTION
MENTAL_MODEL_IMAGE_PROMPT

Rules:

MENTAL_MODEL_TITLE

Short phrase naming the analogy.

Example:

"Like a GPS for data"

MENTAL_MODEL_DESCRIPTION

Short explanation connecting the analogy to the capability.

Example:

"Routes queries to the right data instantly."

MENTAL_MODEL_IMAGE_PROMPT

A simple description of a visual scene representing the analogy.

The prompt should describe **a concrete visual**, not a slogan.

Good example:

"A GPS navigation screen routing cars through a city."

Bad example:

"Transformative digital intelligence platform."

---

# Final Validation Checklist

Before running deck automation confirm:

1. All schema keys exist.
2. No additional keys were added.
3. Every value is ≤ 12 words.
4. No em dashes appear.
5. No label prefixes are used.
6. Lens sentences follow exact formats.
7. Metrics follow NUM / LABEL / DESC structure.
8. LISTEN, SAY, and ASK values are quoted.
9. Mental model fields exist and the image prompt describes a simple visual scene.

If any rule fails, regenerate the field before creating the deck.