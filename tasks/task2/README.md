# Store App Task

## Overview

Welcome to the Store App task!
In this exercise, you will be developing a simple store application where admins can manage products, while customers can order them.
Your goal is to make the store functional by following the instructions provided.

Run the tests like before:

```bash
npm test
```

or

```bash
npm run test-watch
```

Make sure all tests pass before submitting your solution.

## Task Instructions

1. Make Tests Pass:
   Start by making the existing tests pass. You will find these tests in the `e2e.test.ts file`.

2. Add More Tests and Code:
   Extend the current code in the `/store/index.ts` by adding more functionalities along with corresponding tests to make the store functional.

3. Create Products Repository:
   Implement a product repository that will handle storing and retrieving product information.

4. Calculate Shipping Costs for Placed Orders:
   Calculate the shipping cost using the formula: `shipping cost = 3 \* quantity + 2`.
   For orders with a quantity above 10, the shipping cost is always 35.

5. Free Shipping on Christmas Eve:
   Add a feature where the shipping cost is free on Christmas Eve (24.12).

6. Improve Type Safety:
   Fix the Result type to make it more type-safe. Ensure there is no usage of `any` in the details.

## Submission

Once you have completed the task, ensure all tests pass and the functionality is working as expected. Submit your solution according to the instructions provided by your interviewer.

### Tips for Success

- Understand the Requirements: Make sure you understand the functional requirements before writing any code.
- Test your code: Write tests to make sure it passes the requirements.
- Code Quality: Follow best practices for clean, maintainable, and readable code.

## Good luck, and happy coding!

Droids on Roids Web Team
