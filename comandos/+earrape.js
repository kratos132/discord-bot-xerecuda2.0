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

        let validateURL = ytdl.validateURL(args);
        let info = ytdl.getInfo(args);
        let connection = await msg.member.voice.channel.join();
        let stream = ytdl(args, {filter: "audioonly", opusEncoded: true, encoderArgs: ['-af', 'bass=g=10']});
        let dispatcher = connection.play(stream, {type: 'opus', volume: 100 });
        msg.channel.send('Estourando os timpanos com: ' + (await info).videoDetails.title);
        console.log('Estourando os timpanos com: ' + (await info).videoDetails.title);
    };

}