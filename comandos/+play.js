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

        let validateURL = ytdl.validateURL(args[0]);
        let info = ytdl.getInfo(args[0]);
        let connection = await msg.member.voice.channel.join();
        let stream = ytdl(args[0], {format: "audioonly", opusEncoded: true})
        let dispatcher = await connection.play(stream, {type: 'opus', volume: 1 });
        msg.channel.send((await info).videoDetails.title);
        console.log('Tocando: ' + (await info).videoDetails.title);
    };

}