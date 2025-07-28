import { load } from "./deps.ts";
import { createBot, Intents, startBot } from "./deps.ts";
import { GoogleGenAI } from "./deps.ts";
import { config } from "./config.ts";

const env = await load();
const ai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });

const bot = createBot({
  token: env.TOKEN,
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
  events: {
    ready() {
      console.log("✅ Bot online! Bot ID:", bot.id);
    },
    messageCreate: async (bot, message) => {
      console.log("Message content:", message.content);
      console.log("Author:", message.author?.id, "| Bot ID:", bot.id);

      if (!message.content || message.author?.bot) return;

      const mention = `<@${bot.id}>`;
      const mentionAlt = `<@!${bot.id}>`;

      if (
        !message.content.includes(mention) &&
        !message.content.includes(mentionAlt)
      ) {
        console.log("No mention — skipping.");
        return;
      }

      const prompt = message.content
        .replace(mention, "")
        .replace(mentionAlt, "")
        .trim();
      console.log("→ Prompt:", prompt);

      try {
        const response = await ai.models.generateContent({
          model: config.ai.model,
          contents: prompt,
          systemInstruction: config.ai.systemInstruction,
        });

        console.log("↩️ AI response:", response.text);
        await bot.helpers.sendMessage(message.channelId, {
          content: response.text,
        });
      } catch (e) {
        console.error("GenAI error:", e);
        await bot.helpers.sendMessage(message.channelId, {
          content: "Error processing request.",
        });
      }
    },
  },
});

await startBot(bot);
