const request = require('request')
const {MessageEmbed} = require('discord.js')
module.exports.run = async (bot,message,args) =>{
  let apikey = '0bef22e3a7d648fe4618d2b5556b9be4'
  if(!args[0]) return
  else {
    let city = args[0]
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    request(url ,function(err,response,body) {
      if(err) {console.log(err)}
      else {
        let weather = JSON.parse(body);
        let embed = new MessageEmbed()
        .setTitle("Weather")
        .addField("Temperature",weather.main.temp)
        .addField("Weather",weather.description)
        .addField("Feels Like", weather.main.feels_like)
        .addField("Max. Today", weather.main.temp_max)
        .addField("Min. Today", weather.main.temp_min)
        .addField("Pressure", weather.main.pressure)
        .addField("Visibility", weather.main.visibility)
        .addField("Humidity", weather.main.humidity)
        .setThumbnail(`https://openweathermap.org/img/wn/${weather.icon}@2x.png`)
        message.channel.send(embed)
        
        
      }
      
    
    })
   }
  
}
module.exports.config = {
  name:'weather',
  aliases:['wt']
  
}