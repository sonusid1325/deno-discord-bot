import { load } from "./deps.ts";
import { createBot } from "./deps.ts";
import { handleReady } from "./src/events/ready.ts";
import { handlePing } from "./src/commands/ping.ts";

const env = await load();
console.log("Loaded token:", JSON.stringify(env.TOKEN));
const bot = createBot({
  token: env.TOKEN,
  events: {
    ready: handleReady,
    messageCreate: handlePing,
  },
});

await bot.start();
