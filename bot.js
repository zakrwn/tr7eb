const Discord = require('discord.js');
const client = new Discord.Client();

    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("518932875958288384");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(**We .**), 4000)
}
});
 client.login(process.env.BOT_TOKEN); 
