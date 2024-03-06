// Step 1: Import `expect` and `afterEach` methods from the `vitest` package.
import { expect, afterEach } from 'vitest';

// Step 2: Import the `cleanup` method from `@testing-library/react`.
import { cleanup } from '@testing-library/react';

// Step 3: Import the `matchers` default object from `@testing-library/jest-dom/matchers`
import * as matchers from '@testing-library/jest-dom/matchers';

// Step 4: Extend the `expect` method to include the matcher methods from RTL.
expect.extend(matchers);

// Step 5: Invoke the `afterEach` method by passing an arrow function which calls `cleanup()`.
afterEach(() => {
    cleanup();
});