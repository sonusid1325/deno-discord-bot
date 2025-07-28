import { load } from "./deps.ts";
import { createBot, Intents, startBot } from "./deps.ts";
import { handleReady } from "./src/events/ready.ts";
import { handlePing } from "./src/commands/ping.ts";

const env = await load();
const bot = createBot({
  token: env.TOKEN,
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
  events: {
    ready: handleReady,
    messageCreate: (bot, message) => handlePing(bot, message),
  },
});
await startBot(bot);
