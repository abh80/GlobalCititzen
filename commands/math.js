const {MessageEmbed} = require('discord.js')

module.exports.run = async (bot,message,args) => {
  if(!args[0]) return message.channel.send("usage: <number> <operator> <number>");
  if(!args[1]) return message.channel.send("use /,*,+,-");
  if(args[0] === NaN) return message.channel.send("Not a valid no. at Argument 1");
  if(args[2] === NaN) return message.channel.send("Not a valid no. at Argument 3");
  if(args[1] === "/") {
    args[0] /= args[2]
    let embed =  new MessageEmbed()
    .setTitle('Calculator')
    .setColor("#00FC00")
    .addField(
          `📤OUTPUT📤`,
          `\`\`\`js\n${args[0]}\`\`\``,
          false
        )
    .setFooter("OUTCOME: SUCCESS!", message.author.avatarURL)
    .setTimestamp();
    message.channel.send(embed);
    
   } else if(args[1] === "*") {
    args[0] *= args[2]
    let embed = new MessageEmbed()
    .setTitle('Calculator')
    .setColor("#00FC00")
    .addField(
          `📤OUTPUT📤`,
          `\`\`\`js\n${args[0]}\`\`\``,
          false
        )
    .setFooter("OUTCOME: SUCCESS!", message.author.avatarURL)
    .setTimestamp();
    message.channel.send(embed);
    
  }else if(args[1] === "-") {
    args[0] -= args[2]
    let embed = new MessageEmbed()
    .setTitle('Calculator')
    .setColor("#00FC00")
    .addField(
          `📤OUTPUT📤`,
          `\`\`\`js\n${args[0]}\`\`\``,
          false
        )
    .setFooter("OUTCOME: SUCCESS!", message.author.avatarURL)
    .setTimestamp();
    message.channel.send(embed);
  }else if(args[1] === "+") {
    args[0] += args[2]
    let embed = new MessageEmbed()
    .setTitle('Calculator')
    .setColor("#00FC00")
    .addField(
          `📤OUTPUT📤`,
          `\`\`\`js\n${args[0]}\`\`\``,
          false
        )
    .setFooter("OUTCOME: SUCCESS!", message.author.avatarURL)
    .setTimestamp();
    message.channel.send(embed);
    
  } else {
    message.channel.send("Not a valid operator")
   
  }
  return;
}
 
module.exports.config = {
  name: "math",
  aliases: ['math']
}