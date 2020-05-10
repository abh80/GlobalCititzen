module.exports.run = async (bot,message,args) => {
  if(!args[0]) return message.channel.send("what are you trying to delete? Dumbo");
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Dont try to swindle me. You dont have enough permissions");
  message.channel.bulkDelete(args[0])
  message.channel.send(`I have cleared  ${args[0]} messages`)
  
    
    
} 
module.exports.config = {
  name: "clean",
  aliases: ['clean']
  
}