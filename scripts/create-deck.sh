#!/bin/bash
#
# create-deck.sh
#
# Posts a presentation data object to the Apps Script web app
# and returns the new Google Slides deck URL.
#
# Usage:
#   ./create-deck.sh <data-file.js>
#   ./create-deck.sh data/elastic-workflows-data.js
#
# The input file should be a JavaScript file containing:
#   var data = { ... };
#
# The script strips the var declaration, converts to JSON,
# and POSTs it to the deployed Apps Script endpoint.

set -euo pipefail

WEB_APP_URL="https://script.google.com/macros/s/AKfycbxvU9IYKbJlkc5dJaf2U4yfFsI65sP0mUC0v4n9d26JnxYauu57OytYObDWVan0cDm-dQ/exec"

DATA_FILE="${1:?Usage: create-deck.sh <data-file.js>}"

if [ ! -f "$DATA_FILE" ]; then
  echo "Error: File not found: $DATA_FILE" >&2
  exit 1
fi

# Convert the JS data file to JSON using Node.js
JSON_PAYLOAD=$(node -e "
  const fs = require('fs');
  const content = fs.readFileSync('$DATA_FILE', 'utf8');
  eval(content);
  console.log(JSON.stringify(data));
")

echo "Posting data to web app..."
RESPONSE=$(curl -s -L \
  -X POST \
  -H "Content-Type: application/json" \
  -d "$JSON_PAYLOAD" \
  "$WEB_APP_URL")

echo "Response: $RESPONSE"

# Extract success status and URL
SUCCESS=$(echo "$RESPONSE" | node -e "
  const chunks = [];
  process.stdin.on('data', c => chunks.push(c));
  process.stdin.on('end', () => {
    try {
      const r = JSON.parse(chunks.join(''));
      if (r.success) {
        console.log(r.url);
      } else {
        console.error('Error: ' + (r.error || 'Unknown'));
        process.exit(1);
      }
    } catch(e) {
      console.error('Failed to parse response');
      process.exit(1);
    }
  });
")

echo ""
echo "Deck created: $SUCCESS"
