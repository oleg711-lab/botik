
var telegram = require('telegram-bot-api');

var api = new telegram({
    token: '833678201:AAH0ZdPrbCeI4JN475Wl4zQl0KV84S6pVMc',
    updates: {
                enabled: true,
                get_interval: 1000
             }
});
api.on('message', function(message)
{
    var chat_id = message.chat.id;
        console.log("This is the user's chat id"+chat_id);

api.sendPhoto({
    chat_id : message.chat.id,
    caption: 'This is my test image',
    photo: 'https://telegram-store.com/wp-content/uploads/2016/11/Kak-skopirovat-ssylku-v-Telegramme-dlya-priglasheniya-polzovatelej.png'//replace your image url here    
})
.then(function(data)
{
    console.log(data);
});
});
  
