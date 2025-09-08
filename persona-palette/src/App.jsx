import React, { useEffect } from 'react';
import ThemeInput from './components/ThemeInput';
import ThemePreview from './components/ThemePreview';
import { useTheme } from './hooks/useTheme';
import { Palette } from 'lucide-react';

function App() {
  const { currentTheme, isLoading, error } = useTheme();

  useEffect(() => {
    // Apply theme to CSS variables when theme changes
    if (currentTheme) {
      const root = document.documentElement;
      
      // Apply colors
      root.style.setProperty('--color-primary', currentTheme.colors.primary);
      root.style.setProperty('--color-secondary', currentTheme.colors.secondary);
      root.style.setProperty('--color-accent', currentTheme.colors.accent);
      root.style.setProperty('--color-background', currentTheme.colors.background);
      root.style.setProperty('--color-text', currentTheme.colors.text);
      
      // Apply typography
      root.style.setProperty('--font-family', currentTheme.typography.fontFamily);
      root.style.setProperty('--font-size-base', currentTheme.typography.fontSize.base);
      root.style.setProperty('--font-size-heading', currentTheme.typography.fontSize.heading);
      root.style.setProperty('--font-weight-normal', currentTheme.typography.fontWeight.normal.toString());
      root.style.setProperty('--font-weight-bold', currentTheme.typography.fontWeight.bold.toString());
      
      // Apply spacing and design
      root.style.setProperty('--padding-scale', currentTheme.spacing.paddingScale.toString());
      root.style.setProperty('--margin-scale', currentTheme.spacing.marginScale.toString());
      root.style.setProperty('--border-radius', currentTheme.design.borderRadius);
    }
  }, [currentTheme]);

  return (
    <div className="min-h-screen transition-colors duration-500" 
         style={{ backgroundColor: 'var(--color-background, #f8fafc)' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Palette className="w-8 h-8 mr-3" 
                    style={{ color: 'var(--color-primary, #3b82f6)' }} />
            <h1 className="text-4xl font-bold" 
                style={{ 
                  color: 'var(--color-text, #1f2937)',
                  fontFamily: 'var(--font-family, system-ui)',
                  fontSize: 'var(--font-size-heading, 2.25rem)',
                  fontWeight: 'var(--font-weight-bold, 700)'
                }}>
              Persona Palette
            </h1>
          </div>
          <p className="text-xl opacity-80" 
             style={{ 
               color: 'var(--color-text, #1f2937)',
               fontFamily: 'var(--font-family, system-ui)',
               fontSize: 'var(--font-size-base, 1rem)'
             }}>
            Transform personalities into beautiful UI themes
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Theme Input Section */}
          <div className="mb-12">
            <ThemeInput />
          </div>

          {/* Error Display */}
          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 font-medium">Error generating theme:</p>
              <p className="text-red-500">{error}</p>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="mb-8 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-50 border border-blue-200">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                <span className="text-blue-700 font-medium">Generating your theme...</span>
              </div>
            </div>
          )}

          {/* Theme Preview Section */}
          {currentTheme && (
            <div className="transition-opacity duration-500 opacity-100">
              <ThemePreview theme={currentTheme} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;