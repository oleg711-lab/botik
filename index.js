const TelegramBot = require('node-telegram-bot-api')
const TOKEN= '833678201:AAH0ZdPrbCeI4JN475Wl4zQl0KV84S6pVMc'

const bot =new TelegramBot(TOKEN, {polling: true})
var telegram =  require ('telegram-bot-api'));

var api =  новая  телеграмма({
 маркер:  '833678201:AAH0ZdPrbCeI4JN475Wl4zQl0KV84S6pvmc ',
 обновления : {
 включено:  true,
 get_interval:  100
             }
});
api.on ('сообщение ', функция (сообщение)
{
    var chat_id =  сообщение .болтовня .id;
        консоль .log ("это идентификатор чата пользователя" + chat_id);

api.sendPhoto({
 chat_id:  сообщение .болтовня .id,
 надпись :  "Это мой тестовый образ ",
 фото :  https://core.telegram.org/file/811140217/1/NkRCCLeQZVc/17a804837802700ea4 ' / / замените url-адрес изображения здесь
})
.затем (функция (данные)
{
    консоль .журнал (данные);
});
});
