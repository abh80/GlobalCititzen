const Discord = require('discord.js')
const botconfig = require("../config.json")
module.exports.run = async (bot, message, args) => {
   try{
     
    let sEmbed = new Discord.MessageEmbed()
    .setColor("#0363ff")
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL())
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL())
    .addField("**Guild Name:**", `${message.guild.name}`, true)
    .addField("**Guild Owner:**", `${message.guild.owner}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.size}`, true)
    .setFooter(`TestBot | Footer`, bot.user.displayAvatarURL());
    message.channel.send({embed: sEmbed});
   
} catch(e) {
  console.log(e)
}
 }


module.exports.config = {
    name: "serverinfo",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["si", "serverdesc"]
}