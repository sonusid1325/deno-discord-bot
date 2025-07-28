# Deno Discord Bot with AI Integration

A Discord bot built with Deno that uses Google's Gemini AI to answer tech-related questions. The bot responds only to mentions and provides concise, expert-level technical assistance.

## Features

- 🤖 **AI-Powered Responses**: Uses Google Gemini AI for intelligent tech support
- 🎯 **Tech-Focused**: Only answers technology-related questions
- 📝 **Concise Responses**: Limits responses to 50 words or less for clarity
- 💬 **Mention-Based**: Responds only when mentioned in messages
- ⚡ **Fast & Lightweight**: Built with Deno for optimal performance
- 🔧 **Configurable**: Easy configuration management through config files

## Prerequisites

- [Deno](https://deno.land/) runtime
- Discord Bot Token
- Google Gemini API Key

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sonusid1325/deno-discord-bot.git
cd deno-discord-bot
```

### 2. Install Deno

**Windows Users:**
```powershell
irm https://deno.land/install.ps1 | iex
```

**Linux/Mac OS Users:**
```bash
curl -fsSL https://deno.land/install.sh | sh
```

### 3. Install Dependencies

```bash
deno install
deno cache deps.ts
```

### 4. Environment Configuration

Create a `.env` file in the root directory or rename the existing `env` file to `.env`:

```env
TOKEN=your_discord_bot_token_here
GEMINI_API_KEY=your_gemini_api_key_here
```

#### Getting Your Discord Bot Token:

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to the "Bot" section
4. Create a bot and copy the token
5. Enable "Message Content Intent" in the bot settings

#### Getting Your Gemini API Key:

1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Generate an API key
4. Copy the API key to your environment file

### 5. Run the Bot

```bash
deno task start
```

## Usage

### Basic Commands

The bot responds only when mentioned in a Discord message. Simply mention the bot followed by your tech-related question:

```
@YourBot What is the difference between React and Vue?
@YourBot How do I optimize database queries?
@YourBot Explain microservices architecture
```

### Non-Tech Questions

If you ask non-technical questions, the bot will respond with:
```
That's not my job.
```

## Configuration

The bot's behavior can be customized through the `config.ts` file:

```typescript
export const config = {
  ai: {
    model: "gemini-1.5-flash-8b",
    systemInstruction:
      'You are a tech expert. Answer only tech-related questions in 50 words or less. If asked anything else, respond: "That\'s not my job."',
  },
};
```

### Customizable Options:

- **Model**: Change the Gemini model version
- **Word Limit**: Adjust the response length limit
- **System Instruction**: Modify the bot's behavior and personality
- **Response Style**: Customize how the bot responds to different types of queries

## Project Structure

```
deno-discord-bot/
├── mod.ts              # Main bot file and entry point
├── deps.ts             # Dependency management
├── config.ts           # Bot configuration
├── deno.json           # Deno project configuration
├── .env                # Environment variables (create this)
├── env                 # Environment template
└── README.md           # This file
```

## Key Dependencies

- **Discordeno**: Modern Discord API library for Deno
- **Google GenAI**: Google's Generative AI SDK
- **Deno STD**: Standard library modules for environment handling

## Permissions Required

The bot requires the following Discord permissions:
- Read Messages
- Send Messages
- Read Message History

## Troubleshooting

### Common Issues:

1. **Bot not responding**: 
   - Ensure the bot is mentioned in the message
   - Check that Message Content Intent is enabled
   - Verify the bot has permission to read and send messages

2. **Environment variables not loading**:
   - Make sure your `.env` file is in the root directory
   - Check that variable names match exactly: `TOKEN` and `GEMINI_API_KEY`

3. **API errors**:
   - Verify your Gemini API key is valid and has quota remaining
   - Check your Discord bot token is correct

### Debug Mode:

The bot logs important information to the console:
- Bot startup confirmation
- Message processing logs
- AI response logs
- Error messages

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Open an issue on GitHub
3. Make sure to include relevant logs and your setup details

---

Made with ❤️ using Deno and Google Gemini AI