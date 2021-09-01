const Discord = require('discord.js');
const { getInfo } = require('discord-ytdl-core');
const ytdl = require('discord-ytdl-core');

/**
 *
 * @param {Discord.Client} client
 * @param {Discord.Message} msg
 */


exports.run = async (client, msg, args) =>{

    if(!msg.member.voice.channel.join()){

        return msg.channel.send("Você precisa estar em um canal de voz para usar o bot");

    }else {

        let validateURL = ytdl.validateURL('https://www.youtube.com/watch?v=b1mkFflMo9c');
        let info = ytdl.getInfo('https://www.youtube.com/watch?v=b1mkFflMo9c');
        let connection = await msg.member.voice.channel.join();
        let stream = ytdl('https://www.youtube.com/watch?v=b1mkFflMo9c', {format: "audioonly", opusEncoded: true})
        let dispatcher = await connection.play(stream, {type: 'opus', volume: 1 });
        msg.channel.send("Parabéns Zé!");
        console.log("Parabéns Zé!");
    };

}