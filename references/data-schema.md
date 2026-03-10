# Data Schema Reference

This document defines the exact data structure used to populate the Google Slides template for the **high-level-tech-presentation** skill.

All generated content must conform to this schema before deck automation is attempted.

This schema represents the contract between the content generation step and the Apps Script deck creation logic.

Do not rename keys.
Do not omit required fields.
Do not add additional keys unless the template and script are updated to support them.

The skill should always generate the complete object.

---

# Required Data Object

The final output used for deck generation must be a JavaScript object with the following structure.

```javascript
var data = {

  TECH_NAME: '[Technology Name]',

  // Slide 10: Elevator Pitch
  // Plain-language explanation for non-technical sellers

  ELEVATOR_1: 'Is a [simple description of what the technology is].',
  ELEVATOR_2: 'Lets [teams/users] [clear outcome or benefit].',
  ELEVATOR_3: 'Is like [simple analogy understandable by a seller].',


  // Slide 11: Positioning
  // Helps sellers understand when to bring the technology into a deal

  POSITIONING_BEST:    '[Conditions where the technology works best].',
  POSITIONING_NOT_FIT: '[Honest situation where the technology is not a good fit].',
  POSITIONING_START:   '[Customer signal that usually starts the conversation].',
  POSITIONING_LENS:    'Evaluate with [criterion1], [criterion2], and [criterion3].',


  // Slide 12: Feels Different Because
  // Observable customer-facing differentiators

  DIFFERENT_1: '[Customer-observable difference compared to alternatives].',
  DIFFERENT_2: '[Another visible operational or usability improvement].',


  // Slide 13: Why This Matters to Customers

  CUSTOMER_1:    'Lets teams [specific action] to [specific outcome].',
  CUSTOMER_2:    'Reduces [specific operational pain] through [mechanism].',
  CUSTOMER_3:    '[Business outcome expressed as operational or financial value].',
  CUSTOMER_LENS: 'Evaluate with [criterion1], [criterion2], and [criterion3].',


  // Slide 14: Why This Matters to You (AE)

  AE_1:    'Will [remove common sales friction or objection].',
  AE_2:    'Is [clear revenue motion or opportunity this opens].',
  AE_3:    'Can [simplify competitive positioning].',
  AE_LENS: 'Think about [account type 1], [type 2], and [type 3].',


  // Slide 16: How to Sell

  SELL_PURSUE: '[Customer signal indicating urgency or strong fit].',
  SELL_PAUSE:  '[Signal that the opportunity may stall].',
  SELL_OPEN:   '"[Discovery question a seller can ask]"',
  SELL_LENS:   'Qualify in on [criterion1], [criterion2], and [criterion3].',


  // Slide 17: By the Numbers

  METRIC_1_NUM:   '[Example: 3x]',
  METRIC_1_LABEL: '[Example: Faster]',
  METRIC_1_DESC:  '[Sentence explaining what is faster and why it matters].',

  METRIC_2_NUM:   '[Example: 40%]',
  METRIC_2_LABEL: '[Example: Less Cost]',
  METRIC_2_DESC:  '[Sentence explaining source of cost savings].',

  METRIC_3_NUM:   '[Example: 1]',
  METRIC_3_LABEL: '[Example: Platform]',
  METRIC_3_DESC:  '[Sentence explaining simplification or consolidation].',


  // Slide 18: Customer Story

  CUSTOMER_STORY:        '[Company] used [technology] and achieved [result].',
  CUSTOMER_STORY_DETAIL: '[Specific measurable improvement or operational benefit].',


  // Slide 19: How NOT to Sell

  NOT_SELL_1:    'Do not lead with [technical feature]; lead with customer pain.',
  NOT_SELL_2:    'Do not advance without confirming the problem exists.',
  NOT_SELL_3:    'Do not frame the solution as a feature comparison.',
  NOT_SELL_LENS: 'Qualify out on [criterion1], [criterion2], and [criterion3].',


  // Slide 20: How to Talk with Customers

  LISTEN_1: '"[Customer pain phrase heard during discovery]"',
  LISTEN_2: '"[Customer pain phrase heard during discovery]"',
  LISTEN_3: '"[Customer pain phrase heard during discovery]"',

  SAY_1: '"[Elastic positioning response]"',
  SAY_2: '"[Elastic positioning response]"',

  ASK_1: '"[Discovery question that opens the opportunity]"',

  NEXT_STEP: '[Concrete next step to progress the opportunity].'

};
```

---

# Schema Rules

All generated values must also conform to the rules defined in:

`references/writing-rules.md`

Important constraints include:

• Maximum 10–12 words per field
• No em dashes
• No label prefixes
• Lens fields must follow exact sentence structures
• Quotes required for LISTEN, SAY, and ASK fields

---

# Validation Checklist

Before attempting deck automation, the skill must confirm:

1. Every schema key is present
2. No additional keys were added
3. Word limits are respected
4. Lens sentences follow exact phrasing
5. Metrics are separated into number, label, and description
6. Quotes appear where required

If any validation fails, regenerate the content before running automation.

---

# Output Expectation

Once validated, the object becomes the input to the Apps Script function:

`createDeckFromData(data)`

The automation layer should not modify or reinterpret the object.

It should only inject the validated structure into the template script and execute the deck creation function.
