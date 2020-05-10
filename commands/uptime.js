const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
    } 
  try {

    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("Bot Status")
    .setFooter("Requested By:", message.author.displayAvatarURL())
    .addField("Bot Created at :" , bot.user.createdAt)
    .addField("Bot Creator :", "SuperUser")
    .addField("Bot Plugins: " , "NPMJS Plugins : Discord.js, node.js V12, Beutify ,world-cup-history, simple-fortnite-api,novelcovid, discord-canvas")
    .addField("Bot Uptime:",`${duration(bot.uptime)}`);
    message.channel.send(embed)
    } catch(e) {
      console.log(e)
    }

}


module.exports.config = {
    name: "botstatus",
    description: "Displays the bots current uptime!",
    usage: "!uptime",
    accessableby: "Members",
    aliases: ["ut"]
}