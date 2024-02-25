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
3. **Setup UI5 Tooling:**
    - Run `ui5 use OpenUI5`
    - Run `ui5 add sap.ui.core sap.m themelib_sap_horizon`
    - Added `scripts` into `index.html`
4. **Add default files:**
    - modified the `index.html` to use the Component
    - Added the `i18n`, App's `view` and `controller` and added properties to `manifest.json`
5. **Configure navigation and routing:**
    - Added `routing`, overview and detail view and controller.
