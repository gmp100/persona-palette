import { useState, useEffect } from 'react';
import { generateThemeFromPersonality } from '../utils/generatePrompt';
import { applyGoogleFont } from '../utils/applyTheme';

const STORAGE_KEY = 'persona-palette-theme';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      try {
        const parsedTheme = JSON.parse(savedTheme);
        setCurrentTheme(parsedTheme);
        // Apply Google Font if needed
        if (parsedTheme.typography.fontFamily !== 'system-ui') {
          applyGoogleFont(parsedTheme.typography.fontFamily);
        }
      } catch (err) {
        console.error('Failed to parse saved theme:', err);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    if (currentTheme) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTheme));
    }
  }, [currentTheme]);

  const generateTheme = async (personality) => {
    setIsLoading(true);
    setError(null);

    try {
      const theme = await generateThemeFromPersonality(personality);
      
      // Apply Google Font if it's not a system font
      if (theme.typography.fontFamily !== 'system-ui') {
        applyGoogleFont(theme.typography.fontFamily);
      }
      
      setCurrentTheme(theme);
    } catch (err) {
      console.error('Failed to generate theme:', err);
      if (err instanceof Error) {
        if (err.message.includes('API key')) {
          setError('Please configure your OpenAI API key in the .env file and restart the server.');
        } else {
          setError(err.message);
        }
      } else {
        setError('Failed to generate theme');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetTheme = () => {
    setCurrentTheme(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    currentTheme,
    isLoading,
    error,
    generateTheme,
    resetTheme
  };
};