export const colors = {
  primary: {
    DEFAULT: 'oklch(65% 0.25 30deg)',
    light: 'oklch(75% 0.20 30deg)',
    dark: 'oklch(55% 0.30 30deg)',
  },

  secondary: {
    DEFAULT: 'oklch(75% 0.22 210deg)',
    light: 'oklch(85% 0.18 210deg)',
    dark: 'oklch(65% 0.26 210deg)',
  },

  accent: {
    DEFAULT: 'oklch(75% 0.3 320deg)',
    light: 'oklch(85% 0.25 320deg)',
    dark: 'oklch(65% 0.35 320deg)',
  },

  background: {
    light: 'oklch(98% 0.01 100deg)',
    dark: 'oklch(15% 0.02 260deg)',
  },

  text: {
    light: 'oklch(20% 0 0deg)',
    dark: 'oklch(95% 0 0deg)',
    muted: 'oklch(50% 0.02 260deg)',
  },

  success: {
    DEFAULT: 'oklch(75% 0.22 145deg)',
    light: 'oklch(85% 0.18 145deg)',
    dark: 'oklch(65% 0.26 145deg)',
  },

  warning: {
    DEFAULT: 'oklch(80% 0.28 85deg)',
    light: 'oklch(88% 0.24 85deg)',
    dark: 'oklch(72% 0.32 85deg)',
  },

  error: {
    DEFAULT: 'oklch(65% 0.25 10deg)',
    light: 'oklch(75% 0.21 10deg)',
    dark: 'oklch(55% 0.29 10deg)',
  },
};

export const semantic = {
  background: {
    DEFAULT: colors.background.light,
    dark: colors.background.dark,
  },

  text: {
    primary: colors.text.light,
    secondary: colors.text.muted,
    disabled: 'oklch(70% 0.01 260deg)',
    inverse: colors.text.dark,
  },

  action: {
    active: colors.primary.DEFAULT,
    hover: colors.primary.light,
    disabled: colors.text.muted,
  },
};

export function generateCssVariables() {
  return `
:root {
  /* Basics colors */
  --color-primary: ${colors.primary.DEFAULT};
  --color-primary-light: ${colors.primary.light};
  --color-primary-dark: ${colors.primary.dark};

  --color-secondary: ${colors.secondary.DEFAULT};
  --color-secondary-light: ${colors.secondary.light};
  --color-secondary-dark: ${colors.secondary.dark};

  --color-accent: ${colors.accent.DEFAULT};
  --color-accent-light: ${colors.accent.light};
  --color-accent-dark: ${colors.accent.dark};

  /* Background colors */
  --color-background-light: ${colors.background.light};
  --color-background-dark: ${colors.background.dark};

  /* Colors for text */
  --color-text-light: ${colors.text.light};
  --color-text-dark: ${colors.text.dark};
  --color-text-muted: ${colors.text.muted};

  /* Action colors */
  --color-success: ${colors.success.DEFAULT};
  --color-success-light: ${colors.success.light};
  --color-success-dark: ${colors.success.dark};

  --color-warning: ${colors.warning.DEFAULT};
  --color-warning-light: ${colors.warning.light};
  --color-warning-dark: ${colors.warning.dark};

  --color-error: ${colors.error.DEFAULT};
  --color-error-light: ${colors.error.light};
  --color-error-dark: ${colors.error.dark};

  /* Semantic colors */
  --color-background: ${semantic.background.DEFAULT};
  --color-background-inverse: ${semantic.background.dark};

  --color-text-primary: ${semantic.text.primary};
  --color-text-secondary: ${semantic.text.secondary};
  --color-text-disabled: ${semantic.text.disabled};
  --color-text-inverse: ${semantic.text.inverse};

  --color-action-active: ${semantic.action.active};
  --color-action-hover: ${semantic.action.hover};
  --color-action-disabled: ${semantic.action.disabled};
}
  `;
}