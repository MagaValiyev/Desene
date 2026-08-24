
export const colors = {
  ink: '#16150F',
  page: '#F6F3ED',
  canvas: '#EDE9E1',
  card: '#FFFFFF',

  magenta: '#E0198E',
  magentaSoft: '#F58CC2',
  blue: '#1D8FF5',
  blueDeep: '#1D6FC0',
  mint: '#8CD5B0',
  green: '#1E7A4E',

  greenSurface: '#E1EFE6',
  blueSurface: '#DCE8F8',
  pinkSurface: '#F3D9E9',
  sandSurface: '#F6ECD9',
  sandText: '#8A6410',
  purpleSurface: '#EDE7F6',
  purpleText: '#5B3FBF',
  violetSurface: '#E7DFF6',

  track: '#EFEBE3',
  border: '#E6E1D7',
  borderStrong: '#DED8CC',
  avatar: '#E9E3D8',

  stepTrack: '#E2DCD1',
  deckBack: '#EAE4D8',
  deckMiddle: '#F0EAE0',
  dotOutline: '#D9D3C7',

  aiInk: '#3B2A80',
  aiBody: 'rgba(45,30,95,.7)',
  magentaBright: '#F2609F',
} as const;

export const inkAlpha = {
  strong: 'rgba(22,21,15,.6)',
  medium: 'rgba(22,21,15,.55)',
  soft: 'rgba(22,21,15,.5)',
  muted: 'rgba(22,21,15,.45)',
  faint: 'rgba(22,21,15,.4)',
  ghost: 'rgba(22,21,15,.35)',
} as const;

export const onDark = {
  primary: '#FFFFFF',
  secondary: 'rgba(255,255,255,.8)',
  muted: 'rgba(255,255,255,.6)',
  soft: 'rgba(255,255,255,.5)',
  hairline: 'rgba(255,255,255,.2)',
  track: 'rgba(255,255,255,.14)',
} as const;

export const radius = {
  pill: 999,
  chip: 10,
  sm: 14,
  md: 18,
  lg: 22,
  xl: 24,
  xxl: 28,
} as const;

export const spacing = {
  screenX: 22,
  gap: 12,
} as const;

// font icin
export const weight = {
  regular: '500',
  medium: '600',
  bold: '700',
  black: '800',
} as const;

export const shadow = {
  card: {
    shadowColor: colors.ink,
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 6,
  },
  bar: {
    shadowColor: colors.ink,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.14,
    shadowRadius: 22,
    elevation: 10,
  },
} as const;

export const eyebrowSpacing = 1.2;
