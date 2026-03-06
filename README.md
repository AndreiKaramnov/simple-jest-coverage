# Simple Jest Coverage

A TypeScript project with Jest for testing and code coverage. Contains two example modules: **Bank** and **Subscription** (with inheritance).

## Project Structure

```
src/
├── bank/
│   └── bank.ts
└── subscription/
    ├── subscription.ts
    ├── basic-plan.ts
    └── premium-plan.ts

test/
├── bank/
│   └── bank.test.ts
└── subscription/
    └── subscription.test.ts
```

## Setup

```bash
npm install
```

## Commands

- `npm test` — run tests
- `npm run test:coverage` — run tests with coverage report
- `npm run format` — format code (no semicolons)

## Student Tasks

1. **Bank**: Add withdraw tests to increase coverage (see TODO in `test/bank/bank.test.ts`)
2. **Subscription**: Add `getPrice` tests for BasicPlan and PremiumPlan (including discount for 12+ months) to increase coverage (see TODOs in `test/subscription/subscription.test.ts`)

## Coverage

Run `npm run test:coverage` to see the coverage report. HTML report is generated in `coverage/lcov-report/index.html`.
