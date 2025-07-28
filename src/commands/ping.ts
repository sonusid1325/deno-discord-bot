export async function handlePing(bot: any, message: any) {
  if (!message || message.author?.bot) return;
  if (message.content === "!ping") {
    await bot.helpers.sendMessage(message.channelId, { content: "Pong!" });
  }
}
