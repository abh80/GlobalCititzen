const {MessageEmbed} = require("discord.js")
module.exports.run = async (bot,message,args) => {
  if(!args[0]) return message.channel.send("usage: %newrole <name> <color>");
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Do not try to swindle me. I know you dont have Admin role");
  
message.guild.roles.create({
  data: {
    name: args[0],
    color: args[1],
  },
  reason: 'we needed a role for Super Cool People',
})
  .catch(console.error);
  let sembed = new MessageEmbed()
  .setTitle("New Role Created")
  .setColor(123456)
  .addField("Role Name :", args[0])
  .addField("Role Color: ", args[1])
  .setFooter("Created by:", message.author.displayAvatarURL())
  .setTimestamp();
  message.channel.send(sembed)
  
  
  return
  }
module.exports.config = {
  name: "newrole",
  description : "Creates a new role",
  aliases : ["newrole"]
}