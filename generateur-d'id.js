const discord=require('discord.js');
module.exports.run=async(client,message,args)=>{
const id=Date.now()
message.reply(`Votre nouvelle id est: ${id}`)
}