import { ReactElement } from 'react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { expect, afterEach, vi } from 'vitest';

import { server } from './node';
import AllProviders from '@/components/all-providers';
import userEvent, { UserEvent } from '@testing-library/user-event';

type SetupReturn = {
  user: UserEvent;
} & RenderResult;

expect.extend(matchers);
vi.mock('next/router', () => vi.importActual('next-router-mock'));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export function setup(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): SetupReturn {
  const user = userEvent.setup();
  return { user, ...render(ui, { wrapper: AllProviders, ...options }) };
}
