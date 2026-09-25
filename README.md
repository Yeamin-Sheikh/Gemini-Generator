# Gemini generator

Chrome extension for automation on Google Gemini (gemini.google.com). Automates prompt submission, batch processing, and response or image downloads.

## Features

- Batch prompt input and generation on Gemini
- Side panel interface built with Vue and PrimeVue components
- Content script integration with gemini.google.com
- Background service worker handling extension lifecycle and task orchestration
- Automated download triggers for generated outputs

## Project structure

- `manifest.json`: Manifest V3 extension configuration and permissions.
- `service-worker-loader.js`: Module loader for the background service worker.
- `assets/`: Bundled JavaScript logic, CSS styles, and web font assets.
- `src/ui/side-panel/`: HTML entry point for the Chrome side panel interface.
- `src/assets/`: Icon assets.

## Installation in Chrome

1. Open Google Chrome and go to `chrome://extensions/`.
2. Enable Developer mode using the toggle in the top-right corner.
3. Click "Load unpacked".
4. Select this directory.
5. Open `gemini.google.com` and open the extension side panel.

## Permissions

The extension requests the following permissions in `manifest.json`:
- `storage`: Persists task settings and user preferences locally.
- `tabs` and `activeTab`: Interacts with the active Gemini browser tab.
- `sidePanel`: Displays the extension control panel in the Chrome side panel.
- `downloads`: Saves generated content to disk.
- `debugger`: Automates interaction and file attachments on the page.
