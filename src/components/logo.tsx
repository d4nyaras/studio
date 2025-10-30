import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M15.9999 7.42859L24.5714 16L15.9999 24.5714L7.42847 16L15.9999 7.42859Z"
        stroke="hsl(var(--background))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 11V21" stroke="hsl(var(--background))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
