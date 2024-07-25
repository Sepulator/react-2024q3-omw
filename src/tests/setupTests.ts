import { ReactElement } from 'react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { render, RenderOptions } from '@testing-library/react';
import { expect, afterEach } from 'vitest';

import { server } from './node';
import AllProviders from '@/components/all-providers';
import userEvent, { UserEvent } from '@testing-library/user-event';

expect.extend(matchers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export function setup(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): { user: UserEvent } {
  const user = userEvent.setup();
  return { user, ...render(ui, { wrapper: AllProviders, ...options }) };
}
