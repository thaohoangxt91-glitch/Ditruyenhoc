
import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ chấp nhận phương thức POST' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Thiếu nội dung câu hỏi (prompt)' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return res.status(200).json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini Backend Error:", error);
    return res.status(500).json({ error: 'Lỗi máy chủ khi gọi trí tuệ nhân tạo' });
  }
}
