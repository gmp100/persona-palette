import React from 'react';
import Button from './Button';
import ThemeCard from './ThemeCard';
import { Star, Heart, Settings, User, Mail, Phone, Zap, Shield } from 'lucide-react';

const ThemePreview = ({ theme }) => {
  return (
    <div className="w-full space-y-12">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2"
          style={{
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-family)',
            fontSize: 'var(--font-size-heading)',
            fontWeight: 'var(--font-weight-bold)'
          }}>
          Live Theme Preview
        </h2>
        <p className="text-lg opacity-80"
          style={{
            color: 'var(--color-text)',
            fontFamily: 'var(--font-family)',
            fontSize: 'var(--font-size-base)'
          }}>
          Experience your personality-driven design system
        </p>
      </div>

      {/* Component Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* Buttons Showcase */}
        <div className="space-y-6 p-6 rounded-2xl shadow-md bg-white/60 backdrop-blur-sm"
          style={{
            backgroundColor: "var(--color-background)",
            borderRadius: "var(--border-radius)",
          }}>

          {/* Section Heading */}
          <h3
            className="text-2xl font-bold tracking-tight border-b pb-2"
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-family)",
            }}
          >
            Interactive Elements
          </h3>

          {/* Buttons Row */}
          <div className="flex flex-wrap gap-6 w-full justify-center">

            {/* Solid Button */}
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold 
               bg-[var(--color-primary)] text-white shadow-md 
               transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
            >
              <Zap className="w-5 h-5" />
              Solid Button
            </button>

            {/* Outline Button */}
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 
               border-[var(--color-secondary)] text-[var(--color-secondary)] 
               transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white"
            >
              <Shield className="w-4 h-4" />
              Outline Button
            </button>

            {/* Ghost Button */}
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
             text-[var(--color-accent)] border-2 border-[var(--color-accent)] bg-white/40 
             backdrop-blur-sm shadow-sm
             transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white hover:shadow-md"
            >
              <Star className="w-4 h-4" />
              Ghost Button
            </button>



            {/* Gradient Button */}
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold 
               text-white shadow-md 
               bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] 
               transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Zap className="w-5 h-5" />
              Gradient Button
            </button>
          </div>


        </div>

        {/* Cards Showcase */}

        <div
          className="space-y-6 p-6 rounded-2xl shadow-md bg-white/50 backdrop-blur-sm"
          style={{
            backgroundColor: "var(--color-background)",
            borderRadius: "var(--border-radius)",
          }}
        >
          <h3
            className="text-2xl font-bold tracking-tight border-b pb-3"
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-family)",
            }}
          >
            Content Cards
          </h3>

          <div className="space-y-4">
            <ThemeCard
              title="Feature Card"
              description="Showcasing card design with your personality theme."
              icon={<User className="w-6 h-6" />}
            />

            <ThemeCard
              title="Another Feature"
              description="Consistent styling across all components."
              icon={<Heart className="w-6 h-6" />}
            />

            {/* New Third Card */}
            <ThemeCard
              title="Persona Palette"
              description="AI powered dynamic theming app preview."
              icon={<Settings className="w-6 h-6" />}
            />
          </div>
        </div>



        {/* Form Elements Showcase */}
        <div
          className="space-y-6 p-6 rounded-2xl shadow-md bg-white/50 backdrop-blur-sm"
          style={{
            backgroundColor: "var(--color-background)",
            borderRadius: "var(--border-radius)",
          }}
        >
          <h3
            className="text-2xl font-bold tracking-tight border-b pb-3"
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-family)",
            }}
          >
            Form Elements
          </h3>

          <div className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-family)",
                }}
              >
                <Mail className="w-4 h-4 inline mr-2 text-[var(--color-secondary)]" />
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border-2 shadow-sm
                   transition-all duration-300 focus:outline-none 
                   focus:ring-4 focus:ring-[var(--color-secondary)]/40"
                style={{
                  backgroundColor: "white",
                  borderColor: "var(--color-secondary)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-family)",
                  borderRadius: "var(--border-radius)",
                }}
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-family)",
                }}
              >
                <Phone className="w-4 h-4 inline mr-2 text-[var(--color-secondary)]" />
                Phone
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-lg border-2 shadow-sm
                   transition-all duration-300 focus:outline-none 
                   focus:ring-4 focus:ring-[var(--color-secondary)]/40"
                style={{
                  backgroundColor: "white",
                  borderColor: "var(--color-secondary)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-family)",
                  borderRadius: "var(--border-radius)",
                }}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-family)",
                }}
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Enter your message here..."
                className="w-full px-4 py-3 rounded-lg border-2 shadow-sm resize-none
                   transition-all duration-300 focus:outline-none 
                   focus:ring-4 focus:ring-[var(--color-secondary)]/40"
                style={{
                  backgroundColor: "white",
                  borderColor: "var(--color-secondary)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-family)",
                  borderRadius: "var(--border-radius)",
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full px-6 py-3 rounded-lg font-semibold 
                 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] 
                 text-white shadow-md transition-all duration-300 
                 hover:shadow-lg hover:scale-105"
            >
              Submit
            </button>
          </div>
        </div>

      </div>

      {/* Color Palette Display */}
      <div className="p-6 rounded-2xl border-2 transition-all duration-300"
        style={{
          backgroundColor: 'var(--color-background)',
          borderColor: 'var(--color-secondary)',
          borderRadius: 'var(--border-radius)'
        }}>
        <h3 className="text-xl font-bold mb-6"
          style={{
            color: 'var(--color-text)',
            fontFamily: 'var(--font-family)',
            fontWeight: 'var(--font-weight-bold)'
          }}>
          Color Palette
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: 'Primary', color: theme.colors.primary },
            { name: 'Secondary', color: theme.colors.secondary },
            { name: 'Accent', color: theme.colors.accent },
            { name: 'Background', color: theme.colors.background },
            { name: 'Text', color: theme.colors.text }
          ].map((colorInfo) => (
            <div key={colorInfo.name} className="text-center">
              <div
                className="w-full h-16 rounded-lg mb-2 border-2 border-gray-200"
                style={{ backgroundColor: colorInfo.color }}
              />
              <p className="text-sm font-medium"
                style={{
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-family)',
                  fontWeight: 'var(--font-weight-bold)'
                }}>
                {colorInfo.name}
              </p>
              <p className="text-xs opacity-70"
                style={{
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-family)'
                }}>
                {colorInfo.color}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemePreview;