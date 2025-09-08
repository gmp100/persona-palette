import OpenAI from 'openai';

// Initialize OpenAI client with API key from environment variables
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true // ⚠️ only for demo, not for production
});

export const generateThemeFromPersonality = async (personality) => {
  const prompt = `
You are a UI/UX designer tasked with creating a comprehensive theme configuration based on a personality or mood description.

Personality/Mood: "${personality}"

Please generate a JSON theme configuration that captures the essence of this personality. The theme should include:

1. Colors (hex codes): primary, secondary, accent, background, text
2. Typography: fontFamily, fontSize (base, heading), fontWeight (normal, bold)
3. Spacing: paddingScale, marginScale
4. Design: borderRadius, buttonStyle, cardStyle

Return ONLY a valid JSON object with this exact structure:
{
  "colors": {...},
  "typography": {...},
  "spacing": {...},
  "design": {...},
  "personality": "${personality}"
}
`;

  try {
    // Check if API key is configured
    if (!import.meta.env.VITE_OPENAI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY === 'your_openai_api_key_here') {
      throw new Error('OpenAI API key is not configured. Please add your API key to the .env file and restart the dev server.');
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // recommended for frontend
      messages: [
        { role: "system", content: "You are a theme generator. Always return valid JSON." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7
    });

    const content = response.choices[0]?.message?.content;
    
    if (!content) throw new Error('No response from OpenAI');

    // Extract JSON from response (in case model adds text)
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No valid JSON found in response');

    const themeData = JSON.parse(jsonMatch[0]);
    
    // Validate structure
    if (!themeData.colors || !themeData.typography || !themeData.spacing || !themeData.design) {
      throw new Error('Invalid theme structure received');
    }

    return themeData;
  } catch (error) {
    console.error('Error generating theme:', error);

    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        throw new Error('OpenAI API key is required. Please add your API key to environment variables.');
      } else if (error.message.includes('quota')) {
        throw new Error('OpenAI API quota exceeded. Please check your billing.');
      } else {
        throw error;
      }
    }

    throw new Error('Failed to generate theme');
  }
};
