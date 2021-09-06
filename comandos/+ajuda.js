const Discord = require('discord.js');
const client  = new Discord.Client();
const me = new Discord.MessageEmbed();

exports.run = (client, msg, args, ops) => {

if(msg.author.bot) return;

else{

var resposta = me.addField("ajuda", '+play e o nome da musica para tocar \r\n', 
'+search e o nome da musica para mostrar uma lista de possiveis resultado \r\n', 
'+stop voce nao precisa ser um genio para saber o que faz \r\n', 
'+earrape e o nome da musica',
'+parabens: parabéns!')
msg.channel.send(resposta);
msg.channel.send('esse bot foi feito com um unico proposito de causar o caos ao reproduzir musicas, pois nao há lista de reprodução')

    };

};