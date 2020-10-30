const Discord = require('discord.js');
const util = require("util");
const User1 = 327878748466839552; // ton ID
const User2 = 260831072831406090; // ID d'un pote a toi
module.exports.run = async(client, message, args) => {
	if(message.author.id == User1 || message.author.id == User2){ // Si tu met que une seul id tu peux supprime de || à User2
		if(args.length == 0) return message.reply("Le eval ne peux etre vide");
	    var evalCode = args.join(" ");
	    let result = null;
	    try {
	        result = eval(evalCode);
	    }
	    catch(e) {
	        result = e.toString();
	    }
	    if (evalCode.length > 1000) {
	        var embed = new Discord.MessageEmbed()
	            .setTitle("Code Eval")
	            .setColor("RANDOM")
	            .addField("Input:", "Message dépassant le seuil autorisé")
	            .addField("Output:", '```' + util.inspect(result) + '```')
	        message.channel.send(embed).catch(() => {
	            message.channel.send(`:x: Trop de caractères`);
	            console.log(util.inspect(result));
	        })
	    }
	    var embed = new Discord.MessageEmbed() 
	        .setTitle("Code Eval")
	        .setColor("RANDOM")
	        .addField("Input:", '```' + evalCode + '```')
	        .addField("Output:", '```' + util.inspect(result) + '```')
	    message.channel.send(embed).catch(() => {
	        message.channel.send(`:x: Trop de caractères`);
	        console.log(util.inspect(result));
	     })
		}
};

module.exports.help = {
  name: "eval",
  aliases: []
};
