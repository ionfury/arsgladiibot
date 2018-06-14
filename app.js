let Discord = require(`discord.js`);
let Promise = require('bluebird');
let Translate = require('google-translate-api');
let Client = new Discord.Client();

Client.on('ready', () => {
  console.log(`\nBot has started, with ${Client.users.size} users, in ${Client.channels.size} channels of ${Client.guilds.size} guilds.`); 
});

Client.on('message', msg => {
  if(msg.author.bot) 
    return;
  if(!msg.content.toLowerCase().includes('poofy pants')) 
    return;
    
  msg.reply(`BANNED!`);
});

Client.on('messageReactionAdd', (messageReaction, user) => {
  let emoji = messageReaction.emoji;
  let message = messageReaction.message;
  console.log(emoji.id);

  if(emoji.id == 1 /*:flag_us:*/)
  {
    translate(messageReaction, {to: 'en'})
      .then(res => {
        message.reply(res.text);
      })
      .catch(err => {
        console.error(err);
      })
  }
});

Client.login(process.env.token);