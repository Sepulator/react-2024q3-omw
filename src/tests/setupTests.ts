import * as matchers from '@testing-library/jest-dom/matchers';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { expect, vi } from 'vitest';

import AllProviders from '@/components/all-providers';

type SetupReturn = {
  user: UserEvent;
} & RenderResult;

expect.extend(matchers);

const mockedRouterPush = vi.fn((url: string) => {
  const [pathName, searchParams] = url.split('?');
  window.history.pushState({}, '', `${pathName}${searchParams}`);
});

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockedRouterPush }),
  usePathname: () => window.location.pathname,
  useSearchParams: () => new URLSearchParams(window.location.search),
}));

export function setup(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): SetupReturn {
  const user = userEvent.setup();
  return { user, ...render(ui, { wrapper: AllProviders, ...options }) };
}
