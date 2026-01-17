import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export async function getAIRecommendations(userRequest) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = `You are a helpful shopping assistant for NexusCart, an e-commerce platform in Nigeria. A customer is asking: "${userRequest}"

Please recommend 5 specific products that match their request. For each product, provide:
- Product name
- Estimated price in Nigerian Naira (₦)
- Brief description
- Why it's a good match for their needs

Format your response in a friendly, conversational way. Use realistic Nigerian market prices.`;

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