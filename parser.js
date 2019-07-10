var telegram = require('telegram-bot-api');

var api = new telegram({
    token: '<833678201:aah0zdprbcei4jn475wl4zql0kv84s6pv>',
});

api.sendPhoto({
    chat_id: <YOUR CHAT ID>,
    caption: 'This is my test image',

   you can also send file_id here as string (as described in telegram bot api documentation)
    photo: 'https://core.telegram.org/file/811140217/1/NkRCCLeQZVc/17a804837802700ea4'
})
.then(function(data)
{
    console.log(util.inspect(data, false, null));
});
