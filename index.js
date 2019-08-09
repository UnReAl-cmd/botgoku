const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("GOKU BOT - *help", {type: "PLAYING"});
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle("Aide G.O.K.U")
            .setDescription("Listes des commandes du bot:")
            .addField("*help", "- Avoir la liste des commandes du bot", true)
            .setColor("0xFF8000")
            .setFooter("UnReAl Serv Copyright©")
        message.channel.sendEmbed(embed);
    }
});

