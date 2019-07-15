const TelegramBot = require('node-telegram-bot-api')
const TOKEN= '833678201:AAH0ZdPrbCeI4JN475Wl4zQl0KV84S6pVMc'

const bot =new TelegramBot(TOKEN, {polling: true})


бот .on ('сообщение', msg  =>> {
  бот .sendMessage (msg .болтовня .id, ' weat j,бот говорит:"sdoor spo"')

})
