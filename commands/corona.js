const {MessageEmbed} = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();
const countries = require("i18n-iso-countries");



module.exports.run = async (bot,message,args) => {
  if(!args[0]) {
     let corona = await track.all();
     let embed = new MessageEmbed()
      .setThumbnail("https://i.ytimg.com/vi/G9YzH3WEh70/maxresdefault.jpg")
      .setTitle("Global Cases")
      .setColor("#ff2050")
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);
      
      return message.channel.send(embed)
    
      
      
      
    
  }else if(args[1]) {
    let corona = await track.countries(args[0]+ " " + args[1] )
    let country = args[0]+ " " + args[1]
    try {
    
    let alpha2 = countries.getAlpha2Code(country,'en')
    let embed = new MessageEmbed()
      .setThumbnail(`https://flagpedia.net/data/flags/w580/${alpha2}.webp`.toLowerCase())
      .setTitle(`${corona.country}`)
      .setColor("#ff2050")
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);
      
      return message.channel.send(embed)
    } catch(e) {
      console.log(e)
    }
  } else if(args[0] === "usa") {
    let corona = await track.countries(args[0])
    
     try {
    
    let alpha2 = countries.getAlpha2Code("United States Of America",'en')
    let embed = new MessageEmbed()
      .setThumbnail(`https://flagpedia.net/data/flags/w580/${alpha2}.webp`.toLowerCase())
      .setTitle(`${corona.country}`)
      .setColor("#ff2050")
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);
      
      return message.channel.send(embed)
    } catch(e) {
      console.log(e)
    }
  }
  else { 
    let corona =  await track.countries(args[0])
    const alpha2 = countries.getAlpha2Code(args[0], 'en');
    try {

    
  let embed = new MessageEmbed()
      .setThumbnail(`https://flagpedia.net/data/flags/w580/${alpha2}.webp`.toLowerCase())
      .setTitle(`${corona.country}`)
      .setColor("#ff2050")
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);
      
      return message.channel.send(embed)
    } catch(e) {
      console.log(e)
    }


  }
}
module.exports.config = {
  name: "covid",
  aliases: ["cov"]
}