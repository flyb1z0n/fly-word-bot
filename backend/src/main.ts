import { Context, Telegraf } from 'telegraf'

// Create your bot and tell it about your context type
const bot = new Telegraf<Context>(process.env.BOT_TOKEN!)

// Register middleware and launch your bot as usual
bot.use(Telegraf.log())
bot.start((ctx) => ctx.reply('Welcome!!!12aaaa'))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM',` () => bot.stop('SIGTERM'))`