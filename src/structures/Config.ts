import "dotenv/config";
export const Config = {
    discordToken: process.env.DISCORD_BOT_TOKEN,
    giphyToken: process.env.GIPHY_TOKEN,
    owner: process.env.OWNER,
    mongouri: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@robobot.wsb7v.mongodb.net/Robobot?retryWrites=true&w=majority`,
    emojis: {
        true: "✅",
        false: "❌",
        happy: "😊",
        lit: "🔥",
        drunk: "🥴",
        warn: "⚠"
    }
}
