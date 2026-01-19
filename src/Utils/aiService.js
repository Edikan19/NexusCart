import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export async function getAIRecommendations(userRequest) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = `You are a helpful shopping assistant for NexusCart, an e-commerce platform in Nigeria. A customer is asking: "${userRequest}"

Please recommend 5 specific products that match their request. For EACH product, provide:

1. **Product name(include brand and model)
2. **Estimated price in Nigerian Naira (₦)** - Use realistic current Nigerian market prices
3. **Detailed description** :
   - Key specifications
   - Build quality and design features
   - Special features or technology 
   - Performance highlights
4. **Why it's a match**:
   - Who this product is perfect for
   - What use cases it excels at
   - Why it's good value at this price point

Format your response using this structure:
- Be conversational and helpful
- Include a brief introduction and closing question
- Make descriptions detailed and informative

Use realistic Nigerian market prices and be enthusiastic but honest in your recommendations.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error("AI Service Error:", error);
    console.error("Error details:", error.message);
    return "Sorry, I'm having trouble connecting to the AI service. Please try again.";
  }
}