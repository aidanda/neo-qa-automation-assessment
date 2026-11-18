# Neo QA Automation Assessment

## Project Overview

This project contains a Cypress automated test suite for the Shino Parking Calculator demo application.

The assessment covers manual exploratory testing, bug reporting and automated functional testing of the parking cost calculations.

**Application:** [https://www.shino.de/parkcalc/](https://www.shino.de/parkcalc/)

## Technologies Used

- Cypress 16.3.0
- TypeScript 5.9.3
- Node.js
- JSON test data
- Page Object Model

## Project Structure

```text
qa-automation-test-cypress/
│
├── cypress/
│   ├── e2e/
│   │   └── parking-calculator.cy.ts
│   ├── fixtures/
│   │   └── parkingData.json
│   └── pages/
│       └── ParkingCalculatorPage.ts
│
├── bug_screenshots/
├── README.md
├── cypress.config.ts
├── package.json
└── package-lock.json
```

## Setup Instructions

1. Ensure that Node.js is installed. Node.js 20.9.0 or a compatible version is recommended.
2. Clone this repository and navigate to the project directory.
3. Install the dependencies:

```bash
npm install
```

## Running the Tests

**Open Cypress interactively:**

```bash
npm run test
```

**Run the automated test suite from the command line:**

```bash
npm run test:run
```

## Automated Test Coverage

The Cypress test suite contains 39 tests covering:

- Parking cost calculations across the selectable parking options.
- Happy path scenarios using the displayed parking rates.
- Boundary conditions, including hourly and daily maximum rates.
- Negative scenarios involving missing input values.
- Known application defects.

### Latest Test Results

| Result  | Tests |
| ------- | ----: |
| Passing |    38 |
| Failing |     1 |
| Total   |    39 |

**Note:** BT14 is intentionally left failing. It demonstrates BUG-004, where Economy Parking returns an incorrect charge for a 4-hour-30-minute stay.

The expected charge is $9.00, based on the displayed daily maximum, but the application returns $10.00.

## Bug Reports

Four application bugs were identified and documented during exploratory testing.

The associated screenshots are stored in the `bug_screenshots` directory.

The bug reports include reproduction steps, actual and expected results, severity, impact and supporting evidence.

## Testing Approach

I initially verified all calculator scenarios with bruno to establish stability.&#x20;

The automated tests use standard Cypress syntax with TypeScript.

A Page Object Model is used to separate application interactions from test scenarios. Test data is maintained separately in a JSON fixture to support reuse and maintainability.

The suite includes positive, boundary and negative test scenarios to provide coverage beyond basic parking cost calculations.
