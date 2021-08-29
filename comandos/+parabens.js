const Discord = require('discord.js');
const ytdl = require('ytdl-core');

/**
 *
 * @param {Discord.Client} client
 * @param {Discord.Message} msg
 */


exports.run = async (client, msg, args) =>{

    if(!msg.member.voice.channel.join()){

        return msg.channel.send("Você precisa estar em um canal de voz para usar o bot");

    }else {

        let validateURL = ytdl.validateURL("https://www.youtube.com/watch?v=b1mkFflMo9c");
        let info = ytdl.getInfo("https://www.youtube.com/watch?v=b1mkFflMo9c");
        let connection = await msg.member.voice.channel.join();
        let dispatcher = await connection.play(ytdl("https://www.youtube.com/watch?v=b1mkFflMo9c", {filter: 'audioonly'}));
        msg.channel.send(`Tocando: ${(await info).title}`);
    };

}