

# Web App Configuration

This document stores the deployed Apps Script web app endpoint and usage instructions.

---

# Endpoint

Web App URL:

`https://script.google.com/macros/s/AKfycbxvU9IYKbJlkc5dJaf2U4yfFsI65sP0mUC0v4n9d26JnxYauu57OytYObDWVan0cDm-dQ/exec`

Deployment ID:

`AKfycbxvU9IYKbJlkc5dJaf2U4yfFsI65sP0mUC0v4n9d26JnxYauu57OytYObDWVan0cDm-dQ`

---

# Access

Execute as: Me (morgan@elastic.co)

Who has access: Anyone with Google account

Authentication is required. Callers must be signed in to a Google account.

When called from a browser context that is already authenticated to Google, no additional auth is needed.

When called from curl or other HTTP clients, authentication tokens must be provided.

---

# Endpoints

## GET

Returns a status message confirming the endpoint is live.

Response:

```json
{"status":"ok","message":"POST your data object to create a deck."}
```

## POST

Accepts a JSON payload matching the data schema and creates a new Google Slides deck.

Request body: JSON object matching `references/data-schema.md`

Success response:

```json
{"success":true,"url":"https://docs.google.com/presentation/d/<ID>/edit"}
```

Error response:

```json
{"success":false,"error":"<error message>"}
```

---

# Helper Script

A bash helper script is available at:

`scripts/create-deck.sh`

Usage:

```bash
./scripts/create-deck.sh data/elastic-workflows-data.js
```

The script converts the JS data file to JSON and POSTs it to the web app.

---

# Updating the Deployment

When the Apps Script code changes, a new deployment version must be created for the changes to take effect in the web app.

Steps:

1. Open the Apps Script project.
2. Click Deploy → Manage deployments.
3. Edit the existing deployment or create a new one.
4. If a new deployment is created, update the URL in this file.

The Apps Script project ID is:

`1uU0EWReSUOKOJOkFUNMCrQNGPncW5Jg51CM8ioauNg1Q_0dqhXQeZgFi`
