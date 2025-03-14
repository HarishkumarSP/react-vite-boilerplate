/**
 * Sets up the testing environment for React components using Vitest and Testing Library.
 * Extends Vitest's expect with Jest DOM matchers and ensures cleanup after each test.
 */
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
