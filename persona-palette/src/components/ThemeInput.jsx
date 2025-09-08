import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Wand2, Download } from 'lucide-react';

const ThemeInput = () => {
  const [input, setInput] = useState('');
  const { generateTheme, currentTheme, isLoading } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      await generateTheme(input);
    }
  };

  const downloadTheme = () => {
    if (currentTheme) {
      const dataStr = JSON.stringify(currentTheme, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      
      const exportFileDefaultName = 'persona-theme.json';
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    }
  };

  const placeholderExamples = [
    "cozy grandma",
    "futuristic rebel",
    "elegant minimalist",
    "cyberpunk warrior",
    "nature lover",
    "retro gamer",
    "sophisticated executive",
    "bohemian artist"
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholderExamples.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Try: "${placeholderExamples[placeholderIndex]}"`}
            disabled={isLoading}
            className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl 
                     focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-100
                     transition-all duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed
                     placeholder:text-gray-400"
            style={{
              fontFamily: 'var(--font-family, system-ui)',
              borderColor: currentTheme ? 'var(--color-primary)' : undefined,
              backgroundColor: currentTheme ? 'var(--color-background)' : undefined,
              color: currentTheme ? 'var(--color-text)' : undefined
            }}
          />
        </div>
        
        <div className="flex gap-3 justify-center">
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white 
                     rounded-xl font-semibold transition-all duration-300
                     hover:bg-blue-700 hover:scale-105 hover:shadow-lg
                     disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none
                     focus:outline-none focus:ring-4 focus:ring-blue-200"
            style={{
              backgroundColor: currentTheme ? 'var(--color-primary)' : undefined,
              borderRadius: currentTheme ? 'var(--border-radius)' : undefined
            }}
          >
            <Wand2 className="w-5 h-5" />
            {isLoading ? 'Generating...' : 'Generate Theme'}
          </button>

          {currentTheme && (
            <button
              type="button"
              onClick={downloadTheme}
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 
                       text-gray-700 rounded-xl font-semibold transition-all duration-300
                       hover:border-gray-400 hover:bg-gray-50 hover:scale-105
                       focus:outline-none focus:ring-4 focus:ring-gray-200"
              style={{
                borderColor: currentTheme ? 'var(--color-secondary)' : undefined,
                color: currentTheme ? 'var(--color-text)' : undefined,
                borderRadius: currentTheme ? 'var(--border-radius)' : undefined
              }}
            >
              <Download className="w-5 h-5" />
              Download
            </button>
          )}
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500" 
           style={{ 
             color: currentTheme ? 'var(--color-text)' : undefined,
             opacity: 0.7
           }}>
          Describe a personality, mood, or aesthetic to generate a custom UI theme
        </p>
      </div>
    </div>
  );
};

export default ThemeInput;