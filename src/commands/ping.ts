export async function handlePing({ message, bot }: any) {
  if (message.content === "!ping") {
    await bot.helpers.sendMessage(message.channelId, {
      content: `🏓 Pong! Latency: ${Date.now() - message.timestamp} ms`,
    });
  }
}
