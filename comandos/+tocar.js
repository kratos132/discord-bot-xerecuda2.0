const Discord = require('discord.js');
const { getInfo } = require('discord-ytdl-core');
const ytdl = require('discord-ytdl-core');
const me = new Discord.MessageEmbed();

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
        let stream = ytdl(args, {filter: "audioonly", opusEncoded: true});
        let dispatcher = connection.play(stream, {type: 'opus', volume: 1 });

        msg.channel.send(

        me.setTitle(`Tocando: ${(await info).videoDetails.title}`)
        .setColor('#1EB100')
        .setFooter('Foda-se, meu irmão')
        .setImage(`https://i.ytimg.com/vi_webp/${(await info).videoDetails.videoId}/maxresdefault.webp`)
        
        );

        console.log('Tocando: ' + (await info).videoDetails.title);
        console.log((await info).videoDetails.thumbnails);
    };

}