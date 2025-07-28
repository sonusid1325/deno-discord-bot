import { load } from "./deps.ts";
import { createBot } from "npm:@discordeno/bot@latest";

const env = await load();
const bot = createBot({
  token: env.TOKEN,
  events: {
    ready: () => console.log("Bot is online and groovin’"),
  },
});

await bot.start();
