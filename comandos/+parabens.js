const Discord = require('discord.js');
const { getInfo } = require('discord-ytdl-core');
const ytdl = require('discord-ytdl-core');

/**
 *
 * @param {Discord.Client} client
 * @param {Discord.Message} msg
 */

 const delay = ms => new Promise(res => setTimeout(res, ms));

exports.run = async (client, msg, args) =>{

    if(!msg.member.voice.channel.join()){

        return msg.channel.send("Você precisa estar em um canal de voz para usar o bot");

    }else {

        let validateURL = ytdl.validateURL('https://www.youtube.com/watch?v=14GjJSNxsp4');
        let info = ytdl.getInfo('https://www.youtube.com/watch?v=14GjJSNxsp4');
        let stream = ytdl('https://www.youtube.com/watch?v=14GjJSNxsp4', { opusEncoded: true, filter:  'audioonly'})
        let connection = await msg.member.voice.channel.join();
        let dispatcher = connection.play(stream, {type: 'opus', volume: 100});
        msg.channel.send("Parabéns Zé!");
        console.log("Parabéns Zé!");
    };

}