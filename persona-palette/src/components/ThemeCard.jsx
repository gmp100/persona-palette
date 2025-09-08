import React from 'react';

const ThemeCard = ({ title, description, icon }) => {
  return (
    <div className="p-6 rounded-2xl border-2 transition-all duration-300 
                   hover:shadow-lg hover:scale-105 cursor-pointer group"
         style={{ 
           backgroundColor: 'var(--color-background)',
           borderColor: 'var(--color-secondary)',
           borderRadius: 'var(--border-radius)'
         }}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
               style={{ 
                 backgroundColor: 'var(--color-primary)',
                 color: 'var(--color-background)',
                 borderRadius: 'calc(var(--border-radius) * 0.5)'
               }}>
            {icon}
          </div>
        )}
        
        <div className="flex-grow">
          <h4 className="text-lg font-semibold mb-2 transition-colors duration-300" 
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-family)',
                fontWeight: 'var(--font-weight-bold)'
              }}>
            {title}
          </h4>
          
          <p className="opacity-80 transition-opacity duration-300 group-hover:opacity-100" 
             style={{ 
               color: 'var(--color-text)',
               fontFamily: 'var(--font-family)',
               fontSize: 'var(--font-size-base)',
               fontWeight: 'var(--font-weight-normal)'
             }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;