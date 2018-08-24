const Commando = require("discord.js-commando");
const bot = new Commando.Client();
const TOKEN = 'NDgyNTA1MDMxNTg5OTUzNTM2.DmHHpg.5gGrJB4ZHKIfDWKhRmp5IZK7D0Q'

bot.on('message', function(message){
    if(message.content == 'hewwo')
    {
        message.channel.sendMessage('hewwo dfhskdf');
    }
});

bot.on('message', function(message){
    if(message.content == 'uwu')
    {
        message.channel.sendMessage('ÒWÓ');
    }
});

bot.on('message', function(message){
    if(message.content == 'this is so sad')
    {
        message.channel.sendMessage('awwexa pway dewspawcito uwu');
    }
});

bot.on('message', function(message){
    if(message.content == 'this bitch empty')
    {
        message.channel.sendMessage('YEET XD');
    }
});

bot.on('message', function(message){
    if(message.content == 'bitch')
    {
        message.channel.sendMessage('úwù yes?');
    }
});

bot.on('message', function(message){
    if(message.content == 'this bitch getting my fucking uwus')
    {
        message.channel.sendMessage('heeheheheh');
    }
});

bot.on('message', function(message){
    if(message.content == 'im dropping my uwus')
    {
        message.channel.sendMessage('NO YOUR UWUS *picks them up*');
    }
});

bot.on('message', function(message){
    if(message.content == 'uwubot ily')
    {
        message.channel.sendMessage('awww ily too uwu sfjdg');
    }
});

bot.on('message', function(message){
    if(message.content == 'uwubot is cute')
    {
        message.channel.sendMessage('UHHHHH THATS GAY GJFDKJDGJK uwu');
    }
});

bot.on('message', function(message){
    if(message.content == 'i love you uwu')
    {
        message.channel.sendMessage('o-oh *blushes*');
    }
});

bot.on('message', function(message){
    if(message.content == 'press f')
    {
        message.channel.sendMessage('f');
    }
});

bot.on('message', function(message){
    if(message.content == 'can i get a despacito')
    {
        message.channel.sendMessage('-play despacito');
    }
});

bot.on('message', function(message){
    if(message.content == 'shut up uwubot')
    {
        message.channel.sendMessage('i have the power to kick you out.');
    }
});

bot.on('message', function(message){
    if(message.content == 'uwubot shut up')
    {
        message.channel.sendMessage('who the FUCk you talking to HUH');
    }
});

bot.on('message', function(message){
    if(message.content == 'uwubot you suck')
    {
        message.channel.sendMessage('pussy? definitely more than you');
    }
});

bot.on('ready', function(){
    console.log("Ready");
})

bot.login(TOKEN);