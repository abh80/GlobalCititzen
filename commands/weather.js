const request = require('request')
const {MessageEmbed} = require('discord.js')
module.exports.run = async(bot,message,args) => {


  let apikey = '0bef22e3a7d648fe4618d2b5556b9be4'
  if(!args[0]) return
  if(args[1]) {
    let city = args[0] +  "+" + args[1];
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    request(url ,function(err,response,body) {
      if(err) {console.log(err)}
      else {
        
        let weather = JSON.parse(body);
        let embed = new MessageEmbed()
        .setTitle("Weather")
        .addField("Temperature",weather.main.temp)
        .addField("Weather",weather.weather[0].main.toLowerCase())
        .setColor('#3700ff')
        .addField("Feels Like", weather.main.feels_like)
        .addField("Max. Today", weather.main.temp_max)
        .addField("Min. Today", weather.main.temp_min)
        .addField("Pressure", weather.main.pressure)
        .addField("Description", weather.weather[0].description)
        .addField("Humidity", weather.main.humidity)
        .setFooter('Thanks to Open Weather Map','https://www.bing.com/th?id=AMMS_2ac1094ae42c785d76a746a00a87a14e&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&cdv=1&dpr=1.1&pid=16.1')
      if(weather.weather[0].main.toLowerCase() === 'clear') {
        embed.setThumbnail('https://mir-s3-cdn-cf.behance.net/project_modules/disp/fae37c30971807.563b2b1371d80.gif')
        message.channel.send(embed)
      } else if(weather.weather[0].main.toLowerCase() === 'rain') {
        embed.setThumbnail('https://media1.tenor.com/images/42a8dc506e0424bf480bab9f37d7619a/tenor.gif?itemid=17165742')
        message.channel.send(embed)
      }else if(weather.weather[0].main.toLowerCase() === 'drizzle') {
        embed.setThumbnail('https://media1.tenor.com/images/cbaeb075581b1febc9e18862be31fb08/tenor.gif?itemid=17165760') 
        message.channel.send(embed)
          } else if(weather.weather[0].main.toLowerCase() === '	thunderstorm') {
            embed.setThumbnail('https://mir-s3-cdn-cf.behance.net/project_modules/disp/01d9bc30971807.563b2b13c384b.gif')
            message.channel.send(embed)
          } else if(weather.weather[0].main.toLowerCase() === 'snow') {
            embed.setThumbnail('https://mir-s3-cdn-cf.behance.net/project_modules/disp/c48be530971807.563b2b13efcae.gif') 
            message.channel.send(embed)
          
            
          }else if(weather.weather[0].main.toLowerCase() === 'haze') {
            embed.setThumbnail('https://media1.tenor.com/images/3988b20fe91768c8c3527d2e347c82c2/tenor.gif?itemid=17165836')
            message.channel.send(embed)
          }else if(weather.weather[0].main.toLowerCase() === 'clouds') {
            embed.setThumbnail('https://mir-s3-cdn-cf.behance.net/project_modules/disp/8f342f30971807.563b2b138deaa.gif')
            message.channel.send(embed)
          }
        
        
        
      }
    
  })
  }
            
  else {
    let city = args[0]
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    request(url ,function(err,response,body) {
      if(err) {console.log(err)}
      else {
        
        let weather = JSON.parse(body);
        let weather1 = weather.weather[0].main.toLowerCase()
        let embed = new MessageEmbed()
        .setTitle("Weather")
        .addField("Temperature",weather.main.temp)
        .addField("Weather",weather.weather[0].main.toLowerCase())
        .setColor('#3700ff')
        .addField("Feels Like", weather.main.feels_like)
        .addField("Max. Today", weather.main.temp_max)
        .addField("Min. Today", weather.main.temp_min)
        .addField("Pressure", weather.main.pressure)
        .addField("Description", weather.weather[0].description)
        .addField("Humidity", weather.main.humidity)
        .setFooter('Thanks to Open Weather Map','https://www.bing.com/th?id=AMMS_2ac1094ae42c785d76a746a00a87a14e&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&cdv=1&dpr=1.1&pid=16.1')
      if(weather.weather[0].main.toLowerCase() === 'clear') {
        embed.setThumbnail('https://mir-s3-cdn-cf.behance.net/project_modules/disp/fae37c30971807.563b2b1371d80.gif')
        message.channel.send(embed)
      } else if(weather.weather[0].main.toLowerCase() === 'rain') {
        embed.setThumbnail('https://media1.tenor.com/images/42a8dc506e0424bf480bab9f37d7619a/tenor.gif?itemid=17165742')
        message.channel.send(embed)
      }else if(weather.weather[0].main.toLowerCase() === 'drizzle') {
        embed.setThumbnail('https://media1.tenor.com/images/cbaeb075581b1febc9e18862be31fb08/tenor.gif?itemid=17165760') 
        message.channel.send(embed)
          } else if(weather.weather[0].main.toLowerCase() === '	thunderstorm') {
            embed.setThumbnail('https://mir-s3-cdn-cf.behance.net/project_modules/disp/01d9bc30971807.563b2b13c384b.gif')
            message.channel.send(embed)
          } else if(weather.weather[0].main.toLowerCase() === 'snow') {
            embed.setThumbnail('https://mir-s3-cdn-cf.behance.net/project_modules/disp/c48be530971807.563b2b13efcae.gif') 
            message.channel.send(embed)
          
            
          }else if(weather.weather[0].main.toLowerCase() === 'haze') {
            embed.setThumbnail('https://media1.tenor.com/images/3988b20fe91768c8c3527d2e347c82c2/tenor.gif?itemid=17165836')
            message.channel.send(embed)
          }else if(weather.weather[0].main.toLowerCase() === 'clouds') {
            embed.setThumbnail('https://mir-s3-cdn-cf.behance.net/project_modules/disp/8f342f30971807.563b2b138deaa.gif')
            message.channel.send(embed)
          }
        
        
        
        
      }
      
    
    })
   }
  
}
module.exports.config = {
  name:'weather',
  aliases:['wt']
  
}