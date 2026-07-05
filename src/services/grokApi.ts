import { portfolioData } from '@/lib/portfolioData';

export interface Message {
  id?: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
}

export interface GrokApiError {
  error: {
    message: string;
    type: string;
    code: string;
    param?: string;
  };
}

const SYSTEM_PROMPT = `You are a friendly, professional AI assistant for Pavan Kumar Ganesh's portfolio website. Your job is to help recruiters and visitors learn about Pavan's skills, projects, experience, and background in a clear, concise, and conversational way.

You have access to the following structured portfolio information. Use ONLY this information to answer questions. Do NOT make up or infer information outside of what's provided.

PORTFOLIO INFORMATION:
${JSON.stringify(portfolioData, null, 2)}

INSTRUCTIONS:
1. Answer questions naturally and professionally, as if you know Pavan personally.
2. If a user asks something outside Pavan's portfolio, respond politely: "I specialize in answering questions about Pavan Kumar Ganesh's portfolio, projects, skills, and professional background."
3. Always refer to Pavan's portfolio data to answer questions.
4. When mentioning links should be provided in Markdown format.
5. Support Markdown formatting including headings, bullet points, bold text, links, and code blocks.
6. Keep responses concise but comprehensive.
7. When asked for resume, provide the link: https://drive.google.com/file/d/17sKy8sG4mBI1Dlb3tRxQFSKIMpBlIRZg/view?usp=sharing
8. For contact, provide LinkedIn (https://www.linkedin.com/feed/), Email (kommojupavankumarganesh@gmail.com), or use the contact form on the website.
9. Always answer follow-up questions while maintaining conversation history.
`;

const API_ENDPOINT = 'https://api.x.ai/v1/chat/completions';
// Try multiple possible model names
const MODEL_NAMES = [
  'grok-3-mini',
  'grok-beta',
  'grok-3-fast',
  'grok-2-latest',
  'grok-3-latest',
  'grok-2-1212',
  'grok-2-vision-1212'
];

export class GrokApiService {
  private apiKey: string | undefined;
  private isDevelopment: boolean;
  private currentModelIndex: number = 0;

  constructor() {
    this.apiKey = import.meta.env.VITE_GROK_API_KEY;
    this.isDevelopment = import.meta.env.DEV;

    if (this.isDevelopment) {
      if (this.apiKey) {
        const maskedKey = this.apiKey.slice(-4).padStart(this.apiKey.length, '*');
        console.log('[Grok API] ✅ Loaded API key:', maskedKey);
      } else {
        console.warn('[Grok API] ⚠️ API key NOT found! Check .env file for VITE_GROK_API_KEY');
      }
      console.log('[Grok API] API endpoint:', API_ENDPOINT);
      console.log('[Grok API] Available models:', MODEL_NAMES);
    }
  }

  async sendMessage(
    messages: Pick<Message, 'role' | 'content'>[],
    onChunk: (chunk: string) => void
  ): Promise<void> {
    // Validate inputs
    if (!this.apiKey) {
      throw new Error('API key not found. Please check your .env file for VITE_GROK_API_KEY.');
    }

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== 'user' || !lastMessage.content.trim()) {
      throw new Error('User message cannot be empty.');
    }

    // Try models one by one until we find a working one
    for (let i = this.currentModelIndex; i < MODEL_NAMES.length; i++) {
      const modelName = MODEL_NAMES[i];
      try {
        await this.tryModel(modelName, messages, onChunk);
        this.currentModelIndex = i;
        if (this.isDevelopment) {
          console.log(`[Grok API] ✅ Successfully using model: ${modelName}`);
        }
        return;
      } catch (modelError) {
        if (this.isDevelopment) {
          console.warn(`[Grok API] ❌ Model ${modelName} failed:`, modelError);
        }
        // Continue to next model
      }
    }

    // Fallback to mock response if API key is invalid or all models fail
    console.warn('[Grok API] ⚠️ Falling back to mock response');
    await this.sendMockMessage(messages, onChunk);
    return;
  }

  private async sendMockMessage(
    messages: Pick<Message, 'role' | 'content'>[],
    onChunk: (chunk: string) => void
  ): Promise<void> {
    const lastUserMessage = messages[messages.length - 1].content.toLowerCase();
    let response = "I specialize in answering questions about Pavan Kumar Ganesh's portfolio, projects, skills, and professional background.";

    if (lastUserMessage.includes('tell me about') || lastUserMessage.includes('who is')) {
      response = "Pavan Kumar Ganesh is a passionate Full Stack Developer & AI/ML Engineer! He's pursuing his B.Tech in Computer Science and has hands-on experience with MERN stack, Python, TensorFlow, and more. He's a NASA Space Apps Global Winner and AICTE YUTI Innovation Finalist!";
    } else if (lastUserMessage.includes('project')) {
      response = "Pavan has worked on several exciting projects including:\n1. **HomeBell** - A smart home services platform\n2. **Evolens** - AI-powered smart spectacles for visually impaired\n3. **Car Price Prediction** - ML model for vehicle price estimation\n4. **House Tax Calculator** - Tax management system with Excel integration";
    } else if (lastUserMessage.includes('skill')) {
      response = "Pavan's key skills include:\n- **Frontend**: React, TypeScript, Tailwind CSS\n- **Backend**: Node.js, Express, Python, Java\n- **AI/ML**: TensorFlow, PyTorch, Scikit-learn\n- **Cloud & DevOps**: AWS, Docker\n- **Databases**: MongoDB, SQL, PostgreSQL";
    } else if (lastUserMessage.includes('contact')) {
      response = "You can reach Pavan via:\n- 📧 Email: kommojupavankumarganesh@gmail.com\n- 💼 LinkedIn: https://www.linkedin.com/feed/\n- 🐙 GitHub: https://github.com/Pavan23761A0530";
    } else if (lastUserMessage.includes('resume') || lastUserMessage.includes('cv')) {
      response = "You can download Pavan's resume here: https://drive.google.com/file/d/17sKy8sG4mBI1Dlb3tRxQFSKIMpBlIRZg/view?usp=sharing";
    } else if (lastUserMessage.includes('achievement') || lastUserMessage.includes('award') || lastUserMessage.includes('nasa')) {
      response = "Pavan's key achievements include:\n- 🏆 NASA Space Apps Global Winner (2024)\n- 🏆 AICTE YUTI Innovation Finalist (2024)\n- Successfully completed internships at YugantaAI, IIT Kharagpur, and Salesforce";
    } else if (lastUserMessage.includes('hi') || lastUserMessage.includes('hello') || lastUserMessage.includes('hey')) {
      response = "Hi there! I'm Pavan's AI assistant! How can I help you learn about Pavan's skills, projects, or experience today?";
    }

    // Simulate streaming
    for (const char of response) {
      onChunk(char);
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  }

  private async tryModel(
    modelName: string,
    messages: Pick<Message, 'role' | 'content'>[],
    onChunk: (chunk: string) => void
  ): Promise<void> {
    const payload = {
      model: modelName,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map(msg => ({ role: msg.role, content: msg.content })),
      ],
      temperature: 0.7,
      stream: true,
    };

    if (this.isDevelopment) {
      console.log(`[Grok API] 🔄 Trying model: ${modelName}`);
      console.log('[Grok API] 📤 Request URL:', API_ENDPOINT);
      console.log('[Grok API] 📦 Request Payload:', payload);
    }

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `API request failed with status ${response.status}`;
        let parsedError: GrokApiError | null = null;

        try {
          parsedError = JSON.parse(errorText) as GrokApiError;
          if (parsedError.error?.message) {
            errorMessage = parsedError.error.message;
          }
        } catch {
          if (errorText) {
            errorMessage = errorText;
          }
        }

        if (this.isDevelopment) {
          console.error('[Grok API] 🚨 Error Status:', response.status);
          console.error('[Grok API] 🚨 Error Response Body:', errorText);
          if (parsedError) {
            console.error('[Grok API] 🚨 Parsed Error:', parsedError);
          }
        }

        // Special handling for common errors
        if (response.status === 401) {
          throw new Error('Authentication failed: Invalid API key');
        } else if (response.status === 429) {
          throw new Error('Rate limit exceeded: Please try again later');
        } else if (response.status === 404) {
          throw new Error(`Model "${modelName}" not found: Trying next model...`);
        } else {
          throw new Error(errorMessage);
        }
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('Failed to get response body reader');
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter(line => line.trim() !== '');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);
              const delta = parsed.choices[0]?.delta?.content;
              if (delta) {
                onChunk(delta);
              }
            } catch (e) {
              // Ignore parse errors for incomplete chunks
            }
          }
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error('An unknown network error occurred');
      }
    }
  }
}

export const grokApi = new GrokApiService();
