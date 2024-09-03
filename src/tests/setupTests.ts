import { ReactElement } from 'react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { expect, vi } from 'vitest';

import userEvent, { UserEvent } from '@testing-library/user-event';
import AllProviders from '@/components/all-providers';

type SetupReturn = {
  user: UserEvent;
} & RenderResult;

expect.extend(matchers);

vi.mock('next/router', () => vi.importActual('next-router-mock'));

export function setup(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): SetupReturn {
  const user = userEvent.setup();
  return { user, ...render(ui, { wrapper: AllProviders, ...options }) };
}
