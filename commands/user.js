const {MessageEmbed} = require("discord.js")

module.exports.run = async (bot,message,args) => {
if(!message.mentions.users.size) {
let embed = new MessageEmbed()
.setTitle("Player Info")
.setThumbnail(message.author.displayAvatarURL())
.setColor("#ff0000")
.addField("Username :", message.author.username)
.addField("Account Created At :", message.author.createdAt)
.setFooter("Requested by :", message.author.displayAvatarURL())
.setTimestamp();
message.channel.send(embed)

  
} else if(message.mentions.users.size) {
  
  let embed = new MessageEmbed()
.setTitle("Player Info")
.setThumbnail(message.mentions.users.first().displayAvatarURL())
.setColor("#ff0000")
.addField("Username :", message.mentions.users.first().username)
.addField("Account Created At :", message.mentions.users.first().createdAt)
.setFooter("Requested by :", message.author.displayAvatarURL())
.setTimestamp();
message.channel.send(embed)
  
}
}
module.exports.config = {
    name: "user",
    aliases : ["user"]
}