export function isBotMessage(message: any) {
  return message.author?.bot;
}
