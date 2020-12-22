const discord=require('discord.js');

module.exports.run=async(client,message,args)=>{
function set(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}
var random=set(0,20000)
message.channel.send(random)
}
