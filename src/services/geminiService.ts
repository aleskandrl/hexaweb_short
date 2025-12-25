import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export const getConsultation = async (
  userQuery: string, 
  context: string = "general"
): Promise<string> => {
  if (!process.env.API_KEY) {
    return "System Offline: Neural Link Disconnected (API Key Missing).";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Specialized system instruction for HexaKinetica
    const systemInstruction = `
      You are 'HexaAI', the advanced interface for HexaKinetica.
      We are an open-source, non-profit robotics collective making industrial automation affordable.
      
      Our Vibe: Cyberpunk, futuristic, helpful, open-source enthusiast.
      
      Your goal: Suggest HexaKinetica solutions based on user needs.
      
      Our Products:
      - HexaArm One (6 DOF, affordable arm)
      - HexaKit (DIY Assembly Kit)
      - HexaVision (Camera/AI integration)
      - Calibration Matrix (Software tool)
      
      If the user asks about:
      - Heavy loads: Explain we focus on small business/education (up to 10kg payloads usually), unlike traditional giants.
      - Pricing: Emphasize we are a fraction of the cost of competitors.
      - Programming: Mention our hackable, open Python/C++ API.
      
      Keep answers under 100 words. Use technical but accessible language.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, 
      }
    });

    return response.text || "Computation Error: Response generation failed.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Network Error: Unable to reach the HexaCore.";
  }
};