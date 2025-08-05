// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// Pipeline to Run single spec:
/*
name: Cypress Tests

on:
  workflow_dispatch:
    inputs:
      test_spec:
        description: 'Path to the Cypress spec file'
        required: true
        default: 'cypress/e2e/Launchkit/FunnelFlows.cy.js'

jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout the latest code
        uses: actions/checkout@v4
      - name: Run a Specific Cypress Test
        uses: cypress-io/github-action@v6
        with:
          browser: electron
          spec: ${{ github.event.inputs.test_spec }}
      - name: Save screenshots (if any)
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: cypress-artifacts
          path: cypress/screenshots
          
          */

            
        
