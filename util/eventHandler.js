const reqEvent = (event) => require(`../events/${event}`)

module.exports = bot => {
    bot.on("ready", function() {reqEvent("ready") (bot) });
    bot.on("reconnecting", () => reqEvent("reconnecting") (bot))
    bot.on("disconnect", () => reqEvent("disconnect") (bot))
    bot.on("warn", reqEvent("warn"));
    bot.on("error", reqEvent("error"));
    bot.on("message", async message => {
      if(message.content === "dead chat") {
        message.channel.send("then chat instead of complaining!")
      } else if(message.content.includes("fuck")) {
        message.delete()
        message.channel.send("Watch your language")
      } 
    })
    
}   