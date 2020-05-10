const {MessageEmbed} = require('discord.js')
const worldCupHistory = require('world-cup-history');
module.exports.run = async (bot,message,args) => {
  const years = args[0];
  
  
  if(!args[0]) return message.channel.send("What are trying to find , parse a valid year Dumbo!!")
  
  
  
  try {
  let embed = new MessageEmbed()
  .setTitle("Fifa History")
  .setColor("#ff00e1")
  .setThumbnail("https://www.bing.com/th?id=AMMS_bb1bad9e0ca822d66eea77143a812cf4&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&cdv=1&dpr=1.1&pid=16.1")
  .addField("Winner : ", worldCupHistory.year(years).winner)
  .addField("Host Country :",worldCupHistory.year(years).hostCountry)
  .addField("Runner Up: ",worldCupHistory.year(years).runnerUp)
  .addField("Top goal Scorer :",worldCupHistory.year(years).topGoalScorer[0].name)
  .addField("Number Of matches:" ,worldCupHistory.year(years).numberOfMatches)
  message.channel.send(embed)
  }
 catch(e) {
  console.log(e)
   message.channel.send("Try parsing a valid year in which fifa has held !! XDD")
}
}
module.exports.config = {
  name: "fifa",
  aliases: ["ff"]
}