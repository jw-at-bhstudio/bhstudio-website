export const theme = {
  colors: {
    surface: '#F9F9F8',
    surfaceAlt: '#EFEFEF',
    ink: '#1A1A1A',
    inkMuted: 'rgba(26, 26, 26, 0.6)', // 60% opacity of ink
    inkFaint: 'rgba(26, 26, 26, 0.4)', // 40% opacity of ink
    line: 'rgba(26, 26, 26, 0.1)',     // 10% opacity of ink
    lineStrong: '#1A1A1A',
  },
  typography: {
    fonts: {
      sans: '"IBM Plex Sans", "IBM Plex Sans SC", ui-sans-serif, system-ui, sans-serif',
      mono: '"IBM Plex Mono", ui-monospace, SFMono-Regular, monospace',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      display: '12vw',
    },
    leading: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    tracking: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    }
  },
  layout: {
    maxWidth: '1536px', // max-w-screen-2xl
    padding: {
      mobile: '1.5rem', // px-6
      tablet: '3rem',   // px-12
      desktop: '4rem',  // px-16
    }
  }
} as const;

export type Theme = typeof theme;
