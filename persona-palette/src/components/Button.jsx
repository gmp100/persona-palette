import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  disabled = false,
  type = 'button'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-background)',
          border: '2px solid var(--color-primary)'
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--color-secondary)',
          color: 'var(--color-background)',
          border: '2px solid var(--color-secondary)'
        };
      case 'accent':
        return {
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-background)',
          border: '2px solid var(--color-accent)'
        };
      default:
        return {};
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: 'calc(var(--padding-scale, 1) * 0.5rem) calc(var(--padding-scale, 1) * 1rem)',
          fontSize: '0.875rem'
        };
      case 'lg':
        return {
          padding: 'calc(var(--padding-scale, 1) * 1rem) calc(var(--padding-scale, 1) * 2rem)',
          fontSize: '1.125rem'
        };
      default: // md
        return {
          padding: 'calc(var(--padding-scale, 1) * 0.75rem) calc(var(--padding-scale, 1) * 1.5rem)',
          fontSize: '1rem'
        };
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center gap-2 font-semibold rounded-lg 
               transition-all duration-300 hover:scale-105 hover:shadow-lg
               focus:outline-none focus:ring-4 focus:ring-opacity-20
               disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      style={{
        ...getVariantStyles(),
        ...getSizeStyles(),
        fontFamily: 'var(--font-family)',
        fontWeight: 'var(--font-weight-bold)',
        borderRadius: 'var(--border-radius)'
      }}
    >
      {children}
    </button>
  );
};

export default Button;