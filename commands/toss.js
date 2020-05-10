module.exports.run = async (bot, message,args) => {
  
  let random = Math.floor(Math.random()*100)
  if(random <= 50) {
    message.channel.send("Heads!")
    if(args === "heads") {
      message.channel.send("You won!")
    } else if(args === "tails") {
      message.channel.send("You lost!")
    }
  } else {
    message.channel.send("Tails!")
    if(args === "tails") {
      message.channel.send("You won !")
    }else if(args === "heads") {
      message.channel.send("You lost!")
    }
  }
}

module.exports.config = {
  name: "toss",
  description: "gives heads or tails",
  usage : "%toss",
  aliases : ["toss"]
}