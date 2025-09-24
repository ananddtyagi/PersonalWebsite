export const theme = {
  colors: {
    primary: {
      forestDeep: '#0A3A2E',
      forestMid: '#0F5940',
      limeBright: '#A8E890',
      limeGlow: '#B8FF9F',
    },
    neutral: {
      concrete: '#E5E5E5',
      concreteDark: '#B8B8B8',
      stone: '#767676',
      charcoal: '#1A1A1A',
      offWhite: '#FAFAF8',
      white: '#FFFFFF',
    },
    glass: {
      white: 'rgba(255, 255, 255, 0.1)',
      border: 'rgba(255, 255, 255, 0.2)',
      dark: 'rgba(0, 0, 0, 0.1)',
    },
    platforms: {
      github: '#0D1117',
      youtube: '#FF0000',
      linkedin: '#0A66C2',
      medium: '#000000',
      twitter: '#1DA1F2',
    },
  },
  
  gradients: {
    hero: 'linear-gradient(135deg, #0A3A2E 0%, #0F5940 50%, #A8E890 100%)',
    mesh: 'radial-gradient(circle at 20% 50%, rgba(168, 232, 144, 0.3) 0%, transparent 50%)',
    card: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
  },
  
  typography: {
    fonts: {
      display: '"Space Grotesk", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      body: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"JetBrains Mono", "SF Mono", "Monaco", "Consolas", monospace',
    },
    sizes: {
      hero: 'clamp(80px, 15vw, 180px)',
      h1: 'clamp(48px, 8vw, 72px)',
      h2: 'clamp(32px, 5vw, 48px)',
      h3: 'clamp(24px, 4vw, 32px)',
      h4: 'clamp(20px, 3vw, 24px)',
      body: '18px',
      bodyLarge: '20px',
      small: '14px',
      tiny: '12px',
    },
    weights: {
      black: 900,
      bold: 700,
      medium: 500,
      regular: 400,
      light: 300,
    },
    lineHeights: {
      tight: 1.1,
      normal: 1.5,
      relaxed: 1.7,
    },
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
    xxl: '128px',
    xxxl: '256px',
  },
  
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0 4px 12px rgba(0, 0, 0, 0.08)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.16)',
    glass: '0 8px 32px rgba(0, 0, 0, 0.08)',
    glow: '0 0 40px rgba(168, 232, 144, 0.3)',
  },
  
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
    bounce: '600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  breakpoints: {
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
  
  zIndex: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    modalBackdrop: 400,
    modal: 500,
    popover: 600,
    tooltip: 700,
    toast: 800,
    navigation: 900,
  },
};

export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  fadeDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  scaleIn: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideLeft: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideRight: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
};