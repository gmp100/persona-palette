// Utility functions for applying themes

export const applyGoogleFont = (fontFamily) => {
  // Remove existing Google Fonts link if any
  const existingLink = document.querySelector('link[href*="fonts.googleapis.com"]');
  if (existingLink) {
    existingLink.remove();
  }

  // Don't load system fonts
  if (fontFamily === 'system-ui') {
    return;
  }

  // Create new Google Fonts link
  const link = document.createElement('link');
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontFamily)}:wght@400;500;600;700&display=swap`;
  link.rel = 'stylesheet';
  
  document.head.appendChild(link);
};

export const generateTailwindColorClasses = (theme) => {
  // This function could be used to generate Tailwind classes if needed
  // For now, we're using CSS variables which is more flexible
  return {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    accent: theme.colors.accent,
    background: theme.colors.background,
    text: theme.colors.text
  };
};

export const createThemeCSS = (theme) => {
  return `
    :root {
      --color-primary: ${theme.colors.primary};
      --color-secondary: ${theme.colors.secondary};
      --color-accent: ${theme.colors.accent};
      --color-background: ${theme.colors.background};
      --color-text: ${theme.colors.text};
      --font-family: ${theme.typography.fontFamily};
      --font-size-base: ${theme.typography.fontSize.base};
      --font-size-heading: ${theme.typography.fontSize.heading};
      --font-weight-normal: ${theme.typography.fontWeight.normal};
      --font-weight-bold: ${theme.typography.fontWeight.bold};
      --padding-scale: ${theme.spacing.paddingScale};
      --margin-scale: ${theme.spacing.marginScale};
      --border-radius: ${theme.design.borderRadius};
    }
  `;
};