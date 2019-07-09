const TelegramBot = require('node-telegram-bot-api')
const TOKEN= '833678201:AAH0ZdPrbCeI4JN475Wl4zQl0KV84S6pVMc'

const bot =new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'hello fom j,bot says:"hi, ${msg.from.first_name}"')

}
{
  bot <-  Bot (token  =  bot_token ("RTelegramBot"))
chat_id < -  user_id ("Me")
photo_url < -  "https://telegram.org/img/t_logo.png"

bot $ sendPhoto (
  chat_id  =  chat_id,
  photo  =  photo_url,
  caption  =  "Telegram Logo"
}
)
