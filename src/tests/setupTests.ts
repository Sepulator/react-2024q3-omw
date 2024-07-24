import { ReactElement } from 'react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { render, RenderOptions } from '@testing-library/react';
import { expect, afterEach } from 'vitest';

import { server } from './node';
import AllProviders from '@/components/all-providers';

expect.extend(matchers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export function setup(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: AllProviders, ...options });
}
