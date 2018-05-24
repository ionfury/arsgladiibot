let Discord = require(`discord.js`);
let Promise = require('bluebird');
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

Client.login(process.env.token);