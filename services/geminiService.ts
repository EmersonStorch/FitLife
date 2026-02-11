
import { GoogleGenAI, Type, Chat } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMealPlan = async (goal: string, weight: number, height: number) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: `Gere um plano de refeições simples de 1 dia para alguém com objetivo de ${goal}, pesando ${weight}kg e com ${height}cm de altura. Retorne em JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            breakfast: { type: Type.STRING },
            lunch: { type: Type.STRING },
            snack: { type: Type.STRING },
            dinner: { type: Type.STRING },
            macros: {
              type: Type.OBJECT,
              properties: {
                calories: { type: Type.NUMBER },
                protein: { type: Type.NUMBER },
                carbs: { type: Type.NUMBER },
                fat: { type: Type.NUMBER }
              }
            }
          }
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};

export const getFitnessAdvice = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Você é um coach fitness premium. Responda de forma motivadora e científica: ${question}`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text;
  } catch (error) {
    return "Desculpe, meu sistema de IA está em repouso agora. Tente novamente em instantes!";
  }
};

/**
 * Cria uma nova sessão de chat com instruções de sistema para o assistente Fitlife.
 */
export const createFitlifeChat = () => {
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: `Você é o "Fitlife AI Assistant", um assistente de performance fitness de elite para a plataforma FITLIFE.
      Seu tom é profissional, motivador, científico e direto. 
      Você deve ajudar os usuários com:
      1. Dúvidas sobre biomecânica e execução de exercícios.
      2. Sugestões de suplementação baseadas em evidências.
      3. Estratégias de recuperação (sono, mobilidade).
      4. Motivação e mindset de alta performance.
      Sempre cite que os resultados dependem de consistência e acompanhamento profissional.
      Use termos técnicos quando apropriado, mas explique-os de forma clara.`,
    },
  });
};
