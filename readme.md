# Simple CRM webapp with OpenUI5

Welcome to my GitHub repository! Here, I'm sharing my implementation of a simple CRM using OpenUI5.

## Repository Contents

This repository contains my implementation of a simple CRM plus my notes on how to set up the project starting from an empty folder.

## Steps

1. **Init the project:**
    - Added webapp folder containing the descriptor file aka `manifest.json` and `index.html`
    - Added `package.json` in the root folder
    - Run `npm i -D @ui5/cli`
    - Run `ui5 init`
2. **Live reload:**
    - Run `npm i ui5-middleware-livereload`
    - Added `middleware` configuration to the `ui5.yaml`