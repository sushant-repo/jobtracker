import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { LoadingProvider } from './LoadingContext';

describe('LoadingProvider', () => {
  it('renders children without throwing', () => {
    const markup = renderToStaticMarkup(
      <LoadingProvider>
        <div>content</div>
      </LoadingProvider>
    );

    expect(markup).toContain('content');
  });
});
