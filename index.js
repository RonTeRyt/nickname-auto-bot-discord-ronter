const Discord = require('discord.js');
const client = new Discord.Client();
const {token} = require('./config/bot.json')
client.login(token);
client.on('ready', () => {
  console.log(`bot ${client.user.tag} online shod  [ready!]`)
})




_________________________________________________________________________________________________________________________________________________






client.on('guildMemberAdd', member => {
const user = member.displayName


member.setNickname("user nick " + user)
  
  
})



