let Discord = require(`discord.js`);
let Promise = require('bluebird');
let translate = require('google-translate-api');
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
  if(emoji.name === '🇺🇸')
  {
    translate(message.content, {to: 'en'})
      .then(res => {
        message.reply(`\n(${res.from.language.iso}) \`${message.content}\`\n :flag_us:: \`${res.text}\``);
      })
      .catch(err => {
        console.error(err);
      });
  }
});

Client.login(process.env.token);