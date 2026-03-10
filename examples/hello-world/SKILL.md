---
name: hello-world
description: >
  A minimal example skill that greets the user with a formatted
  welcome message. Use when the user says "test my skills setup",
  "hello world skill", or "verify skills are working". This is a
  reference example, not a production skill.
---

# Hello World

A minimal skill to verify your skills setup is working. If Claude
loads this skill and produces a greeting, everything is configured
correctly.

## Inputs

- None required. The user just needs to trigger it.

## Outputs

- A short formatted greeting confirming the skill loaded.

## Steps

### Step 1: Confirm the skill loaded

If you're reading this, the skill triggered successfully.

### Step 2: Greet the user

Respond with:

```
✅ Skills are working! The "hello-world" skill loaded successfully.
```

## Examples

**Example 1: Basic test**
User says: "test my skills setup"
Result: A confirmation message that the hello-world skill loaded.
